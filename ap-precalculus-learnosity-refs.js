// Learnosity CW/HW references for AP Precalculus, matched against the
// EXISTING chapter/lesson structure in highschool-data.js's `ap-precalculus`
// course entry (kept as-is). Source: GET
// /api/v4/leap/cue-chapters/?program_code=USCC.PRECAL, pulled from LOCAL DEV,
// 2026-07-09. 14 chapters / 64 lessons / 394 refs in the raw pull. Note: the
// API's program is just named "Precalculus" -- it drops the "AP" our course
// key/name keeps; this is the same underlying course, not a mismatch.
//
// Structure: refs["<our chapter name>"]["<our lesson name>"] = {cw, hw} | null
// Same array-for-multi-worksheet-lessons convention as the Geometry/Algebra 2
// files: cw/hw are arrays (same index across both) where one of our lessons
// genuinely corresponds to more than one API sheet. A few lessons ("Functions:
// Rate of Change" chapter) have a LEARNING sheet but NO TARGET_PRACTICE/
// PRACTICE sheet anywhere in the pull -- those show hw: null with a comment.
//
// This pull is unusually clean: several of our chapters/lessons match the
// API's names/structure almost verbatim (Trigonometric Functions, Inverse
// Trigonometric Functions, Analytic Trigonometry, most of Vectors and
// Matrices) -- flagged inline where that's the case.
const apPrecalculusLearnosityRefs = {
  "Functions: Composition, Invertibility, and Transformations": {
    // API splits each of our 3 lessons into "Part 1"/"Part 2" -- listing both per lesson.
    "Composite Functions": {
      cw: ["Composite-functions-USCC-Precal-W01", "Composite-functions-USCC-Precal-W02"],
      hw: ["Composite-functions-USCC-Precal-TP-01", "Composite-functions-USCC-Precal-TP-02"],
    },
    "Inverse Functions": {
      cw: ["Inverse-Functions-USCC-Precal-V3-01", "Inverse-Functions-USCC-Precal-V3-02"],
      hw: ["Inverse-Functions-USCC-Precal-V3-TP-03", "Inverse-Functions-USCC-Precal-V3-TP-04"],
    },
    "Transformations": {
      cw: ["Function-Transformations-USCC-Precal-01", "Function-Transformations-USCC-Precal-02"],
      hw: ["Function-Transformations-USCC-Precal-TP-05", "Function-Transformations-USCC-Precal-TP-06"],
    },
  },
  "Functions: Rate of Change": {
    // Exact 1:1:1:1 chapter/lesson match with the API's "Functions: Rates of Change"
    // (ours says "Rate", singular -- same chapter). None of its 4 lessons have a
    // TARGET_PRACTICE/PRACTICE sheet in this pull at all -- hw: null throughout, not a
    // missing lookup.
    "Key Features of Graph of a Function": {cw: "Inc-Dec-Concavity-Function-V3-W01", hw: null},
    "Rates of Change": {cw: "Rate-of-Change-USCC-Precal-V3-01", hw: null},
    "Rates of Change for Linear Functions": {cw: "Rates-Change-Linear-Functions-V3-W03", hw: null},
    "Rates of Change in Quadratic Functions": {cw: "RoC-Quadratic-Functions-USCC-Precal-V3-W01", hw: null},
  },
  "Polynomial Functions": {
    // Not present -- API's Polynomial Functions chapter jumps straight to graphs/zeros,
    // no separate "intro to polynomial functions" lesson.
    "Introduction to Polynomial Functions": null,
    // API's "Polynomial Functions and their Graphs" lesson bundles 3 sheets: End Behavior,
    // Real Zeros, and Other Key Features. The Real Zeros sheet is used separately below
    // (closer fit for "Theorems on Real Zeros"), so only End Behavior + Other Key Features
    // are listed here.
    "Key Features of Graphs": {
      cw: ["Graphs-of-Polynomial-Functions-W01", "Graphs-of-Polynomial-Functions-W03"],
      hw: ["target-practice-Graphs-of-Polynomial-Functions-W01", "target-practice-Graphs-of-Polynomial-Functions-W03"],
    },
    // Exact match -- API's "Zeros of Polynomial Functions" lesson has a sheet titled
    // literally "The Fundamental Theorem of Algebra".
    "Complex Zeros and Fundamental Theorem of Algebra": {cw: "Zeros-of-Polynomial-Functions-W02", hw: "target-practice-Zeros-of-Polynomial-Functions-W02"},
    // Combines the "Real Zeros" sheet from the Graphs lesson with the "Finding the Zeros
    // Algebraically" sheet from the Zeros lesson -- both are theorems-on-real-zeros content.
    "Theorems on Real Zeros of Polynomials": {
      cw: ["Graphs-of-Polynomial-Functions-W02", "Zeros-of-Polynomial-Functions-W01"],
      hw: ["target-practice-Graphs-of-Polynomial-Functions-W02", "target-practice-Zeros-of-Polynomial-Functions-W01"],
    },
    // API's "Modelling with Polynomial Functions" lesson bundles a "reconstruct the
    // polynomial from given info" sheet and a "model a real-life situation" sheet -- both
    // genuinely modeling-related.
    "Modeling with Polynomial Functions": {
      cw: ["Modeling-Polynomial-Functions-W01", "Zeros-of-Polynomial-Functions-W03"],
      hw: ["target-practice-Modeling-Polynomial-Functions-W01", "target-practice-Zeros-of-Polynomial-Functions-W03"],
    },
  },
  "Exponential Functions": {
    // Not present -- no intro-to-patterns-of-change lesson in this pull.
    "Sequence and Change Patterns": null,
    // Approximate/best-available: the ONLY exponential-function-specific (non-log)
    // content in the API's "Exponential and Logarithmic Functions" chapter is this
    // growth/decay modeling lesson -- there's no general "exponential functions" basics
    // lesson to point to instead.
    "Exponential Functions": {cw: "Exponential-Growth-Decay-PRECAL-W01", hw: "target-practice-Exponential-Growth-Decay-PRECAL-W01"},
    // Not present -- no graph-transformation lesson for exponential functions.
    "Exponential Function Transformations": null,
    // Second sheet of the "Real-Life Modelling using Exponential Functions" lesson,
    // titled "Modelling Continuous Growth and Decay" (i.e. using base e).
    "Exponential Modeling": {cw: "Natural-Base-E-PRECAL-W01", hw: "target-practice-Natural-Base-E-PRECAL-W01"},
  },
  "Logarithmic Functions": {
    // Not present -- API jumps directly to Properties of Logarithms, no intro/evaluate-
    // expressions lesson first.
    "Logarithmic Expressions": null,
    "Inverses of Exponential Functions": null,
    // Not present in THIS pull specifically (Algebra 2's pull does have a "Logarithmic
    // Functions and Their Graphs" lesson, but it isn't repeated here in Precalculus's).
    "Logarithmic Functions": null,
    // API's lesson is literally named "Properties of Logarithms" and bundles two sheets
    // ("Laws of Logarithms -1" and "- 2").
    "Logarithmic Function Manipulation": {
      cw: ["Laws-Of-Logarithms-USCC-PRECAL-W01", "Laws-Of-Logarithms-USCC-PRECAL-W02A"],
      hw: ["target-practice-Laws-Of-Logarithms-USCC-PRECAL-W01", "target-practice-Laws-Of-Logarithms-USCC-PRECAL-W02A"],
    },
    // API keeps "Exponential and Logarithmic Equations" and "Logarithmic and Exponential
    // Inequalities" as two separate lesson nodes; our lesson name explicitly combines
    // both -- listing all 3 underlying sheets.
    "Exponential and Logarithmic Equations and Inequalities": {
      cw: ["Solving-Logarithmic-Equations-USCC-PRECAL-W01", "Solving-Exponential-Equations-Using-Logarithms-PRECAL-W01", "Solving-Logarithmic-And-Exponential-Inequalities-USCC-W01"],
      hw: ["target-practice-Solving-Logarithmic-Equations-USCC-PRECAL-W01", "target-practice-Solving-Exponential-Equations-Using-Logarithms-PRECAL-W01", "target-practice-Solving-Logarithmic-And-Exponential-Inequalities-USCC-W01"],
    },
    // Not present -- no log-based real-world data-modeling lesson (distinct from the
    // exponential-growth modeling already used under "Exponential Functions" above).
    "Logarithmic Function Context and Data Modeling": null,
    // Not present at all -- a fairly specialized topic, no semi-log-plot lesson found.
    "Semi-log Plots": null,
  },
  "Rational Functions": {
    // Exact match -- first sheet of API's "Analyse Rational Functions" lesson is
    // literally titled "Finding Vertical Asymptotes and Holes of Rational Functions".
    "Vertical Asymptotes and Holes": {cw: "Behavior-of-Rational-Functions-at-Undefined-Values-W01", hw: "target-practice-Behavior-of-Rational-Functions-at-Undefined-Values-W01"},
    // Second sheet of the same lesson, titled "End Behavior of Rational Functions".
    "End Behavior of Rational Functions": {cw: "Analysing-the-End-Behavior-of-Rational-Functions-W01", hw: "target-practice-Analysing-the-End-Behavior-of-Rational-Functions-W01"},
    // Approximate: API's "Solve Rational Inequalities" lesson requires sign analysis and
    // finding zeros as part of the process, but doesn't name "zeros"/"sign analysis"
    // separately in its title.
    "Zeros, Sign Analysis, and Rational Inequalities": {cw: "Rational-Inequalities-USCC-V2-W01", hw: "target-practice-Rational-Inequalities-USCC-V2-W01"},
    // Our lesson name combines graphing+modeling; API keeps "Graph Rational Functions"
    // and "Model Real-Life Situations using Rational Functions" as two separate lessons.
    "Equivalent Representations, Graphing, and Modeling": {
      cw: ["Graphing-Rational-Functions-Using-its-Key-Features-W01", "Application-Rational-Functions-USCC-V2-W01"],
      hw: ["target-practice-Graphing-Rational-Functions-Using-its-Key-Features-W01", "target-practice-Application-Rational-Functions-USCC-V2-W01"],
    },
  },
  "Trigonometric Functions": {
    // Exact chapter AND lesson-name match with the API for all 5 lessons below.
    // Bundles 3 sheets: Measuring Angles in Radians, Finding Arc Length, Circular Motion.
    "Angles and Radians": {
      cw: ["Angles-And-Their-Measures-USCC-Precal-W01", "Arc-Length-Sector-Area-W01", "Circular-Motion-USCC-Precal-W01"],
      hw: ["target-practice-Angles-And-Their-Measures-USCC-Precal-W01", "target-practice-Arc-Length-Sector-Area-W01", "target-practice-Circular-Motion-USCC-Precal-W01"],
    },
    "Introduction to Sine and Cosine Functions": {
      cw: ["Trigonometric-Functions-USCC-Precal-W01", "Trigonometric-Functions-USCC-Precal-W02", "Periodicity-of-Sine-Cosine-Functions-USCC-Precal-W01"],
      hw: ["target-practice-Trigonometric-Functions-USCC-Precal-W01", "target-practice-Trigonometric-Functions-USCC-Precal-W02", "target-practice-Periodicity-of-Sine-Cosine-Functions-USCC-Precal-W01"],
    },
    "Transformations and Modeling with Cosine and Sine Functions": {
      cw: ["Tranformation-Sine-Cosine-USCC-Precal-W01", "Sinusoidal-Modeling-USCC-Precal-W01"],
      hw: ["target-practice-Tranformation-Sine-Cosine-USCC-Precal-W01", "target-practice-Sinusoidal-Modeling-USCC-Precal-W01"],
    },
    "The Tangent Function": {cw: "Tan-Function-USCC-Precal-W01", hw: "target-practice-Tan-Function-USCC-Precal-W01"},
    "Other Trigonometric Functions": {cw: "Other-Trig-Functions-USCC-Precal-W01", hw: "target-practice-Other-Trig-Functions-USCC-Precal-W01"},
  },
  "Inverse Trigonometric Functions": {
    // Exact chapter AND lesson-name match -- API's single lesson node bundles exactly 3
    // sheets whose titles are verbatim our 3 lesson names.
    "Analysing Domain, Range and Graphs": {cw: "Inverse-Trigonometric-Functions-USCC-Precal-W01", hw: "target-practice-Inverse-Trigonometric-Functions-USCC-Precal-W01"},
    "Evaluating Inverse Trigonometric Expressions": {cw: "Inverse-Trigonometric-Functions-USCC-Precal-W02", hw: "target-practice-Inverse-Trigonometric-Functions-USCC-Precal-W02"},
    "Modeling": {cw: "Inverse-Trigonometric-Functions-USCC-Precal-W03", hw: "target-practice-Inverse-Trigonometric-Functions-USCC-Precal-W03"},
  },
  "Analytic Trigonometry": {
    // Exact chapter AND lesson-name match for all 3 lessons.
    "Trigonometric Identities": {
      cw: ["Pythagorean-Identities-USCC-Precal-W01", "Trigonometric-Identities-USCC-Precal-W01"],
      hw: ["target-practice-Pythagorean-Identities-USCC-Precal-W01", "target-practice-Trigonometric-Identities-USCC-Precal-W01"],
    },
    "Sum and Difference, Multiple Angle Identities": {
      cw: ["Trig-Sum-Difference-Identities-USCC-Precal-W01", "Multiple-Angle-Formulae-USCC-Precal-W01", "Multiple-Angle-Formulae-USCC-Precal-W02"],
      hw: ["target-practice-Trig-Sum-Difference-Identities-USCC-Precal-W01", "target-practice-Multiple-Angle-Formulae-USCC-Precal-W01", "target-practice-Multiple-Angle-Formulae-USCC-Precal-W02"],
    },
    "Trigonometric Equations and Inequalities": {
      cw: ["Trigonometric-Equations-USCC-Precal-W01", "Trigonometric-Inequalities-USCC-Precal-W01"],
      hw: ["target-practice-Trigonometric-Equations-USCC-Precal-W01", "target-practice-Trigonometric-Inequalities-USCC-Precal-W01"],
    },
  },
  // Not present anywhere in the pull. The only "polar" content that exists at all is
  // under the API's "Complex Numbers" chapter ("Represent Complex Numbers in the Polar
  // Form") -- a related but distinct concept (polar form of a complex number, not polar
  // coordinates/functions in the plane generally), so not used as a match for any of these.
  "Polar Functions": {
    "Polar Coordinate System": null,
    "Graphs of Polar Functions": null,
    "Rates of Change of Polar Functions": null,
  },
  "Vectors and Matrices (Not Tested on the Exam)": {
    // Near-exact match against the API's "Vectors" chapter (4/4) plus "Matrices and
    // Systems of Equations" chapter (4/4) -- see geometryExtraChaptersInApiNotInOurs-style
    // note below about the API's separate "Basics of Matrices" chapter, which ours skips
    // entirely (general matrix arithmetic/transpose/symmetric matrices -- not in our data).
    "Introduction to Vectors": {
      cw: ["Introduction-to-Vector-Algebra-USCC-W01", "Introduction-to-Vector-Algebra-USCC-W02"],
      hw: ["target-practice-Introduction-to-Vector-Algebra-USCC-W01", "target-practice-Introduction-to-Vector-Algebra-USCC-W02"],
    },
    "Basic Operations on Vectors": {
      cw: ["Vector-Operations-USCC-W01", "Add-Sub-Vectors-USCC-W01", "Add-Sub-Vectors-USCC-W02", "Add-Sub-Vectors-USCC-W03"],
      hw: ["target-practice-Vector-Operations-USCC-W01", "target-practice-Add-Sub-Vectors-USCC-W01", "target-practice-Add-Sub-Vectors-USCC-W02", "target-practice-Add-Sub-Vectors-USCC-W03"],
    },
    "Unit Vectors": {cw: "Unit-Vectors-USCC-W01", hw: "target-practice-Unit-Vectors-USCC-W01"},
    "Dot Product of Vectors": {
      cw: ["Dot-Product-Prop-USCC-W01", "Dot-Product-Prop-USCC-W02", "Applications-of-Dot-Products-USCC-W01"],
      hw: ["target-practice-Dot-Product-Prop-USCC-W01", "target-practice-Dot-Product-Prop-USCC-W02", "target-practice-Applications-of-Dot-Products-USCC-W01"],
    },
    "Basics of Determinants": {
      cw: ["Determinants-Introduction-W01", "Determinants-Introduction-W02"],
      hw: ["target-practice-Determinants-Introduction-W01", "target-practice-Determinants-Introduction-W02"],
    },
    "Properties of Determinants": {
      cw: ["Determinants-Properties-W01", "Determinants-Properties-W02", "Determinants-Properties-W03"],
      hw: ["target-practice-Determinants-Properties-W01", "target-practice-Determinants-Properties-W02", "target-practice-Determinants-Properties-W03"],
    },
    // API's lesson node is titled "Inverse of a Matrix" but bundles 3 sheets: Cofactors
    // and Minors, Adjoint, and the actual Inverse -- all part of the same computation.
    "Inverse of a Matrix": {
      cw: ["Matrices-Cofactors-Minors-W01", "Matrices-Adjoint-W01", "Matrices-Inverse-W01"],
      hw: ["target-practice-Matrices-Cofactors-Minors-W01", "target-practice-Matrices-Adjoint-W01", "target-practice-Matrices-Inverse-W01"],
    },
    "Solution of Linear Equations": {
      cw: ["Matrices-Linear-Equations-W01", "Matrices-Linear-Equations-W02"],
      hw: ["target-practice-Matrices-Linear-Equations-W01", "target-practice-Matrices-Linear-Equations-W02"],
    },
  },
};

