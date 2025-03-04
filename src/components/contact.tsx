// components/contact.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id='contact' className='w-full py-20'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Get In Touch</h2>
        <p className='text-muted-foreground text-center max-w-2xl mx-auto mb-12'>
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>I&apos;m currently looking for new opportunities. Don&apos;t hesitate to contact me!</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Mail size={20} className='text-primary' />
                <a href='mailto:richyin.99@gmail.com' className='hover:text-primary transition-colors'>
                  richyin.99@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={20} className='text-primary' />
                <span>(240) 848-0402</span>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin size={20} className='text-primary' />
                <span>Washington, D.C.</span>
              </div>

              <div className='pt-4'>
                <h3 className='text-sm font-medium mb-3'>Connect with me</h3>
                <div className='flex gap-4'>
                  <a
                    href='https://github.com/yyrichy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors'
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
                    >
                      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                      <path d='M9 18c-4.51 2-5-2-7-2' />
                    </svg>
                  </a>
                  <a
                    href='https://linkedin.com/in/richxyin'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors'
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
                    >
                      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                      <rect width='4' height='12' x='2' y='9' />
                      <circle cx='4' cy='4' r='2' />
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='w-full bg-background'>
            <CardHeader>
              <CardTitle>Alternative Contact Methods</CardTitle>
              <CardDescription>You can also reach me through these platforms</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6 bg-muted/30'>
              <a href='/Richard_Yin_Resume.pdf' download className='flex items-center gap-4 p-4 rounded-lg'>
                <div className='bg-primary/10 p-3 rounded-full'>
                  <FileText size={20} className='text-primary' />
                </div>
                <div>
                  <h3 className='font-medium'>Resume</h3>
                  <p className='text-sm text-muted-foreground'>Click to download my resume for a detailed overview of my experience</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
