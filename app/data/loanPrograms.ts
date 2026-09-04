export type LoanProgram = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  accent: string;
  overview: string;
  benefits: string[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
};

export const loanPrograms: LoanProgram[] = [
  {
    slug: "fha-loans",
    title: "FHA Loans",
    shortTitle: "FHA",
    icon: "Home",
    accent: "A flexible path to homeownership",
    description:
      "FHA loans are mortgages insured by the Federal Housing Administration and designed to make buying more accessible.",
    overview:
      "FHA financing can be a practical option for first-time buyers and borrowers who want flexible qualification guidelines. We help you understand the full payment, upfront costs, and long-term strategy before you choose.",
    benefits: [
      "Down payments as low as 3.5% for qualifying borrowers",
      "Flexible credit and debt-to-income guidelines",
      "Gift funds may be allowed for eligible costs",
      "Can be used for a primary residence",
    ],
    idealFor: [
      "First-time homebuyers",
      "Buyers with limited down payment savings",
      "Borrowers rebuilding credit",
    ],
    faqs: [
      {
        question: "Is FHA only for first-time buyers?",
        answer:
          "No. FHA loans are available to repeat buyers as long as the home and borrower meet program requirements.",
      },
      {
        question: "What is mortgage insurance?",
        answer:
          "FHA loans include mortgage insurance premiums. We will review the upfront and monthly costs with your estimate.",
      },
    ],
  },
  {
    slug: "va-home-loans",
    title: "VA Home Loans",
    shortTitle: "VA",
    icon: "Shield",
    accent: "A benefit earned through service",
    description:
      "VA loan options for veterans, service members, and their surviving spouses.",
    overview:
      "VA financing offers eligible veterans and service members a powerful way to purchase or refinance a home. Our team can help you understand eligibility, entitlement, and the details that make this benefit work for you.",
    benefits: [
      "Often no down payment required",
      "No monthly private mortgage insurance",
      "Competitive rates for eligible borrowers",
      "Purchase and refinance options",
    ],
    idealFor: [
      "Veterans",
      "Active-duty service members",
      "Eligible surviving spouses",
    ],
    faqs: [
      {
        question: "Do I need a VA Certificate of Eligibility?",
        answer:
          "A Certificate of Eligibility helps confirm your benefit. We can guide you through obtaining and reviewing it.",
      },
      {
        question: "Can I use VA financing more than once?",
        answer:
          "In many cases, yes. Your remaining entitlement and the property must meet program guidelines.",
      },
    ],
  },
  {
    slug: "dpa-loans",
    title: "DPA Loans",
    shortTitle: "DPA",
    icon: "Landmark",
    accent: "Down payment assistance",
    description:
      "A down payment assistance loan may help cover a portion of the funds needed to buy a home.",
    overview:
      "Down payment assistance programs vary by location, income, occupancy, and loan type. We help you explore available options and understand whether assistance is a grant, deferred loan, or repayable second mortgage.",
    benefits: [
      "Potential help with down payment or closing costs",
      "Programs for first-time and repeat buyers",
      "May pair with FHA, conventional, or other financing",
      "Guidance through program requirements",
    ],
    idealFor: [
      "Buyers with limited cash reserves",
      "Qualified first-time buyers",
      "Households meeting local income limits",
    ],
    faqs: [
      {
        question: "Is down payment assistance free money?",
        answer:
          "Some programs are grants while others are loans with specific repayment terms. We explain the difference before you proceed.",
      },
    ],
  },
  {
    slug: "jumbo-loans",
    title: "Jumbo Loans",
    shortTitle: "Jumbo",
    icon: "Building2",
    accent: "Financing for high-value homes",
    description:
      "Financing solutions for properties above conventional loan limits.",
    overview:
      "Jumbo loans are designed for larger loan amounts and often require a more detailed review of income, assets, credit, and reserves. We compare options across our lender network to create a structure that fits.",
    benefits: [
      "Higher loan amounts than conforming limits",
      "Options for primary homes and second homes",
      "Competitive structures for strong financial profiles",
      "Personalized asset and income review",
    ],
    idealFor: [
      "High-value home buyers",
      "Borrowers with strong assets and reserves",
      "Move-up buyers",
    ],
    faqs: [
      {
        question: "How much do I need for a jumbo down payment?",
        answer:
          "Requirements vary by loan amount, property, and profile. We will model the options with you.",
      },
    ],
  },
  {
    slug: "refinance",
    title: "Refinance",
    shortTitle: "Refinance",
    icon: "RefreshCw",
    accent: "Make your mortgage work harder",
    description:
      "Refinance or cash-out refinance loans can be beneficial for clients looking to change their terms or access equity.",
    overview:
      "Refinancing can help you change your rate, payment, term, or use home equity for a planned purpose. The right answer depends on costs, timing, break-even, and your broader financial goals.",
    benefits: [
      "Potentially lower monthly payment",
      "Change from an adjustable to fixed rate",
      "Shorten or extend the loan term",
      "Access equity through cash-out refinance",
    ],
    idealFor: [
      "Homeowners seeking a lower payment",
      "Borrowers changing loan terms",
      "Owners planning a responsible equity strategy",
    ],
    faqs: [
      {
        question: "When does refinancing make sense?",
        answer:
          "It depends on your savings, closing costs, how long you plan to stay, and the goals for your home equity.",
      },
    ],
  },
  {
    slug: "non-qm-loans",
    title: "Non-QM Loans",
    shortTitle: "Non-QM",
    icon: "FileText",
    accent: "Alternative income solutions",
    description:
      "A Non-QM loan, or Non-Qualified Mortgage loan, is a type of mortgage designed for non-traditional income profiles.",
    overview:
      "Non-QM programs can help self-employed borrowers, investors, and clients whose income does not fit conventional documentation. These loans require careful review because rates, reserves, and terms can differ.",
    benefits: [
      "Alternative documentation options",
      "Solutions for self-employed borrowers",
      "Bank statement and asset-based possibilities",
      "Flexible structures for unique profiles",
    ],
    idealFor: [
      "Business owners",
      "Real estate investors",
      "Borrowers with complex income",
    ],
    faqs: [
      {
        question: "Are Non-QM loans riskier?",
        answer:
          "Every loan should be evaluated carefully. We explain the rate, payment, reserves, and terms so you can make an informed choice.",
      },
    ],
  },
  {
    slug: "rehab-loans",
    title: "Rehab Loans",
    shortTitle: "Rehab",
    icon: "Activity",
    accent: "Turn potential into a place to live",
    description:
      "A rehab loan can finance the purchase and renovation of a home in one coordinated plan.",
    overview:
      "Renovation financing helps buyers or homeowners fund improvements that create a safer, more comfortable, or more valuable home. We coordinate the financing conversation with your project scope and budget.",
    benefits: [
      "Purchase and renovation in one loan",
      "Potential financing for eligible repairs",
      "One structured project budget",
      "Guidance on documentation and contractor plans",
    ],
    idealFor: [
      "Buyers considering fixer-uppers",
      "Homeowners planning major improvements",
      "Clients seeking one coordinated financing plan",
    ],
    faqs: [
      {
        question: "What improvements qualify?",
        answer:
          "Eligible improvements depend on the program and property. We review your project scope before recommending an option.",
      },
    ],
  },
  {
    slug: "usda-loans",
    title: "USDA Loans",
    shortTitle: "USDA",
    icon: "Map",
    accent: "A rural path with real possibility",
    description:
      "USDA loans are designed to help low- and moderate-income buyers purchase homes in eligible rural and suburban areas.",
    overview:
      "USDA financing may offer eligible buyers a low- or no-down-payment path. Property location, household income, occupancy, and other requirements all matter, so we check the full picture with you.",
    benefits: [
      "Potential zero-down financing",
      "Designed for eligible rural and suburban areas",
      "Competitive government-backed terms",
      "May reduce the upfront cash needed",
    ],
    idealFor: [
      "Buyers in eligible areas",
      "Households meeting income guidelines",
      "Primary residence buyers",
    ],
    faqs: [
      {
        question: "Is USDA only for farms?",
        answer:
          "No. Eligible areas include many suburban communities. The address must meet USDA geographic requirements.",
      },
    ],
  },
  {
    slug: "adjustable-rate-arm-loans",
    title: "Adjustable-Rate (ARM) Loans",
    shortTitle: "ARM",
    icon: "Activity",
    accent: "A rate that can move with the market",
    description:
      "Start with lower rates that adjust over time according to the loan terms.",
    overview:
      "An adjustable-rate mortgage may offer a lower initial rate for a defined period before adjustments begin. We compare the initial payment, adjustment caps, and future scenarios so you understand the tradeoffs.",
    benefits: [
      "Lower initial rate may reduce early payments",
      "Multiple fixed-rate introductory periods",
      "Useful for certain move or refinance plans",
      "Scenario planning before you commit",
    ],
    idealFor: [
      "Buyers planning a shorter ownership period",
      "Borrowers comfortable with future rate scenarios",
      "Clients comparing payment strategies",
    ],
    faqs: [
      {
        question: "Can an ARM payment change?",
        answer:
          "Yes. After the initial period, the rate can adjust within contractual limits. We model those scenarios with you.",
      },
    ],
  },
  // {
  //   slug: "fixed-rate-frm-loans",
  //   title: "Fixed-Rate (FRM) Loans",
  //   shortTitle: "Fixed-Rate",
  //   icon: "TrendingUp",
  //   accent: "Steady payments, clear planning",
  //   description:
  //     "Start with a fixed interest rate and a predictable principal and interest payment over time.",
  //   overview:
  //     "Fixed-rate mortgages provide payment stability and a clear payoff schedule. They are a dependable foundation for buyers who value predictability over changing market exposure.",
  //   benefits: [
  //     "Rate stays fixed for the life of the loan",
  //     "Predictable principal and interest payment",
  //     "Available in multiple term lengths",
  //     "Simple long-term planning",
  //   ],
  //   idealFor: [
  //     "Long-term homeowners",
  //     "Buyers who value payment certainty",
  //     "Clients seeking a straightforward structure",
  //   ],
  //   faqs: [
  //     {
  //       question: "What fixed-rate terms are available?",
  //       answer:
  //         "Common options include 30-, 20-, and 15-year terms, with other possibilities depending on the program.",
  //     },
  //   ],
  // },
];

