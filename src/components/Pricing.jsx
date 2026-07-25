const plans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "one-time",
    description: "For a single site or app that needs to launch fast.",
    features: [
      "One core deliverable",
      "Up to 5 pages or screens",
      "Basic SEO setup",
      "2 rounds of revisions",
      "2 weeks delivery",
    ],
    href: "#contact-form",
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "one-time",
    description: "For businesses building out a full product or platform.",
    features: [
      "Everything in Starter",
      "Custom software or web app",
      "Up to 15 pages or screens",
      "API & third-party integrations",
      "Unlimited revisions",
      "4 weeks delivery",
    ],
    href: "#contact-form",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "For teams that need ongoing development and support.",
    features: [
      "Everything in Growth",
      "Dedicated project team",
      "Ongoing maintenance & support",
      "Priority turnaround",
      "Custom scope & timeline",
    ],
    href: "#contact-form",
  },
];

function Pricing() {
  return (
    <section className="bg-[#f5f3ec] px-6 py-24 text-[#3f4a2b]">
      <header className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-[#6b7a45]">
          Pricing
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple plans, built to scale with you.
        </h2>
      </header>

      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
        {plans.map((plan) => (
          <li key={plan.name} className={plan.featured ? "lg:-my-4" : ""}>
            <article
              className={
                plan.featured
                  ? "relative flex h-full flex-col rounded-2xl bg-[#3f4a2b] p-8 text-white shadow-xl shadow-[#3f4a2b]/20"
                  : "relative flex h-full flex-col rounded-2xl border border-[#5b6b3c]/15 bg-white p-8"
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c8dba0] px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#3f4a2b]">
                  Most popular
                </span>
              )}

              <header>
                <h3
                  className={
                    plan.featured
                      ? "text-lg font-semibold tracking-tight text-white/90"
                      : "text-lg font-semibold tracking-tight text-[#3f4a2b]"
                  }
                >
                  {plan.name}
                </h3>

                <p className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className={
                      plan.featured
                        ? "text-4xl font-semibold tracking-tight text-white"
                        : "text-4xl font-semibold tracking-tight text-[#3f4a2b]"
                    }
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={
                        plan.featured
                          ? "text-sm text-white/60"
                          : "text-sm text-[#3f4a2b]/50"
                      }
                    >
                      {plan.period}
                    </span>
                  )}
                </p>

                <p
                  className={
                    plan.featured
                      ? "mt-4 text-sm leading-relaxed text-white/75"
                      : "mt-4 text-sm leading-relaxed text-[#3f4a2b]/70"
                  }
                >
                  {plan.description}
                </p>
              </header>

              <ul
                className={
                  plan.featured
                    ? "mt-6 flex-1 space-y-3 border-t border-white/15 pt-6"
                    : "mt-6 flex-1 space-y-3 border-t border-[#5b6b3c]/15 pt-6"
                }
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      plan.featured
                        ? "flex items-start gap-2 text-sm text-white/85"
                        : "flex items-start gap-2 text-sm text-[#3f4a2b]/80"
                    }
                  >
                    <span
                      aria-hidden="true"
                      className={
                        plan.featured ? "text-[#c8dba0]" : "text-[#6b7a45]"
                      }
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={
                  plan.featured
                    ? "mt-8 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#3f4a2b] transition hover:bg-white/90"
                    : "mt-8 inline-flex items-center justify-center rounded-lg border border-[#5b6b3c]/30 px-5 py-3 text-sm font-medium text-[#3f4a2b] transition hover:border-[#5b6b3c] hover:bg-[#5b6b3c]/5"
                }
              >
                Choose plan
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Pricing;