"use client";

import { useMemo, useState } from "react";
import { BarChart3, Check, ArrowRight } from "lucide-react";

// ---------- math helpers ----------

function calcMonthlyPI(principal: number, annualRatePct: number, years: number) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (principal <= 0) return 0;
  return r ? (principal * (r * (1 + r) ** n)) / ((1 + r) ** n - 1) : principal / n;
}

type YearPoint = { year: number; balance: number; cumInterest: number };

function buildSchedule(principal: number, annualRatePct: number, years: number, monthly: number): YearPoint[] {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  let balance = principal;
  let cumInterest = 0;
  const yearly: YearPoint[] = [{ year: 0, balance: principal, cumInterest: 0 }];
  for (let m = 1; m <= n; m++) {
    const interestPortion = balance * r;
    const principalPortion = Math.min(monthly - interestPortion, balance);
    balance = Math.max(balance - principalPortion, 0);
    cumInterest += interestPortion;
    if (m % 12 === 0 || m === n) {
      yearly.push({ year: Math.ceil(m / 12), balance, cumInterest });
    }
  }
  return yearly;
}

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

// ---------- chart subcomponents ----------

function AmortChart({ schedule }: { schedule: YearPoint[] }) {
  const W = 400, H = 150, padL = 4, padR = 4, padT = 10, padB = 20;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const n = schedule.length;
  if (!n) return null;

  const maxY = Math.max(1, ...schedule.map((p) => p.balance), ...schedule.map((p) => p.cumInterest));
  const xAt = (i: number) => padL + (n > 1 ? i * (plotW / (n - 1)) : 0);
  const yAt = (v: number) => padT + plotH - (v / maxY) * plotH;

  const balPts = schedule.map((p, i) => `${xAt(i)},${yAt(p.balance)}`).join(" ");
  const intPts = schedule.map((p, i) => `${xAt(i)},${yAt(p.cumInterest)}`).join(" ");
  const areaPath = `M ${xAt(0)},${padT + plotH} L ${balPts} L ${xAt(n - 1)},${padT + plotH} Z`;

  const labelIdx = Array.from(new Set(n > 1 ? [0, Math.floor((n - 1) / 2), n - 1] : [0]));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full h-[150px]">
      {[0, 0.5, 1].map((t) => {
        const y = padT + plotH * t;
        return <line key={t} x1={padL} x2={W - padR} y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />;
      })}
      <path d={areaPath} fill="rgba(63,209,201,0.18)" stroke="none" />
      <polyline points={balPts} fill="none" stroke="#3fd1c9" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={intPts} fill="none" stroke="#f0b84f" strokeWidth={2} strokeDasharray="4 4" strokeLinejoin="round" strokeLinecap="round" />
      {labelIdx.map((i) => (
        <text
          key={i}
          x={xAt(i)}
          y={H - 4}
          fill="#93a3c4"
          fontSize={9}
          textAnchor={i === 0 ? "start" : i === n - 1 ? "end" : "middle"}
        >
          {`Yr ${schedule[i].year}`}
        </text>
      ))}
    </svg>
  );
}

