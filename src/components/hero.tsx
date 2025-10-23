// components/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export function Hero() {
  const [formattedDate, setDate] = useState('');

  useEffect(() => {
    const currentDate = format(new Date(), 'MMMM dd, yyyy');
    setDate(currentDate);
  });

  return (
    <section className='w-full border-b-2 border-foreground pb-8 pt-24'>
      <div className='container mx-auto px-6 sm:px-10 lg:px-16 text-center'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className='flex justify-between items-center text-sm text-muted-foreground mb-4'>
            <span>College Park, MD</span>
            <span>{formattedDate}</span>
          </div>
          <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter'>Richard Yin</h1>
          <p className='mt-6 text-lg md:text-xl max-w-2xl mx-auto'>
            A software engineer and student building full-stack applications, and working with AI and cloud technologies.
          </p>

          {/* NEW: Links and Tech Stack Section */}
          <div className='mt-8 space-y-4'>
            <div className='flex justify-center gap-6'>
              <a
                href='https://github.com/yyrichy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary underline hover:opacity-75 transition-opacity'
              >
                GitHub
              </a>
              <a
                href='https://linkedin.com/in/richxyin'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary underline hover:opacity-75 transition-opacity'
              >
                LinkedIn
              </a>
            </div>
            <p className='text-sm text-muted-foreground font-sans tracking-wider'>
              TypeScript · Python · AWS · SQL · React · Java · & More
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}