import Subsystems from '../../components/Subsystems';

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="section-immersive">
        <div className="section-copy text-center">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold section-heading">Focused subsystem work with clear outcomes.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8">
            Power, communication, and navigation are the core subsystems Ngwebo is advancing today with practical prototypes and elegant system integration.
          </p>
        </div>
      </section>
      <Subsystems />
    </div>
  );
}
