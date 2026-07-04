import { SERVICES } from "../data";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";

const PROCESS = [
  { step: "01", title: "Consultation", desc: "We discuss your vision, needs, and budget." },
  { step: "02", title: "Design & CAD", desc: "Sketch-to-CAD conversion and 3D visualization." },
  { step: "03", title: "Fabrication", desc: "Precision cutting, forming, welding & finishing." },
  { step: "04", title: "Installation", desc: "Professional on-site delivery and installation." },
];

export default function Services({ navigate }: { navigate: (p: string) => void }) {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive metal fabrication and design solutions — engineered with precision, delivered with care."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-72 w-full rounded-2xl object-cover shadow-lg sm:h-80"
                  />
                ) : (
                  <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#2C3E50] to-[#1a2530] shadow-lg sm:h-80">
                    <Icon name={s.icon} className="h-24 w-24 text-[#FF8C00]" />
                  </div>
                )}
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF8C00]/10 text-[#FF8C00]">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h2 className="text-2xl font-extrabold text-[#2C3E50] sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{s.long}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-slate-700">
                      <Icon
                        name="check"
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#FF8C00]"
                      />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("contact")}
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#2C3E50] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#FF8C00]"
                >
                  Request a Quote <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#2C3E50] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#C0C0C0]">
              A clear, collaborative process from first idea to final
              installation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="rounded-xl border border-white/10 bg-white/5 p-7 transition hover:border-[#FF8C00]/50"
              >
                <span className="text-4xl font-extrabold text-[#FF8C00]">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
