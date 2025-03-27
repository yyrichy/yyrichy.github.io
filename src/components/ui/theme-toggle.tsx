'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='group relative h-[2.5rem] w-[4.5rem] rounded-full bg-stone-200 p-1 transition-colors duration-200 dark:bg-stone-700'
    >
      <div className='absolute left-1 top-1/2 -translate-y-1/2 flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 dark:translate-x-[2.2rem] dark:bg-stone-800'>
        <Sun
          className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-stone-800 transition-all duration-500 dark:rotate-[360deg] dark:scale-75 dark:opacity-0 dark:text-stone-800'
          strokeWidth={2}
        />
        <Moon
          className='absolute h-[1.2rem] w-[1.2rem] rotate-[-360deg] scale-75 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100 text-white'
          strokeWidth={2}
        />
      </div>
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}
