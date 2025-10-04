// components/projects.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  {
    id: 2,
    title: 'AI Class Schedule Generator',
    shortDescription:
      "AI-powered web app that generates a full, tailored class schedule from a single text input like 'hard ML classes and an easy history course'.",
    fullDescription:
      'Generates tailored UMD class schedules from natural language prompts. I engineered a semantic search pipeline using Google Gemini for intent recognition, LangChain, and HuggingFace Sentence Transformers to intelligently match user preferences against 200+ courses, considering factors like difficulty and professor ratings.',
    image: '/images/testudo_match.png',
    technologies: ['Gemini', 'LangChain', 'HuggingFace', 'TypeScript', 'Next.js'],
    githubUrl: 'https://github.com/yyrichy/scheduleith',
  },
  {
    id: 1,
    title: 'Grade Viewing/Analysis Mobile App',
    shortDescription: 'A mobile app for students to track grades in real-time by integrating with the school district’s SOAP API.',
    fullDescription:
      "Developed a mobile app that integrated with a school district's SOAP API to provide students with real-time grade tracking. Successfully launched on both iOS and Android, achieving 100+ downloads. Implemented Sentry for production monitoring and error tracking, and reduced the final app size by 40% through Android App Bundle optimization.",
    image: '/images/grade_helper.png',
    technologies: ['React Native', 'TypeScript', 'SOAP API', 'iOS', 'Android', 'Expo'],
    githubUrl: 'https://github.com/yyrichy/Summit',
  },
  {
    id: 3,
    title: 'App Development Club Website',
    shortDescription:
      "Redesign and redevelopment of the club's official website to improve our public presence and showcase member projects.",
    fullDescription:
      'Collaborated with a team to overhaul the club website using React, TypeScript, and TailwindCSS. I focused on creating an immersive user experience with Framer Motion animations with a MongoDB backend to dynamically manage and display project content, replacing the previous static, manual update process.',
    image: '/images/app_dev_club.png',
    technologies: ['React', 'TailwindCSS', 'TypeScript', 'MongoDB', 'Framer Motion'],
    liveUrl: 'https://appdevclub.com',
  },
];

export function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedProjectId(id);
  };

  const expandedProject = projects.find((p) => p.id === expandedProjectId);

  return (
    <section id='projects' className='w-full py-16 border-b border-border'>
      <div className='container mx-auto px-6 sm:px-10 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Main Feature Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='md:col-span-2 cursor-pointer group'
            onClick={() => handleCardClick(projects[0].id)}
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              width={800}
              height={450}
              className='w-full filter grayscale group-hover:grayscale-0 transition-all duration-300'
            />
            <h2 className='text-3xl mt-4'>{projects[0].title}</h2>
            <p className='text-sm text-muted-foreground mt-1'>Featuring: {projects[0].technologies.join(', ')}</p>
            {/* FIX: Removed the columns-2 class to make this one paragraph */}
            <div className='mt-4 space-y-4 text-base'>
              <p>{projects[0].shortDescription}</p>
            </div>
            <div className='inline-block mt-4 text-primary underline group-hover:opacity-75 transition-opacity'>Read More &rarr;</div>
          </motion.div>

          {/* Sidebar Projects */}
          <div className='space-y-8 border-t pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8'>
            {projects.slice(1).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='cursor-pointer group'
                onClick={() => handleCardClick(project.id)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className='w-full filter grayscale mb-4 group-hover:grayscale-0 transition-all duration-300'
                />
                <h3 className='text-2xl'>{project.title}</h3>
                <p className='mt-2 text-muted-foreground'>{project.shortDescription}</p>
                <div className='inline-block mt-2 text-primary underline group-hover:opacity-75 transition-opacity'>Details &rarr;</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Re-integrated the modal popup logic */}
      <AnimatePresence>
        {expandedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedProjectId(null)}
              className='fixed inset-0 bg-background/80 backdrop-blur-sm z-40'
            />
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className='relative w-full max-w-3xl h-auto max-h-[90vh] bg-background rounded-lg border border-border shadow-2xl'
              >
                <div className='relative w-full h-72'>
                  <Image
                    src={expandedProject.image}
                    alt={expandedProject.title}
                    fill
                    className='object-cover rounded-t-lg filter grayscale'
                  />
                </div>
                <div className='p-8 overflow-y-auto'>
                  <h2 className='text-3xl font-bold'>{expandedProject.title}</h2>
                  <p className='text-muted-foreground mt-4'>{expandedProject.fullDescription}</p>
                  <div className='flex flex-wrap gap-2 mt-6'>
                    {expandedProject.technologies.map((tech) => (
                      <Badge key={tech} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-4 mt-8'>
                    {expandedProject.liveUrl && (
                      <a
                        href={expandedProject.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md font-sans text-sm font-medium hover:opacity-80 transition-opacity'
                      >
                        View Site <ArrowUpRight size={16} />
                      </a>
                    )}
                    {expandedProject.githubUrl && (
                      <a
                        href={expandedProject.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md font-sans text-sm font-medium hover:bg-muted transition-colors'
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setExpandedProjectId(null)}
                  className='absolute top-4 right-4 text-foreground/50 bg-background/50 rounded-full p-1.5 hover:text-foreground hover:bg-background/75 transition-colors'
                >
                  <X size={20} />
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}