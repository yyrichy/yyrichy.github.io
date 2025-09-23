// components/navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
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

  const navLinkClasses =
    'relative hover:text-foreground transition-colors after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link href='/' className='text-xl font-bold'>
            yyrichy<span className='text-muted-foreground'>.github.io</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            <Link href='#about' className={navLinkClasses}>
              About
            </Link>
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
              <Button variant='cta' className='flex items-center gap-2'>
                <ExternalLink size={16} />
                Resume
              </Button>
            </a>
            <ThemeToggle />
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
        <div className='md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b border-border py-4'>
          <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4'>
            <Link href='#about' className='hover:text-foreground transition-colors' onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href='#experience' className='hover:text-foreground transition-colors' onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link href='#projects' className='hover:text-foreground transition-colors' onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href='#contact' className='hover:text-foreground transition-colors' onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href='/Richard_Yin_Resume.pdf' target='_blank' rel='noopener noreferrer'>
              <Button variant='cta' className='w-full flex items-center gap-2'>
                <ExternalLink size={16} />
                Resume
              </Button>
            </a>
            <div className='flex justify-center mt-2'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}