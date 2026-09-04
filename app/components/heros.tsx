"use client";

import Image from "next/image";
import Link from "next/link";

function Heros() {
  return (
    <section className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#5c1926] via-[#641525] to-[#7a1f1a] py-10">
      {/* Background image + tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/mb.png"
          alt="Business funding background"
          fill
          className="rounded-2xl object-cover opacity-40"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9D283F]/90 via-[#9D283F]/85 to-[#9D283F]/90" />
      </div>

      {/* Soft decorative glow orbs */}
      <div className="pointer-events-none absolute -left-24 -top-24 z-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 z-0 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div className="max-w-xl animate-[fadeUp_0.7s_ease-out]">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-white/25 backdrop-blur-sm">
              Excellence - Transparency - Honesty
            </span>

            <h1 className="mt-6 text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Making homeownership a reality for generations to come.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
              Generation Mortgage was founded in 2005 by Gerald Rothman Jr. in
              Manchester, CT. We work with almost 40 different lenders to find
              the best loan for your individual needs.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href="/loan-programs">
                <button className="rounded-md bg-[#010101] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:scale-105 hover:bg-[#010101]/90">
                  Apply Now
                </button>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105 hover:text-[#FFD989]"
              >
                Meet the team
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Footnote */}
            <p className="mt-6 text-xs text-white/60">
              We are here to guide you through every step of the mortgage
              process.
            </p>
          </div>

          {/* Right: Interactive 3D house */}
          <div className="group relative mx-auto flex w-full max-w-md items-center justify-center">
            {/* glow behind house */}
            <div className="absolute h-64 w-64 rounded-full bg-[#FFC94D]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />

            <svg
              viewBox="0 0 500 500"
              className="relative w-full max-w-sm drop-shadow-2xl [animation:houseFloat_5s_ease-in-out_infinite]"
            >
              <defs>
                <linearGradient
                  id="roofGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFC94D" />
                  <stop offset="55%" stopColor="#FDB022" />
                  <stop offset="100%" stopColor="#E8890C" />
                </linearGradient>
                <linearGradient
                  id="bodyGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFCB57" />
                  <stop offset="60%" stopColor="#FDB022" />
                  <stop offset="100%" stopColor="#EA9010" />
                </linearGradient>
                <linearGradient
                  id="chimneyGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFCE63" />
                  <stop offset="100%" stopColor="#EE9614" />
                </linearGradient>
                <radialGradient id="windowGrad" cx="35%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#8B93A1" />
                  <stop offset="100%" stopColor="#374151" />
                </radialGradient>
                <radialGradient id="windowGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#FFE9B0" />
                  <stop offset="100%" stopColor="#FFC94D" />
                </radialGradient>
                <radialGradient id="doorInterior" cx="50%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#FFE9B0" />
                  <stop offset="100%" stopColor="#F0A429" />
                </radialGradient>
                <linearGradient
                  id="doorPanelGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFD989" />
                  <stop offset="100%" stopColor="#F0A429" />
                </linearGradient>
                <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
                <filter
                  id="softShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="6"
                    result="blur"
                  />
                  <feOffset in="blur" dx="0" dy="8" result="offsetBlur" />
                  <feComponentTransfer in="offsetBlur" result="shadow">
                    <feFuncA type="linear" slope="0.25" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="shadow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ground shadow — breathes slightly on hover */}
              <ellipse
                cx="250"
                cy="432"
                rx="170"
                ry="22"
                fill="url(#shadowGrad)"
                className="origin-center transition-transform duration-500 group-hover:scale-x-90"
              />

              {/* chimney smoke puffs */}
              <circle
                cx="290"
                cy="38"
                r="7"
                fill="#FFFFFF"
                opacity="0.55"
                className="[animation:smoke1_3.5s_ease-in_infinite]"
              />
              <circle
                cx="300"
                cy="20"
                r="5"
                fill="#FFFFFF"
                opacity="0.4"
                className="[animation:smoke2_3.5s_ease-in_infinite_0.6s]"
              />
              <circle
                cx="278"
                cy="14"
                r="4"
                fill="#FFFFFF"
                opacity="0.3"
                className="[animation:smoke1_3.5s_ease-in_infinite_1.2s]"
              />

              {/* chimney */}
              <g filter="url(#softShadow)">
                <rect
                  x="255"
                  y="60"
                  width="70"
                  height="90"
                  rx="14"
                  fill="url(#chimneyGrad)"
                />
                <rect
                  x="245"
                  y="48"
                  width="90"
                  height="34"
                  rx="16"
                  fill="url(#chimneyGrad)"
                />
                <rect
                  x="255"
                  y="60"
                  width="24"
                  height="90"
                  rx="10"
                  fill="#FFFFFF"
                  opacity="0.18"
                />
              </g>

              {/* body */}
              <g filter="url(#softShadow)">
                <rect
                  x="95"
                  y="230"
                  width="310"
                  height="190"
                  rx="42"
                  fill="url(#bodyGrad)"
                />
                <path
                  d="M120 250 Q140 235 175 235 L175 400 Q145 400 125 385 Z"
                  fill="#FFFFFF"
                  opacity="0.10"
                />
              </g>

              {/* roof */}
              <g filter="url(#softShadow)">
                <path
                  d="M250 130 C 258 122 268 122 276 130 L 448 268 C 468 285 468 320 445 335 C 425 348 400 344 384 328 L 250 216 L 116 328 C 100 344 75 348 55 335 C 32 320 32 285 52 268 Z"
                  fill="url(#roofGrad)"
                />
                <path
                  d="M180 175 Q220 150 260 160 L200 220 Q170 210 160 195 Z"
                  fill="#FFFFFF"
                  opacity="0.16"
                />
              </g>

              {/* diamond window — glows on hover */}
              <g transform="translate(345,255) rotate(45)">
                <rect
                  x="-26"
                  y="-26"
                  width="52"
                  height="52"
                  rx="10"
                  fill="url(#windowGrad)"
                  className="transition-all duration-500 group-hover:fill-[url(#windowGlow)]"
                />
                <rect
                  x="-26"
                  y="-26"
                  width="20"
                  height="52"
                  rx="8"
                  fill="#FFFFFF"
                  opacity="0.12"
                />
              </g>

              {/* left windows — glow on hover */}
              <g>
                <rect
                  x="140"
                  y="290"
                  width="66"
                  height="86"
                  rx="14"
                  fill="url(#windowGrad)"
                  className="transition-all duration-500 group-hover:fill-[url(#windowGlow)]"
                />
                <rect
                  x="140"
                  y="290"
                  width="24"
                  height="86"
                  rx="10"
                  fill="#FFFFFF"
                  opacity="0.12"
                />
                <rect
                  x="150"
                  y="300"
                  width="4"
                  height="66"
                  fill="#1F2937"
                  opacity="0.4"
                />
                <rect
                  x="150"
                  y="300"
                  width="46"
                  height="4"
                  fill="#1F2937"
                  opacity="0.4"
                />

                <rect
                  x="224"
                  y="290"
                  width="66"
                  height="86"
                  rx="14"
                  fill="url(#windowGrad)"
                  className="transition-all duration-500 group-hover:fill-[url(#windowGlow)]"
                />
                <rect
                  x="224"
                  y="290"
                  width="24"
                  height="86"
                  rx="10"
                  fill="#FFFFFF"
                  opacity="0.12"
                />
                <rect
                  x="234"
                  y="300"
                  width="4"
                  height="66"
                  fill="#1F2937"
                  opacity="0.4"
                />
                <rect
                  x="234"
                  y="300"
                  width="46"
                  height="4"
                  fill="#1F2937"
                  opacity="0.4"
                />
              </g>

              {/* doorway + warm interior light revealed when door opens */}
              <path
                d="M330 420 L330 350 C330 318 356 292 388 292 C420 292 446 318 446 350 L446 420 Z"
                fill="url(#doorInterior)"
              />

              {/* door — swings open on hover, hinged on the left edge */}
              <g
                style={{ transformOrigin: "330px 420px" }}
                className="transition-transform duration-500 ease-out group-hover:-rotate-[55deg]"
              >
                <path
                  d="M330 420 L330 350 C330 318 356 292 388 292 C420 292 446 318 446 350 L446 420 Z"
                  fill="url(#doorGrad)"
                />
                <path
                  d="M340 420 L340 352 C340 324 362 302 388 302 C414 302 436 324 436 352 L436 420 Z"
                  fill="url(#doorPanelGrad)"
                />
                <circle cx="418" cy="365" r="6" fill="#8A5A16" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes houseFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes smoke1 {
          0% {
            transform: translate(0, 0) scale(0.6);
            opacity: 0.5;
          }
          100% {
            transform: translate(6px, -40px) scale(1.3);
            opacity: 0;
          }
        }
        @keyframes smoke2 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.4;
          }
          100% {
            transform: translate(-8px, -36px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Heros;
