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
      'Increased contract revenue by replacing a legacy Python system with a mission-critical network monitor in Go. The new system eliminated a 10% billing data loss rate and cut CPU usage by 50%. Deployed via Docker on 200+ aircraft (ex: Delta), it ensures SLA compliance by performing real-time tests, with results directly determining percentage-based payments from partners.',
    image: '/images/echostar_logo.png',
    skills: ['Go', 'Docker', 'Python', 'Networking'],
  },
  {
    id: 2,
    company: "Children's National Hospital",
    role: 'Software Engineer Intern',
    duration: 'September 2024 - May 2025',
    description:
      'As part of a university club partnership, developed a real-time medical monitoring system to prevent respiratory emergencies in children. I optimized the BLE data link between the sensor and hub, increasing data throughput by 10x for accurate anomaly detection. The system features a Flutter app for instant emergency alerts, with a backend using TimescaleDB and PostgreSQL.',
    image: '/images/national.png',
    skills: ['Flutter', 'Python', 'TimescaleDB', 'PostgreSQL', 'BLE', 'Raspberry Pi'],
  },
  {
    id: 3,
    company: 'Relentless Returns',
    role: 'Software Engineer Intern',
    duration: 'January 2025 - May 2025',
    description:
      'As the first engineering intern at an SEC-registered investment startup, I collaborated directly with the founders to build core product features. I developed the client-facing KYC onboarding form in React and built the Express.js backend that automated monthly statements and real-time trade confirmations via Supabase and Alpaca APIs.',
    image: '/images/rr_logo.png',
    skills: ['Express.js', 'Next.js', 'Typescript', 'React', 'Alpaca API'],
    website: 'https://www.relentlessreturns.com/',
  },
  {
    id: 4,
    company: 'Tramona',
    role: 'Software Engineer Intern',
    duration: 'September 2024 - December 2024',
    description:
      'Developed a full-stack platform for a startup that helps Airbnb hosts fill vacant rental nights. I reduced booking calendar page load times by 50% through memoization and lazy loading, and implemented a key feature allowing hosts to manage their reservation availability.',
    image: '/images/tramona_transparent.png',
    skills: ['Next.js', 'tRPC', 'Typescript', 'Prisma', 'TailwindCSS'],
    website: 'https://tramona.com',
  },
  {
    id: 5,
    company: 'App Development Club at UMD',
    role: 'Software Engineer',
    duration: 'January 2024 - May 2025',
    description:
      "As a software engineer in a club collaborating with clients like Amazon and MITRE, I helped rebuild the club's official website using React, TypeScript, and TailwindCSS to improve our public presence and member recruitment.",
    image: '/images/app_dev_logo.png',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Figma', 'MongoDB'],
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