// Chapters that exist in the live API pull (program_code=USCC.PRECAL, local
// dev, 14 chapters / 64 lessons / 394 refs) but have NO corresponding chapter
// in our existing highschool-data.js ap-precalculus course (11 chapters / 41
// lessons) at all. Not added to our data -- noted here per instruction. This
// course's extras are the largest of the four pulled so far, reflecting the
// same CBSE-origin depth pattern seen in Geometry.
const apPrecalculusExtraChaptersInApiNotInOurs = [
  {chapter: "Conic Sections", lessonCount: 6, note: "Parabola, Ellipse, and Hyperbola -- key features and equations, both centered and off-center. None of our 11 chapters cover conic sections at all."},
  {chapter: "Complex Numbers", lessonCount: 5, note: "Graphing complex numbers, division via conjugates, polar form, De Moivre's theorem, roots of complex numbers. Ours has no Complex Numbers chapter in AP Precalculus at all (that's Algebra 2's territory in our data, and even there it's much more basic -- no polar form or De Moivre's theorem)."},
  {chapter: "Sequences and Series", lessonCount: 6, note: "A full formal treatment: arithmetic/geometric progressions, their sums, special series. Our AP Precalculus data has no Sequences/Series chapter at all (that content instead lives under Algebra 1's and Algebra 2's own Sequences chapters in our data)."},
  {chapter: "Basics of Matrices", lessonCount: 5, note: "General matrix arithmetic: order/types of matrices, addition/multiplication and their properties, transpose, symmetric/skew-symmetric matrices, elementary row operations. Our 'Vectors and Matrices' chapter only covers vectors plus determinants/inverse/solving-linear-systems-via-matrices -- it skips general matrix arithmetic entirely."},
];
