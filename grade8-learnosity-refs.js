// Learnosity CW/HW references for Grade 8, matched against the EXISTING
// chapter/lesson structure in curriculum-data.js's csvGradeData[8] (kept
// as-is) -- NOT highschool-data.js. Source: GET
// /api/v4/leap/cue-chapters/?program_code=USCC.G8, pulled from LOCAL DEV,
// 2026-07-10. 16 chapters / 89 lessons / 385 refs in the raw pull.
//
// This fills a real, previously-flagged gap: unlike K-7 (which already has
// Learnosity refs in the Google Sheet), Grade 8 had none at all before this pass.
//
// Structure: refs["<our chapter name>"]["<our lesson name>"] = {cw, hw} | null
// Same array-for-multi-worksheet-lessons convention as the 5 HS-course files:
// cw/hw are arrays (same index across both) where one of our lessons
// genuinely corresponds to more than one API sheet/lesson.
//
// Notable pattern in this pull: SIMILARITY content is missing entirely --
// no lesson anywhere in the 16 API chapters covers similar triangles,
// similar figures, or similar solids, even though our data has 3 separate
// lessons expecting it ("Similarity Figures", "Perimeter and Areas of
// Similar Figures", "Similar Triangles", "Surface Areas and Volumes of
// Similar Solids"). Also two API chapters ("Exponents and Scientific
// Notation" and the separate "Scientific Notation" chapter) cover
// overlapping ground -- used both where genuinely relevant rather than
// picking one arbitrarily.
const grade8LearnosityRefs = {
  "Equations": {
    // API's lesson bundles a "basics" sheet and a "linear expressions on one side"
    // sheet -- both are basic/simple equation-solving content.
    "Solving Simple Equations": {
      cw: ["Linear-Equations-In-One-Variable-V2x-W01", "Linear-Equations-In-One-Variable-V2y-W02"],
      hw: ["target-practice-Linear-Equations-In-One-Variable-V2x-W01", "target-practice-Linear-Equations-In-One-Variable-V2y-W02"],
    },
    // Not present as its own lesson -- may be folded into the basics lesson used
    // above, but not confident enough to assert without a title distinguishing it.
    "Solving Multi-Step Equations": null,
    // API's "Solve Equations by Reducing Them to Linear Form" lesson is entirely
    // about variables-on-both-sides content (2 bundled sheets) -- exact conceptual match.
    "Solving Equations with Variables on Both Sides": {
      cw: ["Simplifying-Linear-Equations-In-One-Variable-V2x-W01", "Simplifying-Linear-Equations-In-One-Variable-V2y-W02"],
      hw: ["target-practice-Simplifying-Linear-Equations-In-One-Variable-V2x-W01", "target-practice-Simplifying-Linear-Equations-In-One-Variable-V2y-W02"],
    },
    // Not present -- API's remaining lessons here are word-problem applications, not
    // formula rearrangement/isolating a variable.
    "Rewriting Equations and Formulas": null,
  },
  "Transformations": {
    "Translations": {cw: "G8-TransAndCong-W02", hw: "Translations-TP"},
    "Reflections": {cw: "G8-TransAndCong-W03", hw: "Reflections-TP"},
    "Rotations": {cw: "G8-TransAndCong-W04", hw: "Rotations-TP"},
    "Congruence": {cw: "G8-TransAndCong-W07", hw: "Mapping Congruent Figures-TP"},
    "Dilations": {
      cw: ["G8-TransAndCong-W08", "G8-TransAndCong-W09"],
      hw: ["Introduction to Dilations-TP", "Drawing Dilations-TP"],
    },
    // Not present anywhere in the pull -- no similarity content at all (see file
    // header note); this chapter treats dilations purely as a rigid-motion-adjacent
    // transformation, with no similarity-criteria lesson to follow it up.
    "Similarity Figures": null,
    "Perimeter and Areas of Similar Figures": null,
  },
  "Angles and Triangles": {
    // API's lesson bundles an intro sheet and an "applied problems" sheet on the same topic.
    "Parallel Lines and Transversals": {
      cw: ["lines-angles-parallels-transversals-v2x.w01", "lines-angles-parallels-transversals-v2x.w02"],
      hw: ["target-practice-lines-angles-parallels-transversals-v2x.w01", "target-practice-lines-angles-parallels-transversals-v2x.w02"],
    },
    // API's lesson bundles 4 sheets, all on triangle angle-sum/exterior-angle properties
    // (basics, exterior angles intro, applied problems, extra practice) -- listing all 4.
    "Angles of Triangles": {
      cw: ["lines-angles-triangle-properties-v2x.w01", "lines-angles-triangle-properties-v2x.w02", "lines-angles-triangle-properties-v2x.w03", "lines-angles-triangle-properties-USCC-W04"],
      hw: ["target-practice-lines-angles-triangle-properties-v2x.w01", "target-practice-lines-angles-triangle-properties-v2x.w02", "target-practice-lines-angles-triangle-properties-v2x.w03", "target-practice-lines-angles-triangle-properties-USCC-W04"],
    },
    // Not present -- this API chapter is entirely triangle/transversal-focused, no
    // general polygon angle-sum lesson.
    "Angles of Polygons": null,
    // Not present -- no similarity content anywhere in this chapter either.
    "Similar Triangles": null,
  },
  "Graphing and Writing Linear Equations": {
    // API's "Graph Linear Relationships" lesson (Straight Lines chapter) bundles 3
    // sheets: understanding linear relationships, plotting graphs, and graphs parallel
    // to the axes -- all directly "graphing linear equations".
    "Graphing Linear Equations": {
      cw: ["Linear-Relationships-W01", "Linear-Relationships-W02", "Linear-Relationships-W03"],
      hw: ["target-practice-Linear-Relationships-W01", "target-practice-Linear-Relationships-W02", "target-practice-Linear-Relationships-W03"],
    },
    // API keeps "using graphs" and "using coordinate points" as two separate slope-
    // finding lessons (Proportional and Linear Relationships chapter).
    "Slope of a Line": {
      cw: ["PropLinRel-Core.W03", "PropLinRel-Core.W04"],
      hw: ["PropLinRel-Core.H03", "PropLinRel-Core.H04"],
    },
    "Graphing Proportional Relationships": {cw: "PropLinRel-Core.W01", hw: "PropLinRel-Core.H01"},
    "Graphing Equations in Slope-Intercept Form": {cw: "PropLinRel-Core.W05", hw: "PropLinRel-Core.H05"},
    // Not present -- no standard-form-specific graphing lesson anywhere in the pull
    // (API covers slope-intercept and point-slope forms, but not standard form, for
    // either graphing or writing).
    "Graphing Equations in Standard Form": null,
    // API's "Write the Slope-Intercept Form... From Graphs" and "Write Linear
    // Equations From Coordinate Points" lessons cover writing from two different
    // given-info types; "Straight Lines"'s "Derive the Equation... in Slope Intercept
    // Form" sheet is a more rigorous/advanced version of the same skill -- all 3 listed.
    "Writing Equations in Slope-Intercept Form": {
      cw: ["PropLinRel-Core.W06", "PropLinRel-Core.W07", "Equation-Of-Line-W01.CC"],
      hw: ["PropLinRel-Core.H06", "PropLinRel-Core.H07", "target-practice-Equation-Of-Line-W01.CC"],
    },
    // Not present -- API doesn't have a standard-form-writing lesson (only
    // slope-intercept and point-slope forms are covered for writing equations).
    "Writing Equations in Standard Form": null,
  },
  "Systems of Linear Equations": {
    "Solving Systems of Linear Equations by Graphing": {cw: "SysLinEq-Core.W02", hw: "SysLinEq-Core.TP02"},
    // API splits algebraic solving into 4 separate lessons (Substitution Part 1/2,
    // Elimination Part 1/2) -- listing all 4 rather than picking one arbitrarily.
    "Solving Systems of Linear Equations by Algebraically": {
      cw: ["SysLinEq-Core.W04", "SysLinEq-Core.W05", "SysLinEq-Core.W07", "SysLinEq-Core.W08"],
      hw: ["SysLinEq-Core-TP-04", "SysLinEq-Core-TP-05", "SysLinEq-Core-TP-07", "SysLinEq-Core-TP-08"],
    },
    // "Classify The Number of Solutions..." is exactly the special-systems concept
    // (no-solution / infinite-solutions classification).
    "Solving Special Systems of Linear Equations": {cw: "SysLinEq-Core.W03", hw: "SysLinEq-Core.TP03"},
  },
  "Statistics": {
    "Scatter Plots": {
      cw: ["Scatter-Plot-W01", "Scatter-Plot-W02"],
      hw: ["target-practice-Scatter-Plot-W01", "target-practice-Scatter-Plot-W02"],
    },
    "Lines of Fit": {
      cw: ["Line-Equation-Data-Fit-W01", "Line-Equation-Data-Fit-W02", "Line-Equation-Data-Fit-W03"],
      hw: ["target-practice-Line-Equation-Data-Fit-W01", "target-practice-Line-Equation-Data-Fit-W02", "target-practice-Line-Equation-Data-Fit-W03"],
    },
    // API's lesson NAME is "Understand Two Way Data Table" (exact match), even though
    // its own 2 sheet titles are generically about choosing/identifying data displays --
    // trusted the lesson-level name over the sheet titles here.
    "Two-Way Tables": {
      cw: ["Non-Linear-Data-Context-W01", "Non-Linear-Data-Context-W02"],
      hw: ["target-practice-Non-Linear-Data-Context-W01", "target-practice-Non-Linear-Data-Context-W02"],
    },
    // No other candidate lesson remains for this -- see the note on Two-Way Tables above.
    "Choosing a Data Display": null,
  },
  "Functions": {
    "Relations and Functions": {cw: "G8-Functions-W01", hw: "G8-Functions-H01"},
    // API's "Function Rules" and "Represent Functions Using Equations" lessons are
    // both about representing functions in different forms.
    "Representations of Functions": {
      cw: ["G8-Functions-W02", "G8-Functions-W03"],
      hw: ["G8-Functions-H02", "G8-Functions-H03"],
    },
    // Not present as its own topic -- API's closest lesson ("Linear and Nonlinear
    // Functions") is a comparison lesson, reserved below for our "Comparing" lesson
    // rather than double-claimed here.
    "Linear Functions": null,
    "Comparing Linear and Nonlinear Functions": {cw: "G8-Functions-W05", hw: "Linear-Nonlinear-Functions-TP5"},
    "Analysing and Sketching Graphs": {cw: "G8-Functions-W04", hw: "Properties-Functions-Graphs-TP4"},
  },
  "Exponents": {
    "Basics of Exponents": {
      cw: ["ExpAndSciNo-Core.W01", "ExpAndSciNo-Core.W02"],
      hw: ["ExpAndSciNo-Core-H01", "ExpAndSciNo-Core-H02"],
    },
    "Product and Quotient of Powers Property": {
      cw: ["ExpAndSciNo-Core.W03", "ExpAndSciNo-Core.W04"],
      hw: ["ExpAndSciNo-Core-H03", "ExpAndSciNo-Core-H04"],
    },
    // API's "Quotient and Zero Rule" sheet (W04) explicitly covers the zero-exponent
    // rule too -- reused here alongside "Negative Exponent Rule", flagged.
    "Zero and Negative Exponents": {
      cw: ["ExpAndSciNo-Core.W04", "ExpAndSciNo-Core.W06"],
      hw: ["ExpAndSciNo-Core-H04", "ExpAndSciNo-Core-H06"],
    },
    // Not present anywhere -- this pull's exponents content is entirely about rules
    // and scientific notation mechanics, no exponential growth/decay modeling.
    "Exponential Growth and Decay": null,
    // Not present as a distinct named lesson.
    "Estimating Quantities": null,
    // Two different API chapters cover this ("Exponents and Scientific Notation" for
    // writing/converting mechanics, the separate "Scientific Notation" chapter for the
    // large-vs-small-number framing) -- both genuinely on-topic, listed together.
    "Scientific Notation": {
      cw: ["ExpAndSciNo-Core.W08", "ExpAndSciNo-Core.W09", "Large-Numbers-Scientific-Notation-W01", "Very-Small-Numbers-Scientific-Notation-W01"],
      hw: ["ExpAndSciNo-Core.H08", "ExpAndSciNo-Core.H09", "target-practice-Large-Numbers-Scientific-Notation-W01", "target-practice-Very-Small-Numbers-Scientific-Notation-W01"],
    },
    // Same two-chapters-overlap situation as Scientific Notation above.
    "Operations in Scientific Notation": {
      cw: ["ExpAndSciNo-Core.W10", "ExpAndSciNo-Core.W11", "Operations-Scientific-Notation-W01"],
      hw: ["ExpAndSciNo-Core.H10", "ExpAndSciNo-Core.H11", "target-practice-Operations-Scientific-Notation-W01"],
    },
  },
  "Real Numbers and the Pythagorean Theorem": {
    // "Square Roots and Cube Roots" chapter's 3 square-root lessons (perfect squares,
    // estimating, expressions/equations) all genuinely belong to a broad "Square Roots" lesson.
    "Square Roots": {
      cw: ["Squares-And-Square-Roots-IGCSE-W01", "Squares-And-Square-Roots-G8-IGCSE-W01", "Squares-And-Square-Roots-USCC-W04"],
      hw: ["target-practice-Squares-And-Square-Roots-IGCSE-W01", "target-practice-Squares-And-Square-Roots-G8-IGCSE-W01", "target-practice-Squares-And-Square-Roots-USCC-W04"],
    },
    "Pythagorean Theorem": {
      cw: ["Pythagoras-Property-USCC-G8-W01", "Pythagoras-Property-Applications-USCC-G8-W01"],
      hw: ["target-practice-Pythagoras-Property-USCC-G8-W01", "target-practice-Pythagoras-Property-Applications-USCC-G8-W01"],
    },
    "Cube Roots": {
      cw: ["Cubes-And-Cube-Roots-USCC-W01", "Cubes-And-Cube-Roots-USCC-W03", "Cubes-And-Cube-Roots-USCC-W04"],
      hw: ["target-practice-Cubes-And-Cube-Roots-USCC-W01", "target-practice-Cubes-And-Cube-Roots-USCC-W03", "target-practice-Cubes-And-Cube-Roots-USCC-W04"],
    },
    "Rational Numbers": {
      cw: ["Decimal-Representation-Rational-Numbers-V3-W01", "Decimal-Representation-Rational-Numbers-V3-W02"],
      hw: ["target-practice-Decimal-Representation-Rational-Numbers-V3-W01", "target-practice-Decimal-Representation-Rational-Numbers-V3-W02"],
    },
    "Irrational Numbers": {
      cw: ["Irrational-Numbers-V3-W01", "Irrational-Numbers-V3-W02"],
      hw: ["target-practice-Irrational-Numbers-V3-W01", "target-practice-Irrational-Numbers-V3-W02"],
    },
    // Not present -- API's Pythagoras chapter has no distinct "converse" lesson;
    // "Apply the Distance Formula in Solving Problems" is a different application
    // (coordinate geometry), not classifying triangle type via the converse.
    "Converse of The Pythagorean Theorem": null,
  },
  "Volume and Similar Solids": {
    // API combines cylinders and cones into ONE lesson -- both of ours below share it.
    "Volumes of Cylinders": {cw: "G8-Volume-W01", hw: "Volume-Cylinders-Cones-TP1"},
    "Volumes of Cones": {cw: "G8-Volume-W01", hw: "Volume-Cylinders-Cones-TP1"},
    "Volumes of Spheres": {cw: "G8-Volume-W02", hw: "Volume-Spheres-TP2"},
    // Not present -- no similarity-of-solids content anywhere in the pull (consistent
    // with the total absence of similarity content noted at the top of this file).
    "Surface Areas and Volumes of Similar Solids": null,
  },
};

