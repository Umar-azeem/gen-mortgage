import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  Users,
  Headphones,
} from "lucide-react";
import { loanPrograms } from "@/app/data/loanPrograms";
import { Hero } from "@/components/Hero";
import {
  Home,
  TrendingUp,
  RefreshCw,
  Shield,
  Award,
  Building2 as BuildingIcon,
  Landmark,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Heart,
  Star,
} from "lucide-react";

export const metadata = { title: "About Us | Generation Mortgage" };

const teamMembers = [
  {
    name: "Gerald Rothman Jr.",
    title: "Founder",
    email: "jerry@generationmtg.com",
    phone: "860-809-4800",
    nmls: "Generation Mortgage",
    image: "/img/c.png",
    bio: "Gerald founded Generation Mortgage in 2005 in Manchester, CT. He is dedicated to creating a client-focused mortgage experience built on excellence, transparency, and honesty.",
  },
  {
    name: "Dustin Mack",
    title: "Partner",
    email: "jerry@generationmtg.com",
    phone: "860-809-4800",
    nmls: "Generation Mortgage",
    image: "/img/eb.jpg",
    bio: "Dustin joined Generation Mortgage in 2010 and worked strategically with Jerry to put a client-focused mortgage experience into effect.",
  },
];

const loanCategories = [
  {
    label: "Conventional Fixed Rate Mortgages (FRM)",
    slug: "/fixed-rate-frm-loans",
    icon: Home,
  },
  {
    label: "Adjustable Rate Mortgages (ARM)",
    slug: "/adjustable-rate-arm-loans",
    icon: TrendingUp,
  },
  { label: "Refinance Mortgage Loans", slug: "/refinance", icon: RefreshCw },
  { label: "FHA Mortgage Loans", slug: "/fha-loans", icon: Shield },
  { label: "VA Mortgage Loans", slug: "/va-home-loans", icon: Award },
  { label: "Jumbo Loans", slug: "/jumbo-loans", icon: BuildingIcon },
  { label: "Home Equity Loans", slug: "/home-equity-loans", icon: Landmark },
  {
    label: "Reverse Mortgage Loans",
    slug: "/reverse-mortgage-loans",
    icon: Home,
  },
];

const stats = [
  {
    icon: Clock,
    label: "34+ Years",
    description: "Broker experience since 1992",
  },
  { icon: BadgeCheck, label: "26+ Years", description: "Licensed since 2000" },
  { icon: Star, label: "17+ Years", description: "Incorporated since 2009" },
  { icon: Heart, label: "34+ Years", description: "Industry experience" },
];

