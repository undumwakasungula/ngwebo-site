'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'pending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const defaultMessage = 'We keep messages confidential and aim to respond quickly.';
  const [message, setMessage] = useState(defaultMessage);
  const [csrfToken, setCsrfToken] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const messageTimerRef = useRef<number | null>(null);

  useEffect(() => {
    fetch('/api/csrf')
      .then((response) => response.json())
      .then((data) => {
        if (data?.token) {
          setCsrfToken(data.token);
        }
      })
      .catch(() => {
        setStatus('error');
        setMessage('Unable to initialize secure form submission. Please refresh the page.');
      });

    return () => {
      if (messageTimerRef.current) {
        window.clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const handleInputChange = () => {
    if (status === 'sent' || status === 'error') {
      if (messageTimerRef.current) {
        window.clearTimeout(messageTimerRef.current);
        messageTimerRef.current = null;
      }
      setStatus('idle');
      setMessage(defaultMessage);
    }
  };

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Submission failed.');
      }

      setStatus('sent');
      setMessage('Message has been submitted successfully.');
      formRef.current?.reset();

      if (messageTimerRef.current) {
        window.clearTimeout(messageTimerRef.current);
      }
      messageTimerRef.current = window.setTimeout(() => {
        setStatus('idle');
        setMessage(defaultMessage);
        messageTimerRef.current = null;
      }, 4500);
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 max-w-2xl mx-auto px-4 sm:px-0"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium" style={{color: 'var(--text)'}}>
        <span>Name</span>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            disabled={status === 'pending'}
            onChange={handleInputChange}
            className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 disabled:opacity-50"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-200">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            disabled={status === 'pending'}
            onChange={handleInputChange}
            className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 disabled:opacity-50"
          />
        </label>
      </div>

        <label className="space-y-2 text-sm font-medium" style={{color: 'var(--text)'}}>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your mission goals or collaboration interest."
          required
          disabled={status === 'pending'}
          onChange={handleInputChange}
          className="min-h-[140px] w-full border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 disabled:opacity-50"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="text-sm leading-6"
          style={{color: status === 'sent' ? 'var(--accent)' : status === 'error' ? '#ef4444' : 'var(--text-muted)'}}
        >
          {message}
        </p>
        <button
          type="submit"
          disabled={status === 'pending'}
          className={`btn btn-primary inline-flex shrink-0 items-center justify-center px-6 py-3 text-sm ${status === 'pending' ? 'opacity-80 cursor-not-allowed' : ''}`}
        >
          {status === 'sent'
            ? 'Message sent'
            : status === 'pending'
            ? 'Sending...'
            : 'Send message'}
        </button>
      </div>
    </form>
  );
}