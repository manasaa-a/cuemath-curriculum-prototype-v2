#!/usr/bin/env python3
"""
Generate Mockups/testprep-data.js from the test-prep Drive folder.

Reads all 12 exam-program CSVs (read-only, Drive v3) from
https://drive.google.com/drive/folders/10UWQEQE_sjcaEa8ef4IGW8vX6jrN9gxz
and shapes them into the same chapter -> block -> worksheet hierarchy,
with the same slug/URL logic as the "Test Prep URL Structure — DRAFT
for DK discussion" Google Sheet (ID 13Yj9S8cUGPu5HxdHGd4ZKI0okW4cp2psTUnyFFHZtxE),
so the mockup and that sheet stay consistent.

CogAT is treated as its own top-level program (it was found nested
under NJSLA's Drive folder — that nesting looks like a filing mistake,
not the intended structure, per the earlier audit).

Names (chapter_name / block_name / worksheet_name) are carried through
verbatim — no rewording. Only the URL is slugified.
"""
import csv
import io
import json
import os
import re
from collections import defaultdict

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

TOKEN_PATH = "/Users/manasaa/Desktop/Manasa/Math-Explainers/token_with_drive.json"
OUT_PATH = os.path.join(os.path.dirname(__file__), "testprep-data.js")

FOLDERS = {
    "MOEMS": "1WKbnGQyPyFYsp9oJcq44HyeghzPqdIZ0",
    "MAP": "1x5sxVIJ8nvGcjX4gqZRibvxLxy9zTQ1j",
    "IAR": "1Y_xymLQU5zOBVto9hwDIH55IeSWLl2jg",
    "AASA": "1M8sPpBPBxXiWsD1phNxj69uvv1XAirZ5",
    "SSAT": "1Bf89w1MF-pnaVHI9q_bmdRXyV3_GJRFp",
    "GMAS": "157XxSyxkDAd69G8cMK3w5PSFosu8Tsix",
    "SBA": "19prPtnLpqIuzSJ2N4uk4jHOk1OrLmiCo",
    "AMC8": "1cGP1brURGay98niq8bP7qnQx5Slb6lYN",
    "KANGAROO": "1WGywBR79mAESmX3LWCdmCOUmRgQ_g1xI",
    "STAAR": "157VUsL1XApp5Ch1bf8ChBPXsWw0j4w78",
    "NJSLA": "1fOUdRm8TcRp_s21Wj8yL71NLIDT1ZT7F",
    "CogAT": "1uRj5gg55bAZ8Xm6plFNmFbXtqpCyClev",  # nested under NJSLA in Drive; treated top-level here
}

EXAM_SLUGS = {
    "MOEMS": "moems", "MAP": "map", "IAR": "iar", "AASA": "aasa",
    "SSAT": "ssat", "GMAS": "gmas", "SBA": "sba", "AMC8": "amc-8",
    "KANGAROO": "kangaroo", "STAAR": "staar", "NJSLA": "njsla", "CogAT": "cogat",
}
EXAM_DISPLAY = {
    "MOEMS": "MOEMS", "MAP": "MAP", "IAR": "IAR", "AASA": "AASA",
    "SSAT": "SSAT", "GMAS": "GMAS", "SBA": "SBA", "AMC8": "AMC 8",
    "KANGAROO": "Math Kangaroo", "STAAR": "STAAR", "NJSLA": "NJSLA", "CogAT": "CogAT",
}
SINGLE_FILE_PROGRAMS = {"MOEMS", "AMC8"}
PROGRAM_ORDER = ["MOEMS", "MAP", "IAR", "AASA", "SSAT", "GMAS", "SBA", "AMC8",
                 "KANGAROO", "STAAR", "NJSLA", "CogAT"]


def slugify(s):
    s = s.strip().lower()
    s = s.replace("&", "and")
    s = re.sub(r"[’']", "", s)
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def band_slug_and_label(program, program_code):
    suffix = program_code.split(".", 1)[1] if "." in program_code else program_code
    if program in SINGLE_FILE_PROGRAMS:
        return None, None, 0
    if program in ("MAP", "SSAT"):
        mapping = {"EL": ("elementary", "Elementary", 0), "ML": ("middle", "Middle", 1)}
        return mapping.get(suffix, (slugify(suffix), suffix, 99))
    if program == "KANGAROO":
        m = re.match(r"G(\d)-G(\d)", suffix)
        if m:
            lo, hi = m.group(1), m.group(2)
            return f"grades-{lo}-{hi}", f"Grades {lo}-{hi}", int(lo)
        return slugify(suffix), suffix, 99
    m = re.match(r"G(\d+)", suffix)
    if m:
        n = m.group(1)
        return f"grade-{n}", f"Grade {n}", int(n)
    return slugify(suffix), suffix, 99


def get_drive_service():
    with open(TOKEN_PATH) as f:
        info = json.load(f)
    creds = Credentials.from_authorized_user_info(
        info, scopes=["https://www.googleapis.com/auth/spreadsheets",
                       "https://www.googleapis.com/auth/drive.readonly"])
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())
    return build("drive", "v3", credentials=creds)


def list_children(service, folder_id):
    items = []
    page_token = None
    while True:
        resp = service.files().list(
            q=f"'{folder_id}' in parents and trashed = false",
            fields="nextPageToken, files(id, name, mimeType)",
            pageToken=page_token,
        ).execute()
        items.extend(resp.get("files", []))
        page_token = resp.get("nextPageToken")
        if not page_token:
            break
    return items


