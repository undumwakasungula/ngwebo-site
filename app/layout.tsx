import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Ngwebo | Advanced Guidance & Satellite Systems',
  description: 'Ngwebo builds scalable software, hardware, and cloud solutions for satellite guidance systems.',
  metadataBase: new URL('https://ngwebo.com'),
  openGraph: {
    title: 'Ngwebo | Advanced Guidance & Satellite Systems',
    description: 'Scalable solutions for satellite guidance systems across software, hardware, and cloud.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-slate-100 bg-space-950">
        <div className="relative isolate overflow-hidden px-6 sm:px-8 lg:px-12">
          <Navbar />
          <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 pb-16 pt-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
