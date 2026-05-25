"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const subsystems = [
  {
    name: 'Power',
    description: 'Lightweight solar arrays and advanced battery systems delivering reliable energy for satellites.',
    image: '/power.jpg',
    alt: 'Printed circuit board with power electronics',
  },
  {
    name: 'Communication',
    description: 'Adaptive uplink and downlink layers designed for secure mission telemetry.',
    image: '/5G.jpg',
    alt: 'Satellite communication graphic with 5G infrastructure',
  },
  {
    name: 'Navigation',
    description: 'Precision trajectory and orbit guidance that stays aligned with mission intent.',
    image: '/guidance.jpg',
    alt: 'Navigation system graphic with 5G infrastructure',
  },
];

export default function Subsystems() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-alt space-y-16">
      {subsystems.map((item, index) => (
        <article
          key={item.name}
          id={item.name.toLowerCase()}
          tabIndex={0}
          className={`section-split reveal ${index % 2 === 1 ? 'section-split--reverse' : ''}`}
        >
          <div className="section-image">
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="section-copy">
            <p className="section-eyebrow">{item.name}</p>
            <h3 className="subsystem-title">{item.name} subsystem</h3>
            <p className="subsystem-desc">{item.description}</p>
            <div className="mt-4">
              <Link href={`/projects#${item.name.toLowerCase()}`} className="learn-btn" aria-label={`Learn more about ${item.name}`}>
                Learn more
              </Link>
            </div>
          </div>
        </article>
      ))}

      <div className="section-copy">
        <p className="section-eyebrow">Prototype focus</p>
        <p className="mt-4 max-w-3xl text-base leading-8 section-text">
          Ngwebo advances each subsystem through targeted prototyping: high-density PCB designs, secure telemetry layers, and concurrent C++ guidance logic.
        </p>
      </div>
    </section>
  );
}
