import { useEffect, useState } from "react";
import { PROJECTS } from "../data";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";

const CATEGORIES = [
  "All",
  "Custom Gates",
  "Architectural Metalwork",
  "Custom Gates / Industrial",
  "Steel Windows",
  "Structural Steel",
  "Welding Services",
];

export default function Portfolio({
  navigate,
}: {
  navigate: (p: string) => void;
}) {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);

  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const activeProject = PROJECTS.find((p) => p.id === active);
  const gallery =
    activeProject?.media && activeProject.media.length > 0
      ? activeProject.media
      : activeProject
      ? [{ type: "image" as const, src: activeProject.image }]
      : [];

  function openProject(id: string) {
    setActive(id);
    setSlide(0);
  }

  function closeProject() {
    setActive(null);
    setSlide(0);
  }

  function next() {
    setSlide((s) => (s + 1) % gallery.length);
  }

  function prev() {
    setSlide((s) => (s - 1 + gallery.length) % gallery.length);
  }

  useEffect(() => {
    if (active) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [active]);

  return (
    <div>
      <PageHero
        title="Our Portfolio"
        subtitle="A showcase of custom gates, architectural metalwork, and structural fabrication delivered across Lusaka."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  filter === c
                    ? "bg-[#FF8C00] text-white shadow"
                    : "bg-slate-100 text-[#2C3E50] hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <button
                key={p.id}
                onClick={() => openProject(p.id)}
                className="group overflow-hidden rounded-xl bg-white text-left shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#2C3E50]/0 transition group-hover:bg-[#2C3E50]/40" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FF8C00] px-3 py-1 text-xs font-bold text-white">
                    {p.category}
                  </span>
                  {p.media && p.media.length > 1 && (
                    <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white">
                      <Icon name="image" className="h-3.5 w-3.5" />
                      {p.media.length}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2C3E50]">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                    {p.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF8C00]">
                    View Details <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f6f8] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-2xl font-extrabold text-[#2C3E50] sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-slate-600">
            Let's bring your vision to life with precision-engineered metalwork.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="mt-6 rounded-md bg-[#FF8C00] px-8 py-4 font-bold text-white transition hover:bg-[#e67e00]"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={closeProject}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative shrink-0 bg-black">
              {gallery[slide].type === "video" ? (
                <video
                  key={gallery[slide].src}
                  src={gallery[slide].src}
                  controls
                  autoPlay
                  className="h-[32vh] w-full bg-black object-contain sm:h-[42vh]"
                />
              ) : (
                <img
                  key={gallery[slide].src}
                  src={gallery[slide].src}
                  alt={activeProject.title}
                  className="h-[32vh] w-full object-cover sm:h-[42vh]"
                />
              )}

              <button
                onClick={closeProject}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2C3E50] shadow hover:bg-white"
                aria-label="Close"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2C3E50] shadow hover:bg-white"
                    aria-label="Previous"
                  >
                    <Icon name="arrow" className="h-5 w-5 rotate-180" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2C3E50] shadow hover:bg-white"
                    aria-label="Next"
                  >
                    <Icon name="arrow" className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
                    {slide + 1} / {gallery.length}
                  </span>
                </>
              )}
            </div>

            <div className="flex-1 overflow-y-auto">
              {gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto border-b border-slate-100 bg-slate-50 p-3">
                  {gallery.map((m, i) => (
                    <button
                      key={m.src + i}
                      onClick={() => setSlide(i)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-2 transition ${
                        i === slide ? "ring-[#FF8C00]" : "ring-transparent"
                      }`}
                    >
                      {m.type === "video" ? (
                        <div className="flex h-full w-full items-center justify-center bg-[#2C3E50] text-white">
                          <Icon name="play" className="h-5 w-5" />
                        </div>
                      ) : (
                        <img
                          src={m.src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}

              <div className="p-7">
                <span className="text-sm font-bold uppercase tracking-wider text-[#FF8C00]">
                  {activeProject.category}
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-[#2C3E50]">
                  {activeProject.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {activeProject.description}
                </p>
                <button
                  onClick={() => {
                    closeProject();
                    navigate("contact");
                  }}
                  className="mt-6 rounded-md bg-[#2C3E50] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#FF8C00]"
                >
                  Request a Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
