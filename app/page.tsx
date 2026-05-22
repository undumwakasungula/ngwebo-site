import Hero from '../components/Hero';
import TechnologyStack from '../components/TechnologyStack';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="vision" className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Vision</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Software, hardware, and cloud aligned for satellite guidance.</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            Ngwebo is building scalable solutions across software, hardware, and cloud to advance satellite guidance systems. We focus on clear architecture, resilient signals, and mission-ready observability.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Founder</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Undule's journey</h3>
          <p className="mt-6 text-base leading-8 text-slate-300">
            After working across embedded systems and mission operations, Undule founded Ngwebo to bridge the gap between rigorous aerospace engineering and modern software development. The goal is fewer surprises, clearer controls, and safer launches.
          </p>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
            <p className="font-medium text-slate-100">Milestone roadmap</p>
            <p className="mt-3 leading-7">Focused milestones guide the team from prototype validation to operational readiness while keeping every subsystem grounded in mission requirements.</p>
          </div>
        </div>
      </section>
      <TechnologyStack />
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Next step</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Partner with Ngwebo for focused satellite systems.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
          We work with teams that need a straightforward, well-defined path from concept to in-orbit performance.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Reach out
          </Link>
          <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-8 py-3 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-white">
            Review subsystems
          </Link>
        </div>
      </section>
    </>
  );
}
