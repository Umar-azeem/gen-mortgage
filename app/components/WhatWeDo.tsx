"use client";

import Image from "next/image";
import { Layers, LineChart, WandSparkles } from "lucide-react";
import React from "react";

const items = [
  {
    icon: Layers,
    image: "/img/ani.png",
    title: "Almost 40 lenders",
    description:
      "Our lender network gives us access to unlimited products and programs for your individual situation.",
  },
  {
    icon: LineChart,
    image: "/img/mb.png",
    title: "Homeownership success",
    description:
      "We help you prepare for the mortgage process and for every day after closing.",
  },
  {
    icon: WandSparkles,
    image: "/img/hroban.png",
    title: "A clear game plan",
    description:
      "If hurdles arise, we work with you to overcome them and build a path toward long-term financial success.",
  },
];

function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
            What we do
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Mortgage guidance built around you.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {items.map(({ icon: Icon, image, title, description }, i) => (
            <div
              key={title}
              className="group animate-fade-in-up border-t border-border pt-5 transition-all duration-500 ease-out hover:border-primary"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 flex size-11 items-center justify-center rounded-xl bg-background/90 text-primary shadow-md backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
