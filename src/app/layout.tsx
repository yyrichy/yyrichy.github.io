// app/layout.tsx
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Lora } from 'next/font/google'; // Import Lora
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Richard Yin',
  description: "Richard Yin's Portfolio Website",
};

// Configure the Lora font
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      {/* Add the lora variable to the body class */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${lora.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme='system' storageKey='ui-theme'>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}