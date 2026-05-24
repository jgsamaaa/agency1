"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const serviceItems = [
  {
    number: "01",
    title: "Website Design",
    description:
      "I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Great design starts with understanding. I map out user journeys, define key moments, and shape interfaces that feel intuitive from the first click.",
  },
  {
    number: "03",
    title: "Visual Direction",
    description:
      "A brand is more than a logo; it is how everything feels together. I craft cohesive visual systems around color, typography, and tone.",
  },
  {
    number: "04",
    title: "Motion & Interaction",
    description:
      "Movement brings design to life. Subtle transitions, scroll-based animations, and micro-interactions help every interface feel dynamic and alive.",
  },
];

const workItems = [
  {
    title: "Auralis",
    tags: ["Landing Page", "Brand Experience"],
    description:
      "Product landing page for a sound design startup blending tech and emotion.",
    image: "/aluro/work-auralis.avif",
  },
  {
    title: "Lumina Studio",
    tags: ["Web Design", "UI/UX"],
    description:
      "A creative agency website built around motion and minimalism.",
    image: "/aluro/work-lumina.avif",
  },
  {
    title: "Moden Interiors",
    tags: ["E-commerce", "UI Design"],
    description:
      "Clean and tactile interface for a boutique interior design brand.",
    image: "/aluro/work-moden.avif",
  },
  {
    title: "Nexora",
    tags: ["Portfolio", "Interactions"],
    description:
      "Futuristic portfolio for a motion designer, powered by smooth transitions.",
    image: "/aluro/work-nexora.avif",
  },
  {
    title: "Verse",
    tags: ["UI/UX", "Dashboard"],
    description: "Dashboard concept designed for clarity and calm data storytelling.",
    image: "/aluro/work-verse.avif",
  },
  {
    title: "Solen",
    tags: ["Portfolio", "Visual Design"],
    description:
      "Personal brand site for a lifestyle photographer with cinematic visual focus.",
    image: "/aluro/work-solen.avif",
  },
];

const pricing = {
  monthly: [
    {
      title: "Essential",
      eyebrow: "Simple, focused, effective.",
      price: "$950",
      description: "Perfect for personal sites and small teams.",
      value: true,
      features: [
        "Custom one-page website design",
        "Fully responsive layout",
        "Light animations & interactions",
        "Webflow CMS setup optional",
        "SEO-ready structure",
      ],
    },
    {
      title: "Elevate",
      eyebrow: "For stories that deserve motion.",
      price: "$1,950",
      description: "Best for growing businesses and creative studios.",
      features: [
        "Multi-page website up to 5 pages",
        "Custom UI/UX design",
        "Advanced GSAP-style animations",
        "CMS & dynamic collections",
        "Launch support & training",
      ],
    },
  ],
  yearly: [
    {
      title: "Essential",
      eyebrow: "Simple, focused, effective.",
      price: "$750",
      description: "Perfect for personal sites and small teams.",
      value: true,
      features: [
        "Custom one-page website design",
        "Fully responsive layout",
        "Light animations & interactions",
        "Webflow CMS setup optional",
        "SEO-ready structure",
      ],
    },
    {
      title: "Elevate",
      eyebrow: "For stories that deserve motion.",
      price: "$1,550",
      description: "Best for growing businesses and creative studios.",
      features: [
        "Multi-page website up to 5 pages",
        "Custom UI/UX design",
        "Advanced GSAP-style animations",
        "CMS & dynamic collections",
        "Launch support & training",
      ],
    },
  ],
};

const testimonials = [
  {
    quote:
      "Aluro brought our brand to life with a design that feels effortless. Every detail, from layout to motion, just fits who we are.",
    name: "Daniel M.",
    role: "Creative Director",
  },
  {
    quote:
      "Working with Aluro was refreshing. Clear communication, beautiful design, and a deep understanding of what makes a website feel alive.",
    name: "Lila R.",
    role: "CEO",
  },
  {
    quote:
      "Every part of the site feels intentional, nothing overdone, nothing missing. It is clean, fast, and visually stunning.",
    name: "Sofia T.",
    role: "Marketing Manager",
  },
];

