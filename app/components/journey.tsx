import Link from "next/link";
import React from "react";

function Journey() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-[#9D283F] to-[#9D283F] p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get the home you want with the right mortgage.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            We are ready to build your personalized mortgage solution.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-[#9D283F] transition-all hover:scale-105 hover:bg-[white]/90"
            >
              Apply Now
            </Link>
            <Link
              href="/loan-programs"
              className="rounded-full bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
