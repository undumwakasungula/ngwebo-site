import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="section-immersive">
        <div className="section-copy text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold section-heading sm:text-4xl">
            Connect with Ngwebo
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8">
            Share your mission needs, collaboration ideas, or technical questions. We will respond with thoughtful insight and clear next steps.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-copy">
          <ContactForm />
        </div>
      </section>

      {/* Direct contacts */}
      <section className="section-alt section-split">
        <div className="section-copy">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">Direct contacts</h2>
        </div>
        <div className="section-copy">
          <p className="section-eyebrow">Email</p>
          <a
            href="mailto:contactngwebo@gmail.com"
            className="mt-3 block text-base font-semibold transition sm:text-lg"
            style={{ color: 'var(--text)' }}
          >
            contactngwebo@gmail.com
          </a>
        </div>
        <div className="section-copy">
          <p className="section-eyebrow">Community</p>
          <div className="mt-3 flex flex-col gap-4">
            <a
              href="https://github.com/undumwakasungula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold transition sm:text-lg"
              style={{ color: 'var(--text)' }}
            >
              GitHub →
            </a>
            <a
              href="https://linkedin.com/company/ngwebo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold transition sm:text-lg"
              style={{ color: 'var(--text)' }}
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}