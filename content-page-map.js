// Content-page -> curriculum-lesson mapping for the lesson page's "Read" tab.
//
// Source of pages: traffic-pages-deduped.tsv (114 unique live, traffic-driven
// content/concept-explainer pages -- the complete, closed set; everything
// else on the old content library is dead and must not be referenced).
//
// Source of lessons: curriculum-data.js (csvGradeData, grades K-8) and
// highschool-data.js (highSchoolData, 5 HS courses) -- every chapterName/
// lessonName below is copied verbatim from those files and was validated
// programmatically against them (exact string match, not fuzzy) before this
// file was written.
//
// Matching is by real subject-matter relevance, not keyword string-matching.
// Cardinality is intentionally NOT 1:1 -- a page can map to zero, one, or
// several lessons across grades/courses if each is genuinely relevant.
// `matches: []` means no lesson in K-8 or HS actually teaches this topic
// (see the mapping report for why, per page) -- these are real gaps, not
// omissions, and should NOT be force-matched later.
//
// NOT YET WIRED into maths-grade-3-lesson.html's Read tab -- that's a
// separate follow-up once this mapping itself has been reviewed.
//
// Each entry: {url, keywords, traffic, matches: [{level: 'K8'|'HS', grade or
// course, chapterName, lessonName}, ...]}
const contentPageMap = [
  {
    "url": "https://www.cuemath.com/numbers/prime-numbers/",
    "keywords": "prime numbers",
    "traffic": 85196,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Factors, Multiples, and Primes",
        "lessonName": "Understand Prime and Composite Numbers"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Factors, Multiples and Primes",
        "lessonName": "Understand Prime Numbers"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Factors, Multiples and Primes",
        "lessonName": "Understand Prime Factorization"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Factors and Multiples",
        "lessonName": "Find the Prime Factorization of Numbers"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/exponent-rules/",
    "keywords": "exponent rules",
    "traffic": 31650,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Exponents",
        "lessonName": "Basics of Exponents"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Exponents",
        "lessonName": "Product and Quotient of Powers Property"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Exponents",
        "lessonName": "Zero and Negative Exponents"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Exponential Functions and Sequences",
        "lessonName": "Properties of Exponents"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/horizontal-asymptote/",
    "keywords": "horizontal asymptote",
    "traffic": 24696,
    "matches": [
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Limits",
        "lessonName": "Limits at infinity"
      },
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Rational Functions",
        "lessonName": "End Behavior of Rational Functions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/corresponding-angles/",
    "keywords": "corresponding angles",
    "traffic": 19221,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Transversal and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Parallel Lines, Transversals, and Angle Pairs"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Lines and Angles",
        "lessonName": "Identify Different Angle Relationships"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Equations and Applications of Parallel and Perpendicular Lines",
        "lessonName": "Parallel Lines and Transversals"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/roman-numerals-1-to-100/",
    "keywords": "roman numerals 1-100; angka romawi",
    "traffic": 17743,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/geometry/alternate-interior-angles/",
    "keywords": "alternate interior angles",
    "traffic": 13720,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Transversal and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Parallel Lines, Transversals, and Angle Pairs"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Lines and Angles",
        "lessonName": "Identify Different Angle Relationships"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Equations and Applications of Parallel and Perpendicular Lines",
        "lessonName": "Parallel Lines and Transversals"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/vertical-asymptote/",
    "keywords": "vertical asymptote",
    "traffic": 12407,
    "matches": [
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Rational Functions",
        "lessonName": "Vertical Asymptotes and Holes"
      },
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Limits",
        "lessonName": "One-sided and infinite limits"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/learn/fun-maths-questions/",
    "keywords": "hard math problems; hard math problems",
    "traffic": 12010,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/questions/how-many-seconds-are-in-a-24-hour-day/",
    "keywords": "seconds in a day",
    "traffic": 11239,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Time",
        "lessonName": "Understand Seconds as a Unit of Time"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Time",
        "lessonName": "Convert Units of Time"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/quadrant/",
    "keywords": "quadrants on a graph",
    "traffic": 11197,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Coordinate Geometry",
        "lessonName": "Identify Points in Different Quadrants"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Coordinate Geometry",
        "lessonName": "Plot Points in All Four Quadrants"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/x-and-y-axis/",
    "keywords": "where is the x axis on a graph",
    "traffic": 10813,
    "matches": [
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Coordinate Geometry",
        "lessonName": "Identify and Plot Points in the Coordinate Plane"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Coordinate Geometry",
        "lessonName": "Identify Points in Different Quadrants"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/types-of-triangle/",
    "keywords": "types of triangles",
    "traffic": 9069,
    "matches": [
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Geometry",
        "lessonName": "Classify Triangles Based on Their Angles"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Geometry",
        "lessonName": "Classify Triangles Based on Their Sides"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Classification of Triangles by Angles"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Congruent Triangles",
        "lessonName": "Equilateral and Isosceles Triangles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/vertex-formula/",
    "keywords": "vertex formula",
    "traffic": 8882,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Quadratic Functions",
        "lessonName": "Using Intercept Form"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Quadratic Functions",
        "lessonName": "Characteristics of Quadratic Functions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/y-mx-b/",
    "keywords": "y=mx+b",
    "traffic": 8412,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Graphing Equations in Slope-Intercept Form"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Writing Equations in Slope-Intercept Form"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Graphing Linear Equations in Slope-Intercept Form"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/180-degrees-c-equals-what-in-f/",
    "keywords": "180 c to f",
    "traffic": 7875,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/questions/how-many-quarts-are-in-a-gallon/",
    "keywords": "how many quarts in a gallon",
    "traffic": 7828,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Fill it Up",
        "lessonName": "Measure Capacities using Liters, Milliliters, Cups, Pints, and Quarts"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Measurement",
        "lessonName": "Convert Metric and Customary Capacity Units"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/greater-than-or-equal-to/",
    "keywords": "greater than or equal to",
    "traffic": 7346,
    "matches": [
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Inequalities",
        "lessonName": "Understand Inequations and Find their Solutions"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Solving Inequalities in One Variable",
        "lessonName": "Writing and Graphing Inequalities"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/trigonometry/unit-circle-with-tangent/",
    "keywords": "unit circle with tangent",
    "traffic": 7133,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Trigonometric Ratios and Functions",
        "lessonName": "Trigonometric Functions of Any Angle"
      },
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Trigonometric Functions",
        "lessonName": "The Tangent Function"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry-formulas/",
    "keywords": "geometry formulas; geometry formulas",
    "traffic": 7012,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Mensuration",
        "lessonName": "Find Area of Squares and Rectangles"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circumference Area and Volume",
        "lessonName": "Areas of Polygons"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circumference Area and Volume",
        "lessonName": "Volumes of Prisms and Cylinders"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/linear-pair-of-angles/",
    "keywords": "linear pair",
    "traffic": 6951,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Intersecting Lines and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Lines and Angles",
        "lessonName": "Identify Different Angle Relationships"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Basics of Geometry",
        "lessonName": "Describing Pairs of Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/half-angle-formula/",
    "keywords": "half angle formula",
    "traffic": 6868,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Trigonometric Ratios and Functions",
        "lessonName": "Using Sum and Difference Formulas"
      },
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Analytic Trigonometry",
        "lessonName": "Sum and Difference, Multiple Angle Identities"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/how-many-weeks-in-a-month/",
    "keywords": "how many weeks are in a month",
    "traffic": 6315,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Time",
        "lessonName": "Convert Units of Time"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/multiplication-tables/",
    "keywords": "times table",
    "traffic": 6209,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Multiplication Magic",
        "lessonName": "Form Multiplication Tables of 2, 5, 10"
      },
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Multiplication Magic",
        "lessonName": "Form Multiplication Tables of 3, 4"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 2, 5, and 10"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 3 and 4"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 6 and 8"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 7 and 9"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/am-pm/",
    "keywords": "am pm",
    "traffic": 5941,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Clock a Doodle Doo!",
        "lessonName": "Time to Five Minutes and A.M./P.M."
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/horizontal-line/",
    "keywords": "horizontal line",
    "traffic": 5744,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Graphing Equations in Standard Form"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Graphing Linear Equations in Standard Form"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/commercial-math/constant-of-proportionality/",
    "keywords": "constant of proportionality",
    "traffic": 5713,
    "matches": [
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Ratio and Proportional Relationships",
        "lessonName": "Identify Proportional Relationships"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Ratio and Proportional Relationships",
        "lessonName": "Write and Solve Proportions"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Graphing Proportional Relationships"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/multiplication-tables/tables-1-to-20/",
    "keywords": "multiplication chart 1-20",
    "traffic": 5652,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Multiplication Magic",
        "lessonName": "Form Multiplication Tables of 2, 5, 10"
      },
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Multiplication Magic",
        "lessonName": "Form Multiplication Tables of 3, 4"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 2, 5, and 10"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 3 and 4"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 6 and 8"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 7 and 9"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-30-degrees-celsius-in-fahrenheit/",
    "keywords": "30ï¿½ celsius to fahrenheit",
    "traffic": 5561,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/algebra/axis-of-symmetry/",
    "keywords": "axis of symmetry",
    "traffic": 5521,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Quadratic Functions",
        "lessonName": "Graphing f (x) = ax2 + bx + c"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Quadratic Functions",
        "lessonName": "Characteristics of Quadratic Functions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/rate-of-change-formula/",
    "keywords": "rate of change formula",
    "traffic": 5389,
    "matches": [
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Functions: Rate of Change",
        "lessonName": "Rates of Change"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Slope of a Line"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/adjacent-angles/",
    "keywords": "adjacent angles",
    "traffic": 5320,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Intersecting Lines and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Addition and Subtraction of Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/length-width-height/",
    "keywords": "length width height",
    "traffic": 5260,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "How Long Is It?",
        "lessonName": "Measuring Lengths using Inches, Feet, and Yards"
      },
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Measurement of Volume",
        "lessonName": "Measurement of Volume in Compound Units and Estimation"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/month/",
    "keywords": "all months in order",
    "traffic": 5219,
    "matches": [
      {
        "level": "K8",
        "grade": "K",
        "chapterName": "Time",
        "lessonName": "Identify Days of a Week and Months of a Year"
      },
      {
        "level": "K8",
        "grade": 1,
        "chapterName": "Tick Tock",
        "lessonName": "Understand Days of the Week and Months of the Year"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/arc-length/",
    "keywords": "arc length formula",
    "traffic": 5190,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circumference Area and Volume",
        "lessonName": "Circumference and Arc Length"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/continuous-compounding-formula/",
    "keywords": "continuous compound interest formula",
    "traffic": 5052,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Exponential and Logarithmic Functions",
        "lessonName": "The Natural Base e"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/exponential-equations/",
    "keywords": "exponential equation",
    "traffic": 5049,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Exponents",
        "lessonName": "Exponential Growth and Decay"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Exponential Functions and Sequences",
        "lessonName": "Solving Exponential Equations"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Exponential and Logarithmic Functions",
        "lessonName": "Solving Exponential and Logarithmic Equations"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-40-degrees-celsius-in-fahrenheit/",
    "keywords": "40c to f",
    "traffic": 4986,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/trigonometry/cos-2x/",
    "keywords": "cos2x identity",
    "traffic": 4895,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Trigonometric Ratios and Functions",
        "lessonName": "Using Sum and Difference Formulas"
      },
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Analytic Trigonometry",
        "lessonName": "Sum and Difference, Multiple Angle Identities"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-0.3-as-a-fraction/",
    "keywords": "0.3 as a fraction",
    "traffic": 4855,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Convert Decimals to Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/reflexive-property/",
    "keywords": "reflexive property of congruence",
    "traffic": 4757,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Reasoning and Proofs",
        "lessonName": "Algebraic Reasoning"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Reasoning and Proofs",
        "lessonName": "Proving Statements about Segments and Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/rectangular-prism/",
    "keywords": "rectangular prism",
    "traffic": 4726,
    "matches": [
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Measurement of Volume",
        "lessonName": "Measurement of Volume in Compound Units and Estimation"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circumference Area and Volume",
        "lessonName": "Three-Dimensional Figures"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circumference Area and Volume",
        "lessonName": "Volumes of Prisms and Cylinders"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/transformations/",
    "keywords": "transformations",
    "traffic": 4604,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Transformations",
        "lessonName": "Translations"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Transformations",
        "lessonName": "Dilations"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Transformations",
        "lessonName": "Translations"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Transformations",
        "lessonName": "Dilations"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/standard-form-to-vertex-form/",
    "keywords": "standard form to vertex form",
    "traffic": 4594,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Quadratic Functions",
        "lessonName": "Graphing f (x) = a(x − h)2 + k"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Quadratic Functions",
        "lessonName": "Transformations of Quadratic Functions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-3-8-as-a-decimal/",
    "keywords": "3/8 as a decimal",
    "traffic": 4580,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/alternate-exterior-angles/",
    "keywords": "alternate exterior angles",
    "traffic": 4548,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Transversal and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Parallel Lines, Transversals, and Angle Pairs"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Lines and Angles",
        "lessonName": "Identify Different Angle Relationships"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Equations and Applications of Parallel and Perpendicular Lines",
        "lessonName": "Parallel Lines and Transversals"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculators/weeks-to-months-calculator/",
    "keywords": "how long is 7 weeks",
    "traffic": 4512,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Time",
        "lessonName": "Convert Units of Time"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/slope-formula/",
    "keywords": "slope formula",
    "traffic": 4460,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Slope of a Line"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Writing Equations in Slope-Intercept Form"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/composite-numbers/",
    "keywords": "composite number",
    "traffic": 4430,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Factors, Multiples, and Primes",
        "lessonName": "Understand Prime and Composite Numbers"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/radius/",
    "keywords": "radius of a circle",
    "traffic": 4421,
    "matches": [
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Circles",
        "lessonName": "Solve Problems on the Circumference of Circles"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Circles",
        "lessonName": "Solve Problems on the Area of Circles"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circles",
        "lessonName": "Lines and Segments That Intersect Circles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-875-as-a-fraction/",
    "keywords": ".875 as a fraction",
    "traffic": 4397,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Convert Decimals to Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-0-625-as-a-fraction/",
    "keywords": ".625 as a fraction",
    "traffic": 4345,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Convert Decimals to Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/cpctc/",
    "keywords": "cpctc",
    "traffic": 4293,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Congruent Triangles",
        "lessonName": "Using Congruent Triangles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/derivative-of-ln-x/",
    "keywords": "derivative of lnx",
    "traffic": 4261,
    "matches": [
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Basics of Differentiation and Derivatives",
        "lessonName": "Derivatives of Natural Exponential and Logarithmic Functions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/linear-equations/",
    "keywords": "linear equations",
    "traffic": 4256,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Linear Equations",
        "lessonName": "Understand and Write Linear Equations in One Variable"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Equations",
        "lessonName": "Solve One-Step Linear Equations in One Variable"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Solving Linear Equations",
        "lessonName": "Solving Multi-Step Equations"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/integers/",
    "keywords": "integers",
    "traffic": 4251,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Integers",
        "lessonName": "Understand Integers and Plot them on a Number Line"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/vertical-angles/",
    "keywords": "vertical angles",
    "traffic": 4245,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Intersecting Lines and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Lines and Angles",
        "lessonName": "Identify Different Angle Relationships"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Basics of Geometry",
        "lessonName": "Describing Pairs of Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/supplementary-angles/",
    "keywords": "supplementary angles",
    "traffic": 4215,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Complementary and Supplementary Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-125-percent-as-a-fraction/",
    "keywords": ".125 as a fraction",
    "traffic": 4194,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Percents",
        "lessonName": "Express Percents as Fractions and Ratios"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Percentages and Unitary Method",
        "lessonName": "Understand The Relationship Between Fractions and Percentages"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/less-than-or-equal-to/",
    "keywords": "less than or equal to sign",
    "traffic": 4180,
    "matches": [
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Inequalities",
        "lessonName": "Understand Inequations and Find their Solutions"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Solving Inequalities in One Variable",
        "lessonName": "Writing and Graphing Inequalities"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/decimal-place-value/",
    "keywords": "decimal place value chart",
    "traffic": 4152,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Express Tenths as Decimals"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Decimals and their Addition and Subtraction",
        "lessonName": "Read and Write Decimals to Thousandths"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/properties-of-logarithms/",
    "keywords": "log properties",
    "traffic": 4129,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Exponential and Logarithmic Functions",
        "lessonName": "Properties of Logarithms"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/p-value-formula/",
    "keywords": "p-value formula",
    "traffic": 4120,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-2.5-as-a-fraction/",
    "keywords": "2.5 as a fraction",
    "traffic": 4060,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Convert Decimals to Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/area-of-a-sector/",
    "keywords": "area of a sector formula",
    "traffic": 4043,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circumference Area and Volume",
        "lessonName": "Areas of Circles and Sectors"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/less-than/",
    "keywords": "less than",
    "traffic": 4036,
    "matches": [
      {
        "level": "K8",
        "grade": "K",
        "chapterName": "Numbers to 20",
        "lessonName": "Compare Numbers to 20"
      },
      {
        "level": "K8",
        "grade": 1,
        "chapterName": "Joy of Numbers",
        "lessonName": "Compare Numbers up to 19"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Inequalities",
        "lessonName": "Understand Inequations and Find their Solutions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/complementary-angles/",
    "keywords": "complementary angles",
    "traffic": 4002,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Complementary and Supplementary Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/factors-of-64/",
    "keywords": "factors of 64",
    "traffic": 3992,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Factors, Multiples, and Primes",
        "lessonName": "Understanding Factors"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Factors, Multiples and Primes",
        "lessonName": "Understand Factors and Multiples"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/angle-between-vectors/",
    "keywords": "angle between two vectors",
    "traffic": 3981,
    "matches": [
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Vectors and Matrices (Not Tested on the Exam)",
        "lessonName": "Dot Product of Vectors"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/perpendicular-bisectors/",
    "keywords": "perpendicular bisector",
    "traffic": 3949,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Relationships Within Triangles",
        "lessonName": "Perpendicular and Angle Bisectors"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/parallelograms/",
    "keywords": "what is a parallelogram",
    "traffic": 3903,
    "matches": [
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Geometry",
        "lessonName": "Compare Types of Parallelograms"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Geometry",
        "lessonName": "Classify Quadrilaterals Based on Their Properties"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Quadrilaterals and Other Polygons",
        "lessonName": "Properties of Parallelograms"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/standard-form-of-quadratic-equation/",
    "keywords": "standard form of a quadratic equation",
    "traffic": 3891,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Solving Quadratic Equations",
        "lessonName": "Solving Quadratic Equations by Graphing"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Quadratic Equations and Complex Numbers",
        "lessonName": "Solving Quadratic Equations"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/slope-of-perpendicular-lines/",
    "keywords": "perpendicular slope",
    "traffic": 3882,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Equations and Applications of Parallel and Perpendicular Lines",
        "lessonName": "Equations of Parallel and Perpendicular Lines"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Writing Equations of Parallel and Perpendicular Lines"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/derivative-of-sec-x/",
    "keywords": "derivative of secx",
    "traffic": 3859,
    "matches": [
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Basics of Differentiation and Derivatives",
        "lessonName": "Trigonometric Derivatives"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/area-of-triangle/",
    "keywords": "",
    "traffic": 3844,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Area of 2D Shapes",
        "lessonName": "Find the Area of Triangles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-1-8-as-a-decimal/",
    "keywords": "1/8 as a decimal",
    "traffic": 3815,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/arithmetic-sequence-formula/",
    "keywords": "arithmetic sequence formula",
    "traffic": 3798,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Arithmetic Sequences"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Sequences and Series",
        "lessonName": "Analyzing Arithmetic Sequences and Series"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/similar-triangles/",
    "keywords": "similar triangles",
    "traffic": 3792,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Angles and Triangles",
        "lessonName": "Similar Triangles"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Similarity",
        "lessonName": "Proving Triangle Similarity by AA"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometric-sequence-formulas/",
    "keywords": "geometric sequence formula",
    "traffic": 3753,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Exponential Functions and Sequences",
        "lessonName": "Geometric Sequences"
      },
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Sequences and Series",
        "lessonName": "Analyzing Geometric Sequences and Series"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/derivative-of-sin-2x/",
    "keywords": "derivative of sin^2x",
    "traffic": 3733,
    "matches": [
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Derivatives of Composite, Implicit, and Inverse Functions",
        "lessonName": "Differentiate Composite Functions"
      },
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Basics of Differentiation and Derivatives",
        "lessonName": "Trigonometric Derivatives"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/commercial-math/direct-variation/",
    "keywords": "direct variation",
    "traffic": 3675,
    "matches": [
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Ratio and Proportional Relationships",
        "lessonName": "Identify Proportional Relationships"
      },
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Graphing Proportional Relationships"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/multiplication-tables/6-times-table/",
    "keywords": "6 times table",
    "traffic": 3612,
    "matches": [
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 6 and 8"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/linear-functions/",
    "keywords": "linear function",
    "traffic": 3604,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Graphing Linear Equations in Standard Form"
      },
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Functions: Rate of Change",
        "lessonName": "Rates of Change for Linear Functions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/calculus/second-derivative-test/",
    "keywords": "second derivative test",
    "traffic": 3565,
    "matches": [
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Analysis of Functions Using Derivatives",
        "lessonName": "Concavity and Second Derivative Test"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/congruent-angles/",
    "keywords": "congruent angles",
    "traffic": 3525,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Intersecting Lines and Pairs of Angles"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Reasoning and Proofs",
        "lessonName": "Proving Statements about Segments and Angles"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/ix-roman-numerals/",
    "keywords": "ix roman numeral",
    "traffic": 3516,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-20-degrees-celsius-in-fahrenheit/",
    "keywords": "what is 20ï¿½ c in fahrenheit",
    "traffic": 3511,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/calculus/derivative-of-tan-x/",
    "keywords": "derivative of tanx",
    "traffic": 3482,
    "matches": [
      {
        "level": "HS",
        "course": "ap-calculus-ab",
        "chapterName": "Basics of Differentiation and Derivatives",
        "lessonName": "Trigonometric Derivatives"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-34-in-decimal-form/",
    "keywords": "3/4 as a decimal",
    "traffic": 3476,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/slope/",
    "keywords": "slope",
    "traffic": 3439,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Slope of a Line"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Writing Equations in Slope-Intercept Form"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-0.375-as-a-fraction-in-simplest-form/",
    "keywords": ".375 as a fraction",
    "traffic": 3413,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Convert Decimals to Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/negative-exponents/",
    "keywords": "negative exponent rule",
    "traffic": 3395,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Exponents",
        "lessonName": "Zero and Negative Exponents"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Exponential Functions and Sequences",
        "lessonName": "Properties of Exponents"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/y-intercept/",
    "keywords": "y intercept",
    "traffic": 3392,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Graphing Equations in Slope-Intercept Form"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Writing Equations in Slope-Intercept Form"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/reference-angle/",
    "keywords": "reference angle",
    "traffic": 3374,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-2",
        "chapterName": "Trigonometric Ratios and Functions",
        "lessonName": "Angles and Radian Measure"
      },
      {
        "level": "HS",
        "course": "ap-precalculus",
        "chapterName": "Trigonometric Functions",
        "lessonName": "Angles and Radians"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/how-many-pints-in-a-quart/",
    "keywords": "how many pints in a quart",
    "traffic": 3363,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "Fill it Up",
        "lessonName": "Measure Capacities using Liters, Milliliters, Cups, Pints, and Quarts"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Measurement",
        "lessonName": "Convert Metric and Customary Capacity Units"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/iv-roman-numerals/",
    "keywords": "what is iv in roman numerals",
    "traffic": 3348,
    "matches": []
  },
  {
    "url": "https://www.cuemath.com/multiplication-tables/7-times-table/",
    "keywords": "7 times table",
    "traffic": 3334,
    "matches": [
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "Multiplication",
        "lessonName": "Build multiplication tables of 7 and 9"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/consecutive-interior-angles/",
    "keywords": "consecutive interior angles",
    "traffic": 3330,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Transversal and Pairs of Angles"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Parallel Lines, Transversals, and Angle Pairs"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Lines and Angles",
        "lessonName": "Identify Different Angle Relationships"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Equations and Applications of Parallel and Perpendicular Lines",
        "lessonName": "Parallel Lines and Transversals"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/parallel-lines/",
    "keywords": "parallel lines",
    "traffic": 3320,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Geometry",
        "lessonName": "Parallel Lines, Transversals, and Angle Pairs"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Equations and Applications of Parallel and Perpendicular Lines",
        "lessonName": "Parallel Lines and Transversals"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/undefined-slope/",
    "keywords": "undefined slope",
    "traffic": 3285,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Graphing and Writing Linear Equations",
        "lessonName": "Slope of a Line"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Linear Functions",
        "lessonName": "Writing Equations in Slope-Intercept Form"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/what-is-0.375-as-a-fraction/",
    "keywords": "0.375 as a fraction",
    "traffic": 3269,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Decimals",
        "lessonName": "Conversion of a Decimal into a Fraction and vice versa"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "An Introduction to Decimal Numbers",
        "lessonName": "Convert Decimals to Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/questions/how-many-inches-is-20-cm/",
    "keywords": "20cm to inches",
    "traffic": 3266,
    "matches": [
      {
        "level": "K8",
        "grade": 2,
        "chapterName": "How Long Is It?",
        "lessonName": "Mixed Unit Measurements"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/commercial-math/percentages/",
    "keywords": "",
    "traffic": 1690,
    "matches": [
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Percentages and Unitary Method",
        "lessonName": "Understand Percentages"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Percents",
        "lessonName": "Understand the Meaning of Percents"
      },
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Percentages and Commercial Math",
        "lessonName": "Define Percentages"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/surface-area-of-cylinder/",
    "keywords": "",
    "traffic": 1504,
    "matches": [
      {
        "level": "K8",
        "grade": 7,
        "chapterName": "Surface Area and Volume",
        "lessonName": "Surface Area of Cylinders"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/pythagoras-theorem/",
    "keywords": "",
    "traffic": 1391,
    "matches": [
      {
        "level": "K8",
        "grade": 8,
        "chapterName": "Real Numbers and the Pythagorean Theorem",
        "lessonName": "Pythagorean Theorem"
      },
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Right Triangles and Trigonometry",
        "lessonName": "The Pythagorean Theorem"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/area-of-trapezium/",
    "keywords": "",
    "traffic": 803,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Area of 2D Shapes",
        "lessonName": "Area of Trapezoids and Kites"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/a-plus-b-whole-square-formula/",
    "keywords": "",
    "traffic": 775,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Polynomial Expressions",
        "lessonName": "Special Products of Polynomials"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Polynomial Equations and Factoring",
        "lessonName": "Special Products of Polynomials"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/measurement/area-of-parallelogram/",
    "keywords": "",
    "traffic": 529,
    "matches": [
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Area of 2D Shapes",
        "lessonName": "Find the Area of Parallelograms"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/fractions/",
    "keywords": "",
    "traffic": 524,
    "matches": [
      {
        "level": "K8",
        "grade": 3,
        "chapterName": "An Introduction to Fractions",
        "lessonName": "Understand the Fractions of Whole"
      },
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Understanding Fractions",
        "lessonName": "Identify and Represent Improper Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/inscribed-angle-theorem/",
    "keywords": "",
    "traffic": 520,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Circles",
        "lessonName": "Inscribed Angles and Polygons"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/division-of-fractions/",
    "keywords": "",
    "traffic": 418,
    "matches": [
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Multiplication and Division of Fractions",
        "lessonName": "Divide Whole Numbers by Unit Fractions and Vice Versa"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Fraction Operations",
        "lessonName": "Divide Fractions"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/algebra/algebraic-identities/",
    "keywords": "",
    "traffic": 193,
    "matches": [
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Polynomial Expressions",
        "lessonName": "Special Products of Polynomials"
      },
      {
        "level": "HS",
        "course": "algebra-1",
        "chapterName": "Polynomial Equations and Factoring",
        "lessonName": "Special Products of Polynomials"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/divisibility-rules/",
    "keywords": "",
    "traffic": 165,
    "matches": [
      {
        "level": "K8",
        "grade": 4,
        "chapterName": "Factors, Multiples, and Primes",
        "lessonName": "Interpret Rules of Divisibility of 2, 5, and 10"
      },
      {
        "level": "K8",
        "grade": 5,
        "chapterName": "Factors, Multiples and Primes",
        "lessonName": "Interpret the Rules of Divisibility of 2, 3, 4, 5, 6, 8, and 10"
      },
      {
        "level": "K8",
        "grade": 6,
        "chapterName": "Factors and Multiples",
        "lessonName": "Apply Divisibility Rules for 2, 3, 5, 6, 9, and 10"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/geometry/constructing-angle-bisectors/",
    "keywords": "",
    "traffic": 143,
    "matches": [
      {
        "level": "HS",
        "course": "geometry",
        "chapterName": "Relationships Within Triangles",
        "lessonName": "Perpendicular and Angle Bisectors"
      }
    ]
  },
  {
    "url": "https://www.cuemath.com/numbers/perfect-numbers/",
    "keywords": "",
    "traffic": 138,
    "matches": []
  }
];
