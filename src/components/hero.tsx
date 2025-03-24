// components/hero.tsx
'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const shape: React.CSSProperties = {
  strokeWidth: 10,
  strokeLinecap: 'round',
  fill: 'transparent',
};

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = useMemo(() => 'CS & Math Student @ UMD', []);
  const [textIndex, setTextIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const typeText = useCallback(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(fullText);
      return;
    }
    return typeText();
  }, [prefersReducedMotion, fullText, typeText]);

  return (
    <section className='relative w-full min-h-screen flex items-center pt-16 overflow-hidden'>
      {/* Background gradient - full width */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-100 via-stone-50 to-stone-200/50 dark:from-stone-900 dark:via-stone-800/50 dark:to-stone-950 z-0' />

      {/* Decorative patterns - Japanese/Streetwear inspired */}
      <div className='absolute inset-0 overflow-hidden z-0'>
        {/* Diagonal lines */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className='absolute -left-1/4 top-0 w-full h-[150%] bg-gradient-to-r from-stone-400/20 to-stone-300/10 dark:from-stone-400/10 dark:to-stone-500/5 transform -rotate-45'
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className='absolute -right-1/4 top-1/4 w-full h-[150%] bg-gradient-to-l from-stone-400/20 to-stone-300/10 dark:from-stone-400/10 dark:to-stone-500/5 transform -rotate-45'
        />

        {/* Geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='absolute top-1/4 left-1/4 w-64 h-64 border border-stone-400/30 dark:border-stone-500/30 transform rotate-45'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='absolute bottom-1/4 right-1/4 w-96 h-96 border border-stone-400/30 dark:border-stone-500/30 transform -rotate-12'
        />

        {/* Abstract lines */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className='absolute top-1/3 left-0 w-1/3 h-px bg-gradient-to-r from-stone-400/40 to-transparent transform -rotate-12'
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className='absolute bottom-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-stone-400/40 to-transparent transform rotate-12'
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 w-full'>
          <div className='lg:w-1/2 space-y-3 md:space-y-6'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif'
            >
              Hi, I&apos;m{' '}
              <span className='bg-gradient-to-r from-stone-700 via-stone-600 to-stone-800 dark:from-stone-300 dark:via-stone-400 dark:to-stone-200 text-transparent bg-clip-text font-sans'>
                Richard Yin
              </span>
            </motion.h1>

            <div className='h-8'>
              <h2 className='text-xl md:text-3xl text-stone-600 dark:text-stone-400 font-light tracking-wide'>
                {typedText}
                <span className='animate-pulse'>|</span>
              </h2>
            </div>

            <p className='text-lg text-stone-600 dark:text-stone-400 max-w-xl font-light leading-relaxed'>
              I&apos;m building full-stack applications and always learning new tech, including AI and cloud technologies. My work
              emphasizes clean code, performance, and user experience.
            </p>

            <div className='flex flex-wrap gap-4 pt-4 items-center'>
              <motion.a
                href='#projects'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='inline-block px-6 py-3 bg-stone-800 dark:bg-stone-700 text-white rounded-none font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group'
              >
                View Projects
              </motion.a>
              <motion.a
                href='#contact'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='inline-block px-6 py-3 border-2 border-stone-800 dark:border-stone-600 text-stone-800 dark:text-stone-400 rounded-none font-medium hover:bg-stone-50 dark:hover:bg-stone-800/50 transform hover:-translate-y-1 transition-all duration-300'
              >
                Get In Touch
              </motion.a>
              <motion.a
                href='https://github.com/yyrichy'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                className='text-stone-800 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors'
              >
                <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='fill-current'>
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                </svg>
              </motion.a>
              <motion.a
                href='https://linkedin.com/in/richxyin'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                className='text-stone-800 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors'
              >
                <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='fill-current'>
                  <path d='M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.034h3.56v11.418zM5.34 7.797a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.56v-5.604c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.15 1.457-2.15 2.96v5.704h-3.56V9.034h3.415v1.56h.05c.475-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.37 4.27 5.457v6.25z' />
                </svg>
              </motion.a>
            </div>

            <div className='pt-8'>
              <p className='text-sm text-muted-foreground mb-3'>My Tech Stack</p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='flex flex-wrap gap-3'>
                {['React', 'TypeScript', 'Python', 'AWS', 'SQL', 'Java', 'TailwindCSS', 'React Native', 'Supabase'].map((tech) => (
                  <div
                    key={tech}
                    className='flex items-center gap-2 bg-gradient-to-r from-stone-100 to-gray-100 dark:from-stone-900/30 dark:to-gray-900/30 px-3 py-1 rounded-full text-sm text-stone-700 dark:text-stone-300 shadow-md'
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className='lg:w-1/2 flex justify-center lg:justify-end w-full'>
            <div className='relative'>
              {/* Decorative elements */}
              <div className='absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl' />
              <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl' />

              {/* Profile image with border */}
              <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl'>
                <Image src='/images/profile.png' alt='My photo' fill className='object-cover' priority />
              </div>

              {/* Floating badges */}
              <div className='absolute -top-4 -right-4'>
                <Badge variant='outline' className='bg-background shadow-lg rounded-lg p-3 flex items-center gap-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                  <span className='text-sm font-medium'>Open to Work</span>
                </Badge>
              </div>

              <div className='absolute -bottom-4 -left-4 bg-background shadow-lg rounded-lg p-3'>
                <div className='flex items-center gap-2'>
                  <MapPin size={16} className='text-primary' />
                  <span className='text-sm font-medium'>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce'
        >
          <span className='text-sm text-muted-foreground mb-2'>Scroll Down</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M12 5v14M5 12l7 7 7-7' />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