function CostDoughnut({ principal, totalInterest }: { principal: number; totalInterest: number }) {
  const cx = 70, cy = 70, r = 54, sw = 16;
  const circumference = 2 * Math.PI * r;
  const total = principal + totalInterest;
  const principalPct = total > 0 ? principal / total : 0.5;

  return (
    <svg viewBox="0 0 140 140" className="w-[150px] h-[150px]">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={sw} />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#3fd1c9"
        strokeWidth={sw}
        strokeDasharray={`${principalPct * circumference} ${circumference}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#f0b84f"
        strokeWidth={sw}
        strokeDasharray={`${(1 - principalPct) * circumference} ${circumference}`}
        strokeDashoffset={-principalPct * circumference}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy - 3} fill="#ffffff" fontSize={13} fontWeight={600} textAnchor="middle" className="font-mono">
        {total > 0 ? `${Math.round(principalPct * 100)}%` : "—"}
      </text>
      <text x={cx} y={cy + 12} fill="#93a3c4" fontSize={8} textAnchor="middle">
        principal
      </text>
    </svg>
  );
}

// ---------- main component ----------

export default function MortgageCalculator() {
  const [price, setPrice] = useState(425000);
  const [down, setDown] = useState(85000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [veteran, setVeteran] = useState(false);

  const clampedDown = Math.min(down, price);
  const principal = Math.max(price - clampedDown, 0);
  const monthly = useMemo(() => calcMonthlyPI(principal, rate, years), [principal, rate, years]);

  const downPct = price > 0 ? clampedDown / price : 0;
  const pmiApplies = !veteran && downPct < 0.2 && principal > 0;
  const pmiMonthly = pmiApplies ? (principal * 0.006) / 12 : 0;

  const schedule = useMemo(() => buildSchedule(principal, rate, years, monthly || 0), [principal, rate, years, monthly]);
  const totalInterest = schedule.length ? schedule[schedule.length - 1].cumInterest : 0;

  return (
    <div className="w-full max-w-[1040px] m-4 mx-auto bg-white rounded-[22px] shadow-[0_20px_50px_-25px_rgba(11,30,61,0.35)] border border-[#e2e7f1] grid grid-cols-1 md:grid-cols-[1.05fr_1fr] overflow-hidden">
      {/* ---- left: form ---- */}
      <div className="p-9 md:p-10 border-b md:border-b-0 md:border-r border-[#e2e7f1]">
        <div className="flex justify-between items-start gap-4 mb-1.5">
          <div>
            <span className="inline-block text-[11.5px] tracking-[0.14em] uppercase font-semibold text-[#085e6b] bg-[#e3f3f4] px-2.5 py-1 rounded-full mb-3">
              Quick estimate
            </span>
            <h3 className="font-serif font-medium text-[27px] leading-tight text-[#9D283F]">
              See your monthly picture.
            </h3>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[#9D283F] text-white flex items-center justify-center shrink-0">
            <BarChart3 size={22} />
          </div>
        </div>

        <p className="text-[#6b7690] text-sm leading-relaxed mt-2.5 mb-7">
          Adjust the numbers to explore an estimated principal and interest payment, plus how your balance and
          equity build over time.
        </p>

        <label className="block text-[13px] font-semibold text-[#9D283F] mb-4.5">
          <div className="flex justify-between mb-2.5">
            <span>Home price</span>
            <output className="font-mono font-semibold text-[#9D283F]">{fmt(price)}</output>
          </div>
          <input
            type="range"
            min={150000}
            max={1500000}
            step={5000}
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="w-full h-1.5 rounded-full bg-[#e2e7f1] accent-[#9D283F] cursor-pointer"
          />
        </label>

        <label className="block text-[13px] font-semibold text-[#9D283F] mb-5">
          <div className="flex justify-between mb-2.5">
            <span>Down payment</span>
            <output className="font-mono font-semibold text-[#9D283F]">{fmt(clampedDown)}</output>
          </div>
          <input
            type="range"
            min={0}
            max={price}
            step={5000}
            value={clampedDown}
            onChange={(e) => setDown(+e.target.value)}
            className="w-full h-1.5 rounded-full bg-[#e2e7f1] accent-[#9D283F] cursor-pointer"
          />
        </label>

        <div className="grid grid-cols-2 gap-4 mb-1.5">
          <label className="block text-[13px] font-semibold text-[#9D283F]">
            Interest rate
            <input
              type="number"
              step={0.1}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full mt-2 px-3 py-2.5 rounded-[10px] border border-[#e2e7f1] bg-[#f5f7fb] font-mono text-sm text-[#14213d] focus:outline-none focus:ring-2 focus:ring-[#0b7c8c] focus:bg-white"
            />
          </label>
          <label className="block text-[13px] font-semibold text-[#9D283F]">
            Loan term
            <select
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full mt-2 px-3 py-2.5 rounded-[10px] border border-[#e2e7f1] bg-[#f5f7fb] font-medium text-sm text-[#14213d] focus:outline-none focus:ring-2 focus:ring-[#0b7c8c] focus:bg-white"
            >
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={() => setVeteran((v) => !v)}
          className={`w-full flex items-center gap-2.5 mt-4.5 px-3.5 py-3 rounded-xl border text-[13.5px] font-semibold transition-colors ${
            veteran
              ? "border-[#b8902e] bg-[#faf3e2] text-[#6b501c]"
              : "border-[#e2e7f1] bg-[#f5f7fb] text-[#14213d]"
          }`}
        >
          <span
            className={`w-[18px] h-[18px] rounded-[5px] border flex items-center justify-center shrink-0 ${
              veteran ? "bg-[#b8902e] border-[#b8902e] text-white" : "bg-white border-[#c7cee0]"
            }`}
          >
            {veteran && <Check size={14} />}
          </span>
          I&apos;m a veteran or service member
        </button>

        {veteran && (
          <p className="text-[12.5px] text-[#6b7690] leading-relaxed mt-2.5 pl-0.5">
            VA loans typically allow 0% down and skip PMI entirely — this estimate removes mortgage insurance
            accordingly.
          </p>
        )}
      </div>

      {/* ---- right: results ---- */}
      <div className="p-9 md:p-10 bg-gradient-to-b from-[#9D283F] to-[#9D283F] text-white flex flex-col">
        <span className="inline-block w-fit text-[11.5px] tracking-[0.14em] uppercase font-semibold text-[#bfe6ea] bg-white/10 px-2.5 py-1 rounded-full mb-1.5">
          Estimated monthly payment
        </span>
        <strong className="font-mono text-[42px] font-semibold tracking-tight mt-1.5 mb-1">
          {fmt(monthly + pmiMonthly)}
        </strong>
        <span className="text-[12.5px] text-[#93a3c4] mb-5.5">
          {pmiApplies ? "Principal, interest & estimated PMI" : "Principal & interest, before taxes and insurance"}
        </span>

        <div className="flex flex-col gap-2.5 py-4 border-t border-b border-white/10 text-[13px] mb-5.5">
          <span className="flex justify-between text-[#b7c2dc]">
            Principal &amp; interest <b className="font-mono font-medium text-white">{fmt(monthly)}</b>
          </span>
          <span className={`flex justify-between text-[#b7c2dc] ${pmiApplies ? "" : "opacity-40"}`}>
            Est. PMI <b className="font-mono font-medium text-[#ffd479]">{fmt(pmiMonthly)}</b>
          </span>
          <span className="flex justify-between text-[#b7c2dc]">
            Loan amount <b className="font-mono font-medium text-white">{fmt(principal)}</b>
          </span>
          <span className="flex justify-between text-[#b7c2dc]">
            Down payment <b className="font-mono font-medium text-white">{fmt(clampedDown)}</b>
          </span>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 pb-2 mb-4.5">
          <h4 className="text-[11.5px] uppercase tracking-wider font-semibold text-[#93a3c4] mb-2.5">
            Balance vs. total interest over time
          </h4>
          <AmortChart schedule={schedule} />
          <div className="flex gap-4 mt-2.5 text-xs text-[#b7c2dc]">
            <span className="flex items-center gap-1.5">
              <i className="w-2 h-2 rounded-full bg-[#3fd1c9] inline-block" /> Remaining balance
            </span>
            <span className="flex items-center gap-1.5">
              <i className="w-2 h-2 rounded-full bg-[#f0b84f] inline-block" /> Cumulative interest
            </span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 pb-2 mb-4.5">
          <h4 className="text-[11.5px] uppercase tracking-wider font-semibold text-[#93a3c4] mb-2.5">
            What you&apos;ll actually pay, over the life of the loan
          </h4>
          <div className="flex justify-center">
            <CostDoughnut principal={principal} totalInterest={totalInterest} />
          </div>
          <div className="flex gap-4 mt-2.5 text-xs text-[#b7c2dc]">
            <span className="flex items-center gap-1.5">
              <i className="w-2 h-2 rounded-full bg-[#3fd1c9] inline-block" /> Principal
            </span>
            <span className="flex items-center gap-1.5">
              <i className="w-2 h-2 rounded-full bg-[#f0b84f] inline-block" /> Total interest
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-auto flex items-center justify-center gap-2 bg-[#9D283F] hover:bg-[#7a1f2f] transition-colors text-white font-semibold text-[14.5px] px-4.5 py-3.5 rounded-xl"
        >
          Get a personalized quote <ArrowRight size={17} />
        </a>
        <small className="block text-center text-[#7684a3] text-[11px] leading-relaxed mt-3.5">
          Estimates are for illustration only and do not include property taxes, homeowners insurance, or HOA fees.
        </small>
      </div>
    </div>
  );
}