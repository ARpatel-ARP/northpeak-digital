const stats = [
  {
    id: "conversion",
    value: "+42%",
    label: "Conversion rate",
  },
  {
    id: "bounce",
    value: "-31%",
    label: "Bounce rate",
  },
  {
    id: "traffic",
    value: "2.4x",
    label: "Organic traffic",
  },
];

function Results() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#186f5d] via-[#869778] to-[#2e754a] px-6 py-24 text-white">
      {/* Ambient glow, consistent with the hero / services accents */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#5b6b3c]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#c8dba0]/10 blur-3xl" />

      <header className="relative mx-auto mb-16 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-[#c8dba0]">
          Results
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Numbers that speak for themselves.
        </h2>
      </header>

      <ul className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <li key={stat.id}>
            <article className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-8 py-10 text-center backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c8dba0]/50 hover:bg-white/10">
              <div className="pointer-events-none absolute -top-10 right-1/2 h-28 w-28 translate-x-1/2 rounded-full bg-[#c8dba0]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="relative text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </p>

              <p className="relative mt-3 text-sm font-medium uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Results;