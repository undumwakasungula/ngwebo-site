import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div>
          <div className="flex items-center gap-3">
            <div className="site-footer-logo">
              <Image src="/icon.png" alt="Ngwebo logo" fill sizes="44px" className="object-cover" />
            </div>
            <div>
              <h4>Ngwebo</h4>
              <p className="m-0 text-xs">Built for mission-scale guidance systems.</p>
            </div>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <nav aria-label="footer">
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="m-0">contactngwebo@gmail.com</p>
          <div className="socials" aria-hidden={false}>
            <a href="https://github.com/ngwebo" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.8 2 1.1.2-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.7 1 .7 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z"/></svg>
            </a>
            <a href="https://linkedin.com/company/ngwebo" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 11.02 0H4.98zM3.5 8.98h3v12h-3zM9.5 8.98h2.9v1.6h.04c.4-.8 1.38-1.6 2.84-1.6 3.04 0 3.6 2 3.6 4.6v6.4h-3v-5.7c0-1.4 0-3.2-2-3.2-2 0-2.3 1.6-2.3 3v5.9h-3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a2540] px-10 py-5 flex justify-between items-center">
        <p className="m-0 text-[11px] tracking-[0.2em] uppercase text-[#2d3748]">
          © {new Date().getFullYear()} Ngwebo. All rights reserved.
        </p>
        <p className="m-0 text-[11px] tracking-[0.35em] uppercase font-bold cursor-default transition-all duration-400
          text-transparent [-webkit-text-stroke:0.5px_rgba(0,212,255,0.4)]
          hover:text-[#00d4ff] hover:[-webkit-text-stroke:0px] hover:[text-shadow:0_0_20px_rgba(0,212,255,0.4)]">
          Redefine Perfection
        </p>
      </div>
    </footer>
  );
}