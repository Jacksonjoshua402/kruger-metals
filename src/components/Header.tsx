import { useEffect, useState } from "react";
import Icon from "./Icon";

const NAV = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Services", page: "services" },
  { label: "Portfolio", page: "portfolio" },
  { label: "Contact", page: "contact" },
];

export default function Header({
  current,
  navigate,
}: {
  current: string;
  navigate: (page: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (page: string) => {
    navigate(page);
    setOpen(false);
  };

  const solid = scrolled || current !== "home" || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#2C3E50] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF8C00] font-black text-white shadow-md">
            K
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold uppercase tracking-wide text-white">
              Krugers
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#C0C0C0]">
              Metal Fabrication
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.page}
              onClick={() => go(n.page)}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                current === n.page
                  ? "text-[#FF8C00]"
                  : "text-white/90 hover:text-[#FF8C00]"
              }`}
            >
              {n.label}
              {current === n.page && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-[#FF8C00]" />
              )}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="ml-3 rounded-md bg-[#FF8C00] px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-[#e67e00]"
          >
            Get a Quote
          </button>
        </nav>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#2C3E50] lg:hidden">
          {NAV.map((n) => (
            <button
              key={n.page}
              onClick={() => go(n.page)}
              className={`block w-full px-6 py-3.5 text-left text-sm font-semibold ${
                current === n.page
                  ? "bg-white/5 text-[#FF8C00]"
                  : "text-white/90"
              }`}
            >
              {n.label}
            </button>
          ))}
          <div className="p-4">
            <button
              onClick={() => go("contact")}
              className="w-full rounded-md bg-[#FF8C00] px-5 py-3 text-sm font-bold text-white"
            >
              Get a Free Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