// Chapters/lessons that exist in the live local-dev API pull
// (program_code=USCC.G8, 16 chapters / 89 lessons / 385 refs) but have NO
// corresponding chapter/lesson in our existing curriculum-data.js
// csvGradeData[8] at all.
const grade8ExtraChaptersInApiNotInOurs = [
  {chapter: "Algebraic Expressions", lessonCount: 3, note: "Understand Basics of Algebraic Expressions, Simplify and Evaluate Algebraic Expressions, Perform Operations on Algebraic Expressions. Entirely unused -- our Grade 8 data has no algebraic-expressions chapter at all (that topic lives in Grade 6's and Grade 7's own 'Algebraic Expressions' chapters instead)."},
  {chapter: "Puzzle Cards", lessonCount: 3, note: "Easy/Medium/Hard puzzle-card sets -- a gamification feature, not real lesson content (sheet types are PUZZLE_EASY/PUZZLE_MEDIUM/PUZZLE_HARD, no LEARNING or PRACTICE sheets at all). Not mappable to any lesson by nature, not just unused."},
  {chapter: "Systems of Linear Equations", lessonCount: 3, note: "3 of this chapter's 9 lessons are unused: the intro lesson ('Systems of Linear Equations and Their Solution') and two real-world-application lessons ('Solve Real-World Problems Involving Linear Systems', 'Solve Real-World Problems Using Any Method'). None of our 3 lessons in this chapter is a dedicated word-problem/application lesson."},
  {chapter: "Proportional and Linear Relationships / Straight Lines", lessonCount: 4, note: "'Comparing Proportional Relationships' and 'Model Real World Situations Using Linear Functions' (Proportional and Linear Relationships), plus 'Compare Proportional Relationships Represented in Different Ways' and the Point-Slope-Form sheet within 'Derive the Equations of Straight Lines' (Straight Lines), are all unused. Notably: our data has no lesson at all for writing/deriving equations in point-slope form at the Grade 8 level (only slope-intercept and standard form are named in our lesson list, and even standard form has no matching API content -- see the null entries above)."},
  {chapter: "Rigid Transformations and Congruence", lessonCount: 3, note: "'Rigid Transformations' (generic intro), 'Combining Rigid Transformations', and 'Transformations using Coordinate Points' are unused -- none of our 7 lessons in the 'Transformations' chapter is specifically about combining multiple transformations or using coordinate-point notation as its own skill."},
];
