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
            <div className='flex flex-wrap gap-2 mb-4'>
              <Badge variant='outline' className='px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20'>
                Available for Work
              </Badge>
              <Badge variant='outline' className='px-3 py-1 text-sm'>
                Software Engineering Intern
              </Badge>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              Hi, I&apos;m <span className='text-primary'>Richard Yin</span>
            </h1>

            <div className='h-8'>
              <h2 className='text-xl md:text-3xl text-muted-foreground font-medium'>
                {typedText}
                <span className='animate-pulse'>|</span>
              </h2>
            </div>

            <p className='text-lg text-muted-foreground max-w-xl'>
              I build modern full-stack applications and explore emerging fields in computer science, including artificial intelligence and
              cloud technologies. My work emphasizes clean code, optimal performance, and exceptional user experience, driven by a passion
              for solving complex problems through innovative technology.
            </p>

            <div className='flex flex-wrap gap-4 pt-4'>
              <Button size='lg' asChild>
                <a href='#projects'>View Projects</a>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <a href='#contact'>Get In Touch</a>
              </Button>
            </div>

            <div className='pt-8'>
              <p className='text-sm text-muted-foreground mb-3'>Tech Stack</p>
              <div className='flex flex-wrap gap-3'>
                {['React', 'TypeScript', 'Python', 'AWS', 'SQL', 'MongoDB', 'Java', 'TailwindCSS', 'React Native', 'Linux/Unix'].map(
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
