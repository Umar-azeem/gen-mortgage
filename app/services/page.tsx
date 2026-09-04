"use clinet"
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
export const metadata = { title: "Services" };
export default function ServicesPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
          Capabilities
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.05em] sm:text-7xl">
          Tools for moving <span className="text-primary">forward.</span>
        </h1>
        <div className="mt-16 grid gap-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary sm:flex-row sm:items-end sm:p-10"
            >
              <div>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <h2 className="mt-10 text-3xl font-semibold">{s.name}</h2>
                <p className="mt-3 max-w-md text-muted-foreground">{s.short}</p>
              </div>
              <ArrowUpRight className="size-7 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
