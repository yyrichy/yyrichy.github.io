// components/projects.tsx
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Grade Viewing/Analysis Mobile App',
    description:
      "Developed a successful mobile application that greatly improved grade tracking for students by integrating with the school district's SOAP API to provide real-time academic insights. Reached 100+ downloads across both iOS and Android platforms. Implemented Sentry for production monitoring and reduced app size by 40% through Android App Bundle optimization.",
    image: '/images/grade_helper.png',
    technologies: ['React Native', 'Typescript', 'SOAP API', 'iOS', 'Android', 'Expo'],
    githubUrl: 'https://github.com/yyrichy/Summit',
  },
  {
    id: 2,
    title: 'App Development Club Website',
    description:
      'Worked with other club members to redesign and redevelop the club  website using React, implementing modern UI/UX principles that significantly improved user engagement. Created immersive user experiences through Framer Motion and Atropos animations, while building a responsive design with fluid gradient animations. Implemented a MongoDB backend to dynamically manage project content, eliminating manual updates. Followed professional Agile methodologies with biweekly meetings and GitHub issue tracking.',
    image: '/images/app_dev_club.png',
    technologies: ['React', 'TailwindCSS', 'Typescript', 'MongoDB'],
    liveUrl: 'https://appdevclub.com',
    githubUrl: 'https://github.com/appdevumd/website-v2',
  },
  {
    id: 3,
    title: 'SOLve Android App',
    description:
      'Worked in an agile team for the BranchOut! organization to create an app for the National Congressional App Challenge. App contained practice test questions for Virginia students taking the Virginia Standards of Learning exams, designed to help them study. Used Firebase for backend and authentication. Front-end created with Android Studio using Java and Kotlin.',
    image: '/images/branch_out.png',
    technologies: ['Android Studio', 'Java', 'Kotlin', 'Firebase'],
  },
];

export function Projects() {
  return (
    <section id='projects' className='w-full py-20'>
      <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Projects</h2>
        <p className='text-muted-foreground text-center max-w-2xl mx-auto mb-12'>
          A collection of some of my projects, more information and projects on my resume.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <Card key={project.id} className='flex flex-col h-full mt-0 pt-0'>
              <div className='flex flex-col flex-grow gap-4'>
                <div className='aspect-video relative overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform hover:scale-105 rounded-tl-xl rounded-tr-xl'
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-sm text-muted-foreground'>{project.description}</CardDescription>
                </CardContent>
              </div>
              <CardFooter className='flex gap-2 justify-end'>
                {project.githubUrl && (
                  <Button size='sm' asChild className='flex-1' variant='outline'>
                    <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                      <svg className='w-4 h-4 mr-2' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.494C9.34 21.591 9.5 21.275 9.5 21.003V19.056C6.73 19.591 6.14 17.802 6.14 17.802C5.68 16.676 5.03 16.361 5.03 16.361C4.12 15.742 5.1 15.754 5.1 15.754C6.1 15.827 6.63 16.795 6.63 16.795C7.5 18.29 8.97 17.85 9.54 17.588C9.63 16.988 9.89 16.548 10.17 16.288C7.95 16.028 5.62 15.172 5.62 11.292C5.62 10.184 6.01 9.283 6.65 8.578C6.55 8.318 6.2 7.294 6.75 6.025C6.75 6.025 7.59 5.751 9.5 7.001C10.29 6.776 11.15 6.664 12 6.664C12.85 6.664 13.71 6.776 14.5 7.001C16.41 5.751 17.25 6.025 17.25 6.025C17.8 7.294 17.45 8.318 17.35 8.578C17.99 9.283 18.38 10.184 18.38 11.292C18.38 15.182 16.04 16.018 13.81 16.278C14.17 16.598 14.5 17.228 14.5 18.188V21.003C14.5 21.275 14.66 21.591 15.17 21.494C19.135 20.166 22 16.418 22 12C22 6.477 17.523 2 12 2Z'
                          fill='currentColor'
                        />
                      </svg>
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size='sm' asChild className='flex-1'>
                    <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                      <svg className='w-4 h-4 mr-2' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path d='M15 3H21V9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M10 14L21 3' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                      </svg>
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
