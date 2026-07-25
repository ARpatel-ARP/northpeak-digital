const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Business software built around your workflows, requirements, and goals.",
    perks: [
      "Tailored to your exact process",
      "Scales as your team grows",
      "Integrates with your existing tools",
    ],
    href: "#custom-software",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Fast, scalable web apps designed for real-world users and business needs.",
    perks: [
      "Built for speed and reliability",
      "Responsive on every device",
      "Secure, maintainable architecture",
    ],
    href: "#web-applications",
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "iOS and Android applications built for performance, usability, and growth.",
    perks: [
      "Native-quality performance",
      "Intuitive, user-first design",
      "App Store & Play Store ready",
    ],
    href: "#mobile-apps",
  },
  {
    number: "04",
    title: "Shopify Development",
    description:
      "Custom Shopify stores, themes, integrations, and e-commerce experiences.",
    perks: [
      "Conversion-focused storefronts",
      "Custom theme development",
      "Seamless app & API integrations",
    ],
    href: "#shopify-development",
  },
  {
    number: "05",
    title: "WordPress Development",
    description:
      "High-performance WordPress websites tailored to your brand and business.",
    perks: [
      "Fast-loading, SEO-ready builds",
      "Custom themes & plugins",
      "Easy content management",
    ],
    href: "#wordpress-development",
  },
];

function Services() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ec] px-6 py-24 text-[#3f4a2b]">
      {/* Ambient color blobs so the glass cards have something to refract */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#8ba05c]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#5b6b3c]/25 blur-3xl" />

      <header className="relative mx-auto mb-16 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-[#6b7a45]">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to build digital.
        </h2>
      </header>

      <ul className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.number}>
            <article
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/40 bg-green-300/15 p-7 shadow-lg shadow-[#3f4a2b]/5 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c8dba0]/60 hover:bg-[#b6c99b]/90 hover:shadow-2xl hover:shadow-[#3f4a2b]/10"
            >
              {/* Inner top highlight for the glass edge */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c8dba0]/30 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <header className="relative">
                <span className="text-sm font-medium text-[#6b7a45]">
                  {service.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#3f4a2b]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3f4a2b]/70">
                  {service.description}
                </p>
              </header>

              <ul className="relative mt-6 space-y-2 border-t border-[#5b6b3c]/15 pt-5">
                {service.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-sm text-[#3f4a2b]/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6b7a45]"
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href={service.href}
                className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[#3f4a2b] transition-colors hover:text-[#6b7a45]"
              >
                Learn more
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;