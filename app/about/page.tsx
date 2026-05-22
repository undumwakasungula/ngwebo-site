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
            Pioneering next-gen guidance and satellite systems to unlock new possibilities in space and on Earth.
          </p>
          <ul className="mt-8 space-y-4 text-slate-300">
            <li className="rounded-3xl bg-slate-900/70 p-5">Build with clarity, not complexity.</li>
            <li className="rounded-3xl bg-slate-900/70 p-5">Validate through simulation and hardware feedback loops.</li>
            <li className="rounded-3xl bg-slate-900/70 p-5">Create tools that support operator trust and rapid iteration.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
          <h2 className="text-2xl font-semibold text-white">Founder's note</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Ngwebo was born from a belief that perfection is not a destination, but a pursuit. Our mission is to redefine guidance and satellite systems so that humanity’s connection to space strengthens life on Earth. Ad Sidera, Pro Terra — to the stars, for the Earth.
          </p>
        </div>
      </section>
      <Timeline />
    </div>
  );
}
