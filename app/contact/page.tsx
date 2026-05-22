import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-8 shadow-glow sm:rounded-[2rem] sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Connect with Ngwebo
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Share your mission needs, collaboration ideas, or technical questions.
            We will respond with thoughtful insight and clear next steps.
          </p>
        </div>
      </section>

      {/* Form */}
      <ContactForm />

      {/* Direct contacts */}
      <section className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-glow sm:rounded-[1.75rem] sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Direct contacts</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/20 sm:rounded-2xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Email</p>
            <a
              href="mailto:contactngwebo@gmail.com"
              className="mt-3 block text-base font-semibold text-white transition hover:text-cyan-300 sm:text-lg"
            >
              contactngwebo@gmail.com
            </a>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/20 sm:rounded-2xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Community</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://github.com/undumwakasungula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-white transition hover:text-cyan-300 sm:text-lg"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/company/ngwebo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-white transition hover:text-cyan-300 sm:text-lg"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}