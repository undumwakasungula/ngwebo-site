import Image from 'next/image';

const subsystems = [
  {
    name: 'Power',
    description: 'Efficient energy distribution and resilient power management for on-orbit systems.',
    image: '/pcb.jpg',
    alt: 'Printed circuit board with power electronics',
  },
  {
    name: 'Communication',
    description: 'Adaptive uplink and downlink layers designed for secure mission telemetry.',
    image: '/dpocean.jpg',
    alt: 'Satellite communication terminal over ocean',
  },
  {
    name: 'Navigation',
    description: 'Precision trajectory and orbit guidance that stays aligned with mission intent.',
    image: '/5G.jpg',
    alt: 'Navigation system graphic with 5G infrastructure',
  },
];

export default function Subsystems() {
  return (
    <section className="space-y-16">
      {subsystems.map((item, index) => (
        <div
          key={item.name}
          className={`grid gap-6 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow lg:grid-cols-[0.95fr_1.05fr] ${
            index % 2 === 1 ? 'lg:flex-row-reverse lg:grid-cols-[1.05fr_0.95fr]' : ''
          }`}
        >
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
            <Image src={item.image} alt={item.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/90">{item.name}</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{item.name} subsystem</h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{item.description}</p>
          </div>
        </div>
      ))}
      <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 text-slate-300">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Prototype focus</p>
        <p className="mt-4 max-w-3xl text-base leading-8">
          Ngwebo advances each subsystem through targeted prototyping: high-density PCB designs, secure telemetry layers, and concurrent C++ guidance logic.
        </p>
      </div>
    </section>
  );
}
