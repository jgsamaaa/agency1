"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

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
      "I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Great design starts with understanding. I map out user journeys, define key moments, and shape interfaces that feel intuitive from the first click. The goal is to create experiences that connect - interfaces that do not just function, but resonate with the people who use them every day.",
  },
  {
    number: "03",
    title: "Visual Direction",
    description:
      "A brand is more than a logo; it is how everything feels together. I craft cohesive visual systems built around color, typography, and tone, giving brands a clear and consistent identity across digital touchpoints.",
  },
  {
    number: "04",
    title: "Motion & Interaction",
    description:
      "Movement brings design to life. I use motion to guide attention, create flow, and add rhythm to static layouts. Subtle transitions, scroll-based animations, and micro-interactions help every interface feel dynamic and alive.",
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
        "Advanced GSAP animations",
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
        "Advanced GSAP animations",
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
      "The project felt more like collaboration than outsourcing. The design captured the exact emotion we wanted our users to feel.",
    name: "Noah B.",
    role: "Product Lead",
  },
  {
    quote:
      "Every part of the site feels intentional, nothing overdone, nothing missing. It is clean, fast, and visually stunning.",
    name: "Sofia T.",
    role: "Marketing Manager",
  },
  {
    quote:
      "Aluro translated a loose idea into a full visual experience. It is rare to find someone who gets both the aesthetic and the strategy.",
    name: "Julian P.",
    role: "Co-Founder",
  },
  {
    quote:
      "From day one, the communication, structure, and execution were flawless. The end result feels premium and uniquely ours.",
    name: "Elise K.",
    role: "Studio Owner",
  },
];

const faqs = [
  {
    question: "What is Aluro?",
    answer:
      "Aluro is a free, single-page Webflow portfolio template built for creative people who want a clean, minimal, and impactful online presence. It is designed to feel premium, with smooth interactions, dark aesthetics, and a layout that highlights your work beautifully.",
  },
  {
    question: "Who is this template for?",
    answer:
      "Aluro is ideal for UI/UX designers, freelancers, and creatives who want to quickly launch a stylish personal portfolio without starting from scratch. It is perfect if you want a sleek one-page layout focused on visuals, storytelling, and personality.",
  },
  {
    question: "Can I replace the images and animations with my own?",
    answer:
      "Absolutely. Aluro is built to be fully customizable. You can swap every image, update animations, and adjust layout styles directly without touching the core page structure.",
  },
  {
    question: "Can you help me customize this template?",
    answer:
      "Of course. If you would like to take Aluro further, redesign sections, add CMS features, or create custom animations, send an inquiry and start the conversation.",
  },
  {
    question: "Is it optimized for performance and responsiveness?",
    answer:
      "Yes. Every section in Aluro is optimized for performance, accessibility, and smooth responsiveness across devices. It is clean, fast, and easy to maintain.",
  },
];

