// components/navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link href='/' className='text-xl font-bold'>
            Richard Yin<span className='text-primary'>.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            <Link href='#about' className='hover:text-primary transition-colors'>
              About
            </Link>
            <Link href='#projects' className='hover:text-primary transition-colors'>
              Projects
            </Link>
            <Link href='#experience' className='hover:text-primary transition-colors'>
              Experience
            </Link>
            <Link href='#contact' className='hover:text-primary transition-colors'>
              Contact
            </Link>
            <a href='/Richard_Yin_Resume.pdf' target='_blank' rel='noopener noreferrer'>
              <Button variant='default' className='flex items-center gap-2'>
                <ExternalLink size={16} />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
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
        <div className='md:hidden absolute w-full bg-background border-b py-4'>
          <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4'>
            <Link href='#about' className='hover:text-primary transition-colors' onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href='#projects' className='hover:text-primary transition-colors' onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href='#experience' className='hover:text-primary transition-colors' onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link href='#contact' className='hover:text-primary transition-colors' onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href='/Richard_Yin_Resume.pdf' target='_blank' rel='noopener noreferrer'>
              <Button variant='outline' className='flex items-center gap-2'>
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
