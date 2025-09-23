// components/hero.tsx
'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden'>
      {/* Animated Gradient Background */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]'></div>
        <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-br from-white via-secondary/50 to-white dark:from-background dark:via-secondary/20 dark:to-background'></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight'
        >
          Hi, I&apos;m{' '}
          <span className='bg-gradient-to-r from-primary via-green-500 to-accent text-transparent bg-clip-text'>Richard Yin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className='mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto'
        >
          A CS & Math Student at UMD building full-stack applications with a focus on AI and cloud technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-wrap gap-4 pt-8 justify-center items-center'
        >
          <a
            href='#projects'
            className='inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='inline-block px-8 py-3 border-2 border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors duration-300'
          >
            Get In Touch
          </a>
        </motion.div>

        {/* NEW SECTION for Links & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mt-16 text-muted-foreground'
        >
          <div className='flex justify-center gap-6 mb-4'>
            <a href='https://github.com/yyrichy' target='_blank' rel='noopener noreferrer' className='hover:text-primary transition-colors'>
              <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='fill-current'>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
            </a>
            <a
              href='https://linkedin.com/in/richxyin'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='fill-current'>
                <path d='M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.034h3.56v11.418zM5.34 7.797a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.56v-5.604c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.15 1.457-2.15 2.96v5.704h-3.56V9.034h3.415v1.56h.05c.475-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.37 4.27 5.457v6.25z' />
              </svg>
            </a>
          </div>
          <p className='text-sm tracking-wide'>TypeScript · Python · AWS · SQL · React · Java · & More</p>
        </motion.div>
      </div>
    </section>
  );
}