import Subsystems from '../../components/Subsystems';

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Focused subsystem work with clear outcomes.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
          Power, communication, and navigation are the core subsystems Ngwebo is advancing today with practical prototypes and elegant system integration.
        </p>
      </section>
      <Subsystems />
    </div>
  );
}
