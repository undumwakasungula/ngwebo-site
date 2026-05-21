const milestones = [
  { period: '2026 Q3', label: 'Adaptive guidance kernel', detail: 'Deploy first integrated flight software prototype for trajectory management.' },
  { period: '2026 Q4', label: 'Telemetry federation', detail: 'Connect onboard sensors to ground control through secure cloud channels.' },
  { period: '2027 Q1', label: 'Hardware validation', detail: 'Validate power and comms boards with rapid prototyping and simulation.' },
  { period: '2027 Q2', label: 'Operational readiness', detail: 'Scale system architecture for multi-mission payloads and analytics.' },
];

export default function Timeline() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow sm:p-8">
      <h2 className="text-lg font-semibold text-white">Roadmap</h2>
      <p className="mt-2 text-sm leading-7 text-slate-300">A focused roadmap that balances prototype velocity with mission assurance.</p>
      <div className="mt-8 space-y-6">
        {milestones.map((item) => (
          <div key={item.period} className="grid gap-3 sm:grid-cols-[110px_1fr] sm:items-start">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300/90">{item.period}</div>
            <div>
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
