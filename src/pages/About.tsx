import { COMPANY, VALUES } from "../data";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";

export default function About({ navigate }: { navigate: (p: string) => void }) {
  return (
    <div>
      <PageHero
        title="About Krugers Metal Fabrication"
        subtitle="6 years of precision, innovation, and design excellence in Lusaka, Zambia."
      />

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-[#2C3E50] sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Since 2020, Krugers Metal Fabrication has been at the forefront of
              custom metal design and precision engineering in Lusaka. We began
              with a simple mission: to deliver exceptional metalwork that
              combines artistic vision with technical excellence. Over six
              years, we've grown into a trusted partner for architects,
              contractors, developers, and property owners seeking bespoke metal
              solutions.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our journey has been defined by our commitment to understanding
              each client's unique needs, transforming sketches and concepts
              into precision-engineered reality, and never compromising on
              quality.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Today, we're recognized for our expertise in architectural
              metalwork, custom gate design, structural steel fabrication, and
              innovative design consultation. Every project we undertake
              reflects our core values: precision, creativity, reliability, and
              excellence.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/facility.jpg"
              alt="Krugers Metal Fabrication facility and expert team"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-[#FF8C00] px-8 py-6 text-white shadow-lg sm:block">
              <span className="block text-4xl font-extrabold">6+</span>
              <span className="text-sm font-medium">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          <div className="rounded-xl border-l-4 border-[#FF8C00] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#2C3E50]">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              To deliver precision-engineered, design-driven metal solutions
              that exceed expectations and transform architectural visions into
              lasting, high-quality installations.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-[#FF8C00] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#2C3E50]">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              To be Zambia's leading architectural metalwork and custom
              fabrication partner, recognized for innovation, quality
              craftsmanship, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-[#2C3E50] sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group rounded-xl border border-slate-100 bg-[#f9fafb] p-7 text-center transition hover:border-[#FF8C00]/40 hover:shadow-lg"
              >
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2C3E50] text-[#FF8C00] transition group-hover:bg-[#FF8C00] group-hover:text-white">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-bold text-[#2C3E50]">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Craftsmanship */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-[#2C3E50] sm:text-4xl">
              Signature Craftsmanship
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              A closer look at the design language that runs through our work
              — carried across structures on the same project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/chifwema-pergola.jpg"
                alt="Chifwema balcony pergola with CNC laser-cut pattern"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/chifwema-balustrade.jpg"
                alt="Chifwema balcony balustrade with matching laser-cut pattern"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-slate-600">
            For a client in Chifwema, we fabricated and installed a steel
            balcony balustrade and matching overhead pergola, both featuring
            the same CNC laser-cut pattern. The result is a cohesive, tailored
            look that carries a single design idea across every steel element
            of the space — the kind of attention to detail we bring to every
            project.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-[#f5f6f8] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-3xl font-extrabold text-[#2C3E50] sm:text-4xl">
              State-of-the-Art Equipment &amp; Technology
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We invest in the tools that enable precision and innovation.
            </p>
          </div>

          <div className="mb-8 grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/images/welding.jpg"
              alt="Precision fabrication equipment"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50]">
                Precision Fabrication
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our workshop is equipped with modern cutting, bending, and
                welding equipment operated by skilled craftsmen. From laser-cut
                ornamental panels to heavy structural welds, precision is built
                into every stage of our process.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Laser & plasma cutting for intricate patterns",
                  "CNC-guided bending and forming",
                  "Certified MIG, TIG & arc welding",
                  "Professional powder-coating & finishing",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <Icon
                      name="check"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#FF8C00]"
                    />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C3E50] py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-4 text-[#C0C0C0]">
            Partner with a team that treats every project as a design challenge
            worth solving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("contact")}
              className="rounded-md bg-[#FF8C00] px-8 py-4 font-bold text-white transition hover:bg-[#e67e00]"
            >
              Get a Free Quote
            </button>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/60 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#2C3E50]"
            >
              <Icon name="phone" className="h-5 w-5" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
