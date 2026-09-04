"use client";

import Link from "next/link";
import Image from "next/image";
import {
  X,
  Home,
  Info,
  Landmark,
  ShieldCheck,
  Phone,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { loanPrograms } from "@/app/data/loanPrograms";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [loanOpen, setLoanOpen] = useState(false);

  if (!open) return null;

  const active = (path: string) =>
    pathname === path ? "text-primary" : "text-foreground";

  return (
    <div className="fixed inset-0 z-40 bg-background md:hidden">
      <div className="flex h-20 items-center justify-between border-b border-border/60 px-5">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative h-20 w-32 overflow-hidden rounded-full">
            <Image
              src="/img/logoA.png"
              alt="Generation Mortgage logo"
              width={100}
              height={100}
              className="object-cover w-30 h-20"
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

      <nav className="flex flex-col gap-1 px-5 py-6 text-base">
        <Link
          href="/"
          onClick={onClose}
          className={`flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-muted ${active("/")}`}
        >
          <Home className="size-5" />
          Home
        </Link>

        <Link
          href="/about"
          onClick={onClose}
          className={`flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-muted ${active("/about")}`}
        >
          <Info className="size-5" />
          About
        </Link>

        {/* Loan Programs accordion */}
        <button
          type="button"
          onClick={() => setLoanOpen((v) => !v)}
          className={`flex items-center justify-between rounded-xl px-3 py-3 hover:bg-muted ${
            pathname.startsWith("/loan-programs")
              ? "text-primary"
              : "text-foreground"
          }`}
        >
          <span className="flex items-center gap-3">
            <Landmark className="size-5" />
            Loan Programs
          </span>
          <ChevronDown
            className={`size-4 transition-transform ${loanOpen ? "rotate-180" : ""}`}
          />
        </button>

        {loanOpen && (
          <div className="ml-8 flex flex-col gap-1 border-l border-border pl-3">
            {loanPrograms.slice(0, 8).map((program) => (
              <Link
                key={program.slug}
                href={`/loan-programs/${program.slug}`}
                onClick={onClose}
                className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <span>{program.title}</span>
                <ArrowUpRight className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        )}

        <Link
          href="/Refinance"
          onClick={onClose}
          className={`flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-muted ${active("/Refinance")}`}
        >
          <ShieldCheck className="size-5" />
          Refinance
        </Link>

        <Link
          href="/contact"
          onClick={onClose}
          className={`flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-muted ${active("/contact")}`}
        >
          <Phone className="size-5" />
          Contact
        </Link>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-4 rounded-full bg-primary px-4 py-3 text-center font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Apply Now
        </Link>
      </nav>
    </div>
  );
}
