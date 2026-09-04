import Link from 'next/link'
import { ArrowUpRight, Building2, FileText, Home, Landmark, Map, RefreshCw, Shield, Activity } from 'lucide-react'
import { loanPrograms } from '@/app/data/loanPrograms'

const icons = { Home, Shield, Landmark, Building2, RefreshCw, FileText, Activity, Map }

export const metadata = {
  title: 'Loan Programs | Northstar Studio',
  description: 'Explore mortgage programs designed around your goals.',
}

export default function LoanProgramsPage() {
  return <main className="pt-36">
    <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
      <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">Explore your options</p>
      <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.05em] sm:text-7xl">Loan programs with a <span className="text-primary">clear path.</span></h1>
      <p className="mt-8 max-w-2xl text-xl leading-8 text-muted-foreground">Every borrower has a different story. Start with the program that feels closest, then make the details personal.</p>
    </section>
    <section className="border-y border-border bg-card"><div className="mx-auto grid max-w-7xl gap-px bg-border px-5 lg:grid-cols-2 lg:px-8">{loanPrograms.map((program) => { const Icon = icons[program.icon as keyof typeof icons] ?? Home; return <Link key={program.slug} href={`/loan-programs/${program.slug}`} className="group flex items-start gap-5 bg-card p-7 transition-colors hover:bg-muted sm:p-10"><span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" /></span><span className="min-w-0"><strong className="block text-xl font-semibold">{program.title}</strong><small className="mt-2 block max-w-lg text-sm leading-6 text-muted-foreground">{program.description}</small></span><ArrowUpRight className="ml-auto size-5 shrink-0 text-primary opacity-60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link> })}</div></section>
  </main>
}
