import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Ngwebo | Advanced Guidance & Satellite Systems',
  description: 'Ngwebo builds scalable software, hardware, and cloud solutions for satellite guidance systems.',
  metadataBase: new URL('https://ngwebo.com'),
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Ngwebo | Advanced Guidance & Satellite Systems',
    description: 'Scalable solutions for satellite guidance systems across software, hardware, and cloud.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" style={{backgroundColor: 'var(--background)', color: 'var(--text)'}}>
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
