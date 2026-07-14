// Learnosity CW/HW references for Algebra 1, matched against the EXISTING
// chapter/lesson structure in highschool-data.js (kept as-is). Source: GET
// /api/v4/leap/cue-chapters/?program_code=USCC.ALGBRA1, pulled from LOCAL DEV,
// 2026-07-09. 17 chapters / 89 lessons / 344 refs in the raw pull.
//
// SUPERSEDES an earlier version of this file built from a PROD pull (18
// chapters / 114 lessons / 242 refs). Manasa confirmed the prod pull should
// not be used -- Algebra 1 needed to be redone from local dev to match the
// other 4 courses (Geometry/Algebra 2/AP Precalculus/AP Calculus AB, all
// already local-dev-sourced). This is a genuinely different curriculum cut,
// not just the same content relabeled -- see the chat summary for specifics
// (several chapters have entirely different names/lesson breakdowns; e.g.
// the old "Solving Linear Equations" chapter is now "Simple Equations and
// Formulas" with different-sounding lessons). Rebuilt from scratch against
// this new pull; none of the old prod-based ref choices were reused or
// diffed against, since much of that mapping logic no longer applies.
//
// Structure: refs["<our chapter name>"]["<our lesson name>"] = {cw, hw} | null
// Same array-for-multi-worksheet-lessons convention as the other 4 files:
// cw/hw are arrays (same index across both) where one of our lessons
// genuinely corresponds to more than one API sheet/lesson. One lesson below
// ("Solving Quadratic Equations Using Square Roots") has the reverse gap --
// only a PRACTICE sheet exists in the pull, no LEARNING sheet at all -- shown
// as cw: null, hw: <ref>, flagged inline.
//
// This pull is structurally the cleanest of the 5 courses done so far: EVERY
// ONE of its 17 chapters has at least one lesson used below (unlike
// Geometry/Algebra 2/AP Precalculus, which each had whole chapters --
// Sets, Probability, Conic Sections, etc. -- with zero overlap). See the
// chat summary for what that's likely telling us about how this pull was assembled.
const algebra1LearnosityRefs = {
  "Solving Linear Equations": {
    // "Simple" = one-step, the API's own first solving lesson after its intro lesson.
    "Solving Simple Equations": {cw: "Solving 1-Step Equations", hw: "Solving 1-Step Equations-TP02"},
    "Solving Multi-Step Equations": {cw: "Solving Multi-Step Equations", hw: "Solving Multi-Step Equations-TP03"},
    "Solving Equations with Variables on Both Sides": {cw: "Solving Equations with Variable on Both Sides", hw: "Solving Equations with Variable on Both Sides-TP04"},
    // Not present anywhere in this chapter's pull -- no absolute-value-equation lesson.
    "Solving Absolute Value Equations": null,
    // Not present -- API's "Application of Linear Equations" is word-problem application,
    // a different skill from rearranging/isolating a variable in a multi-variable formula.
    "Rewriting Equations and Formulas": null,
  },
  "Solving Inequalities in One Variable": {
    "Writing and Graphing Inequalities": {cw: "Intro-to-Linear-Inequalities-W01", hw: "Intro-to-Linear-Inequalities-TP01"},
    "Solving Inequalities Using Addition or Subtraction": {cw: "Solve-Simple-Linear-Inequalities-W01", hw: "Solve-Simple-Linear-Inequalities-TP02"},
    "Solving Inequalities Using Multiplication or Division": {cw: "Solve-Simple-Linear-Inequalities-W02", hw: "Solve-Simple-Linear-Inequalities-TP03"},
    // Not present as its own lesson -- may be folded into the "Simple" lessons above, not confident enough to assert.
    "Solving Multi-Step Inequalities": null,
    // API keeps 'AND' and 'OR' compound inequalities as two separate lessons -- listing both.
    "Solving Compound Inequalities": {
      cw: ["Solve-Compound-Inequalities-W01", "Solve-Compound-Inequalities-W02"],
      hw: ["Solve-Compound-Inequalities-TP04", "Solve-Compound-Inequalities-TP05"],
    },
    // Not present -- no absolute-value-inequality lesson in this chapter's pull.
    "Solving Absolute Value Inequalities": null,
  },
  "Basics of Functions": {
    "Representations of Relations and Functions": {cw: "Basics-of-Functions-V3-W01_A", hw: "Basics-Functions-TP1"},
    // API folds function notation into the same lesson as ordered pairs/mapping diagrams
    // above -- reusing that same ref, flagged.
    "Function Notation": {cw: "Basics-of-Functions-V3-W01_A", hw: "Basics-Functions-TP1"},
    "Domain and Range": {cw: "Domain-Range-V3-W04", hw: "target-practice-Basics-Of-Functions-USCC-G9-W02B"},
    "Key Features of Functions": {cw: "Key-Features-Graph-Function-V3-W05", hw: "target-practice-Graphical-Analysis-Of-Functions-USCC-G9-W01"},
    "Inverse of a Function": {cw: "Inverse-of-Function-V3-W06", hw: "target-practice-Basics-Of-Functions-USCC-G9-W04"},
    // API splits this into 3 separate lessons (Translate/Reflect & Even-Odd/Scale) under
    // its own "Graphical Analysis of Functions and Linear Functions" chapter -- picked one
    // representative sheet from each as more honest than a single arbitrary pick.
    "Transformations of Linear Functions": {
      cw: ["Vertical-Translations-Of-Linear-Functions-G9-W01", "Reflections-Linear-Functions-Even-Odd-G9-W01", "Vertical-Scaling-Of-Linear-Functions-G9-W01"],
      hw: ["target-practice-Vertical-Translations-Of-Linear-Functions-G9-W01", "target-practice-Reflections-Linear-Functions-Even-Odd-G9-W01", "target-practice-Vertical-Scaling-Of-Linear-Functions-G9-W01"],
    },
  },
  "Linear Functions": {
    "Graphing Linear Equations in Standard Form": {cw: "Equation-of-Line-USCC-G9-W04a", hw: "target-practice-Equation-of-Line-USCC-G9-W04a"},
    "Graphing Linear Equations in Slope-Intercept Form": {cw: "Equation-of-Line-USCC-G9-W02a", hw: "target-practice-Equation-of-Line-USCC-G9-W02a"},
    // Same underlying situation and same reused refs as "Transformations of Linear
    // Functions" in "Basics of Functions" above -- our own data effectively repeats this
    // lesson concept across two chapters with near-identical names.
    "Transformations of Graphs of Linear Functions": {
      cw: ["Vertical-Translations-Of-Linear-Functions-G9-W01", "Reflections-Linear-Functions-Even-Odd-G9-W01", "Vertical-Scaling-Of-Linear-Functions-G9-W01"],
      hw: ["target-practice-Vertical-Translations-Of-Linear-Functions-G9-W01", "target-practice-Reflections-Linear-Functions-Even-Odd-G9-W01", "target-practice-Vertical-Scaling-Of-Linear-Functions-G9-W01"],
    },
    // API splits absolute-value graphing across 4 separate lessons (Vertical/Horizontal
    // Translation, Reflection, Scaling) under "Piecewise and Absolute Value Functions" --
    // listing all 4 primary sheets rather than picking one arbitrarily.
    "Graphing Absolute Value Functions": {
      cw: ["Vertical-Translation-of-AVF-W01", "Horizontal-Translation-of-AVF-W01", "Reflection-of-AVF-W01", "Vertical-Scaling-of-AVF-W01"],
      hw: ["target-practice-Vertical-Translation-of-AVF-W01", "target-practice-Horizontal-Translation-of-AVF-W01", "target-practice-Reflection-of-AVF-W01", "target-practice-Vertical-Scaling-of-AVF-W01"],
    },
    // Same underlying API lesson as "Graphing Linear Equations in Slope-Intercept Form"
    // above (API doesn't separate graphing vs. writing for this form) -- reused, flagged.
    "Writing Equations in Slope-Intercept Form": {cw: "Equation-of-Line-USCC-G9-W02a", hw: "target-practice-Equation-of-Line-USCC-G9-W02a"},
    "Writing Equations in Point-Slope Form": {cw: "Equation-of-Line-USCC-G9-W03a", hw: "target-practice-Equation-of-Line-USCC-G9-W03a"},
    // 3rd sheet of a lesson that also has 2 preliminary "find the slope of a
    // parallel/perpendicular line" sheets bundled in -- picked as most representative of
    // our lesson's name (writing the actual equation).
    "Writing Equations of Parallel and Perpendicular Lines": {cw: "Equation-of-Parallel-Perpendicular-Lines-USCC-G9-W01", hw: "target-practice-Equation-of-Parallel-Perpendicular-Lines-USCC-G9-W01"},
    // Both pulled from the Statistics chapter's "Scatter Plots & Linear Regression" lesson
    // (a 3rd sheet in that lesson, "Comparing Correlation and Causation", isn't used by
    // either of ours here).
    "Scatter Plots and Lines of Fit": {cw: "Equation-of-Line-of-Fit-W01", hw: "target-practice-Equation-of-Line-of-Fit-W01"},
    "Analyzing Lines of Fit": {cw: "Correlation-Coefficient-V2-W01", hw: "target-practice-Correlation-Coefficient-V2-W01"},
    // API's "Understanding Arithmetic Sequences" lesson bundles 3 sheets (intro, graphing,
    // summing) -- all genuinely part of the same topic, listing all 3.
    "Arithmetic Sequences": {
      cw: ["USCC-Alg-1-Sequences-Intro-To-Arithmetic-Sequences", "USCC-Algebra-Graphing-Arithmetic-Sequences", "USCC-Alg-1-Sequences-Summing-Arithmetic-Sequences"],
      hw: ["target-practice-USCC-Alg-1-Sequences-Intro-To-Arithmetic-Sequences", "target-practice-USCC-Algebra-Graphing-Arithmetic-Sequences", "target-practice-USCC-Alg-1-Sequences-Summing-Arithmetic-Sequences"],
    },
    // API's "Identify Piecewise Functions" lesson bundles 2 sheets (general piecewise
    // graphs, then special/named piecewise functions).
    "Piecewise Functions": {
      cw: ["Piecewise-Function-G9-W01-Alt", "Special-Piecewise-Functions-G9-W01"],
      hw: ["target-practice-Piecewise-Function-G9-W01-Alt", "target-practice-Special-Piecewise-Functions-G9-W01"],
    },
  },
  "Solving Systems of Linear Equations": {
    "Solving Systems of Linear Equations by Graphing": {cw: "Graphical-Solution-Of-SLE-W01", hw: "target-practice-Graphical-Solution-Of-SLE-W01"},
    // API's lesson bundles Substitution and Elimination as two sheets.
    "Solving Systems of Linear Equations by Algebraically": {
      cw: ["Algebraic-Solution-Of-SLE-W01", "Algebraic-Solution-Of-SLE-W02"],
      hw: ["target-practice-Algebraic-Solution-Of-SLE-W01", "target-practice-Algebraic-Solution-Of-SLE-W02"],
    },
    // API's 3rd lesson here is "Modelling using System of Linear Equations" (word
    // problems), a different concept from "special systems" (no-solution/infinite-
    // solution cases) -- no match, same conclusion as the prior prod-pull mapping reached
    // independently here.
    "Solving Special Systems of Linear Equations": null,
  },
  "Two-Variable Linear Inequalities and Systems": {
    // Neither lesson in this API chapter has a TARGET_PRACTICE/PRACTICE sheet at all --
    // hw: null for both, not a missing lookup. (A 3rd API lesson, "Model Real-Life
    // Situtations using Linear Inequalities in Two Variables", isn't used by either of ours.)
    "Graphing Linear Inequalities in Two Variables": {cw: "Linear-Inequalities-In-Two-Variables-V2-W01", hw: null},
    "Systems of Linear Inequalities": {cw: "Systems-of-Linear-Inequalities-In-Two-Variables-V2-W01", hw: null},
  },
  "Exponential Functions and Sequences": {
    "Properties of Exponents": {cw: "Exponents-Laws-USCC-G9-W03", hw: "target-practice-Exponents-Laws-USCC-G9-W03"},
    // API's "Interpret Rational Exponents" lesson bundles 2 sheets (1/n form, m/n form);
    // its follow-on "Simplify Expressions Involving Rational Exponents" lesson is directly
    // on-topic too -- listing all 3.
    "Radicals and Rational Exponents": {
      cw: ["Exponents-Rational-Power-USCC-G9-W01", "Exponents-Rational-Power-USCC-G9-W02", "Exponents-Rational-Power-USCC-G9-W03"],
      hw: ["target-practice-Exponents-Rational-Power-USCC-G9-W01", "target-practice-Exponents-Rational-Power-USCC-G9-W02", "target-practice-Exponents-Rational-Power-USCC-G9-W03"],
    },
    "Exponential Functions": {cw: "Introduction-to-Exponential-Functions-W01", hw: "target-practice-Introduction-to-Exponential-Functions-W01"},
    "Exponential Growth and Decay": {cw: "Introduction-to-Exponential-Growth-and-Decay-W01", hw: "target-practice-Introduction-to-Exponential-Growth-and-Decay-W01"},
    "Solving Exponential Equations": {cw: "Introduction-to-Exponential-Equations-W01", hw: "target-practice-Introduction-to-Exponential-Equations-W01"},
    // API's "Understanding Geometric Sequences..." lesson bundles 3 sheets (intro,
    // graphing, summing), same pattern as Arithmetic Sequences above.
    "Geometric Sequences": {
      cw: ["USCC-Alg-1-Sequences-Geometric-Sequences", "USCC-Algebra-Graphing-Geometric-Sequences", "USCC-Alg-1-Sequences-Summing-Geometric-Sequences"],
      hw: ["target-practice-USCC-Alg-1-Sequences-Geometric-Sequences", "target-practice-USCC-Algebra-Graphing-Geometric-Sequences", "target-practice-USCC-Alg-1-Sequences-Summing-Geometric-Sequences"],
    },
    // 2nd sheet of API's "A General Introduction to Sequences" lesson (1st sheet, plain
    // "Introduction to Sequences", isn't used by anything in our data).
    "Recursively Defined Sequences": {cw: "USCC-Alg-1-Sequences-Recursive-Formulae", hw: "target-practice-USCC-Alg-1-Sequences-Recursive-Formulae"},
  },
  "Polynomial Expressions": {
    "Definition and Classification of Polynomials": {cw: "Polynomials-Algebraic-Expressions-V3.1-L3", hw: "Polynomials-V3.1-TP03"},
    // API combines add/subtract/multiply into ONE lesson -- both of ours below share it.
    "Adding and Subtracting Polynomials": {cw: "Polynomials-Add-Sub-Mult-V3.1-L4", hw: "Add-Sub-Mult-Polynomials-V3.1-TP04"},
    "Multiplying Polynomials": {cw: "Polynomials-Add-Sub-Mult-V3.1-L4", hw: "Add-Sub-Mult-Polynomials-V3.1-TP04"},
    "Special Products of Polynomials": {cw: "Polynomials-Special-Product-V3.1-L5", hw: "Special-Prod-Polynomials-V3.1-TP05"},
  },
  "Polynomial Equations and Factoring": {
    // These 3 lesson names repeat from "Polynomial Expressions" above in our own data;
    // API only has one such lesson each, so both of our chapters point at the same ref.
    "Adding and Subtracting Polynomials": {cw: "Polynomials-Add-Sub-Mult-V3.1-L4", hw: "Add-Sub-Mult-Polynomials-V3.1-TP04"},
    "Multiplying Polynomials": {cw: "Polynomials-Add-Sub-Mult-V3.1-L4", hw: "Add-Sub-Mult-Polynomials-V3.1-TP04"},
    "Special Products of Polynomials": {cw: "Polynomials-Special-Product-V3.1-L5", hw: "Special-Prod-Polynomials-V3.1-TP05"},
    "Solving Polynomial Equations in Factored Form": {cw: "Polynomial-Equations-USCC-G9-W01", hw: "target-practice-Polynomial-Equations-USCC-G9-W01"},
    // Splitting the middle term is exactly the standard technique for this case.
    "Factoring x2 + bx + c": {cw: "Factorisation-IGCSE-W02", hw: "target-practice-Factorisation-IGCSE-W02"},
    // API doesn't separate the leading-coefficient (a != 1) case from the simple-trinomial
    // case above by title -- not confident enough to assert a distinct match.
    "Factoring ax2 + bx + c": null,
    "Factoring Special Products": {cw: "Factorisation-IGCSE-W04", hw: "target-practice-Factorisation-IGCSE-W04"},
    // Approximate: "factoring completely" combines several techniques; picked the
    // common-factor/grouping lesson as the (usually first) step, not a full match.
    "Factoring Polynomials Completely": {cw: "Factorisation-IGCSE-W01", hw: "target-practice-Factorisation-IGCSE-W01"},
  },
  "Quadratic Functions": {
    "Graphing f (x) = ax2": {cw: "Quadratic-Functions-New-W01", hw: "target-practice-Quadratic-Functions-New-W01"},
    // Not present as its own lesson -- API jumps from basic key features straight to full
    // vertex/factored-form treatment, no intermediate "vertical shift only" case.
    "Graphing f (x) = ax2 + c": null,
    "Graphing f (x) = ax2 + bx + c": {cw: "Graphing-QF-W01", hw: "target-practice-Graphing-QF-W01"},
    "Graphing f (x) = a(x − h)2 + k": {cw: "Vertex-Form-QF-New2-W01", hw: "target-practice-Vertex-Form-QF-New2-W01"},
    // "The Factored Form" = Intercept Form -- same concept, different textbook name.
    "Using Intercept Form": {cw: "Factored-Form-QF-New2-W01", hw: "target-practice-Factored-Form-QF-New2-W01"},
    // Not present -- no cross-function-family (linear/exponential/quadratic) comparison lesson.
    "Comparing Linear, Exponential, and Quadratic Functions": null,
  },
  "Solving Quadratic Equations": {
    // Not present -- API's chapter is entirely about solving quadratics, no general
    // properties-of-radical-expressions lesson.
    "Properties of Radicals": null,
    // Not present -- no graphing-based solving method lesson in this chapter.
    "Solving Quadratic Equations by Graphing": null,
    // This API lesson has ONLY a PRACTICE sheet in the pull -- no LEARNING/CW sheet at
    // all, the reverse of the usual gap. cw is null for that reason, not a missed lookup.
    "Solving Quadratic Equations Using Square Roots": {cw: null, hw: "Solve-Quadratic-Equations-New-W02"},
    "Solving Quadratic Equations by Completing the Square": {cw: "Solve-Quadratic-Equations-W03", hw: "target-practice-Solve-Quadratic-Equations-W03"},
    "Solving Quadratic Equations Using the Quadratic Formula": {cw: "Solve-Quadratic-Equations-W04", hw: "target-practice-Solve-Quadratic-Equations-W04"},
    // Not present -- API's remaining lesson here is real-life modeling, not nonlinear systems.
    "Solving Nonlinear Systems of Equations": null,
  },
  "Radical Functions and Equations": {
    // API's lesson bundles Identification/Transformation with a separate Domain & Range sheet.
    "Graphing Square Root Functions": {
      cw: ["Radical-Functions-And-Equations-W01", "Radical-Functions-And-Equations-W02"],
      hw: ["target-practice-Radical-Functions-And-Equations-W01", "target-practice-Radical-Functions-And-Equations-W02"],
    },
    "Graphing Cube Root Functions": {cw: "Radical-Functions-And-Equations-W03", hw: "target-practice-Radical-Functions-And-Equations-W03"},
    // Our lesson doesn't distinguish square-root vs. cube-root equations; API keeps them
    // as two separate lessons -- listing both.
    "Solving Radical Equations": {
      cw: ["Square-Root-Equations-USCC-W01", "Cube-Root-Equations-USCC-W01"],
      hw: ["target-practice-Square-Root-Equations-USCC-W01", "target-practice-Cube-Root-Equations-USCC-W01"],
    },
    // Same lesson name repeats from "Basics of Functions" in our data -- reusing that same API ref.
    "Inverse of a Function": {cw: "Inverse-of-Function-V3-W06", hw: "target-practice-Basics-Of-Functions-USCC-G9-W04"},
  },
  "Data Analysis and Displays": {
    // API keeps Center and Variation as two separate lessons; ours combines them --
    // listing both (each lesson's own primary sheet, both bundle more sheets besides).
    "Measures of Center and Variation": {
      cw: ["Measures-of-Center-USCC-W01", "Measures-of-Variation-USCC-W01"],
      hw: ["target-practice-Measures-of-Center-USCC-W01", "target-practice-Measures-of-Variation-USCC-W01"],
    },
    // 3rd sheet of API's "Draw and Interpret Plots" lesson (the other 2 sheets in that
    // lesson are Dot Plots and Stem-and-Leaf Plots -- different plot types, not used here).
    "Box-and-Whisker Plots": {cw: "Box-and-Whisker-Plots-USCC-W01", hw: "target-practice-Box-and-Whisker-Plots-USCC-W01"},
    // Not present as its own topic -- no lesson specifically about distribution shape
    // (symmetric/skewed/uniform).
    "Shapes of Distributions": null,
    // API's lesson bundles Marginal/Relative Frequencies with Data Association as two sheets.
    "Two-Way Tables": {
      cw: ["Two-Way-Tables-USCC-W01", "Two-Way-Tables-USCC-W02"],
      hw: ["target-practice-Two-Way-Tables-USCC-W01", "target-practice-Two-Way-Tables-USCC-W02"],
    },
    "Choosing a Data Display": {cw: "Data-Display-USCC-W01", hw: "target-practice-Data-Display-USCC-W01"},
  },
};

