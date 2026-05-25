import Hero from '../components/Hero';
import TechnologyStack from '../components/TechnologyStack';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-dark">
        <div className="section-row">
          <div className="section-copy">
            <p className="section-eyebrow">Vision</p>
            <h2 className="section-heading">Software, hardware, and cloud aligned for satellite guidance.</h2>
            <p className="section-text">
              Ngwebo is building scalable systems across software, hardware, and cloud to advance satellite guidance. We focus on clear architecture, resilient signals, and mission-ready observability.
            </p>
          </div>
          <div className="section-copy">
            <p className="section-eyebrow">Founder</p>
            <h3 className="section-heading text-3xl">Undule's journey</h3>
            <p className="section-text">
              After working across embedded systems and mission operations, Undule founded Ngwebo to bridge the gap between rigorous aerospace engineering and modern software development.
            </p>
            <div className="section-border-row section-copy">
              <p className="font-medium" style={{ color: 'var(--text)' }}>Milestone roadmap</p>
              <p className="section-text">
                Focused milestones guide the team from prototype validation to operational readiness while keeping every subsystem grounded in mission requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TechnologyStack />
      <section className="section-alt section-cta">
        <p className="section-eyebrow">Next step</p>
        <h2 className="section-heading">Partner with Ngwebo for focused satellite systems.</h2>
        <p className="section-text">
          We work with teams that need a straightforward, well-defined path from concept to in-orbit performance.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/contact" className="w-full sm:w-auto">
            <span className="btn btn-primary">Reach out</span>
          </Link>
          <Link href="/projects" className="w-full sm:w-auto">
            <span className="btn btn-accent">Review subsystems</span>
          </Link>
        </div>
      </section>
    </>
  );
}