const budgets = ["$2,000", "$2,000 - $5,000", "$5,000 - $10,000", "$10,000+", "Not Sure"];
const marqueeWords = Array.from({ length: 18 }, (_, index) => `ALURO®-${index}`);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function RevealText({ text }: { text: string }) {
  return (
    <span className="split-line" data-reveal>
      {text.split(" ").map((word, index) => (
        <span
          className="split-word"
          key={`${word}-${index}`}
          style={{ transitionDelay: `${index * 45}ms` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const serviceSectionRef = useRef<HTMLElement | null>(null);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [serviceProgress, setServiceProgress] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(budgets[1]);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (!serviceSectionRef.current) return;
      const rect = serviceSectionRef.current.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      setServiceProgress(clamp((-rect.top + window.innerHeight * 0.18) / scrollable, 0, 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isContactOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactOpen]);

  const pricingPlans = useMemo(() => pricing[billing], [billing]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const nextWork = () => setWorkIndex((value) => (value + 1) % workItems.length);
  const prevWork = () => setWorkIndex((value) => (value - 1 + workItems.length) % workItems.length);
  const nextTestimonial = () =>
    setTestimonialIndex((value) => (value + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c0e] text-[#f6f3f0]">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-3">
          <a
            aria-label="Aluro home"
            className="hidden text-sm font-medium tracking-[0.24em] text-[#f6f3f0]/70 transition hover:text-[#f6f3f0] sm:block"
            href="#top"
          >
            ALURO
          </a>
          <nav className="flex items-center gap-1 rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/10 p-1.5 text-sm text-[#f6f3f0]/70 shadow-2xl shadow-black/30 backdrop-blur">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                <span>{item.label}</span>
              </a>
            ))}
            <button
              className="nav-contact"
              onClick={() => setIsContactOpen(true)}
              type="button"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <section
        className="relative flex min-h-[700px] items-center justify-center px-4 pb-10 pt-24 sm:min-h-[620px]"
        id="top"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,85,254,0.24),transparent_28%),radial-gradient(circle_at_50%_68%,rgba(246,243,240,0.08),transparent_24%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 opacity-70">
          {Array.from({ length: 3 }, (_, row) => (
            <div
              className="flex min-w-max animate-marquee items-center gap-4"
              key={row}
              style={{
                animationDirection: row === 1 ? "reverse" : "normal",
                animationDuration: `${24 + row * 5}s`,
              }}
            >
              {marqueeWords.map((word) => (
                <span
                  className="text-[82px] font-medium leading-none text-[#f6f3f0]/20 sm:text-[142px] lg:text-[170px]"
                  key={`${word}-${row}`}
                >
                  {word.split("-")[0]}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
          <div className="hero-portrait relative w-full max-w-[320px] overflow-hidden rounded-[22px] border border-[#f6f3f0]/10 bg-[#f6f3f0]/5 shadow-2xl shadow-black/60 sm:max-w-[360px]">
            <Image
              alt="Man in a blue suit for the Aluro hero section."
              className="aspect-[3/4] w-full object-cover"
              height={1200}
              priority
              src="/aluro/hero-man.avif"
              width={900}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/50 to-transparent" />
          </div>
          <p
            className="mt-6 max-w-sm text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#f6f3f0]/80"
            data-reveal
          >
            Designing quiet, confident digital experiences
          </p>
        </div>
      </section>

      <section
        className="relative px-4 pb-20 pt-10 sm:px-6 lg:pb-28 lg:pt-8"
        id="services"
        ref={serviceSectionRef}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-medium text-[#f6f3f0] sm:text-5xl">
            <RevealText text="What I can help with." />
          </h2>
          <div className="mt-12 space-y-28">
            {serviceItems.map((service, index) => {
              const localProgress = clamp(serviceProgress * 1.45 - index * 0.2, 0, 1);
              const scale = 0.7 + localProgress * 0.3;
              return (
                <article
                  className="service-card sticky top-28 overflow-hidden rounded-xl border border-[#f6f3f0]/10 bg-[#111318] p-6 shadow-2xl shadow-black/30 sm:p-8"
                  data-reveal
                  key={service.number}
                  style={{ transform: `scale(${scale})`, zIndex: index + 1 }}
                >
                  <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr_auto]">
                    <div className="flex items-start gap-4">
                      <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-[#0055fe] text-white">
                        <ArrowIcon />
                      </span>
                      <h3 className="text-2xl font-medium">{service.title}</h3>
                    </div>
                    <p className="max-w-3xl text-base leading-7 text-[#f6f3f0]/62">
                      {service.description}
                    </p>
                    <span className="text-sm font-semibold text-[#0055fe]">
                      {service.number}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-28" id="work">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-medium sm:text-5xl">
              <RevealText text="Things I've Designed." />
            </h2>
            <span className="text-sm uppercase tracking-[0.26em] text-[#f6f3f0]/45">
              Work Project
            </span>
          </div>
          <div className="relative mt-10 overflow-hidden" data-reveal>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0b0c0e] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0b0c0e] to-transparent" />
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ transform: `translateX(calc(${workIndex} * -100%))` }}
            >
              {workItems.map((item, index) => (
                <a
                  className={`work-slide group min-w-full px-2 transition duration-500 ${
                    index === workIndex ? "opacity-100" : "opacity-40"
                  }`}
                  href="#work"
                  key={item.title}
                >
                  <div className="relative h-[360px] overflow-hidden rounded-xl border-2 border-[#f6f3f0]/5">
                    <Image
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                      height={700}
                      src={item.image}
                      width={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/30 to-transparent" />
                    <div className="relative flex h-full flex-col justify-between p-6">
                      <div className="flex flex-wrap justify-end gap-2">
                        {item.tags.map((tag) => (
                          <span
                            className="rounded-full border border-[#f6f3f0]/12 bg-[#0b0c0e]/35 px-3 py-1 text-xs text-[#f6f3f0]/76 backdrop-blur"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-end justify-between gap-8">
                        <div>
                          <h3 className="text-3xl font-medium">{item.title}</h3>
                          <p className="mt-3 max-w-md text-sm leading-6 text-[#f6f3f0]/66">
                            {item.description}
                          </p>
                        </div>
                        <span className="hidden text-xs uppercase tracking-[0.2em] text-[#f6f3f0]/44 sm:block">
                          Work Project
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-8 right-8 flex items-center justify-between">
              <button
                aria-label="Previous work project"
                className="slider-button pointer-events-auto"
                onClick={prevWork}
                type="button"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                aria-label="Next work project"
                className="slider-button pointer-events-auto"
                onClick={nextWork}
                type="button"
              >
                <ArrowIcon />
              </button>
            </div>
            <div className="mt-5 flex justify-center gap-2">
              {workItems.map((item, index) => (
                <button
                  aria-label={`Show ${item.title}`}
                  className={`size-2 rounded-full transition ${
                    index === workIndex ? "bg-[#f6f3f0]" : "bg-[#f6f3f0]/24"
                  }`}
                  key={item.title}
                  onClick={() => setWorkIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-28" id="pricing">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="text-4xl font-medium sm:text-5xl">
              <RevealText text="Two ways to begin." />
            </h2>
            <div className="flex w-fit rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/5 p-1">
              {(["monthly", "yearly"] as const).map((option) => (
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
                    billing === option
                      ? "bg-[#0055fe] text-white"
                      : "text-[#f6f3f0]/58 hover:text-white"
                  }`}
                  key={option}
                  onClick={() => setBilling(option)}
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2" data-reveal key={billing}>
            {pricingPlans.map((plan) => (
              <article
                className="rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/[0.04] p-6"
                key={plan.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium">{plan.title}</h3>
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
                <p className="mt-8 text-5xl font-medium">{plan.price}</p>
                <p className="mt-3 text-sm text-[#f6f3f0]/56">
                  {plan.description}
                </p>
                <button
                  className="cta-button mt-8 w-full"
                  onClick={() => setIsContactOpen(true)}
                  type="button"
                >
                  <span>Start with {plan.title}</span>
                  <span aria-hidden="true">Start with {plan.title}</span>
                </button>
                <div className="mt-8 border-t border-[#f6f3f0]/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6f3f0]/40">
                    You&apos;ll get
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-[#f6f3f0]/68">
                    {plan.features.map((feature) => (
                      <li className="flex gap-3" key={feature}>
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

      <section className="px-4 py-20 sm:px-6 lg:py-28" id="testimonials">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-4xl font-medium sm:text-5xl">
            <RevealText text="Collaboration, in their words." />
          </h2>
          <div className="relative mt-10 overflow-hidden pb-12" data-reveal>
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ transform: `translateX(calc(${testimonialIndex} * -100%))` }}
            >
              {testimonials.map((testimonial, index) => (
                <figure
                  className={`min-w-full px-2 transition duration-500 ${
                    index === testimonialIndex ? "opacity-100" : "opacity-40"
                  }`}
                  key={testimonial.name}
                >
                  <div className="min-h-[300px] rounded-xl border border-[#f6f3f0]/10 bg-[#f6f3f0]/[0.035] p-7">
                    <blockquote className="max-w-3xl text-2xl leading-10 text-[#f6f3f0]/82">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <figcaption className="mt-12">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f6f3f0]/42">
                        {testimonial.role}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between">
              <button
                aria-label="Previous testimonial"
                className="slider-button"
                onClick={prevTestimonial}
                type="button"
              >
                <ArrowIcon direction="left" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    aria-label={`Show testimonial from ${testimonial.name}`}
                    className={`size-2 rounded-full transition ${
                      index === testimonialIndex ? "bg-[#f6f3f0]" : "bg-[#f6f3f0]/24"
                    }`}
                    key={testimonial.name}
                    onClick={() => setTestimonialIndex(index)}
                    type="button"
                  />
                ))}
              </div>
              <button
                aria-label="Next testimonial"
                className="slider-button"
                onClick={nextTestimonial}
                type="button"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-28" id="faq">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <h2 className="text-4xl font-medium sm:text-5xl">
            <RevealText text="Questions, answered." />
          </h2>
          <div className="divide-y divide-[#f6f3f0]/10 border-y border-[#f6f3f0]/10" data-reveal>
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-medium"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-[#0055fe] transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-base leading-7 text-[#f6f3f0]/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="video-cta relative mx-4 overflow-hidden rounded-[20px] border border-[#0055fe]/35 bg-[linear-gradient(135deg,#0055fe,#032d81)] px-6 py-20 text-center sm:mx-6 lg:mx-auto lg:max-w-6xl"
        data-reveal
        id="cta"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.26),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-5xl font-medium sm:text-7xl">
            Your story, well designed.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
            Every brand has a story worth telling - let&apos;s design yours with
            intention and style.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              className="cta-button light"
              onClick={() => setIsContactOpen(true)}
              type="button"
            >
              <span>Let&apos;s Collaborate</span>
              <span aria-hidden="true">Let&apos;s Collaborate</span>
            </button>
            <a className="cta-button outline" href="#work">
              <span>View Portfolio</span>
              <span aria-hidden="true">View Portfolio</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 py-16 sm:px-6">
        <div
          className="mx-auto grid max-w-6xl gap-10 border-t border-[#f6f3f0]/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]"
          data-reveal
        >
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
                <a className="footer-link" href={item.href} key={item.href}>
                  {item.label === "Work" ? "Case Studies" : item.label}
                </a>
              ))}
              <a className="footer-link" href="#testimonials">
                Testimonials
              </a>
              <button
                className="footer-link text-left"
                onClick={() => setIsContactOpen(true)}
                type="button"
              >
                Contact
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f3f0]/38">
              Social
            </p>
            <div className="mt-4 flex gap-3">
              {["Ig", "Dr", "In", "X"].map((item) => (
                <a
                  className="grid size-10 place-items-center rounded-lg border border-[#f6f3f0]/10 text-sm text-[#f6f3f0]/62 transition hover:border-[#0055fe] hover:text-white"
                  href="#top"
                  key={item}
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

      <div
        aria-hidden={!isContactOpen}
        className={`contact-popup fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f3f0]/[0.04] px-4 backdrop-blur-xl transition duration-500 ${
          isContactOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          aria-label="Close contact form"
          className="absolute right-[max(24px,calc((100vw-660px)/2))] top-[max(24px,calc((100vh-540px)/2))] z-20 grid size-8 place-items-center rounded-full bg-[#0055fe] text-white transition hover:scale-110"
          onClick={() => setIsContactOpen(false)}
          type="button"
        >
          <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
            <path
              d="m3 3 8 8M11 3l-8 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>
        <form
          className={`contact-form max-h-[86vh] w-full max-w-[660px] overflow-y-auto rounded-xl bg-[#f6f3f0] p-5 text-[#0b0c0e] shadow-2xl shadow-black/50 transition duration-500 sm:p-6 ${
            isContactOpen ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
          }`}
          onSubmit={handleSubmit}
        >
          {submitted ? (
            <div className="grid min-h-[420px] place-items-center text-center">
              <div>
                <p className="text-3xl font-medium">Thank you!</p>
                <p className="mt-3 text-sm text-[#0b0c0e]/60">
                  Your submission has been received.
                </p>
                <button
                  className="mt-8 rounded-lg bg-[#0055fe] px-5 py-3 text-sm font-semibold text-white"
                  onClick={() => {
                    setSubmitted(false);
                    setIsContactOpen(false);
                  }}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="contact-label">
                  <span>Name</span>
                  <input className="contact-field" placeholder="John Doe" required />
                </label>
                <label className="contact-label">
                  <span>Email</span>
                  <input className="contact-field" placeholder="Email" required type="email" />
                </label>
              </div>
              <label className="contact-label mt-4">
                <span>Subject</span>
                <select className="contact-field" defaultValue="Type of project">
                  <option disabled>Type of project</option>
                  <option>First choice</option>
                  <option>Second choice</option>
                  <option>Third choice</option>
                </select>
              </label>
              <label className="contact-label mt-4">
                <span>Message</span>
                <textarea
                  className="contact-field min-h-32 resize-none"
                  placeholder="Tell us about your project"
                />
              </label>
              <div className="mt-4 flex flex-wrap gap-2">
                {budgets.map((budget) => (
                  <button
                    className={`rounded-lg border px-4 py-2 text-sm transition ${
                      selectedBudget === budget
                        ? "border-[#0055fe] bg-[#0055fe] text-white"
                        : "border-[#0b0c0e]/12 text-[#0b0c0e]/80 hover:border-[#0055fe]"
                    }`}
                    key={budget}
                    onClick={() => setSelectedBudget(budget)}
                    type="button"
                  >
                    {budget}
                  </button>
                ))}
              </div>
              <label className="mt-6 flex items-center gap-3 text-sm text-[#0b0c0e]/70">
                <input
                  checked={agreed}
                  className="size-4 accent-[#0055fe]"
                  onChange={(event) => setAgreed(event.target.checked)}
                  required
                  type="checkbox"
                />
                <span>
                  By sending this form, I agree to the Terms of Service and
                  Privacy Policy.
                </span>
              </label>
              <button className="cta-button blue mt-6" type="submit">
                <span>Send Inquiry</span>
                <span aria-hidden="true">Send Inquiry</span>
              </button>
            </>
          )}
        </form>
      </div>
    </main>
  );
}
