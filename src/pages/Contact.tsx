import { useState } from "react";
import { COMPANY, SERVICES } from "../data";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div>
      <PageHero
        title="Get in Touch"
        subtitle="Request a free quote or design consultation. Our team is ready to bring your metalwork vision to life."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
          {/* Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 h-1 w-14 rounded bg-[#FF8C00]" />
            <h2 className="text-2xl font-extrabold text-[#2C3E50]">
              Contact Information
            </h2>
            <p className="mt-3 text-slate-600">
              Visit our workshop or reach out — we'd love to discuss your
              project.
            </p>

            <div className="mt-8 space-y-6">
              <ContactItem icon="pin" label="Our Workshop">
                {COMPANY.address.line1}
                <br />
                {COMPANY.address.line2}
              </ContactItem>
              <ContactItem icon="phone" label="Phone">
                <a
                  href={COMPANY.phoneHref}
                  className="hover:text-[#FF8C00]"
                >
                  {COMPANY.phone}
                </a>
              </ContactItem>
              <ContactItem icon="mail" label="Email">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all hover:text-[#FF8C00]"
                >
                  {COMPANY.email}
                </a>
              </ContactItem>
              <ContactItem icon="clock" label="Business Hours">
                Mon – Fri: 08:00 – 17:00
                <br />
                Saturday: 08:00 – 13:00
              </ContactItem>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl shadow-sm">
              <iframe
                title="Krugers Metal Fabrication location"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Simon+Mwansa+Kapwepwe+Road,+Chainda,+Lusaka,+Zambia&output=embed"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-100 bg-[#f9fafb] p-7 shadow-sm sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF8C00]/15 text-[#FF8C00]">
                    <Icon name="check" className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold text-[#2C3E50]">
                    Thank You!
                  </h3>
                  <p className="mt-3 max-w-sm text-slate-600">
                    Your request has been received. Our team will get back to you
                    within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-md bg-[#2C3E50] px-6 py-3 text-sm font-bold text-white hover:bg-[#FF8C00]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <h3 className="text-xl font-extrabold text-[#2C3E50]">
                    Request a Free Quote
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Fill in the form below and we'll be in touch shortly.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                    />
                    <Field
                      label="Email Address"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => update("email", v)}
                    />
                    <Field
                      label="Phone Number"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                    />
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-[#2C3E50]">
                        Service Needed
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20"
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-1.5 block text-sm font-semibold text-[#2C3E50]">
                      Project Details <span className="text-[#FF8C00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your project, dimensions, timeline, and any design ideas…"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-[#FF8C00] px-6 py-4 text-base font-bold text-white shadow transition hover:bg-[#e67e00]"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2C3E50] text-[#FF8C00]">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#2C3E50]">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-[#2C3E50]">
        {label} {required && <span className="text-[#FF8C00]">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20"
      />
    </div>
  );
}
