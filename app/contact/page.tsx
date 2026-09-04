"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Check,
  ArrowRight,
  Lock,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const intent = formData.get("intent") as string;
    const message = formData.get("message") as string;

    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Goal: ${intent}

Message:
${message || "No additional message provided."}

---
This inquiry was sent from the Generation Mortgage website.`,
    );

    // Open the user's email client with the inquiry details.
    window.open(
      `mailto:jerry@generationmtg.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank",
    );

    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <main className="pt-16 overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560520653-9e0e4c89a7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          {/* Gradient Overlay with opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-primary/5" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary animate-pulse">
              Get in touch
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-.05em] sm:text-7xl lg:text-8xl">
              Let's make homeownership
              <span className="text-primary block sm:inline"> a reality.</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
              We are here to guide you through every part of the mortgage
              process.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32 -mt-8 relative z-20">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Start a conversation
            </p>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              Start your homeownership journey.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">
              Tell us what you are looking for and we will help you find the
              right mortgage solution.
            </p>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col gap-5 text-sm">
              {/* Sales Office */}
              <a
                href="tel:+18608094800"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="size-5 text-primary group-hover:scale-110 transition-transform" />
                Call us: (860) 809-4800
              </a>

              {/* Marketing Dept */}
              <a
                href="tel:+18608094800"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group ml-8"
              >
                <Phone className="size-5 text-primary group-hover:scale-110 transition-transform" />
                Office: (860) 809-4800
              </a>

              {/* Customer Care Dept */}
              <a
                href="tel:+18608094800"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group ml-8"
              >
                <Phone className="size-5 text-primary group-hover:scale-110 transition-transform" />
                Customer Care: (860) 809-4800
              </a>

              {/* Office Main */}
              <a
                href="tel:+18608120252"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group ml-8"
              >
                <Phone className="size-5 text-primary group-hover:scale-110 transition-transform" />
                Office Main: (860) 812-0252
              </a>

              {/* Email - Primary */}
              <a
                href="mailto:jerry@generationmtg.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="size-5 text-primary group-hover:scale-110 transition-transform" />
                jerry@generationmtg.com
              </a>

              {/* Email - Secondary */}
              <a
                href="tel:+18608094800"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group ml-8"
              >
                <Mail className="size-5 text-primary group-hover:scale-110 transition-transform" />
                (860) 809-4800
              </a>

              {/* Office Location */}
              <span className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-5 text-primary" />
                105 East Center Street, Manchester, CT 06040
                <span className="text-xs text-muted-foreground/60">
                  (by appointment)
                </span>
              </span>

              {/* Mailing Address */}
              <span className="flex items-center gap-3 text-muted-foreground ml-8">
                <MapPin className="size-5 text-primary" />
                Manchester, CT 06040
              </span>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Connect with us
              </p>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/generationmortgage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-[#c13584] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="size-5"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/generationmortgage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-[#1877f2] hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-6"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    className="size-5"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-[#ff0000] hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-6"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                    className="size-5"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="size-5"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule a Consultation
                <ArrowRight size={17} />
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-background/50 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-primary/5 transition-all duration-300"
              >
                Join Our Newsletter
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-10 shadow-2xl hover:shadow-primary/5 transition-shadow duration-300">
            {sent ? (
              <div className="flex flex-col items-center text-center py-8 animate-in fade-in duration-500">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Check size={28} className="text-green-500" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[.25em] text-primary">
                  Message ready!
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-.05em]">
                  Thanks for reaching out.
                </h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Your email client has been opened with your message
                  pre-filled. We'll be in touch soon to continue the
                  conversation.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  If it didn't open, please contact us directly at{" "}
                  <a
                    href="mailto:jerry@generationmtg.com"
                    className="text-primary underline font-medium hover:brightness-110 transition-colors"
                  >
                    jerry@generationmtg.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:+18608094800"
                    className="text-primary underline font-medium hover:brightness-110 transition-colors"
                  >
                    (860) 809-4800
                  </a>
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    First name *
                    <input
                      className="rounded-xl border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                      name="firstName"
                      placeholder="John"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    Last name *
                    <input
                      className="rounded-xl border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                      name="lastName"
                      placeholder="Doe"
                    />
                  </label>
                </div>

                <label className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  Email address *
                  <input
                    className="rounded-xl border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                </label>

                <label className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  Phone number *
                  <input
                    className="rounded-xl border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                  />
                </label>

                <label className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  What are you exploring? *
                  <select
                    className="rounded-xl border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                    required
                    name="intent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Home Purchase">Buying a home</option>
                    <option value="Refinance for Lower payment">
                      Refinancing for lower payment
                    </option>
                    <option value="Refinance for Cash out">
                      Refinancing for cash out
                    </option>
                    <option value="Home Equity Line of Credit (HELOC)">
                      Home Equity Line of Credit
                    </option>
                    <option value="Investment Property">
                      Investment property
                    </option>
                    <option value="Commercial Real Estate Finance">
                      Commercial real estate
                    </option>
                    <option value="General Questions">Not sure yet</option>
                  </select>
                </label>

                <label className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  Tell us a little more *
                  <textarea
                    className="resize-none rounded-xl border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your mortgage needs..."
                  />
                </label>

                <button
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Opening email..." : "Send my message"}{" "}
                  <ArrowRight size={17} />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-6">
                  <Lock size={14} />
                  <span>
                    Your email client will open with your message pre-filled
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2022 Generation Mortgage, LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Refinance
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
