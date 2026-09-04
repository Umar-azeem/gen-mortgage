"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Home,
  Info,
  Landmark,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { loanPrograms } from "@/app/data/loanPrograms";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loanDrop, setLoanDrop] = useState(false);
  const active = (path: string) =>
    pathname === path
      ? "text-primary"
      : "text-muted-foreground hover:text-foreground";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 font-mono text-sm font-bold tracking-widest"
          >
            <div className="relative h-20 w-full overflow-hidden ">
              <Image
                src="/img/gen.png"
                alt="Generation Mortgage logo"
                width={100}
                height={100}
                className="object-cover w-58 h-20"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link
              href="/"
              className={`flex items-center gap-1.5 ${active("/")}`}
            >
              <Home className="size-4" />
              Home
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-1.5 ${active("/about")}`}
            >
              <Info className="size-4" />
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setLoanDrop(true)}
              onMouseLeave={() => setLoanDrop(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 ${
                  pathname.startsWith("/loan-programs")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Landmark className="size-4" />
                Loan Programs
                <ChevronDown
                  className={`size-4 transition-transform ${loanDrop ? "rotate-180" : ""}`}
                />
              </button>

              {/* pt-4 (not mt-4) keeps the gap inside the hoverable area, no dead zone */}
              <div
                className={`absolute right-0 top-full w-64 pt-4 transition-opacity ${
                  loanDrop
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-border bg-card p-2 shadow-xl">
                  <p className="px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Mortgage options
                  </p>
                  {loanPrograms.slice(0, 8).map((program) => (
                    <Link
                      key={program.slug}
                      href={`/loan-programs/${program.slug}`}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm hover:bg-muted"
                    >
                      <span>{program.title}</span>
                      <ArrowUpRight className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/Refinance"
              className={`flex items-center gap-1.5 ${active("/Refinance")}`}
            >
              <ShieldCheck className="size-4" />
              Refinance
            </Link>

            <Link
              href="/contact"
              className={`flex items-center gap-1.5 ${active("/contact")}`}
            >
              <Phone className="size-4" />
              Contact
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Apply Now
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-border p-2 md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
