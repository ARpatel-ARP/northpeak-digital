import heroBg from '../assets/hero-bg.jpeg';

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/*bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2f3a1e]/80 via-[#3f4a2b]/55 to-[#2f3a1e]/85" />

      <div className="relative flex min-h-screen flex-col">
        {/* NAVBAR */}
        <header className="mx-4 mt-4 sm:mx-8 sm:mt-8">
          <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
            <div className="text-sm font-semibold tracking-tight text-white">
              North<span className="text-[#c8dba0]">Peak</span> Digital
            </div>

            <ul className="hidden items-center gap-8 text-sm text-white/85 sm:flex">
              <li>
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className="rounded-full bg-[#5b6b3c] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4a5831]"
            >
              Let's talk
            </a>
          </nav>
        </header>

        {/* Hero content + contact form, side by side, both inside the hero */}
        <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: headline / pitch / CTAs */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
             We Build It Once, So{" "}
              <span className="font-serif font-normal text-[#e9f5ca]">
               You Never Rebuild It Twice.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Custom software, mobile apps, web applications, and Shopify
              &amp; WordPress solutions built for businesses that need to
              move fast.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#5b6b3c] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-[#4a5831] active:scale-[0.98]"
              >
                Start a project
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10 active:scale-[0.98]"
              >
                Explore our services
              </a>
            </div>
          </div>

          {/* Right: contact form, layered directly on the hero */}
          <form
            id="contact-form"
            className="relative w-full rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-md sm:p-8"
          >
            <h2 className="text-xl font-semibold text-white">
              No more missed deadlines.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Tell us about your project — done fast, done right, done once.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-white/60"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-white/60"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <div className="flex items-stretch overflow-hidden rounded-lg border border-white/25 bg-white/10">
                <span className="flex items-center gap-1 border-r border-white/25 px-4 text-sm text-white/70">
                  🇺🇸 +1
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="project" className="sr-only">
                About your project
              </label>
              <textarea
                id="project"
                name="project"
                rows={3}
                placeholder="About your project"
                className="resize-none rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-white/60"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#3f4a2b] transition hover:bg-white/90"
              >
                <span aria-hidden="true">✉</span>
                Email us
              </button>

              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#5b6b3c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#4a5831]"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#c8dba0]"
                />
                Live chat
              </button>

              <a
                href="https://wa.me/"
                aria-label="Chat with us on WhatsApp"
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white transition hover:opacity-90"
              >
                <span aria-hidden="true">📱</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;