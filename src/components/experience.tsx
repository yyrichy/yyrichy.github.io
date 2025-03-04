// components/experience.tsx
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample experience data
const experiences = [
  {
    id: 1,
    company: "Children's National Hospital",
    role: 'Software Engineering Intern',
    duration: 'September 2024 - Current',
    description:
      'Developing a mobile app and backend system for monitoring breathing tube effectiveness in children with tracheostomy. The app communicates with our device running real-time CO2 level analysis to alert nurses and parents during emergencies. Backend device using TimescaleDB for time-series data, users and nurses added to PostgreSQL database via web application.',
    image: '/images/national.png',
    skills: ['Flutter', 'Python', 'TimescaleDB', 'PostgreSQL', 'NumPy'],
  },
  {
    id: 2,
    company: 'Tramona',
    role: 'Web Developer Intern',
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
    role: 'Frontend Developer',
    duration: 'January 2024 - Current',
    description:
      "Member of a university programming club collaborating with Fortune 500 companies (Amazon, MITRE, CNH, etc.). Contributed to rebuilding the club's website using React.",
    image: '/images/app_dev_logo.png',
    skills: ['React', 'HTML/CSS', 'Typescript', 'Figma', 'MongoDB'],
    website: 'https://appdevclub.com',
  },
];

export function Experience() {
  return (
    <section id='experience' className='w-full py-20 bg-muted/50'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-48'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Experience</h2>
        <p className='text-muted-foreground text-center max-w-2xl mx-auto mb-12'>
          My professional journey as a software engineering intern, where I&apos;ve applied my skills in real-world environments.
        </p>

        <div className='space-y-8'>
          {experiences.map((exp) => (
            <Card key={exp.id} className='overflow-hidden border-0 shadow-md p-4'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/4 bg-muted flex items-center justify-center'>
                  <div className='relative w-full h-full overflow-hidden border-4 border-background'>
                    <Image src={exp.image} alt={exp.company} fill className='object-contain' />
                  </div>
                </div>
                <div className='md:w-3/4'>
                  <CardHeader className='mb-2'>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
                      <div>
                        <CardTitle className='mb-1'>{exp.role}</CardTitle>
                        <CardDescription className='text-primary font-medium'>{exp.company}</CardDescription>
                      </div>
                      <Badge variant='outline'>{exp.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-4'>{exp.description}</p>
                    {exp.website && (
                      <p className='mb-4'>
                        <a href={exp.website} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
                          {exp.website}
                        </a>
                      </p>
                    )}
                    <div className='flex flex-wrap gap-2'>
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant='secondary'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
