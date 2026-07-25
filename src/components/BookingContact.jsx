const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarDays = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, null,
];

const availableDays = [30, 31];

function BookingContact() {
  return (
    <section className="bg-[#f5f3ec] px-6 py-24 text-[#3f4a2b]">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#5b6b3c]/15 bg-[#faf8f2]">
        {/* Top nav, matching the reference layout */}
        <header className="flex justify-center border-b border-[#5b6b3c]/10 px-6 py-5">
          <nav className="flex items-center gap-8 rounded-full border border-[#5b6b3c]/15 bg-white px-6 py-2.5 text-sm">
            <a href="#home" className="text-[#3f4a2b]/80 transition-colors hover:text-[#3f4a2b]">
              Home
            </a>
            <a href="#services" className="text-[#3f4a2b]/80 transition-colors hover:text-[#3f4a2b]">
              Services
            </a>
            <a href="#pricing" className="text-[#3f4a2b]/80 transition-colors hover:text-[#3f4a2b]">
              Pricing
            </a>
            <a
              href="#booking-form"
              className="rounded-full bg-[#3f4a2b] px-4 py-1.5 font-medium text-white transition hover:bg-[#2f3a1e]"
            >
              Book
            </a>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: calendar + time slot */}
          <div className="border-b border-[#5b6b3c]/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/50">
              Step 01 <span className="mx-1">·</span>
              <span className="font-serif italic text-[#6b7a45]">pick a time</span>
            </p>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5b6b3c]/15 text-[#3f4a2b]/60 transition hover:border-[#5b6b3c]/40 hover:text-[#3f4a2b]"
              >
                ‹
              </button>
              <h3 className="text-lg font-semibold tracking-tight">July 2026</h3>
              <button
                type="button"
                aria-label="Next month"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5b6b3c]/15 text-[#3f4a2b]/60 transition hover:border-[#5b6b3c]/40 hover:text-[#3f4a2b]"
              >
                ›
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-7 gap-y-2 text-center text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/40">
              {weekdays.map((day) => (
                <li key={day}>{day}</li>
              ))}
            </ul>

            <ul className="mt-2 grid grid-cols-7 gap-y-2 text-center text-sm">
              {calendarDays.map((day, i) => (
                <li key={i} className="flex items-center justify-center py-1.5">
                  {day && (
                    <button
                      type="button"
                      disabled={!availableDays.includes(day)}
                      className={
                        availableDays.includes(day)
                          ? "flex h-9 w-9 items-center justify-center rounded-lg bg-white font-semibold text-[#3f4a2b] shadow-sm ring-1 ring-[#5b6b3c]/20 transition hover:ring-[#5b6b3c]/50"
                          : "flex h-9 w-9 items-center justify-center rounded-lg text-[#3f4a2b]/30"
                      }
                    >
                      {day}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/50">
              Step 02 <span className="mx-1">·</span> Time slot{" "}
              <span className="normal-case tracking-normal text-[#3f4a2b]/40">
                (your local time · Asia/Calcutta · 30-min)
              </span>
            </p>

            <p className="mt-4 font-serif italic text-[#3f4a2b]/60">
              Pick a date above
              <br />
              to see times.
            </p>

            <p className="mt-8 text-sm leading-relaxed text-[#3f4a2b]/70">
              Our bookings are open <span className="font-serif italic">24/7</span>.
              Earliest confirmable slot is{" "}
              <span className="font-serif italic">five days</span> from today to
              give our leads a proper brief.
              <br />
              Need us sooner? Email{" "}
              <a
                href="mailto:hello@northpeakdigital.com"
                className="text-[#6b7a45] underline underline-offset-2 transition hover:text-[#3f4a2b]"
              >
                hello@northpeakdigital.com
              </a>
              .
            </p>
          </div>

          {/* Right: booking details form */}
          <form id="booking-form" className="p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/50">
              Step 03 <span className="mx-1">·</span>
              <span className="font-serif italic text-[#6b7a45]">your details</span>
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="full-name" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                  Full name <span className="text-[#c17a4a]">*</span>
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  className="rounded-lg border border-[#5b6b3c]/20 bg-white px-4 py-3 text-sm text-[#3f4a2b] outline-none transition focus:border-[#5b6b3c]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                  Company <span className="normal-case tracking-normal text-[#3f4a2b]/40">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="rounded-lg border border-[#5b6b3c]/20 bg-white px-4 py-3 text-sm text-[#3f4a2b] outline-none transition focus:border-[#5b6b3c]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="work-email" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                  Work email <span className="text-[#c17a4a]">*</span>
                </label>
                <input
                  id="work-email"
                  name="workEmail"
                  type="email"
                  className="rounded-lg border border-[#5b6b3c]/20 bg-white px-4 py-3 text-sm text-[#3f4a2b]  outline-none transition focus:border-[#5b6b3c]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                  WhatsApp / phone <span className="text-[#c17a4a]">*</span>
                </label>
                <div className="flex items-stretch overflow-hidden rounded-lg border border-[#5b6b3c]/20 bg-white">
                  <span className="flex items-center gap-1 border-r border-[#5b6b3c]/20 px-3 text-sm text-[#3f4a2b]/70">
                    🇺🇸 +1
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-transparent px-4 py-3 text-sm text-[#3f4a2b] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="help-with" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                What do you need help with? <span className="text-[#c17a4a]">*</span>
              </label>
              <select
                id="help-with"
                name="helpWith"
                defaultValue=""
                className="appearance-none rounded-lg border border-[#5b6b3c]/20 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%233f4a2b%22%3E%3Cpath%20d=%22M5.5%207.5l4.5%205%204.5-5%22%20stroke=%22%233f4a2b%22%20stroke-width=%221.5%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E')] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-[#3f4a2b] outline-none transition focus:border-[#5b6b3c]"
              >
                <option value="" disabled>
                  Pick a service...
                </option>
                <option value="custom-software">Custom software</option>
                <option value="web-application">Web application</option>
                <option value="mobile-app">Mobile app</option>
                <option value="shopify">Shopify development</option>
                <option value="wordpress">WordPress development</option>
              </select>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="budget" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                  Budget range <span className="text-[#c17a4a]">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="appearance-none rounded-lg border border-[#5b6b3c]/20 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%233f4a2b%22%3E%3Cpath%20d=%22M5.5%207.5l4.5%205%204.5-5%22%20stroke=%22%233f4a2b%22%20stroke-width=%221.5%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E')] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-[#3f4a2b] outline-none transition focus:border-[#5b6b3c]"
                >
                  <option value="" disabled>
                    Pick a range...
                  </option>
                  <option value="lt-1500">Under $1,500</option>
                  <option value="1500-3000">$1,500 – $3,000</option>
                  <option value="3000-plus">$3,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="country" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                  Country your business operates in <span className="text-[#c17a4a]">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  defaultValue=""
                  className="appearance-none rounded-lg border border-[#5b6b3c]/20 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%233f4a2b%22%3E%3Cpath%20d=%22M5.5%207.5l4.5%205%204.5-5%22%20stroke=%22%233f4a2b%22%20stroke-width=%221.5%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E')] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-[#3f4a2b] outline-none transition focus:border-[#5b6b3c]"
                >
                  <option value="" disabled>
                    Pick a country...
                  </option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="notes" className="text-xs font-medium uppercase tracking-widest text-[#3f4a2b]/60">
                Notes for our team <span className="normal-case tracking-normal text-[#3f4a2b]/40">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="resize-none rounded-lg border border-[#5b6b3c]/20 bg-white px-4 py-3 text-sm text-[#3f4a2b] outline-none transition focus:border-[#5b6b3c]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#8ba08a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#79906f] active:scale-[0.99]"
            >
              Request meeting
              <span aria-hidden="true">↗</span>
            </button>

            <p className="mt-4 text-xs leading-relaxed text-[#3f4a2b]/50">
              Submitting sends the request straight to our team at
              hello@northpeakdigital.com.
            </p>
          </form>
        </div>
      </div>
      
      <footer className="text-center mt-10 text-3xl italic "><a className="text-green-700/80 font-medium hover:text-cyan-700/80" href="https://digitalheroesco.com" target="_blank"
    rel="noopener noreferrer">
        "Built for Digital Heroes Training Task"
        </a></footer>
    </section>
  );
}

export default BookingContact;