// components/experience.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample experience data
const experiences = [
  {
    id: 1,
    company: "Children's National Hospital",
    role: 'Software Engineering Intern',
    duration: 'September 2024 - May 2025',
    description:
      'Developed a mobile app and backend system for monitoring breathing tube effectiveness in children with tracheostomy. The app communicates with our device running real-time CO2 level analysis to alert nurses and parents during emergencies. The backend device uses TimescaleDB for time-series data, users and nurses added to PostgreSQL database via web application. Worked with other university students.',
    image: '/images/national.png',
    skills: ['Flutter', 'Python', 'TimescaleDB', 'PostgreSQL', 'NumPy'],
  },
  {
    id: 2,
    company: 'Tramona',
    role: 'Software Engineer Intern',
    duration: 'September 2024 - December 2024',
    description:
      'Developed the web platform for a startup helping Airbnb hosts fill vacant rental nights. Optimized performance, reducing page load times by 50% through memoization and lazy loading. Designed and implemented a calendar feature for hosts to block/unblock specific dates for reservations.',
    image: '/images/tramona_transparent.png',
    skills: ['Next.js', 'tRPC', 'Typescript', 'TailwindCSS'],
    website: 'https://tramona.com',
  },
  {
    id: 3,
    company: 'App Development Club University of Maryland',
    role: 'Software Engineer',
    duration: 'January 2024 - Current',
    description:
      "Member of a university programming club collaborating with Fortune 500 companies (Amazon, MITRE, CNH, etc.). Contributed to rebuilding the club's website using React and TailwindCSS.",
    image: '/images/app_dev_logo.png',
    skills: ['React', 'HTML/CSS', 'Typescript', 'Figma', 'MongoDB'],
    website: 'https://appdevclub.com',
  },
];

export function Experience() {
  return (
    <section id='experience' className='w-full min-h-screen py-20 flex items-center relative overflow-hidden'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-gray-100'
        >
          Experience
        </motion.h2>

        <div className='relative'>
          {/* Vertical Timeline Line */}
          <div className='hidden md:inline-block absolute left-[100px] sm:left-[120px] md:left-[160px] h-full w-px bg-gradient-to-b from-stone-400 to-gray-500 dark:from-stone-600 dark:to-gray-700' />

          <div className='space-y-16'>
            {experiences.map((exp) => (
              <div key={exp.id} className='relative flex flex-col md:flex-row items-center gap-6 md:pl-[200px] lg:pl-[240px]'>
                {/* Timeline Node */}
                <div className='hidden md:inline-block absolute left-[100px] sm:left-[120px] md:left-[160px] transform -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-3 border-stone-500 dark:border-stone-400 z-10' />

                {/* Content */}
                <div className='flex-1 w-full md:w-1/2 p-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-stone-50/10 to-gray-50/10 dark:from-stone-900/10 dark:to-gray-900/10 border border-stone-200/20 dark:border-stone-700/20'>
                  <div className='flex items-center gap-4 mb-2'>
                    <div className='relative w-10 h-10 overflow-hidden rounded-lg'>
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        fill
                        className='object-contain p-2 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 dark:from-blue-900/10 dark:to-indigo-900/10'
                      />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{exp.role}</h3>
                      <p className='text-stone-600/80 dark:text-stone-400/80 font-medium'>{exp.company}</p>
                    </div>
                  </div>
                  <span className='inline-block text-sm font-medium text-stone-600/70 dark:text-stone-400/70 mb-3'>{exp.duration}</span>
                  <p className='text-gray-700/90 dark:text-gray-200/90 mb-4'>{exp.description}</p>
                  {exp.website && (
                    <a
                      href={exp.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-stone-600/80 dark:text-stone-400/80 mb-4 inline-block'
                    >
                      {exp.website}
                    </a>
                  )}
                  <div className='flex flex-wrap gap-2 mt-3'>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className='px-3 py-1.5 bg-gradient-to-r from-stone-50/30 via-gray-50/30 to-stone-50/30 dark:from-stone-900/30 dark:via-gray-900/30 dark:to-stone-900/30 text-stone-600/90 dark:text-stone-300/90 rounded-lg text-sm font-medium border border-stone-200/30 dark:border-stone-700/30 backdrop-blur-[1px] shadow-sm'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
