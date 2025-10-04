// app/layout.tsx
import type { Metadata } from 'next';
import { IBM_Plex_Serif, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Richard Yin',
  description: "Richard Yin's Portfolio Website",
};

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body className={`${ibmPlexSerif.variable} ${ibmPlexSans.variable} font-serif antialiased`}>
        <ThemeProvider defaultTheme='light' storageKey='ui-theme'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}