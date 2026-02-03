export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-16 sm:py-20">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
        Phase 1 · Foundation
      </span>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Crucible keeps focus on the mission, not the noise.
        </h1>
        <p className="text-lg leading-relaxed text-slate-300">
          A calm, intentional space for people who care about building what matters.
          We are starting with a deliberate foundation—clarity, safety, and purpose—before
          anything else.
        </p>
      </div>

      <section className="mt-12 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-slate-300">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          What we are protecting
        </h2>
        <ul className="space-y-3 text-base">
          <li>Mission-first conversations, with space to think before reacting.</li>
          <li>Trust through thoughtful defaults, not friction.</li>
          <li>A foundation that favors calm over constant urgency.</li>
        </ul>
      </section>

      <footer className="mt-16 text-sm text-slate-500">
        The foundation phase is intentionally minimal. More will arrive when the core is right.
      </footer>
    </main>
  );
}
