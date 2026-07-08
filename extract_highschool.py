#!/usr/bin/env python3
"""
Extract the 5 high-school course chapter/lesson lists verbatim from
'US High School Chapter Lists _ June 2026 (1).xlsx'. Chapter Title
repeats on every row already (no forward-fill needed). No Learnosity
IDs in this file.
"""
import json
import re
import openpyxl

XLSX = "/Users/manasaa/Downloads/US High School Chapter Lists _ June 2026 (1).xlsx"

COURSES = [("Algebra 1", "algebra-1"), ("Geometry", "geometry"), ("Algebra 2", "algebra-2"),
           ("AP Precalculus", "ap-precalculus"), ("AP Calculus AB", "ap-calculus-ab")]


def slugify(s):
    s = s.strip().lower()
    s = s.replace("&", "and")
    s = re.sub(r"[’']", "", s)
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def extract_course(ws):
    # Chapter Number is NOT reliably unique (e.g. Algebra 1 has two different
    # chapters both numbered "5" — "Solving Systems of Linear Equations" and
    # "Two-Variable Linear Inequalities and Systems"). Grouping by number
    # alone silently merges them and drops the second chapter's name. Group
    # instead by contiguous run of identical Chapter Title in row order,
    # which is what actually defines a chapter boundary in this file.
    chapters = []
    current = None
    for row in ws.iter_rows(min_row=2, values_only=True):
        cnum, ctitle, lname = row[0], row[1], row[2]
        if ctitle is None or str(ctitle).strip() == "" or lname is None or str(lname).strip() == "":
            continue
        ctitle = str(ctitle).strip()
        lname = str(lname).strip()
        if current is None or current["name"] != ctitle:
            current = {"no": cnum, "name": ctitle, "lessons": []}
            chapters.append(current)
        current["lessons"].append(lname)
    return [{"name": c["name"], "lessons": c["lessons"]} for c in chapters]


if __name__ == "__main__":
    wb = openpyxl.load_workbook(XLSX, data_only=True)
    result = {}
    for sheet_name, slug in COURSES:
        chapters = extract_course(wb[sheet_name])
        result[slug] = {"name": sheet_name, "slug": slug, "chapters": chapters}
        n_lessons = sum(len(c["lessons"]) for c in chapters)
        print(f"{sheet_name}: {len(chapters)} chapters, {n_lessons} lessons")

    with open("/private/tmp/claude-502/-Users-manasaa-Desktop-Manasa/c4810d85-107c-43c3-9d6e-ede8c937d720/scratchpad/highschool_data.json", "w") as f:
        json.dump(result, f, indent=1, ensure_ascii=False)
    print("\nSaved highschool_data.json")
