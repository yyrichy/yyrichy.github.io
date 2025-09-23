// components/experience.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const experiences = [
  // ... your experience data remains the same
  {
    id: 1,
    company: 'Echostar',
    role: 'Aeronautical Software Engineer Intern',
    duration: 'June 2025 - August 2025',
    description:
      'Designed and implemented an embedded Go (GoLang) network connectivity monitoring system, running on Delta aircraft through Docker, performing real-time network and service tests. Replaced a fragile Python-based system that suffered from missed test runs by using ticker-based scheduling and timeout-bound goroutines, reducing CPU usage by 50%.',
    image: '/images/echostar_logo.png',
    skills: ['Go', 'Docker', 'Python'],
  },
  {
    id: 2,
    company: "Children's National Hospital",
    role: 'Software Engineer Intern',
    duration: 'September 2024 - May 2025',
    description:
      'Contracted through a club, developed a mobile app and backend system for monitoring breathing tube effectiveness in children with tracheostomy. The app communicates with our device running real-time CO2 level analysis to alert nurses and parents during emergencies. The backend device uses TimescaleDB for time-series data, users and nurses added to PostgreSQL database via web application. Worked with other university students.',
    image: '/images/national.png',
    skills: ['Flutter', 'Python', 'TimescaleDB', 'PostgreSQL', 'NumPy'],
  },
  {
    id: 3,
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
    id: 4,
    company: 'App Development Club University of Maryland',
    role: 'Software Engineer',
    duration: 'January 2024 - May 2025',
    description:
      "Member of a university programming club collaborating with Fortune 500 companies (Amazon, MITRE, CNH, etc.). Contributed to rebuilding the club's website using React and TailwindCSS.",
    image: '/images/app_dev_logo.png',
    skills: ['React', 'HTML/CSS', 'Typescript', 'Figma', 'MongoDB'],
    website: 'https://appdevclub.com',
  },
];

const cardColors = [
  'from-purple-500/10 to-blue-500/10',
  'from-green-500/10 to-cyan-500/10',
  'from-amber-500/10 to-orange-500/10',
  'from-pink-500/10 to-red-500/10',
];

export function Experience() {
  return (
    <section id='experience' className='w-full py-20 overflow-hidden'>
      <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold mb-16 font-serif text-center'
        >
          My Journey
        </motion.h2>

        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`w-full md:w-4/5 p-6 rounded-2xl border border-border bg-gradient-to-r ${cardColors[index % cardColors.length]}
                ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
              `}
            >
              <div className='flex items-start gap-4'>
                <div className='relative w-12 h-12 flex-shrink-0 mt-1 rounded-lg bg-muted p-1.5'>
                  <Image src={exp.image} alt={exp.company} fill className='object-contain' />
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-muted-foreground'>{exp.duration}</p>
                  <h3 className='text-xl font-bold font-serif mt-1'>{exp.role}</h3>
                  <p className='text-muted-foreground font-medium'>{exp.company}</p>
                  <p className='text-foreground/80 mt-3'>{exp.description}</p>
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant='secondary'>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}