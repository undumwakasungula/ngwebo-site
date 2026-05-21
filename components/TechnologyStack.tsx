const stackBlocks = [
  {
    title: 'Coding',
    items: ['C++', 'VS Code', 'CMake', 'GitHub'],
  },
  {
    title: 'Hardware',
    items: ['KiCad', 'LTspice', 'MATLAB/Simulink'],
  },
  {
    title: 'Cloud',
    items: ['Docker', 'Grafana', 'Azure IoT Hub'],
  },
  {
    title: 'Simulation',
    items: ['GMAT', 'STK'],
  },
];

export default function TechnologyStack() {
  return (
    <section id="technology" className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-glow">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Technology stack</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A concise toolset for design, validation, and mission operations.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-right">
          Every layer is chosen to support modular development, hardware validation, and robust cloud monitoring.
        </p>
      </div>
      <div className="mt-8 grid gap-4 text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
        {stackBlocks.map((block) => (
          <div key={block.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{block.title}</p>
            <p className="mt-4 text-base font-semibold text-white">{block.items[0]}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">{block.items.slice(1).join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
