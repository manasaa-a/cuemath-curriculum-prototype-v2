// Learnosity CW/HW references for AP Calculus AB, matched against the
// EXISTING chapter/lesson structure in highschool-data.js's `ap-calculus-ab`
// course entry (kept as-is). Source: GET
// /api/v4/leap/cue-chapters/?program_code=USCC.CLCULS, pulled from LOCAL DEV
// (artifact titled "AP Calculus"), 2026-07-09. 10 chapters / 52 lessons / 130
// refs in the raw pull.
//
// Structure: refs["<our chapter name>"]["<our lesson name>"] = {cw, hw} | null
// Same array convention as the other 3 files (Geometry/Algebra 2/AP
// Precalculus) for lessons genuinely split across multiple API sheets.
//
// IMPORTANT, per the heads-up this course was flagged with: roughly the back
// half of this pull (from "Analysis of Functions Using Derivatives" through
// "Differential Equations", plus most of "Derivatives") is CBSE-origin
// content that was ported over with LEARNING sheets only -- NO
// PRACTICE/TARGET_PRACTICE sheet exists at all for a large fraction of these
// lessons. Every hw: null below in those chapters means exactly that (nothing
// to look up, not a missed match) -- never fabricated.
//
// This pull's first 5 chapters (Limits, Continuity, Derivatives, Derivatives
// of Composite/Implicit/Inverse Functions, Applications of Differentiation)
// line up almost perfectly 1:1 with ours by name and order -- by far the
// cleanest match of the 4 HS courses done so far.
const apCalculusAbLearnosityRefs = {
  "Limits": {
    // Exact 1:1:1:1:1:1:1:1:1 match, same order, near-verbatim names throughout this chapter.
    "Graphical estimation of limits": {cw: "Introduction-to-Limits-USCC-Calc-V3-W01", hw: "US-Calculus-Introduction-to-Limits-V3-TP01"},
    "One-sided and infinite limits": {cw: "Introduction-to-Limits-USCC-Calc-V3-W02-New", hw: "Introduction-to-Limits-USCC-Calc-V3-TP02"},
    "Numerical estimation and oscillating behavior": {cw: "Introduction-to-Limits-USCC-Calc-V3-W03-New", hw: "Introduction-to-Limits-USCC-Calc-V3-TP03"},
    "Limits by Direct Substitution and Limit Laws": {cw: "Analytic-evaluation-limits-USCC-Calc-V3-W01-New", hw: "Analytic-evaluation-limits-USCC-Calc-V3-TP01"},
    "Evaluating Limits Algebraically": {cw: "Analytic-evaluation-limits-USCC-Calc-V3-W02-New", hw: "Analytic-evaluation-limits-USCC-Calc-V3-TP02"},
    "Trigonometric limits and strategies for finding limits": {cw: "Analytic-evaluation-limits-USCC-Calc-V3-W04", hw: "Analytic-evaluation-limits-USCC-Calc-V3-TP-04"},
    "Limits of piecewise and composite functions": {cw: "Analytic-evaluation-limits-USCC-Calc-V3-W03", hw: "Analytic-evaluation-limits-USCC-Calc-V3-TP03"},
    "Squeeze theorem": {cw: "Squeeze-Theorem-USCC-Calc-V3-W01", hw: "Squeeze-Theorem-USCC-Calc-V3-TP01"},
    "Limits at infinity": {cw: "Limits-at-Infinity-USCC-Calculus-V3-W01", hw: "Limits-at-Infinity-USCC-Calculus-V3-TP01"},
  },
  "Continuity": {
    // Exact 1:1:1:1 chapter+lesson-name match. None of the 4 lessons in this API chapter
    // have a PRACTICE/TARGET_PRACTICE sheet at all -- hw: null throughout, not a missing lookup.
    "Introduction to Continuity": {cw: "Introduction-to-Continuity-US-Calc-V3-01", hw: null},
    "Analytically Determining Continuity": {cw: "Determining-Continuity-Analytically-US-Calc-V3-01", hw: null},
    "Properties of Continuous Functions": {cw: "Properties-of-Continuous-Functions-US-Calc-V3-01", hw: null},
    "Intermediate Value Theorem": {cw: "Introduction-to-IVT-US-Calc-V3-01", hw: null},
  },
  "Basics of Differentiation and Derivatives": {
    // NB our own data repeats "Basics of Derivatives" twice in this chapter's lesson
    // array (an existing quirk in highschool-data.js, not something introduced here) --
    // since this is a name-keyed object, one entry necessarily covers both occurrences.
    "Basics of Derivatives": {cw: "Basics-of-Derivatives-CBSE-G11-W01", hw: "Basics-of-Derivatives-CBSE-G11-H01"},
    "First Principle Definition of Derivatives": {cw: "First-Principle-of-Derivatives-CBSE-G11-W01", hw: "First-Principle-of-Derivatives-CBSE-G11-H01"},
    "Differentiability of a Function at a Point": {cw: "Differentiability-W01", hw: "Differentiability-H01"},
    "Continuity and Differentiability": {cw: "Continuity-and-Differentiability-CBSE-G12-W01", hw: "Continuity-and-Differentiability-CBSE-G12-H01"},
    // API's "Algebra Laws of Derivatives" lesson bundles 2 LEARNING sheets under one
    // shared PRACTICE ref (not one PRACTICE sheet per worksheet).
    "Laws of Derivatives": {cw: ["Algebra-of-Derivatives-CBSE-G11-W01", "Algebra-of-Derivatives-CBSE-G11-W02"], hw: "Algebra-of-Derivatives-CBSE-G11-H01"},
    // API's "Derivatives of Standard Functions" lesson has 2 LEARNING sheets (trig, then
    // exp/log) and NO other sheet type at all -- hw: null for both of ours below.
    "Trigonometric Derivatives": {cw: "Derivatives-of-Trigonometric-Functions-CBSE-G11-W01", hw: null},
    "Derivatives of Natural Exponential and Logarithmic Functions": {cw: "Derivatives-of-ex-and-logx-V2-W01", hw: null},
  },
  "Derivatives of Composite, Implicit, and Inverse Functions": {
    // Exact chapter-name match. API's "The Chain Rule" lesson bundles 3 LEARNING sheets
    // that map 1:1 onto our first 3 lessons below, sharing one lesson-level PRACTICE ref
    // (not per-sheet).
    "Differentiate Composite Functions": {cw: "Chain-Rule-of-Derivatives-V2-W01", hw: "The Chain Rule H01"},
    "Differentiating Exponential and Logarithmic Functions with Different Bases": {cw: "Derivatives-of-Exponential-and-Logarithmic-Functions-W01", hw: "The Chain Rule H01"},
    "Derivatives of Inverse Functions": {cw: "Derivative-of-Inverse-Functions-W01", hw: "The Chain Rule H01"},
    // API's "Implicit and Logarithmic Differentiation" lesson bundles 2 sheets sharing
    // one lesson-level PRACTICE ref, mapping 1:1 onto our next 2 lessons.
    "Differentiating Implicitly": {cw: "Implicit-Differentiation-W01", hw: "Implicit and Logarithmic Differentiation H01"},
    "Finding Derivatives using Logarithmic Manipulation": {cw: "Logarithmic-Differentiation-W01", hw: "Implicit and Logarithmic Differentiation H01"},
    "Differentiating Inverse Trigonometric Functions": {cw: "Derivatives-of-Inverse-Trigonometric-Functions-W01", hw: "Inverse Trigonometric Function Derivatives H01"},
    "Finding Higher Order Derivatives": {cw: "Higher-Order-Derivatives-USCC-W01", hw: "Higher Order Derivatives H01"},
  },
  "Applications of Differentiation": {
    "Interpreting Derivatives in a Context": {cw: "Applications-of-Derivatives-W01", hw: "Derivatives in Applied Contexts H01"},
    "Related Rates Problems": {cw: "Applications-of-Derivatives-W02", hw: "Rate of Change of Quantities H01"},
    // API's "Local Linearity" lesson bundles 2 LEARNING sheets (Tangents/Normals, then
    // Linear Approximations) sharing one lesson-level PRACTICE ref.
    "Tangents and Normals": {cw: "Tangents-and-Normal-to-Curves-W01", hw: "Local Linearity H01"},
    "Linear Approximations": {cw: "Linear-Approximation-W01", hw: "Local Linearity H01"},
    // Not present anywhere in the pull -- no lesson on indeterminate forms / L'Hospital's Rule.
    "L’Hospital’s Rule": null,
  },
  "Analysis of Functions Using Derivatives": {
    // Exact chapter-name match. Every lesson in this entire API chapter is LEARNING-only
    // -- no PRACTICE/TARGET_PRACTICE/ASSESSMENT sheet of any kind -- so hw: null throughout.
    // "Absolute and Local Extrema" bundles 3 sheets covering both graphical and algebraic extrema-finding.
    "Finding Extrema": {
      cw: ["Finding-Extrema-Graphically-G12-CAL-W01", "Finding-Extrema-Graphically-G12-CAL-W02", "Finding-Extrema-Algebraically-G12-CAL-W01"],
      hw: null,
    },
    "Extreme Value and Mean Value Theorems": {cw: ["Finding-Extrema-Algebraically-G12-CAL-W02", "Mean-Value-Theorem-G12-CAL-W01"], hw: null},
    "First Derivative Test": {cw: "First-Derivative-Test-G12-CAL-W01", hw: null},
    // 2nd and 3rd sheets of the same API lesson node as First Derivative Test above.
    "Concavity and Second Derivative Test": {cw: ["Concavity-and-Inflection-Points-USCC-W01", "Concavity-and-Second-Derivative-Test-USCC-W02"], hw: null},
    "Graphing Functions Using Calculus": {cw: "Graphing-Functions-Using-Calculus-USCC-W01", hw: null},
    "Optimization Problems": {cw: "Solving-Optimization-Problems-W01", hw: null},
  },
  "Basics of Integral Calculus": {
    // Exact chapter-name match. Every lesson here is also LEARNING-only, no
    // PRACTICE/TP anywhere in this chapter -- hw: null throughout.
    "The Area Problem": {cw: "The-Area-Problem-W01-New", hw: null},
    "The Intuition Behind Net Change": {cw: "The-Net-Change-Intuition-W01-New", hw: null},
    "Riemann Sums": {cw: "Riemann-Sums-USCC-Calculus-W01-New", hw: null},
    // NB "Definite Integrals (Notation and interpretation)" repeats twice in our own
    // chapter's lesson array (existing quirk in highschool-data.js) -- one entry covers both.
    "Definite Integrals (Notation and interpretation)": {cw: "Definite-Integrals-as-Riemann-Sums-USCC-Calc-W01-New", hw: null},
    "Properties of Definite Integrals": {cw: "Definite-Integrals-Properties-USCC-Calc-W01-New", hw: null},
    "Using Antiderivatives to Evaluate Definite Integrals": {cw: "Definite-Integrals-Antiderivatives-USCC-Calc-W01-New", hw: null},
    "Indefinite Integrals (Notation and interpretation)": {cw: "Indefinite-Integral-USCC-Calculus-W01-New", hw: null},
    // API's own chapter has a matching "Method Of Substitution" lesson (single intro
    // sheet); a SEPARATE chapter ("Finding Antiderivatives and Definite Integrals", not
    // otherwise used -- see the extra-chapters note below) has a deeper 3-sheet
    // "Integration By Substitution" lesson on the exact same technique -- listing both
    // since they're genuinely the same skill at two depths, not picking one arbitrarily.
    "Method of Substitution": {
      cw: ["Integrating-using-Substitution-USCC-Calc-W01-New", "Integration-By-Substitution-W01", "Integration-By-Substitution-W02", "Integration-By-Substitution-W03"],
      hw: null,
    },
    "Fundamental Theorem of Calculus": {cw: "Fundamental-Theorem-of-Calculus-USCC-Calc-W01", hw: null},
  },
  "Differential Equations": {
    // Exact chapter-name match, but the API's own lesson-level breakdown here uses a
    // completely different framing from ours (CBSE-style: classify order/degree,
    // general-vs-particular solutions, formulate a DE from its solution, solve
    // separable/homogeneous/linear DEs) vs. ours (AP-style: modeling, slope fields,
    // separation of variables, exponential models). Only the separation-of-variables
    // technique itself lines up cleanly -- everything else is left null rather than
    // force-matching a differently-framed lesson.
    "Modeling Situations with Differential Equations": null,
    "Verifying Solutions for Differential Equations": null,
    "Sketching Slope Fields": null,
    "Reasoning Using Slope Fields": null,
    "Finding General Solutions Using Separation of Variables": {cw: "Differential-Equation-004-CBSE-Grade12", hw: null},
    // Same underlying API lesson as above (applying an initial condition to the general
    // solution found via separation of variables is the same technique) -- reused, flagged.
    "Finding Particular Solutions Using Initial Conditions and Separation of Variables": {cw: "Differential-Equation-004-CBSE-Grade12", hw: null},
    // Not present -- no exponential-growth/decay-as-a-differential-equation lesson here.
    "Exponential Models with Differential Equations": null,
  },
  "Applications of Integration": {
    // API's chapter is literally named "Applications of Integration - 1" -- the "- 1"
    // suggests a "- 2" chapter (which would plausibly cover volumes of revolution) exists
    // but wasn't part of this pull. First 5 of our 6 lessons match verbatim, in order.
    "Finding Area Under Simple Curves-1": {cw: "Area-under-simple-curves-W01", hw: null},
    "Finding Area Under Simple Curves-2": {cw: "Area-under-simple-curves-W02", hw: null},
    "Finding Area Under Simple Curves-3": {cw: "Area-under-simple-curves-W03", hw: null},
    "Finding Area Between Two Curves-1": {cw: "Area-between-two-curves-W01", hw: null},
    "Finding Area Between Two Curves-2": {cw: "Area-between-two-curves-W02", hw: null},
    // Not present in this pull -- see the "- 1"/"- 2" chapter-naming note above.
    "Finding Volumes of Solids of Revolution": null,
  },
};

// Chapters/lessons that exist in the live API pull (program_code=USCC.CLCULS,
// local dev, 10 chapters / 52 lessons / 130 refs) but have NO corresponding
// chapter/lesson in our existing highschool-data.js ap-calculus-ab course at
// all. Every other one of the API's 10 chapters has at least one lesson used
// above -- this is the only substantially-unused one.
const apCalculusAbExtraChaptersInApiNotInOurs = [
  {chapter: "Finding Antiderivatives and Definite Integrals", lessonCount: 6, note: "6 of this chapter's 7 lessons are unused above (its 'Integration By Substitution' lesson was folded into our 'Method of Substitution' -- see that entry's comment). Unused: 'Antiderivatives' (3 LEARNING sheets, no HW sheet at all -- the pattern flagged going into this pull), 'Algebra and Properties of Indefinite Integral', 'Integration by Simple Rearrangements', 'Integrate Using the Method of Partial Fractions', 'Integration by Parts', and a second, more computational 'Definite Integration' lesson. This is CBSE-style integration-technique depth (partial fractions, integration by parts, algebraic rearrangement) beyond what our AB-level 'Basics of Integral Calculus' chapter covers."},
];
