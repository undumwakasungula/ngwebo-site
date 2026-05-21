import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Connect with Ngwebo</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
          Share your mission needs, collaboration ideas, or technical questions. We’ll respond with thoughtful insight and clear next steps.
        </p>
      </section>
      <ContactForm />
      <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 text-slate-300 shadow-glow">
        <h2 className="text-2xl font-semibold text-white">Direct contacts</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Email</p>
            <p className="mt-4 text-lg font-semibold text-white">contact@ngwebo.com</p>
          </div>
          <div className="rounded-3xl bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Community</p>
            <div className="mt-4 space-y-3 text-slate-300">
              <a href="https://github.com/ngwebo" className="block text-lg font-semibold text-white hover:text-cyan-300">
                GitHub
              </a>
              <a href="https://linkedin.com/company/ngwebo" className="block text-lg font-semibold text-white hover:text-cyan-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
