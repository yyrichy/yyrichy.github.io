// components/navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = 'font-sans hover:underline underline-offset-4';

  return (
    // Simplified nav styling: always opaque with a bottom border
    <nav className='fixed w-full z-50 bg-background border-b border-border'>
      {/* Updated horizontal padding for consistency */}
      <div className='w-full max-w-[2000px] mx-auto px-6 sm:px-10 lg:px-16'>
        <div className='flex items-center justify-between py-4'>
          {/* Updated logo to use serif font */}
          <Link href='/' className='text-xl font-bold font-serif tracking-tight'>
            Richard Yin
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            <Link href='#experience' className={navLinkClasses}>
              Experience
            </Link>
            <Link href='#projects' className={navLinkClasses}>
              Projects
            </Link>
            <Link href='#contact' className={navLinkClasses}>
              Contact
            </Link>
            <a href='/Richard_Yin_Resume.pdf' target='_blank' rel='noopener noreferrer'>
              {/* Changed button variant to outline */}
              <Button variant='outline' className='flex items-center gap-2 font-sans'>
                <ExternalLink size={16} />
                Resume
              </Button>
            </a>
            {/* Removed ThemeToggle */}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className='md:hidden'>
            <Button variant='ghost' size='icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className='sr-only'>Toggle menu</span>
              {isMenuOpen ? (
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
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              ) : (
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
                  <line x1='4' y1='12' x2='20' y2='12'></line>
                  <line x1='4' y1='6' x2='20' y2='6'></line>
                  <line x1='4' y1='18' x2='20' y2='18'></line>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute w-full bg-background border-b border-border py-4'>
          <div className='w-full max-w-[2000px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-4 font-sans'>
            <Link href='#experience' className='hover:underline' onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link href='#projects' className='hover:underline' onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href='#contact' className='hover:underline' onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href='/Richard_Yin_Resume.pdf' target='_blank' rel='noopener noreferrer'>
              <Button variant='outline' className='w-full flex items-center gap-2 font-sans'>
                <ExternalLink size={16} />
                Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}