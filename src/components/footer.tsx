// components/footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full py-8 border-t bg-background'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Column 1: Logo and brief description */}
          <div className='md:col-span-1'>
            <Link href='/' className='text-xl font-bold'>
              Richard Yin<span className='text-primary'>.dev</span>
            </Link>
            <p className='mt-4 text-sm text-muted-foreground'>
              Software engineering student passionate about building innovative applications and solving complex problems.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className='text-sm font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#about' className='text-muted-foreground hover:text-primary transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#projects' className='text-muted-foreground hover:text-primary transition-colors'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href='#experience' className='text-muted-foreground hover:text-primary transition-colors'>
                  Experience
                </Link>
              </li>
              <li>
                <Link href='#contact' className='text-muted-foreground hover:text-primary transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className='text-sm font-semibold mb-4'>Contact</h3>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center gap-2 text-muted-foreground'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2' />
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                </svg>
                <a href='mailto:richyin.99@gmail.com' className='hover:text-primary transition-colors'>
                  richyin.99@gmail.com
                </a>
              </li>
              <li className='flex items-center gap-2 text-muted-foreground'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                <span>Washington, D.C.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className='text-sm font-semibold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href='https://github.com/yyrichy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
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
                  width='20'
                  height='20'
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
        </div>

        {/* Copyright and attribution */}
        <div className='mt-8 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground'>© {new Date().getFullYear()} Richard Yin. All rights reserved.</p>
          <p className='text-sm text-muted-foreground mt-2 md:mt-0'>Built with Next.js, Tailwind CSS, and Shadcn/UI</p>
        </div>
      </div>
    </footer>
  );
}