export const getLoanProgram = (slug: string) =>
  loanPrograms.find((program) => program.slug === slug);
export const loanSlugs = loanPrograms.map((program) => ({
  slug: program.slug,
}));
export const iconNames = [
  "Home",
  "Shield",
  "Landmark",
  "Building2",
  "RefreshCw",
  "FileText",
  "Activity",
  "Map",
  "TrendingUp",
];

export const getIcon = (name: string) => name;

export default loanPrograms;

export type LoanProgramStep = {
  step: number;
  title: string;
  description: string;
};
export type LoanProgramTestimonial = { name: string; text: string };

export function programSteps(program: LoanProgram): LoanProgramStep[] {
  return [
    {
      step: 1,
      title: "Start with your goals",
      description: `Tell us what you want from ${program.shortTitle} financing.`,
    },
    {
      step: 2,
      title: "Compare your options",
      description:
        "We review your profile and explain the tradeoffs in plain language.",
    },
    {
      step: 3,
      title: "Move forward with confidence",
      description:
        "We guide the application, documentation, and closing milestones.",
    },
  ];
}
export function programTestimonial(
  program: LoanProgram,
): LoanProgramTestimonial {
  return {
    name: "A Cornerstone client",
    text: `The ${program.shortTitle} conversation was clear, personal, and much easier than we expected.`,
  };
}
