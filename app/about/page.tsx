import Timeline from '../../components/Timeline';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">About Us</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Building mission-ready guidance systems.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
          Ngwebo is building scalable solutions across software, hardware, and cloud to advance satellite guidance systems.
        </p>
      </section>
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Deliver dependable guidance, communication, and control systems by unifying embedded software, electronics design, cloud observability, and simulation into a single mission-aware stack.
          </p>
          <ul className="mt-8 space-y-4 text-slate-300">
            <li className="rounded-3xl bg-slate-900/70 p-5">Build with clarity, not complexity.</li>
            <li className="rounded-3xl bg-slate-900/70 p-5">Validate through simulation and hardware feedback loops.</li>
            <li className="rounded-3xl bg-slate-900/70 p-5">Create tools that support operator trust and rapid iteration.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
          <h2 className="text-2xl font-semibold text-white">Founder’s note</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Undule founded Ngwebo to make guidance systems that are easier to reason about, easier to validate, and stronger in flight. The focus is on systems that support operators and perform reliably in every phase of the mission.
          </p>
        </div>
      </section>
      <Timeline />
    </div>
  );
}
