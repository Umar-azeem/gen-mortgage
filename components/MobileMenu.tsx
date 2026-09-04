"use client";

import Link from "next/link";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  ChevronDown,
  Home,
  Info,
  Landmark,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { loanPrograms } from "@/app/data/loanPrograms";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [loanOpen, setLoanOpen] = useState(false);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(84vw,22rem)] flex-col overflow-y-auto bg-background p-6 shadow-2xl transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center">
            <div className="relative h-16 w-28 overflow-hidden rounded-full">
              <Image
                src="/img/logoA.png"
                alt="Generation Mortgage logo"
                width={100}
                height={100}
                className="h-16 w-28 object-cover"
              />
            </div>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full border border-border p-2"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-2 text-xl font-semibold">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-muted"
          >
            <Home className="size-5" />
            Home
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-muted"
          >
            <Info className="size-5" />
            About
          </Link>

          {/* Loan Programs — collapsible dropdown */}
          <div>
            <button
              type="button"
              onClick={() => setLoanOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl px-2 py-2 hover:bg-muted"
            >
              <span className="flex items-center gap-3">
                <Landmark className="size-5" />
                Loan Programs
              </span>
              <ChevronDown
                className={`size-5 transition-transform ${loanOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                loanOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="ml-4 mt-2 flex flex-col gap-1 border-l border-border pl-4">
                  {loanPrograms.slice(0, 8).map((program) => (
                    <Link
                      key={program.slug}
                      href={`/loan-programs/${program.slug}`}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-lg py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                    >
                      {program.title}
                      <ArrowUpRight className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/Refinance"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-muted"
          >
            <ShieldCheck className="size-5" />
            Refinance
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-muted"
          >
            <Phone className="size-5" />
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}
