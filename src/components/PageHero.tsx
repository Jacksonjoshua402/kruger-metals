export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#2C3E50] pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #fff 1px, transparent 1px), linear-gradient(45deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#FF8C00]/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <div className="mx-auto mb-5 h-1 w-16 rounded bg-[#FF8C00]" />
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-[#C0C0C0] sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