// Chapters/lessons that exist in the live local-dev API pull
// (program_code=USCC.ALGBRA1, 17 chapters / 89 lessons / 344 refs) but have
// NO corresponding chapter/lesson in our existing highschool-data.js Algebra
// 1 course at all.
//
// Unlike Geometry/Algebra 2/AP Precalculus (each of which had several WHOLE
// chapters -- Sets, Probability, Conic Sections, Basics of Matrices, etc --
// with zero overlap with our data), every single one of this pull's 17
// chapters has at least one lesson used above. The real gaps here are
// partial/lesson-level, listed below for the most notable ones.
const algebra1ExtraChaptersInApiNotInOurs = [
  {chapter: "Quadratic Functions", lessonCount: 5, note: "5 of this chapter's 7 lessons are unused above: 'Model Real-Life Situations using Quadratic Functions', 'Translate the Graphs of Quadratic Functions', 'Scale the Graphs of Quadratic Functions', 'Combine Transformations of Quadratic Functions', 'Find the Inverse of a Quadratic Function'. Our own 'Quadratic Functions' chapter has no lessons on quadratic-function transformations, modeling, or inverses at all -- this is the single biggest lesson-level gap found in this pull."},
  {chapter: "Polynomial Expressions", lessonCount: 3, note: "3 of 7 lessons unused: 'Introduction to Algebraic Expressions', 'Properties of Algebraic Expressions' (both pre-polynomial groundwork), and 'Modeling with Polynomial Expressions' (no modeling lesson exists in either of our two polynomial-related chapters)."},
  {chapter: "Quadratic Equations", lessonCount: 2, note: "'Introduction to Quadratic Equations' (basics/key-features intro) and 'Model using Quadratic Equations' (real-life modeling) are unused -- neither has an equivalent in our 'Solving Quadratic Equations' chapter."},
  {chapter: "Statistics", lessonCount: 1, note: "'Analyse and Compare Data' (comparing dot plots/stem-leaf/box-whisker/histograms as a distinct skill) is entirely unused; the 'Comparing Correlation and Causation' sheet within the Scatter Plots lesson is also unused (its Linear-Regression and Correlation-Coefficient sheets were used for our 'Linear Functions' chapter instead)."},
  {chapter: "Simple Equations and Formulas / Linear Inequalities (in one and two variables)", lessonCount: 3, note: "Three separate 'modeling/application' lessons are unused across three different chapters: 'Application of Linear Equations', 'Modelling using Linear Inequalities', and 'Model Real-Life Situtations using Linear Inequalities in Two Variables'. None of our corresponding chapters have a dedicated word-problem/application lesson to point them at."},
];
