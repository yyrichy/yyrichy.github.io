// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Richard Yin | Software Engineer',
  description: 'Portfolio website showcasing my projects and experience as a software engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen pt-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
