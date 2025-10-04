// components/experience.tsx
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Echostar',
    role: 'Software Engineer Intern',
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
    company: 'Relentless Returns',
    role: 'Software Engineer Intern',
    duration: 'January 2025 - May 2025',
    description:
      'As first intern at a SEC-registered investment management firm startup, I implemented the initial KYC onboarding form on React.js. Additionally on the backend, automated the generation of monthly client statements and real-time trade confirmations by developing a backend service using express.js to aggregate financial data from Supabase and Alpaca APIs.',
    image: '/images/rr_logo.png',
    skills: ['Express.js', 'Next.js', 'Typescript', 'TailwindCSS'],
    website: 'https://www.relentlessreturns.com/',
  },
  {
    id: 4,
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
    id: 5,
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

export function Experience() {
  return (
    <section id='experience' className='w-full py-16 border-b border-border'>
      <div className='container mx-auto px-6 sm:px-10 lg:px-16'>
        <h2 className='text-center text-3xl mb-12'>Career & Experience</h2>
        <div className='max-w-3xl mx-auto'>
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='py-6 border-b border-border last:border-b-0'
            >
              {/* UPDATED HIERARCHY: Role is now the main headline */}
              <h3 className='text-2xl font-bold'>{exp.role}</h3>
              {/* Company and Duration are now a secondary line */}
              <p className='font-sans text-muted-foreground mt-1'>
                {exp.company} &middot; {exp.duration}
              </p>
              <p className='mt-3 text-foreground/80'>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}