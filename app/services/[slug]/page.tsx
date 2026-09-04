import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { services } from "@/lib/site";
const details: Record<
  string,
  { eyebrow: string; intro: string; points: string[] }
> = {
  "web-development": {
    eyebrow: "Web Development",
    intro:
      "Digital products with a point of view — fast, accessible, and built around the people who use them.",
    points: [
      "Strategy, UX, and interface design",
      "Modern Next.js engineering",
      "CMS and commerce integrations",
      "Performance and accessibility",
    ],
  },
  seo: {
    eyebrow: "SEO",
    intro:
      "Make your best work easier to find with a search strategy built for lasting relevance, not quick tricks.",
    points: [
      "Technical audits and foundations",
      "Content strategy and production",
      "On-page optimization",
      "Measurement and iteration",
    ],
  },
  "digital-marketing": {
    eyebrow: "Digital Marketing",
    intro:
      "Campaigns that connect the right message with the right people — and give you a clear read on what is working.",
    points: [
      "Positioning and campaign strategy",
      "Paid social and search",
      "Creative systems and testing",
      "Analytics and reporting",
    ],
  },
};
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = details[slug];
  return { title: detail?.eyebrow ?? "Service" };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = details[slug];
  if (!detail) notFound();
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
          {detail.eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.05em] sm:text-7xl">
          Build something <span className="text-primary">worth finding.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-8 text-muted-foreground">
          {detail.intro}
        </p>
        <Button href="/contact" className="mt-10">
          Start a conversation
        </Button>
      </section>
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              What&apos;s included
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              The right things,
              <br />
              done properly.
            </h2>
          </div>
          <ul className="flex flex-col gap-5">
            {detail.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 border-b border-border pb-5 text-lg"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                {point}
                <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
