// components/contact.tsx
'use client';

import { FileText, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id='contact' className='w-full py-20 bg-gradient-to-br from-stone-50/20 to-gray-100/20 dark:from-stone-950 dark:to-gray-950'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100'
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg'
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 border border-stone-200/20 dark:border-stone-700/20'
          >
            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Contact Information</h3>
            <div className='flex items-center gap-3'>
              <Mail size={20} className='text-stone-600 dark:text-stone-400' />
              <a href='mailto:richyin.99@gmail.com' className='hover:text-stone-700 dark:hover:text-stone-300 transition-colors'>
                richyin.99@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <Phone size={20} className='text-stone-600 dark:text-stone-400' />
              <span>(240) 848-0402</span>
            </div>
            <div className='flex items-center gap-3'>
              <MapPin size={20} className='text-stone-600 dark:text-stone-400' />
              <span>Washington, D.C.</span>
            </div>

            <div className='pt-4'>
              <h3 className='text-sm font-medium mb-3'>Connect with me</h3>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/yyrichy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-stone-700 dark:hover:text-stone-300 transition-colors'
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
                  className='text-muted-foreground hover:text-stone-700 dark:hover:text-stone-300 transition-colors'
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-stone-200/20 dark:border-stone-700/20'
          >
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>More Info</h3>
            <div className='space-y-6 bg-gradient-to-br from-stone-50 to-gray-50 dark:from-stone-900/10 dark:to-gray-900/10 rounded-xl border border-stone-200/10 dark:border-stone-700/10'>
              <a
                href='/Richard_Yin_Resume.pdf'
                download
                className='flex items-center gap-4 p-4 rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors'
              >
                <div className='bg-stone-600/10 dark:bg-stone-400/10 p-3 rounded-full'>
                  <FileText size={20} className='text-stone-600 dark:text-stone-400' />
                </div>
                <div>
                  <h3 className='font-medium'>Resume</h3>
                  <p className='text-sm text-muted-foreground'>Click to download my resume for a more detailed overview of my experience</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
