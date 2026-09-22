const services = [
  "General Consultation",
  "Family Care",
  "Preventive Health",
  "Women Wellness",
];

const highlights = [
  { label: "Years of Experience", value: "12+" },
  { label: "Happy Patients", value: "5k+" },
  { label: "Appointments", value: "Daily" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#edfdf5,_#f8fafc_55%,_#eff6ff)] text-slate-800">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="mb-14 flex items-center justify-between rounded-full border border-emerald-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Durva Clinic
            </p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
            Book Visit
          </button>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Trusted care for every stage of life
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Compassionate care for a healthier tomorrow.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Welcome to <span className="font-semibold text-emerald-700">Durva Clinic</span>, where
              Dr. Dharmi Patel offers personalized, patient-first healthcare with warmth,
              expertise, and attention to every detail.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Schedule Appointment
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700">
                Call Clinic
              </button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-emerald-700">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-emerald-200/70 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-sky-200/80 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_30px_80px_rgba(16,185,129,0.12)]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-100">Doctor</p>
                    <h2 className="mt-2 text-2xl font-bold">Dr. Dharmi Patel</h2>
                  </div>
                  <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium">
                    MBBS, MD
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-100">Specialty</p>
                  <p className="mt-3 text-xl font-semibold">General & Preventive Medicine</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-emerald-50">
                  <div className="rounded-xl bg-white/10 p-3">Mon–Sat</div>
                  <div className="rounded-xl bg-white/10 p-3">9:00 AM–7:00 PM</div>
                  <div className="rounded-xl bg-white/10 p-3">Family Care</div>
                  <div className="rounded-xl bg-white/10 p-3">Wellness Plans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto mt-20 max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why choose us
            </p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900">Personalized healthcare with a human touch.</h3>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            At Durva Clinic, every patient is treated with respect, clarity, and thoughtful care.
            We focus on prevention, education, and long-term wellness so you feel supported at every visit.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto mt-12 max-w-7xl px-6 py-8 lg:px-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Services</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900">Care designed around you</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg text-emerald-700">
                ✓
              </div>
              <h4 className="text-xl font-semibold text-slate-900">{service}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Thoughtful treatment and preventive guidance for a healthier lifestyle and lasting wellness.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="mt-20 border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center text-slate-600 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <div>
            <p className="text-lg font-semibold text-slate-900">Durva Clinic</p>
            <p className="mt-1">Dr. Dharmi Patel</p>
          </div>
          <div>
            <p>Call: +91 98765 43210</p>
            <p>Email: care@durvaclinic.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
