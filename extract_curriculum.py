#!/usr/bin/env python3
"""
Extract K-7 chapter/lesson data from the authoritative xlsx and emit
Mockups/curriculum-data.js in the shape the mockups already expect:

const csvGradeData = {
  'K': [ {name, emoji, lessons:[...]}, ... ],
  1: [...], 2: [...], ... 7: [...]
};

Forward-fills chapter name/number down merged/blank cells (same pattern
as extracting a merged-cell block). Ignores fully-blank separator rows.
"""
import json
import re
import openpyxl

SRC = "/Users/manasaa/Downloads/K-7-chapter-details [US Curriculum].xlsx"
OUT = "/Users/manasaa/Desktop/Manasa/Math Curriculum Pages/Mockups/curriculum-data.js"

GRADE_SHEETS = [
    ("Grade K", "K"),
    ("Grade 1", 1),
    ("Grade 2", 2),
    ("Grade 3", 3),
    ("Grade 4", 4),
    ("Grade 5", 5),
    ("Grade 6", 6),
    ("Grade 7", 7),
]

# Ordered keyword -> emoji map. First match wins, so put more specific
# phrases before generic ones.
EMOJI_RULES = [
    # Specific / operation-based rules first, so e.g. "Addition and
    # Subtraction of Numbers" gets ➕ rather than the generic 🔢.
    (r"fraction|piece of pie", "\U0001F355"),  # 🍕
    (r"decimal", "\U0001F522"),  # 🔢
    (r"percent", "\U0001F4B9"),  # 💹
    (r"addition and subtraction|together and apart|add.*subtract|same.*different", "➕"),
    (r"multiplication", "✖️"),
    (r"division|sharing is caring", "➗"),
    (r"factor|multiple|prime", "\U0001F537"),  # 🔷
    (r"integer", "\U0001F4C9"),  # 📉
    (r"rational number", "\U0001F522"),  # 🔢
    (r"mensuration|surface area|\bvolume", "\U0001F9CA"),  # 🧊 (before "ratio" — "mensuRATIOn" false match)
    (r"\bratio|\brate\b|proportion", "⚖️"),  # word-boundary guards against "opeRATIOns"/"mensuRATIOn"
    (r"algebra|equation|expression|inequalit", "\U0001F523"),  # 🔣
    (r"coordinate geometry", "\U0001F9ED"),  # 🧭
    (r"area and perimeter", "\U0001F4D0"),  # 📐
    (r"geometry|shapes?|quadrilateral|polygon|circle|lines? and angles?|construction", "\U0001F4D0"),
    (r"symmetry|pattern", "\U0001F501"),  # 🔁
    (r"measurement|how long|how heavy|how much|weigh|fill it up|hot or cold", "\U0001F4CF"),  # 📏
    (r"time|tick tock|clock", "⏰"),
    (r"money|shopping|piggy bank", "\U0001F4B0"),  # 💰
    (r"data|graph|chance|probability|odd one out", "\U0001F4CA"),  # 📊
    (r"order of operations", "\U0001F4CB"),  # 📋
    (r"statistics", "\U0001F4C8"),  # 📈
    # Generic number-system catch-all — last, since many operation
    # chapters also contain the word "numbers".
    (r"number system|numbers to|fun with numbers|joy of numbers|magic with numbers|"
     r"playing with numbers|more numbers|numbers?\b", "\U0001F522"),  # 🔢
]
DEFAULT_EMOJI = "\U0001F4D8"  # 📘


def pick_emoji(chapter_name: str) -> str:
    name = chapter_name.lower()
    for pattern, emoji in EMOJI_RULES:
        if re.search(pattern, name):
            return emoji
    return DEFAULT_EMOJI


def extract_grade(ws):
    chapters = []  # list of dicts: {no, name, lessons: [(no, name), ...]}
    by_no = {}
    current_no = None
    current_name = None

    for row in ws.iter_rows(min_row=2, values_only=True):
        chapter_no, chapter_name, lesson_no, lesson_name = row[0], row[1], row[2], row[3]

        if chapter_name is not None and str(chapter_name).strip() != "":
            current_name = str(chapter_name).strip()
            current_no = chapter_no

        if lesson_name is None or str(lesson_name).strip() == "":
            continue  # blank separator row, or a row with no lesson text

        if current_name is None:
            continue  # safety: shouldn't happen, but skip orphan lessons

        key = current_no
        if key not in by_no:
            entry = {"no": current_no, "name": current_name, "lessons": []}
            by_no[key] = entry
            chapters.append(entry)
        by_no[key]["lessons"].append((lesson_no, str(lesson_name).strip()))

    # Sort chapters by chapter number, lessons by lesson number (guards
    # against any out-of-order rows; matches document order in practice).
    def sort_key(v):
        try:
            return float(v)
        except (TypeError, ValueError):
            return 0

    chapters.sort(key=lambda c: sort_key(c["no"]))
    result = []
    for c in chapters:
        lessons_sorted = sorted(c["lessons"], key=lambda t: sort_key(t[0]))
        result.append({
            "name": c["name"],
            "emoji": pick_emoji(c["name"]),
            "lessons": [l[1] for l in lessons_sorted],
        })
    return result


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main():
    wb = openpyxl.load_workbook(SRC, data_only=True)
    all_data = {}
    for sheet_name, grade_key in GRADE_SHEETS:
        ws = wb[sheet_name]
        chapters = extract_grade(ws)
        all_data[grade_key] = chapters
        total_lessons = sum(len(c["lessons"]) for c in chapters)
        print(f"{sheet_name}: {len(chapters)} chapters, {total_lessons} lessons")

    lines = []
    lines.append("// Shared K-7 curriculum data — single source of truth for all mockups.")
    lines.append("// Generated from 'K-7-chapter-details [US Curriculum].xlsx' via extract_curriculum.py.")
    lines.append("// Do not hand-edit lesson lists here without re-running the extraction script,")
    lines.append("// or the mockups and the xlsx will drift again.")
    lines.append("const csvGradeData = {")
    for sheet_name, grade_key in GRADE_SHEETS:
        key_str = "'K'" if grade_key == "K" else str(grade_key)
        lines.append(f"  {key_str}: [")
        for ch in all_data[grade_key]:
            lessons_js = ", ".join(js_string(l) for l in ch["lessons"])
            lines.append(f"    {{name: {js_string(ch['name'])}, emoji: {js_string(ch['emoji'])}, lessons: [{lessons_js}]}},")
        lines.append("  ],")
    lines.append("};")
    lines.append("")

    with open(OUT, "w") as f:
        f.write("\n".join(lines))
    print(f"\nWrote {OUT}")


if __name__ == "__main__":
    main()
