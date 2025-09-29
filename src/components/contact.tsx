// components/contact.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const email = 'richyin.99@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section id='contact' className='relative w-full py-20 overflow-hidden'>
      <div className='absolute inset-0 z-0 opacity-20 dark:opacity-30'>
        <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-br from-primary/20 via-secondary/10 to-background'></div>
      </div>
      <div className='relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Column: Call to Action */}
          <div className='text-center md:text-left'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl md:text-5xl font-bold font-serif'
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-muted-foreground mt-4 text-lg'
            >
              Feel free to reach out with anything!
            </motion.p>
          </div>

          {/* Right Column: Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-6'
          >
            {/* Email with Copy Button */}
            <div className='flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl backdrop-blur-sm'>
              <Mail size={24} className='text-primary flex-shrink-0' />
              <div className='flex-grow'>
                <p className='text-muted-foreground text-sm'>Email</p>
                <a href={`mailto:${email}`} className='font-medium hover:underline'>
                  {email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className='flex-shrink-0 p-2 rounded-md hover:bg-muted transition-colors'
                aria-label='Copy email address'
              >
                {isCopied ? <Check size={20} className='text-green-500' /> : <Copy size={20} />}
              </button>
            </div>

            {/* Social and Resume Links */}
            <div className='grid grid-cols-3 gap-4 text-center'>
              <a
                href='https://github.com/yyrichy'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center gap-2 p-4 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:bg-muted transition-colors'
              >
                <Github size={28} />
                <span className='text-sm font-medium'>GitHub</span>
              </a>
              <a
                href='https://linkedin.com/in/richxyin'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center gap-2 p-4 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:bg-muted transition-colors'
              >
                <Linkedin size={28} />
                <span className='text-sm font-medium'>LinkedIn</span>
              </a>
              <a
                href='/Richard_Yin_Resume.pdf'
                download
                className='flex flex-col items-center gap-2 p-4 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:bg-muted transition-colors'
              >
                <FileText size={28} />
                <span className='text-sm font-medium'>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}