const faqs = [
  {
    question: "What is Aluro?",
    answer:
      "Aluro is a single-page portfolio template built for creative people who want a clean, minimal, and impactful online presence.",
  },
  {
    question: "Who is this template for?",
    answer:
      "It is ideal for UI/UX designers, freelancers, studios, and creatives who want a sleek one-page layout focused on visuals and storytelling.",
  },
  {
    question: "Can I replace the images and animations with my own?",
    answer:
      "Yes. Every visual, section, and interaction is structured so it can be customized for a new brand or project direction.",
  },
  {
    question: "Is it optimized for performance and responsiveness?",
    answer:
      "Yes. The page is built to stay fast, responsive, and easy to maintain across desktop and mobile screens.",
  },
];

const marqueeWords = Array.from({ length: 18 }, (_, index) => `ALURO®-${index}`);

export default function Home() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c0e] text-[#f6f3f0]">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-3">
          <a
            href="#top"
            className="hidden text-sm font-medium tracking-[0.24em] text-[#f6f3f0]/70 sm:block"
            aria-label="Aluro home"
          >
            ALURO
          </a>
          <nav className="flex items-center gap-1 rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/10 p-1.5 text-sm text-[#f6f3f0]/70 shadow-2xl shadow-black/30 backdrop-blur">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-[#f6f3f0]/10 hover:text-[#f6f3f0] sm:px-4"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:office@eclipso.studio"
              className="rounded-lg bg-[#f6f3f0] px-4 py-2 font-medium text-[#0b0c0e] transition hover:bg-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-[700px] items-center justify-center px-4 pb-10 pt-24 sm:min-h-[620px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,85,254,0.24),transparent_28%),radial-gradient(circle_at_50%_68%,rgba(246,243,240,0.08),transparent_24%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 opacity-70">
          {Array.from({ length: 3 }, (_, row) => (
            <div
              key={row}
              className="flex min-w-max animate-marquee items-center gap-4"
              style={{
                animationDirection: row === 1 ? "reverse" : "normal",
                animationDuration: `${24 + row * 5}s`,
              }}
            >
              {marqueeWords.map((word) => (
                <span
                  key={`${word}-${row}`}
                  className="text-[82px] font-medium leading-none text-[#f6f3f0]/20 sm:text-[142px] lg:text-[170px]"
                >
                  {word.split("-")[0]}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
          <div className="relative w-full max-w-[320px] overflow-hidden rounded-[22px] border border-[#f6f3f0]/10 bg-[#f6f3f0]/5 shadow-2xl shadow-black/60 sm:max-w-[360px]">
            <Image
              src="/aluro/hero-man.avif"
              alt="Man in a blue suit for the Aluro hero section."
              width={900}
              height={1200}
              priority
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/50 to-transparent" />
          </div>
          <p className="mt-6 max-w-sm text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#f6f3f0]/80">
            Designing quiet, confident digital experiences
          </p>
        </div>
      </section>

      <section id="services" className="px-4 pb-20 pt-10 sm:px-6 lg:pb-28 lg:pt-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-medium text-[#f6f3f0] sm:text-5xl">
            What I can help with.
          </h2>
          <div className="mt-12 divide-y divide-[#f6f3f0]/10 border-y border-[#f6f3f0]/10">
            {serviceItems.map((service) => (
              <article
                key={service.number}
                className="grid gap-6 py-8 sm:grid-cols-[0.6fr_1fr_auto] sm:items-start"
              >
                <h3 className="text-2xl font-medium">
                  {service.title}
                </h3>
                <p className="max-w-3xl text-base leading-7 text-[#f6f3f0]/62">
                  {service.description}
                </p>
                <span className="text-sm font-semibold text-[#0055fe]">
                  {service.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Things I&apos;ve Designed.
            </h2>
            <span className="text-sm uppercase tracking-[0.26em] text-[#f6f3f0]/45">
              Work Project
            </span>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {workItems.map((item) => (
              <a
                key={item.title}
                href="#work"
                className="group overflow-hidden rounded-xl border-2 border-[#f6f3f0]/5 bg-[#f6f3f0]/[0.03] transition hover:border-[#0055fe]/80"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111318]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={700}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#f6f3f0]/10 px-3 py-1 text-xs text-[#f6f3f0]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-8 text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#f6f3f0]/56">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Two ways to begin.
            </h2>
            <div className="flex w-fit rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/5 p-1">
              {(["monthly", "yearly"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
                    billing === option
                      ? "bg-[#0055fe] text-white"
                      : "text-[#f6f3f0]/58 hover:text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {pricing[billing].map((plan) => (
              <article
                key={plan.title}
                className="rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/[0.04] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#f6f3f0]/54">
                      {plan.eyebrow}
                    </p>
                  </div>
                  {plan.value ? (
                    <span className="rounded-full bg-[#0055fe] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      Best Value
                    </span>
                  ) : null}
                </div>
                <p className="mt-8 text-5xl font-medium">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm text-[#f6f3f0]/56">
                  {plan.description}
                </p>
                <a
                  href="mailto:office@eclipso.studio"
                  className="mt-8 block rounded-lg bg-[#f6f3f0] px-5 py-3 text-center text-sm font-semibold text-[#0b0c0e] transition hover:bg-white"
                >
                  Start with {plan.title}
                </a>
                <div className="mt-8 border-t border-[#f6f3f0]/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6f3f0]/40">
                    You&apos;ll get
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-[#f6f3f0]/68">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-1 size-2 rounded-full bg-[#0055fe]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-4xl font-medium sm:text-5xl">
            Collaboration, in their words.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/[0.035] p-6"
              >
                <blockquote className="text-lg leading-8 text-[#f6f3f0]/78">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-10">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f6f3f0]/42">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <h2 className="text-4xl font-medium sm:text-5xl">
            Questions, answered.
          </h2>
          <div className="divide-y divide-[#f6f3f0]/10 border-y border-[#f6f3f0]/10">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-medium"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#0055fe]">
                    {openFaq === index ? "-" : "+"}
                  </span>
                </button>
                {openFaq === index ? (
                  <p className="pb-6 text-base leading-7 text-[#f6f3f0]/60">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative mx-4 overflow-hidden rounded-[20px] border border-[#0055fe]/35 bg-[linear-gradient(135deg,#0055fe,#032d81)] px-6 py-20 text-center sm:mx-6 lg:mx-auto lg:max-w-6xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.26),transparent_35%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-5xl font-medium sm:text-7xl">
            Your story, well designed.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
            Every brand has a story worth telling - let&apos;s design yours with
            intention and style.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:office@eclipso.studio"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0b0c0e] transition hover:bg-[#f6f3f0]"
            >
              Let&apos;s Collaborate
            </a>
            <a
              href="#work"
              className="rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-[#f6f3f0]/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-3xl font-medium">ALURO®</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#f6f3f0]/52">
              Every project starts with a story. I turn those stories into
              digital experiences that feel effortless and expressive.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f3f0]/38">
              Company
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[#f6f3f0]/62">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label === "Work" ? "Case Studies" : item.label}
                </a>
              ))}
              <a href="#testimonials" className="hover:text-white">
                Testimonials
              </a>
              <a href="mailto:office@eclipso.studio" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f3f0]/38">
              Social
            </p>
            <div className="mt-4 flex gap-3">
              {["Ig", "Dr", "In", "X"].map((item) => (
                <a
                  key={item}
                  href="#top"
                  className="grid size-10 place-items-center rounded-lg border border-[#f6f3f0]/10 text-sm text-[#f6f3f0]/62 transition hover:border-[#0055fe] hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-[#f6f3f0]/10 pt-6 text-xs text-[#f6f3f0]/36 sm:flex-row">
          <p>Aluro. All rights reserved. &copy; 2025</p>
          <p>Made in Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
