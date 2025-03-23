// components/hero.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'CS & Math Student @ UMD';
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  return (
    <section className='relative w-full min-h-screen flex items-center pt-16 overflow-hidden'>
      {/* Background gradient - full width */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0' />

      {/* Animated background elements */}
      <div className='absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 w-full'>
          <div className='lg:w-1/2 space-y-3 md:space-y-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              Hi, I'm <span className='text-primary'>Richard Yin</span>
            </h1>

            <div className='h-8'>
              <h2 className='text-xl md:text-3xl text-muted-foreground font-medium'>
                {typedText}
                <span className='animate-pulse'>|</span>
              </h2>
            </div>

            <p className='text-lg text-muted-foreground max-w-xl'>
              I'm a constant learner building modern full-stack applications and always looking for new tech, including AI and cloud
              technologies. My work emphasizes clean code, performance, and user experience.
            </p>

            <div className='flex flex-wrap gap-4 pt-4 items-center'>
              <Button size='lg' asChild>
                <a href='#projects'>View Projects</a>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <a href='#contact'>Get In Touch</a>
              </Button>
              <a href='https://github.com/yyrichy' target='_blank' rel='noopener noreferrer'>
                <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                </svg>
              </a>
              <a href='https://linkedin.com/in/richxyin' target='_blank' rel='noopener noreferrer'>
                <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.034h3.56v11.418zM5.34 7.797a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.56v-5.604c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.15 1.457-2.15 2.96v5.704h-3.56V9.034h3.415v1.56h.05c.475-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.37 4.27 5.457v6.25z' />
                </svg>
              </a>
            </div>

            <div className='pt-8'>
              <p className='text-sm text-muted-foreground mb-3'>Tech Stack</p>
              <div className='flex flex-wrap gap-3'>
                {['React', 'TypeScript', 'Python', 'AWS', 'SQL', 'Java', 'TailwindCSS', 'React Native', 'Linux/Unix', 'Supabase'].map(
                  (tech) => (
                    <div key={tech} className='flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm'>
                      {tech}
                    </div>
                  )
                )}
              </div>
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
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce'>
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
        </div>
      </div>
    </section>
  );
}
