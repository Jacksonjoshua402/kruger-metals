import { COMPANY, SERVICES } from "../data";
import Icon from "./Icon";

const NAV = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Services", page: "services" },
  { label: "Portfolio", page: "portfolio" },
  { label: "Contact", page: "contact" },
];

export default function Footer({ navigate }: { navigate: (p: string) => void }) {
  return (
    <footer className="bg-[#22303f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF8C00] font-black text-white">
              K
            </span>
            <span className="text-lg font-extrabold uppercase tracking-wide">
              Krugers
            </span>
          </div>
          <p className="mb-4 text-sm text-[#C0C0C0]">
            Precision Metal Fabrication &amp; Architectural Design
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            {COMPANY.address.line1}
            <br />
            {COMPANY.address.line2}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF8C00]">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.page}>
                <button
                  onClick={() => navigate(n.page)}
                  className="text-white/75 transition hover:text-[#FF8C00]"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF8C00]">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => navigate("services")}
                  className="text-left text-white/75 transition hover:text-[#FF8C00]"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF8C00]">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3 text-white/80 transition hover:text-[#FF8C00]"
              >
                <Icon name="phone" className="h-5 w-5 shrink-0 text-[#FF8C00]" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 break-all text-white/80 transition hover:text-[#FF8C00]"
              >
                <Icon name="mail" className="h-5 w-5 shrink-0 text-[#FF8C00]" />
                {COMPANY.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["Facebook", "LinkedIn", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/80 transition hover:bg-[#FF8C00] hover:text-white"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-white/50 lg:px-8">
          Copyright © 2026 Krugers Metal Fabrication. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