export default function AboutPage() {
  return (
    <main className="pt-36 overflow-x-hidden">
      <Hero />

      {/* Company Stats Banner */}
      <section className="bg-primary/5 border-y border-primary/10 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto size-8 text-primary mb-2" />
                <p className="text-2xl font-bold text-primary">{stat.label}</p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
          About Generation Mortgage
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-.05em] sm:text-7xl">
          Your trusted mortgage broker.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          Generation Mortgage was founded in 2005 by Gerald Rothman Jr. in
          Manchester, CT. We know what it is like to buy a home because we have
          been through it before.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Our Story
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Making homeownership a reality for generations to come.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                We are a family owned and operated company with strong core
                values. Our main goals are to provide every client with
                excellence, transparency, and honesty through every aspect of
                the mortgage process.
              </p>
              <p>
                In 2010, Dustin Mack came on board and worked strategically with
                Jerry to put into effect a client focused mortgage experience.
              </p>
              <div className="rounded-lg bg-primary/5 p-4 space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Broker:</span> Started
                  originating in 1992 (34 yrs strong)
                  <br />
                  <span className="font-semibold">Licensed:</span> Since 2000
                  (26 yrs strong)
                  <br />
                  <span className="font-semibold">Broker NMLS ID:</span> #346403
                  <br />
                  <span className="font-semibold">Incorporated:</span> 2009 (17
                  yrs strong)
                  <br />
                  <span className="font-semibold">Company NMLS ID:</span>{" "}
                  #282449
                </p>
              </div>
              <p className="text-sm text-muted-foreground/70">
                Total finance charges may be higher over the life of the loan.
              </p>
            </div>
            <Button href="/contact" className="mt-6 self-start">
              Apply Now <ArrowUpRight className="ml-1 size-4" />
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4">
              {/* Sales Office */}
              <div className="flex items-start gap-3">
                <Phone className="size-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Sales Office</p>
                  <a
                    href="tel:+18608094800"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (860) 809-4800
                  </a>
                </div>
              </div>

              {/* Marketing Dept */}
              <div className="flex items-start gap-3">
                <Users className="size-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Marketing Dept</p>
                  <a
                    href="tel:+18608120252"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (860) 812-0252
                  </a>
                </div>
              </div>

              {/* Customer Care Dept */}
              <div className="flex items-start gap-3">
                <Headphones className="size-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Customer Care Dept</p>
                  <a
                    href="tel:+18608094800"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (860) 809-4800
                  </a>
                </div>
              </div>

              {/* Office Main */}
              <div className="flex items-start gap-3">
                <Building2 className="size-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Office Main</p>
                  <a
                    href="tel:+18608120252"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (860) 812-0252
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 border-t border-border pt-4">
                <Mail className="size-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:jerry@generationmtg.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    jerry@generationmtg.com
                  </a>
                  <br />
                  <a
                    href="tel:+18608094800"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (860) 809-4800
                  </a>
                </div>
              </div>

              {/* Addresses */}
              <div className="flex items-start gap-3 border-t border-border pt-4">
                <MapPin className="size-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Office Location</p>
                  <p className="text-sm text-muted-foreground">
                    105 East Center Street, Manchester, CT 06040
                    <br />
                    <span className="text-xs text-muted-foreground/60">
                      (by appointment)
                    </span>
                  </p>
                  <p className="text-sm font-medium mt-2">Mailing Address</p>
                  <p className="text-sm text-muted-foreground">
                    Manchester, CT 06040
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Programs Quick Links */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
            Our Loan Programs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the right mortgage for you
          </h2>
          <p className="mt-4 text-muted-foreground">
            We can offer you just about 99% of all mortgage loan types currently
            in the market.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loanCategories.map((category) => {
            const program = loanPrograms.find((p) => p.slug === category.slug);
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/loan-programs/${category.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-3 rounded-lg bg-primary/10 p-2.5 w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {category.label}
                </h3>
                {program && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {program.accent}
                  </p>
                )}
                <span className="mt-3 inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="ml-1 size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Our Values
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              What drives us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We constantly work on delivering the best loan services to our
              clients. Our officer will walk you through every step of the loan
              application and approval process.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                label: "Integrity",
                desc: "We operate with complete honesty and transparency",
              },
              {
                icon: Heart,
                label: "Honesty",
                desc: "Truthful communication at every step",
              },
              {
                icon: Star,
                label: "Professionalism",
                desc: "Highest standards of service excellence",
              },
              {
                icon: Users,
                label: "Altruism",
                desc: "Genuine care for our clients' well-being",
              },
              {
                icon: BadgeCheck,
                label: "Competency",
                desc: "Expert knowledge and skilled execution",
              },
              {
                icon: TrendingUp,
                label: "Industry Knowledge",
                desc: "Decades of mortgage expertise",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-background p-6 text-center transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <value.icon className="size-6" />
                </div>
                <h4 className="mt-4 font-semibold">{value.label}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Meet Our Team
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Experts you can trust
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our team of dedicated professionals is here to guide you through every step
              of your home financing journey.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border bg-background p-6 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start gap-5">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.title}</p>
                    <p className="text-xs text-muted-foreground">{member.nmls}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="size-4 text-primary" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\./g, "")}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="size-4 text-primary" />
                    {member.phone}
                  </a>
                  {member.phone2 && (
                    <a
                      href={`tel:${member.phone2.replace(/\./g, "")}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-6"
                    >
                      <Phone className="size-4 text-primary/70" />
                      {member.phone2}
                    </a>
                  )}
                </div>

                {member.bio && (
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How We Work Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your journey to homeownership
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We constantly work on delivering the best loan services to our
              clients. Our officer will walk you through every step of the loan
              application and approval process – from answering questions, to
              closing your loan quickly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Apply Online Process */}
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-primary">Apply Online</span>
                <ArrowUpRight className="size-5 text-primary" />
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "1",
                    label: "Apply Online",
                    desc: "Start your application",
                  },
                  {
                    step: "2",
                    label: "Enter Your Information",
                    desc: "10 minutes",
                  },
                  { step: "3", label: "Pre-Approved", desc: "<4 hours" },
                  { step: "4", label: "CTC", desc: "<18 Days" },
                  {
                    step: "5",
                    label: "Close",
                    desc: "<21 Days (on Conforming Loans)",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 rounded-xl bg-muted/50 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Process */}
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-primary">Consultation</span>
                <Users className="size-5 text-primary" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Need additional information...
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { step: "1", label: "Schedule a Free Consultation" },
                  { step: "2", label: "Discuss your financial goal" },
                  {
                    step: "3",
                    label: "Review your condition and find a solution",
                  },
                  { step: "4", label: "Help you prepare required items" },
                  { step: "5", label: "Help you get Pre-Approved" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 rounded-xl bg-muted/50 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {item.step}
                    </div>
                    <p className="font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-[#F71607] to-[#b31005] p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Knowledge, experience and speed is everything in mortgage
            satisfaction. We will make it happen for you: secured, faster,
            easier and cheaper!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-[#F71607] transition-all hover:scale-105 hover:bg-[white]/90"
            >
              Apply Now
            </Link>
            <Link
              href="/loan-programs"
              className="rounded-full bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Loan Programs
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            We build partnerships, one loan at a time. Average borrower will
            obtain 11 loans in their lifetime.
          </p>
        </div>
      </section>
    </main>
  );
}
