const milestones = [
  { period: '2026 Q3', label: 'Adaptive guidance kernel', detail: 'Deploy first integrated flight software prototype for trajectory management.' },
  { period: '2026 Q4', label: 'Telemetry federation', detail: 'Connect onboard sensors to ground control through secure cloud channels.' },
  { period: '2027 Q1', label: 'Hardware validation', detail: 'Validate power and comms boards with rapid prototyping and simulation.' },
  { period: '2027 Q2', label: 'Operational readiness', detail: 'Scale system architecture for multi-mission payloads and analytics.' },
];

export default function Timeline() {
  return (
    <section className="section-alt">
      <div className="section-copy">
        <h2 className="text-lg font-semibold section-title">Roadmap</h2>
        <p className="mt-2 text-sm leading-7 section-text">A focused roadmap that balances prototype velocity with mission assurance.</p>
      </div>
      <div className="mt-8 space-y-6">
        {milestones.map((item) => (
          <div key={item.period} className="grid gap-3 sm:grid-cols-[110px_1fr] sm:items-start">
            <div className="text-xs uppercase tracking-[0.24em]" style={{color: 'var(--accent)'}}>{item.period}</div>
            <div>
              <p className="font-semibold" style={{color: 'var(--text)'}}>{item.label}</p>
              <p className="mt-2 text-sm leading-7" style={{color: 'var(--text-muted)'}}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
