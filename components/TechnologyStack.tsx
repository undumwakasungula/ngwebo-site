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
    <section id="technology" className="section-split section-split--reverse">
      <div className="section-copy">
        <p className="eyebrow">Technology stack</p>
        <h2 className="mt-3 max-w-lg text-2xl font-semibold section-title sm:text-3xl">
          A concise toolset for design, validation, and mission operations.
        </h2>
        <p className="mt-6 max-w-xs text-sm leading-6">
          Every layer is chosen to support modular development, hardware validation, and robust cloud monitoring.
        </p>
      </div>
      <div className="section-feature-grid">
        {stackBlocks.map((block) => (
          <div key={block.title} className="feature-panel">
            <p className="text-xs uppercase tracking-[0.28em]" style={{color: 'var(--accent)'}}>{block.title}</p>
            <p className="mt-3 text-base font-semibold" style={{color: 'var(--text)'}}>{block.primary}</p>
            <p className="mt-2 text-xs leading-6 sm:text-sm" style={{color: 'var(--text-muted)'}}>{block.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}