def download_csv_rows(service, file_id):
    request = service.files().get_media(fileId=file_id)
    fh = io.BytesIO()
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while not done:
        _, done = downloader.next_chunk()
    text = fh.getvalue().decode("utf-8")
    return list(csv.DictReader(io.StringIO(text)))


def _num(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return 0


def build_exam(program, service):
    exam_slug = EXAM_SLUGS[program]
    exam_url = f"/maths/{exam_slug}/"
    files = [c for c in list_children(service, FOLDERS[program]) if c["mimeType"] == "text/csv"]

    parsed_files = []
    for f in files:
        rows = download_csv_rows(service, f["id"])
        if not rows:
            continue
        program_code = rows[0]["program_code"]
        band_slug, band_label, sort_key = band_slug_and_label(program, program_code)
        parsed_files.append({"program_code": program_code, "band_slug": band_slug,
                              "band_label": band_label, "sort_key": sort_key, "rows": rows})
    parsed_files.sort(key=lambda p: p["sort_key"])

    bands = []
    for finfo in parsed_files:
        rows = finfo["rows"]
        band_slug = finfo["band_slug"]
        base_url = exam_url if band_slug is None else f"{exam_url}{band_slug}/"

        chapters_map = {}
        chapter_order = []
        for r in rows:
            ccode = r["chapter_code"]
            if ccode not in chapters_map:
                chapters_map[ccode] = {"name": r["chapter_name"], "position": r["chapter_position"],
                                        "blocks": {}, "block_order": []}
                chapter_order.append(ccode)
            ch = chapters_map[ccode]
            bcode = r["block_code"]
            if bcode not in ch["blocks"]:
                ch["blocks"][bcode] = {"name": r["block_name"], "type": r["block_type"], "worksheets": []}
                ch["block_order"].append(bcode)
            ch["blocks"][bcode]["worksheets"].append(r)

        chapter_order.sort(key=lambda c: _num(chapters_map[c]["position"]))

        chapters_out = []
        for ccode in chapter_order:
            ch = chapters_map[ccode]
            chapter_slug = slugify(ch["name"])
            chapter_url = f"{base_url}{chapter_slug}/"
            blocks_out = []
            for bcode in ch["block_order"]:
                block = ch["blocks"][bcode]
                block_slug = slugify(block["name"])
                block_url = f"{chapter_url}{block_slug}/"
                worksheets = sorted(block["worksheets"], key=lambda w: _num(w["node_position"]))

                name_counts = defaultdict(int)
                for w in worksheets:
                    name_counts[w["worksheet_name"]] += 1
                seen = defaultdict(int)
                worksheets_out = []
                single = len(worksheets) == 1
                for w in worksheets:
                    wname = w["worksheet_name"]
                    if single:
                        leaf_url = block_url
                    else:
                        wslug = slugify(wname)
                        if name_counts[wname] > 1:
                            seen[wname] += 1
                            wslug = f"{wslug}-{seen[wname]}"
                        leaf_url = f"{block_url}{wslug}/"
                    worksheets_out.append({
                        "name": wname, "url": leaf_url,
                        "learnosityRef": w["learnosity_activity_ref"],
                        "nodeType": w["node_type"],
                    })
                blocks_out.append({
                    "name": block["name"], "url": block_url, "type": block["type"],
                    "worksheets": worksheets_out,
                })
            chapters_out.append({"name": ch["name"], "url": chapter_url, "blocks": blocks_out})

        bands.append({
            "slug": band_slug, "label": finfo["band_label"], "programCode": finfo["program_code"],
            "url": base_url, "chapters": chapters_out,
        })

    return {
        "name": EXAM_DISPLAY[program], "slug": exam_slug, "examUrl": exam_url,
        "hasBands": any(b["slug"] is not None for b in bands),
        "bands": bands,
    }


def main():
    service = get_drive_service()
    exams = {}
    for program in PROGRAM_ORDER:
        exam = build_exam(program, service)
        exams[EXAM_SLUGS[program]] = exam
        n_chapters = sum(len(b["chapters"]) for b in exam["bands"])
        n_blocks = sum(len(c["blocks"]) for b in exam["bands"] for c in b["chapters"])
        n_worksheets = sum(len(bl["worksheets"]) for b in exam["bands"] for c in b["chapters"] for bl in c["blocks"])
        print(f"{program}: {len(exam['bands'])} band(s), {n_chapters} chapters, {n_blocks} blocks, {n_worksheets} worksheets")

    js = (
        "// Test-prep curriculum data — chapter -> block -> worksheet, per exam program.\n"
        "// Generated from the Drive test-prep CSVs via generate_testprep_data.py.\n"
        "// URLs mirror the 'Test Prep URL Structure — DRAFT for DK discussion' Google Sheet\n"
        "// (ID 13Yj9S8cUGPu5HxdHGd4ZKI0okW4cp2psTUnyFFHZtxE) — this is a PROPOSAL, not confirmed.\n"
        "// Chapter/block/worksheet names are verbatim from the source CSVs — no rewording.\n"
        "const testPrepData = " + json.dumps(exams, indent=2, ensure_ascii=False) + ";\n"
    )
    with open(OUT_PATH, "w") as f:
        f.write(js)
    print(f"\nWrote {OUT_PATH}")


if __name__ == "__main__":
    main()
