// components/footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full py-8 border-t border-border'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-muted-foreground'>© {new Date().getFullYear()} Richard Yin. All rights reserved.</p>
          <div className='flex gap-6 text-sm text-muted-foreground'>
            <Link href='#experience' className='hover:text-primary transition-colors'>
              Experience
            </Link>
            <Link href='#projects' className='hover:text-primary transition-colors'>
              Projects
            </Link>
            <Link href='#contact' className='hover:text-primary transition-colors'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}