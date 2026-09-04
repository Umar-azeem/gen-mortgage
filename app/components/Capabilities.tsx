import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Capabilities() {
  return (
    <>
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
                Capabilities
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                From first thought
                <br />
                to forward motion.
              </h2>
            </div>
            <Link
              href="/services"
              className="group text-sm font-semibold text-primary"
            >
              View all services{" "}
              <ArrowUpRight className="ml-1 inline size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          {/* <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {services.map((service, i) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="group bg-background p-7 transition-colors hover:bg-muted sm:p-9"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-16 text-xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.short}
                </p>
                <ArrowUpRight className="mt-10 size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Capabilities;
