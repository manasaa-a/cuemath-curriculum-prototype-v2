// Learnosity CW/HW references for Algebra 2, matched against the EXISTING
// chapter/lesson structure in highschool-data.js (kept as-is). Source: GET
// /api/v4/leap/cue-chapters/?program_code=USCC.ALGBR2, pulled from LOCAL DEV
// (not prod -- flagging since Algebra 1's pull was prod, see chat summary),
// 2026-07-09. 12 chapters / 54 lessons / 207 refs in the raw pull.
//
// Structure: refs["<our chapter name>"]["<our lesson name>"] = {cw, hw} | null
// null means no single API lesson corresponds cleanly to ours -- see the
// comments inline for why, rather than guessing.
//
// Same array-for-multi-worksheet-lessons convention as geometry-learnosity-refs.js:
// where one of our lessons' content is genuinely split across multiple API
// sheets (either bundled under one lesson node, or across two different
// lesson nodes), cw/hw are arrays (same index across both) instead of a
// single string. A few lessons ("Statistics" chapter) have LEARNING sheets
// but no PRACTICE/TARGET_PRACTICE sheet in the pull at all -- those show
// hw: null with a comment, not a fabricated ref.
const algebra2LearnosityRefs = {
  // Not present anywhere in the API's Algebra 2 pull at all -- no chapter on
  // linear functions exists in this pull (that's Algebra 1's territory; nothing
  // under Algebra 2's program code repeats it).
  "Linear Functions": {
    "Parent Functions and Transformations": null,
    "Transformations of Linear and Absolute Value Functions": null,
    "Modeling with Linear Functions": null,
    "Solving Linear Systems": null,
  },
  "Quadratic Functions": {
    "Transformations of Quadratic Functions": {cw: "Combination-QF-ALG2-W01", hw: "target-practice-Combination-QF-ALG2-W01"},
    // API's "Build Quadratic Functions Using Different Representations" is about
    // constructing functions from given info, a different skill from analyzing
    // characteristics (vertex, axis, min/max) the way our lesson frames it.
    "Characteristics of Quadratic Functions": null,
    // Not present -- parabola focus/directrix (a conic-sections topic) isn't in this pull.
    "Focus of a Parabola": null,
    "Modeling with Quadratic Functions": {cw: "Application-QF-W01", hw: "target-practice-Application-QF-W01"},
  },
  "Quadratic Equations and Complex Numbers": {
    "Solving Quadratic Equations": {cw: "Quadratic-Eqns-Complex-Solutions-V3-W05", hw: "Quadratic-Eqns-Complex-Solutions-V3-TP-05"},
    // API's chapter has 4 more granular lessons (Imaginary Unit, Intro to Complex Numbers,
    // Plotting, Operations) -- picked "Introduction" as most representative single ref.
    "Complex Numbers": {cw: "Intro-to-Complex-Numbers-V3-W02", hw: "Intro-to-Complex-Numbers-V3-TP02"},
    // Not present as its own lesson in this pull.
    "Completing the Square": null,
    "Using the Quadratic Formula": null,
    "Solving Nonlinear Systems": {cw: "System of Equations W01", hw: "target-practice-System of Equations W01"},
    // API separates one-variable and two-variable quadratic inequalities into two lessons;
    // picked the one-variable lesson as primary (more common intro framing).
    "Quadratic Inequalities": {cw: "Solving-Quadratic-Inequalities-W01", hw: "target-practice-Solving-Quadratic-Inequalities-W01"},
  },
  "Polynomial Functions": {
    "Graphing Polynomial Functions": {cw: "Graphing-Polynomial-Functions-US-Alg2-V3-W01", hw: "Graphing of Polynomial Functions TP"},
    // API's "Multiplying Polynomials" lesson covers multiply only -- no combined
    // add/subtract/multiply lesson in this pull (add/subtract assumed prior knowledge).
    "Adding, Subtracting, and Multiplying Polynomials": {cw: "Multiplying-Polynomials-W01", hw: "Multiplying-Polynomials-TP01"},
    "Dividing Polynomials": {cw: "Division-of-Polynomials-W01", hw: "Division-of-Polynomials-TP01"},
    "Factoring Polynomials": {cw: "Factoring-Polynomials-W01", hw: "Factoring-Polynomials-TP01"},
    // API's "Zeros of Polynomial Functions" lesson is conceptually the same thing as
    // solving p(x) = 0 -- confident match despite the functions-chapter framing.
    "Solving Polynomial Equations": {cw: "Zeros-Polynomial-Function-USCC-Alg2-V3-W01", hw: "Zeros of Polynomial Functions TP"},
    "The Fundamental Theorem of Algebra": {cw: "Fundamental-Theorem-of-Algebra-USCC-Alg2-V3-01", hw: "Fundamental Theorem of Algebra TP"},
    // Not present -- no lesson on shifting/transforming polynomial function graphs.
    "Transformations of Polynomial Functions": null,
    // API splits end-behavior and x-intercepts into two lessons, both squarely
    // "analyzing the graph" -- listing both.
    "Analyzing Graphs of Polynomial Functions": {
      cw: ["End-Behavior-Polynomial-Functions-US-Alg2-V3-W01", "x-intercepts-Polynomial-Functions-US-Alg2-V3-W01"],
      hw: ["End behavior of Polynomial Functions TP", "x-intercepts of Polynomial Functions TP"],
    },
    "Modeling with Polynomial Functions": {cw: "Modeling-Polynomial-Function-US-Alg2-V3-W01", hw: "Modeling using Polynomial Functions TP"},
  },
  "Function Operations and Inverses": {
    // No lesson on general function operations (add/subtract/multiply/compose any
    // two functions) anywhere in this pull.
    "Performing Function Operations": null,
    // API only has function-SPECIFIC inverse lessons (quadratic, radical) -- no general
    // "inverse of a function" lesson to point to.
    "Inverse of a Function": null,
  },
  "Rational Exponents and Radical Functions": {
    // Not present anywhere in the Algebra 2 pull -- rational exponents live in Algebra 1's
    // "Exponential Functions and Sequences" chapter instead ("Radicals and Rational Exponents").
    "nth Roots and Rational Exponents": null,
    "Properties of Rational Exponents and Radicals": null,
    // API's chapter has parallel square-root/cube-root lessons throughout; picked the
    // square-root ones as primary since ours doesn't distinguish.
    "Graphing Radical Functions": {cw: "Radical-Functions-And-Equations-W01", hw: "target-practice-Radical-Functions-And-Equations-W01"},
    // API keeps equations and inequalities as two separate lessons; ours combines them --
    // listing both.
    "Solving Radical Equations and Inequalities": {
      cw: ["Square-Root-Equations-ALG2-W01", "Radical-Inequalities-USCC-W01"],
      hw: ["target-practice-Square-Root-Equations-ALG2-W01", "target-practice-Radical-Inequalities-USCC-W01"],
    },
  },
  "Exponential and Logarithmic Functions": {
    // Not present -- no exponential-growth/decay lesson anywhere in this pull (Algebra 1's
    // "Exponential Functions and Sequences" chapter already covers this).
    "Exponential Growth and Decay Functions": null,
    "The Natural Base e": null,
    // Our lesson name combines both ideas; API keeps "Basics of Logarithms" and "Logarithmic
    // Functions and Their Graphs" as two separate lessons -- listing both.
    "Logarithms and Logarithmic Functions": {
      cw: ["Introduction-to-Logarithms-USCC-W01", "Introduction-to-Logarithmic-Functions-USCC-W01"],
      hw: ["target-practice-Introduction-to-Logarithms-USCC-W01", "target-practice-Introduction-to-Logarithmic-Functions-USCC-W01"],
    },
    // Not present -- no graph-transformation lesson for log/exponential functions.
    "Transformations of Exponential and Logarithmic Functions": null,
    // API's "Evaluate Expressions Using Logarithmic Properties" bundles two sheets
    // ("Laws of Logarithms - 1" and "- 2") -- listing both.
    "Properties of Logarithms": {
      cw: ["Laws-Of-Logarithms-USCC-W01", "Laws-Of-Logarithms-USCC-W02A"],
      hw: ["target-practice-Laws-Of-Logarithms-USCC-W01", "target-practice-Laws-Of-Logarithms-USCC-W02A"],
    },
    // API's lesson bundles solving-logarithmically and solving-exponentially-via-logs as
    // two sheets under one "Solve Exponential and Logarithmic Equations" lesson.
    "Solving Exponential and Logarithmic Equations": {
      cw: ["Solving-Logarithmic-Equations-USCC-W01", "Solving-Exponential-Equations-Using-Logarithms-W01"],
      hw: ["target-practice-Solving-Logarithmic-Equations-USCC-W01", "target-practice-Solving-Exponential-Equations-Using-Logarithms-W01"],
    },
    // Not present -- no modeling-specific lesson for exponential/log functions in this pull.
    "Modeling with Exponential and Logarithmic Functions": null,
  },
  "Rational Functions": {
    // Not present -- API jumps straight to rational-EXPRESSION operations, no separate
    // "inverse variation" intro lesson.
    "Inverse Variation": null,
    "Graphing Rational Functions": {cw: "Graphing-Rational-Functions-Using-its-Key-Features-W01", hw: "target-practice-Graphing-Rational-Functions-Using-its-Key-Features-W01"},
    // API's lesson bundles a Multiply sheet and a Divide sheet -- listing both.
    "Multiplying and Dividing Rational Expressions": {
      cw: ["Multiply-Rational-Expressions-USCC-V2-W01", "Divide-Rational-Expressions-USCC-V2-W01"],
      hw: ["target-practice-Multiply-Rational-Expressions-USCC-V2-W01", "target-practice-Divide-Rational-Expressions-USCC-V2-W01"],
    },
    "Adding and Subtracting Rational Expressions": {cw: "Add-Subtract-Rational-Expressions-USCC-V2-W01", hw: "target-practice-Add-Subtract-Rational-Expressions-USCC-V2-W01"},
    "Solving Rational Equations": {cw: "Rational-Equations-USCC-V2-W01", hw: "target-practice-Rational-Equations-USCC-V2-W01"},
  },
  // Not present anywhere in the API's Algebra 2 pull -- no Sequences/Series chapter
  // exists in this pull at all (Algebra 1's pull has some overlap via its "Exponential
  // Functions and Sequences" chapter, but nothing here under Algebra 2's program code).
  "Sequences and Series": {
    "Defining and Using Sequences and Series": null,
    "Analyzing Arithmetic Sequences and Series": null,
    "Analyzing Geometric Sequences and Series": null,
    "Finding Sums of Infinite Geometric Series": null,
    "Using Recursive Rules with Sequences": null,
  },
  "Trigonometric Ratios and Functions": {
    // Not present in this pull -- right-triangle trig is Geometry's territory, not
    // duplicated here in Algebra 2's pull.
    "Right Triangle Trigonometry": null,
    // API's lesson bundles Measuring Angles in Radians + Finding Arc Length as two sheets.
    "Angles and Radian Measure": {cw: "Angles-And-Their-Measures-New2-W01", hw: "target-practice-Angles-And-Their-Measures-New2-W01"},
    // Approximate: API frames this as "sine and cosine as trig functions" specifically,
    // not the broader "any angle on the unit circle" framing ours uses.
    "Trigonometric Functions of Any Angle": {cw: "Trigonometric-Functions-New2-W01", hw: "target-practice-Trigonometric-Functions-New2-W01"},
    // Third sheet of the same "Introduction to Sine and Cosine Functions" API lesson,
    // titled "Graphs and Features of Sine and Cosine Curves".
    "Graphing Sine and Cosine Functions": {cw: "Periodicity-of-Sine-Cosine-Functions-New2-W01", hw: "target-practice-Periodicity-of-Sine-Cosine-Functions-New2-W01"},
    "Graphing Other Trigonometric Functions": {cw: "Tan-Cot-Sec-Cosec-Functions-New2-W01", hw: "target-practice-Tan-Cot-Sec-Cosec-Functions-New2-W01"},
    "Modeling with Trigonometric Functions": {cw: "Modeling-Using-Sine-and-Cosine-Functions-New2-W01", hw: "target-practice-Modeling-Using-Sine-and-Cosine-Functions-New2-W01"},
    // API's "Trigonometric Identities" lesson bundles Pythagorean Identities + Proving
    // Trig Identities as two sheets -- both directly "using identities".
    "Using Trigonometric Identities": {
      cw: ["Pythagorean-Identities-New2-W01", "Trigonometric-Identities-USCC-New2-W01"],
      hw: ["target-practice-Pythagorean-Identities-New2-W01", "target-practice-Trigonometric-Identities-USCC-New2-W01"],
    },
    // Third sheet of the same "Trigonometric Identities" lesson.
    "Using Sum and Difference Formulas": {cw: "Sum-Difference-Two-Angles-New2-W01", hw: "target-practice-Sum-Difference-Two-Angles-New2-W01"},
  },
  // Not present anywhere in the API's Algebra 2 pull -- Probability content instead
  // lives entirely in the Geometry program's pull (program_code=USCC.GEOMRY has its own
  // "Probability" and "Permutations and Combinations" chapters); nothing under Algebra
  // 2's program code covers this at all.
  "Probability": {
    "Sample Spaces and Probability": null,
    "Independent and Dependent Events": null,
    "Two-Way Tables and Probability": null,
    "Probability of Disjoint and Overlapping Events": null,
    "Permutations and Combinations": null,
    "Binomial Distributions": null,
  },
  "Data Analysis and Statistics": {
    // API's "Statistics" chapter has NO TARGET_PRACTICE/PRACTICE sheet for ANY of its 4
    // lessons -- every hw below is null for that reason, not a missing lookup.
    // Lesson bundles 2 sheets: "Introduction to Normal Distributions..." + "Standard
    // Normal Distributions...".
    "Using Normal Distributions": {cw: "Introduction to Normal Distributions USCC Algebra II W01", hw: null},
    "Populations, Samples, and Hypotheses": {cw: "Sampling and Observational Studies USCC Algebra II W01", hw: null},
    // Overlaps with "Sampling and Observational Studies" above (already used) -- no
    // separate lesson distinctly about data collection methods.
    "Collecting Data": null,
    // Approximate: API's lesson is framed as drawing conclusions from an experiment's
    // results, not designing the experiment itself.
    "Experimental Design": {cw: "Drawing Conclusions from an Experiment USCC Algebra II W01", hw: null},
    "Making Inferences from Sample Surveys": {cw: "Sampling Variability USCC Algebra II W01", hw: null},
    // Same underlying API lesson as "Experimental Design" above -- reused, flagged.
    "Making Inferences from Experiments": {cw: "Drawing Conclusions from an Experiment USCC Algebra II W01", hw: null},
  },
};

// Chapters/lessons that exist in the live API pull (program_code=USCC.ALGBR2,
// local dev, 12 chapters / 54 lessons / 207 refs) but have NO corresponding
// chapter/lesson in our existing highschool-data.js Algebra 2 course at all.
// Unlike the other courses, every one of the API's 12 chapters here has AT
// LEAST one lesson used above -- so this is lesson-level, not chapter-level.
const algebra2ExtraChaptersInApiNotInOurs = [
  {chapter: "Equations and Inequalities", lessonCount: 3, note: "3 of this chapter's 5 real lessons are unused above: 'Absolute Value Equations', 'Absolute Value Inequalities', and 'Systems of Linear Equations in Three Variables'. Absolute value content is covered in our ALGEBRA 1 data instead, not repeated in our Algebra 2 chapters; three-variable systems isn't covered anywhere in our data at all."},
];
