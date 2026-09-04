import React from "react";
import {
  Home,
  TrendingUp,
  RefreshCw,
  Shield,
  Award,
  Building2,
  Landmark,
  ArrowUpRight,
} from "lucide-react";
import { loanPrograms } from "@/app/data/loanPrograms";
import Link from "next/link";

const loanCategories = [
  {
    label: "Conventional Fixed Rate Mortgages (FRM)",
    slug: "/fixed-rate-frm-loans",
    icon: Home,
  },
  {
    label: "Adjustable Rate Mortgages (ARM)",
    slug: "/adjustable-rate-arm-loans",
    icon: TrendingUp,
  },
  { label: "Refinance Mortgage Loans", slug: "/refinance", icon: RefreshCw },
  { label: "FHA Mortgage Loans", slug: "/fha-loans", icon: Shield
   },
  { label: "VA Mortgage Loans", slug: "/va-home-loans", icon: Award },
  { label: "Jumbo Loans", slug: "/jumbo-loans", icon: Building2 },
  { label: "Home Equity Loans", slug: "/home-equity-loans", icon: Landmark },
  {
    label: "Reverse Mortgage Loans",
    slug: "/reverse-mortgage-loans",
    icon: Home,
  },
];
function LoanPrograms() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
            Our Loan Programs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the right mortgage for you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're buying your first home or refinancing, we have a
            solution.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loanCategories.map((category) => {
            const program = loanPrograms.find((p) => p.slug === category.slug);
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/loan-programs/${category.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-3 rounded-lg bg-primary/10 p-2.5 w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {category.label}
                </h3>
                {program && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {program.accent}
                  </p>
                )}
                
                <span className="mt-3 inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="ml-1 size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default LoanPrograms;
