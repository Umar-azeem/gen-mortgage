"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  [
    "What happens after I submit an inquiry on your web page?",
    "We receive a notification within a few minutes. During our hours of operation, one of our loan originators will contact you within 90 minutes. Outside those hours, we will contact you the next day.",
  ],
  [
    "How do I know if my inquiry actually goes through?",
    "If you fill out an online application or contact form and are unsure it went through, email us, call our office, or send us a message on Facebook.",
  ],
  [
    "I've never bought a house before. How do I know where to start?",
    "Submit an inquiry or give us a call and let us know you are brand new to the process. We will explain what to expect and answer your questions every step of the way.",
  ],
  [
    "What happens if I apply but am not in a position to get a mortgage?",
    "That is okay. If credit or another hurdle keeps you from buying right away, we can refer you to a credit repair specialist and create a plan to help you buy in the future.",
  ],
  [
    "How do I know which mortgage product is right for me?",
    "Our job is to review your application, goals, and plans for the home and recommend products that fit both your current needs and long-term goals.",
  ],
  [
    "How often should I be in contact with my loan originator?",
    "Ask questions whenever you have them. We reach out at key milestones, including application review, underwriting, commitment, closing disclosure, and other important stages. Silence does not mean trouble.",
  ],
];

function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        {/* Left Side */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
            Questions welcome
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            We are here to help.
          </h2>
          <p className="mt-5 text-md font-semibold tracking-tight sm:text-lg">
            Still wondering? That's what we're here for. Reach out and we'll
            talk it through.
          </p>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map(([question, answer], i) => (
            <div
              key={question}
              className="rounded-2xl border border-border bg-card/50 transition-all hover:border-primary/30"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:text-primary sm:px-6"
              >
                <span>{question}</span>
                {active === i ? (
                  <Minus className="size-5 shrink-0 text-primary" />
                ) : (
                  <Plus className="size-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                )}
              </button>
              {active === i && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
