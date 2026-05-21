// components/experience.tsx
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Visa',
    role: 'Incoming Software Engineer Intern',
    duration: 'June 2026 - August 2026',
    description: [],
    image: '/images/visa_logo.jpeg',
    skills: ['AI Agents'],
  },
  {
    id: 1,
    company: 'Echostar',
    role: 'Software Engineer Intern',
    duration: 'June 2025 - August 2025',
    description: [
      'Rebuilt in-flight network monitoring system from Python APScheduler to Go, replacing blocking thread pool with goroutines and context-based timeouts',
      'Reduced critical test failures by 90% in staging through concurrent goroutine architecture with context-based timeout handling, increasing contract payment percentage by 5% SLA KPI thresholds.',
      'Refactored hardcoded single-client logic into JSON config-driven architecture supporting multiple airlines; containerized deployments with Docker for consistent staging/production deploying.',
    ],
    image: '/images/echostar_logo.png',
    skills: ['Go', 'Docker', 'Python', 'Networking'],
  },
  {
    id: 2,
    company: 'Relentless Returns',
    role: 'Software Engineer Intern',
    duration: 'January 2025 - May 2025',
    description: [
      'Built automated PDF report generation and email delivery system using Express.js and Supabase.',
      'Implemented authenticated document access with session-based login verification and redirect handling, replacing direct PDF email attachments with secure web links.',
      'Built React/Next.js portfolio dashboard with Supabase backend displaying real-time S&P 500 benchmark comparisons and asset allocation breakdowns.',
      'Developed KYC onboarding form with client-side regulatory field validation.'
    ],
    image: '/images/rr_logo.png',
    skills: ['Express.js', 'Next.js', 'Typescript', 'React', 'Alpaca API'],
    website: 'https://www.relentlessreturns.com/',
  },
  {
    id: 3,
    company: "Children's National Hospital",
    role: 'Software Engineer Intern',
    duration: 'September 2024 - December 2024',
    description: [
      'Refactored ESP32-to-Raspberry Pi Bluetooth communication from polling to event-driven architecture, increasing sensor sample rate from 1Hz to 10Hz for tracheostomy monitoring system, enabling 95% ML detection accuracy.',
      'Developed Flutter mobile app for medical staff incident tracking and logging.',
    ],
    image: '/images/national.png',
    skills: ['Flutter', 'Python', 'TimescaleDB', 'PostgreSQL', 'BLE', 'Raspberry Pi'],
  },
  {
    id: 4,
    company: 'Tramona',
    role: 'Software Engineer Intern',
    duration: 'September 2024 - December 2024',
    description: [
      'Developed a full-stack platform for a startup helping Airbnb hosts fill vacant rental nights.',
      'Reduced booking calendar page load times by 50% through memoization and lazy loading.',
      'Implemented a feature allowing hosts to manage reservation availability.',
    ],
    image: '/images/tramona_transparent.png',
    skills: ['Next.js', 'tRPC', 'Typescript', 'Prisma', 'TailwindCSS'],
    website: 'https://tramona.com',
  },
  {
    id: 5,
    company: 'App Development Club at UMD',
    role: 'Software Engineer',
    duration: 'January 2024 - May 2024',
    description: [
      "Rebuilt the club's official website using React, TypeScript, and TailwindCSS.",
    ],
    image: '/images/app_dev_logo.png',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Figma', 'MongoDB'],
    website: 'https://appdevclub.com',
  },
];

export function Experience() {
  return (
    <section id='experience' className='w-full py-16 border-b border-border'>
      <div className='container mx-auto px-6 sm:px-10 lg:px-16'>
        <h2 className='text-center text-3xl mb-12'>Experience</h2>
        <div className='max-w-3xl mx-auto'>
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='py-6 border-b border-border last:border-b-0'
            >
              <h3 className='text-2xl font-bold'>{exp.role}</h3>
              <p className='font-sans text-muted-foreground mt-1'>
                {exp.company} &middot; {exp.duration}
              </p>

              <ul className='mt-3 space-y-2 list-disc list-inside text-foreground/80'>
                {exp.description.map((point, index) => (
                  <li key={index} className='leading-relaxed'>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
