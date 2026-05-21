'use client';

import { useEffect, useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'pending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('We keep messages confidential and aim to respond quickly.');
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    fetch('/api/csrf')
      .then((response) => response.json())
      .then((data) => {
        if (data?.token) {
          setCsrfToken(data.token);
        }
      })
      .catch(() => {
        setMessage('Unable to initialize secure form submission. Please refresh the page.');
      });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('pending');
    setMessage('Sending your message...');

    if (!csrfToken) {
      setStatus('error');
      setMessage('Unable to verify your session. Please refresh and try again.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      message: formData.get('message')?.toString() ?? '',
      csrfToken,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Submission failed.');
      }

      setStatus('sent');
      setMessage('Thanks — your message has been submitted successfully.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit the form at this time. Please try again later.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-glow">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-200">
          <span>Name</span>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-200">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-slate-200">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your mission goals or collaboration interest."
          required
          className="min-h-[140px] w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-400">{message}</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          {status === 'sent' ? 'Message sent' : status === 'pending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
