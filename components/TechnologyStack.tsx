const stackBlocks = [
  {
    title: 'Coding',
    primary: 'C++',
    tools: 'VS Code · CMake · GitHub',
  },
  {
    title: 'Hardware',
    primary: 'KiCad',
    tools: 'LTspice · MATLAB/Simulink',
  },
  {
    title: 'Cloud',
    primary: 'Docker',
    tools: 'Grafana · Azure IoT Hub',
  },
  {
    title: 'Simulation',
    primary: 'GMAT',
    tools: 'STK',
  },
];

export default function TechnologyStack() {
  return (
    <section id="technology" className="rounded-2xl border border-white/10 bg-slate-950/90 p-6 shadow-glow sm:rounded-[2rem] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Technology stack</p>
          <h2 className="mt-3 max-w-lg text-2xl font-semibold text-white sm:text-3xl">
            A concise toolset for design, validation, and mission operations.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-400 sm:text-right">
          Every layer is chosen to support modular development, hardware validation, and robust cloud monitoring.
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        {stackBlocks.map((block) => (
          <div
            key={block.title}
            className="rounded-xl border border-white/10 bg-slate-900/80 p-4 transition hover:border-cyan-300/20 hover:bg-slate-900 sm:rounded-[1.5rem] sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/90">{block.title}</p>
            <p className="mt-3 text-base font-semibold text-white sm:mt-4">{block.primary}</p>
            <p className="mt-2 text-xs leading-6 text-slate-400 sm:mt-3 sm:text-sm">{block.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}