import Timeline from '../../components/Timeline';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="section-immersive">
        <div className="section-copy text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 text-4xl font-semibold section-heading">Building mission-ready guidance systems.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8">
            Ngwebo is building scalable solutions across software, hardware, and cloud to advance satellite guidance systems.
          </p>
        </div>
      </section>
      <section className="section-dark section-split">
        <div className="section-copy">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-5 text-base leading-8 section-text">
            Pioneering next-gen guidance and satellite systems to unlock new possibilities in space and on Earth.
          </p>
          <ul className="mt-8 space-y-4 text-slate-300">
            <li className="border-l border-white/10 pl-4">Build with clarity, not complexity.</li>
            <li className="border-l border-white/10 pl-4">Validate through simulation and hardware feedback loops.</li>
            <li className="border-l border-white/10 pl-4">Create tools that support operator trust and rapid iteration.</li>
          </ul>
        </div>
        <div className="section-copy">
          <h2 className="text-2xl font-semibold">Founder's note</h2>
          <p className="mt-5 text-base leading-8 section-text">
            Ngwebo was born from a belief that perfection is not a destination, but a pursuit. Our mission is to redefine guidance and satellite systems so that humanity’s connection to space strengthens life on Earth. Ad Sidera, Pro Terra — to the stars, for the Earth.
          </p>
        </div>
      </section>
      <Timeline />
    </div>
  );
}
