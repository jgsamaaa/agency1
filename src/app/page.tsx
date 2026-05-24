import Image from "next/image";

const services = [
  {
    title: "Website builds",
    description:
      "Fast, polished Next.js sites with reusable sections, clean CMS-ready structure, and responsive details handled from the start.",
  },
  {
    title: "Brand systems",
    description:
      "Identity, type, color, and page patterns shaped into a web system that feels consistent across every touchpoint.",
  },
  {
    title: "Conversion pages",
    description:
      "Landing pages, offer pages, and launch pages written and designed around clear action, trust, and momentum.",
  },
];

const projects = [
  "SaaS launch page",
  "Local service site",
  "Portfolio refresh",
  "Product campaign",
];

const process = ["Map", "Design", "Build", "Launch"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Agency 1 home">
          <span className="grid size-9 place-items-center rounded-md bg-zinc-950 text-sm font-semibold text-white">
            A1
          </span>
          <span className="text-base font-semibold">Agency 1</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a className="transition hover:text-zinc-950" href="#services">
            Services
          </a>
          <a className="transition hover:text-zinc-950" href="#work">
            Work
          </a>
          <a className="transition hover:text-zinc-950" href="#process">
            Process
          </a>
        </nav>

        <a
          href="mailto:hello@agency1.dev"
          className="rounded-md bg-[#1769ff] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f55d9] focus:outline-none focus:ring-2 focus:ring-[#1769ff] focus:ring-offset-2"
        >
          Start a project
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-8 pt-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:pb-6 lg:pt-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold leading-[1.08] text-zinc-950 sm:text-5xl">
            Websites that make your business look ready for the next stage.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Agency 1 designs and builds sharp marketing websites for founders,
            creators, and service teams that need a credible web presence
            without the drag of a huge process.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@agency1.dev"
              className="rounded-md bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
            >
              Book a build
            </a>
            <a
              href="#work"
              className="rounded-md border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:border-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
            >
              View work
            </a>
          </div>

          <dl className="mt-6 hidden max-w-lg grid-cols-3 gap-5 border-t border-zinc-200 pt-4 sm:grid">
            <div>
              <dt className="text-3xl font-semibold text-[#1769ff]">14</dt>
              <dd className="mt-1 text-sm leading-5 text-zinc-500">day sprint</dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-[#ff6b4a]">3</dt>
              <dd className="mt-1 text-sm leading-5 text-zinc-500">core pages</dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-[#13a56b]">100%</dt>
              <dd className="mt-1 text-sm leading-5 text-zinc-500">responsive</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-md bg-[#13a56b] lg:block" />
          <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-md bg-[#ff6b4a] lg:block" />
          <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-2xl shadow-zinc-200">
            <Image
              src="/agency-hero.png"
              alt="A design studio desk with website mockups, color swatches, and responsive screens."
              width={1680}
              height={945}
              priority
              className="aspect-[16/9] w-full object-cover sm:aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-zinc-950">
              Built for teams that need the site to be clear, fast, and easy to
              grow.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-zinc-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-zinc-950">
            A flexible starter for copied sites, agency pages, and custom
            landing pages.
          </h2>
          <p className="max-w-md text-sm leading-6 text-zinc-600">
            This project is ready for real sections, client-specific copy,
            image swaps, and deployment once each site direction is chosen.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project}
              className="min-h-48 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div
                className="mb-10 h-2 rounded-sm"
                style={{
                  backgroundColor:
                    index === 0
                      ? "#1769ff"
                      : index === 1
                        ? "#ff6b4a"
                        : index === 2
                          ? "#13a56b"
                          : "#18181b",
                }}
              />
              <h3 className="text-lg font-semibold text-zinc-950">{project}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Strategy, design, responsive build, and launch-ready polish in a
                tidy Next.js codebase.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="bg-zinc-950 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              The process stays compact so the site keeps moving.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-300">
              Every build starts with the actual business goal, then turns into
              reusable sections, clean copy blocks, and responsive pages that
              are ready to ship.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-4">
            {process.map((step, index) => (
              <li key={step} className="rounded-lg border border-white/15 p-5">
                <span className="text-sm font-semibold text-[#6aa0ff]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-950">
            Ready for the first website copy.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
            Drop in the reference, screenshots, or target site direction, and
            this stack is ready for the next build.
          </p>
        </div>
        <a
          href="mailto:hello@agency1.dev"
          className="rounded-md bg-[#1769ff] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0f55d9] focus:outline-none focus:ring-2 focus:ring-[#1769ff] focus:ring-offset-2"
        >
          Send the brief
        </a>
      </section>
    </main>
  );
}
