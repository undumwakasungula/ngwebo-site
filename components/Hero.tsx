import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden">
      <Image
        src="/sat_guidance.jpg"
        alt="Satellite guidance imagery"
        fill
        sizes="100vw"
        className="hero-bg"
        priority
      />

      <div className="section-copy relative z-10 mx-auto grid min-h-[60vh] max-w-5xl gap-6 px-5 py-20 text-center sm:min-h-[70vh] sm:px-8 lg:min-h-[78vh] lg:px-12">
        <p className="section-eyebrow">Ngwebo</p>

        <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight section-title sm:text-5xl lg:text-[4.2rem] lg:leading-[1.05]">
          Advanced Guidance & <span style={{color: 'var(--accent)'}}>Satellite Systems</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          Mission-focused software, hardware, and cloud systems engineered for orbit, command, and operational clarity.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="#vision" className="w-full sm:w-auto">
            <span className="btn btn-primary">Explore Our Vision</span>
          </Link>
          <Link href="/projects" className="w-full sm:w-auto">
            <span className="btn btn-accent">View Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}