import { useEffect, useState } from "react";
import { COMPANY, PROJECTS, SERVICES } from "../data";
import Icon from "../components/Icon";

const HIGHLIGHTS = [
  {
    icon: "trophy",
    title: "6 Years of Excellence",
    desc: "In business since 2020, trusted by 100+ clients across Lusaka.",
  },
  {
    icon: "pencil",
    title: "Custom Design Expertise",
    desc: "Sketch-to-CAD conversion and 3D visualization for every project.",
  },
  {
    icon: "clock",
    title: "Fast Turnaround",
    desc: "Project-based timelines and efficient, reliable fabrication.",
  },
];

export default function Home({ navigate }: { navigate: (p: string) => void }) {
  const [slide, setSlide] = useState(0);
  const featured = PROJECTS.slice(0, 4);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % featured.length), 6000);
    return () => clearInterval(t);
  }, [featured.length]);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Architectural metalwork installation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/90 via-[#2C3E50]/70 to-[#2C3E50]/40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF8C00]/40 bg-[#FF8C00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF8C00]">
              From Concept to Installation
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Custom Metal Fabrication &amp; Architectural Design
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              We transform your vision into precision-engineered metalwork —
              custom gates, architectural structures, structural steel and
              beyond.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("portfolio")}
                className="rounded-md bg-[#FF8C00] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#e67e00]"
              >
                View Our Portfolio
              </button>
              <button
                onClick={() => navigate("contact")}
                className="rounded-md border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#2C3E50]"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#f5f6f8] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border-t-4 border-[#FF8C00] bg-white p-8 text-center shadow-sm transition hover:shadow-lg"
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF8C00]/10 text-[#FF8C00]">
                <Icon name={h.icon} className="h-7 w-7" />
              </span>
              <h3 className="text-lg font-bold text-[#2C3E50]">{h.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured carousel */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-[#2C3E50] sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Precision metalwork showcasing our design and engineering
              expertise.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {featured.map((p) => (
                <div key={p.id} className="relative min-w-full">
                  <div className="relative h-[340px] sm:h-[440px]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2530]/95 via-[#1a2530]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-10">
                      <span className="text-sm font-bold uppercase tracking-wider text-[#FF8C00]">
                        {p.category}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm text-white/85 sm:text-base">
                        {p.description}
                      </p>
                      <button
                        onClick={() => navigate("portfolio")}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white underline-offset-4 hover:text-[#FF8C00] hover:underline"
                      >
                        View Details <Icon name="arrow" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setSlide((s) => (s - 1 + featured.length) % featured.length)
              }
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2C3E50] shadow transition hover:bg-white"
              aria-label="Previous"
            >
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % featured.length)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2C3E50] shadow transition hover:bg-white"
              aria-label="Next"
            >
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2.5">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === slide ? "w-8 bg-[#FF8C00]" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#f5f6f8] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-[#2C3E50] sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Comprehensive metal fabrication and design solutions.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="group rounded-xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#2C3E50] text-[#FF8C00] transition group-hover:bg-[#FF8C00] group-hover:text-white">
                  <Icon name={s.icon} className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-bold text-[#2C3E50]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.short}
                </p>
                <button
                  onClick={() => navigate("services")}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF8C00] hover:underline"
                >
                  Learn More <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("services")}
              className="rounded-md border-2 border-[#2C3E50] px-8 py-3.5 text-sm font-bold text-[#2C3E50] transition hover:bg-[#2C3E50] hover:text-white"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FF8C00] py-16">
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-black/10" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Vision?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Get in touch with our design team for a free consultation and custom
            quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("contact")}
              className="rounded-md bg-white px-8 py-4 text-base font-bold text-[#FF8C00] shadow-lg transition hover:bg-[#2C3E50] hover:text-white"
            >
              Get a Free Quote
            </button>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border-2 border-white px-8 py-4 text-base font-bold text-white transition hover:bg-white hover:text-[#FF8C00]"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call Us: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
