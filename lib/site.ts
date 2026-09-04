export const siteConfig = {
  name: "Generation Mortgage",
  themeColor: "#F71607",
  description: "Making homeownership a reality for generations to come.",
};

export const services = [
  {
    slug: "fha-loans",
    name: "FHA Loans",
    short: "Flexible financing with down payments as low as 3.5%.",
  },
  {
    slug: "va-home-loans",
    name: "VA Home Loans",
    short: "No-down-payment options for eligible Veterans.",
  },
  {
    slug: "dpa-loans",
    name: "Down Payment Assistance",
    short: "Programs that help qualified buyers move forward.",
  },
] as const;
