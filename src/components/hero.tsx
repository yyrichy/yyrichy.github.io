// components/hero.tsx
'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';

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
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12 w-full'>
          <div className='space-y-3'>
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
              I&apos;m building full-stack applications and always learning new tech, including AI and cloud technologies.
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

            <div className='pt-4'>
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
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='relative w-16 h-16 cursor-pointer'
            onClick={() => {
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Outer circle */}
            <motion.div
              className='absolute inset-0 rounded-full border-2 border-stone-400/20 dark:border-stone-600/20'
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Inner circle */}
            <motion.div
              className='absolute inset-2 rounded-full border-2 border-stone-400/30 dark:border-stone-600/30 bg-gradient-to-b from-stone-200/10 to-stone-100/5 dark:from-stone-700/10 dark:to-stone-800/5 backdrop-blur-sm'
              animate={{
                scale: [1, 0.9, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            />
            {/* Animated arrows */}
            <motion.div
              className='absolute inset-0 flex items-center justify-center'
              initial={{ y: 0 }}
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-stone-500/70 dark:text-stone-400/70'
              >
                <path d='M7 13l5 5 5-5M7 6l5 5 5-5' />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
