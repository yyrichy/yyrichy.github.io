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
    shortDescription: 'A semantic course-matching web app that generates tailored class schedules from natural language queries.',
    fullDescription:
      "Developed in a hackathon (Bitcamp 2025) a semantic course-matching web app that generates tailored class schedules from natural language queries. Implemented similarity search using HuggingFace Sentence Transformers and LangChain's MemoryVectorStore to match course descriptions with user interests.",
    image: '/images/testudo_match.png',
    technologies: ['Gemini', 'LangChain', 'HuggingFace', 'Typescript', 'Next.js'],
    liveUrl: 'https://devpost.com/software/testudo-match',
  },
  {
    id: 1,
    title: 'Grade Viewing/Analysis Mobile App',
    shortDescription: 'A mobile app for students to track grades in real-time by integrating with the school district’s SOAP API.',
    fullDescription:
      "Developed a successful mobile application that greatly improved grade tracking for students by integrating with the school district's SOAP API to provide real-time academic insights. Reached 100+ downloads across both iOS and Android platforms. Implemented Sentry for production monitoring and reduced app size by 40% through Android App Bundle optimization.",
    image: '/images/grade_helper.png',
    technologies: ['React Native', 'Typescript', 'SOAP API', 'iOS', 'Android', 'Expo'],
    githubUrl: 'https://github.com/yyrichy/Summit',
  },
  {
    id: 3,
    title: 'App Development Club Website',
    shortDescription: 'Redesigned and redeveloped the club website using React, improving user engagement with dynamic content.',
    fullDescription:
      'Worked with other club members to redesign and redevelop the club website using React, significantly improved user engagement. Created immersive user experiences through Framer Motion and Atropos animations. Implemented a MongoDB backend to dynamically manage project content, eliminating manual updates.',
    image: '/images/app_dev_club.png',
    technologies: ['React', 'TailwindCSS', 'Typescript', 'MongoDB'],
    liveUrl: 'https://appdevclub.com',
  },
];

// NEW: Array of gradient classes for colorful card borders
const cardBorderColors = ['from-purple-500 to-blue-500', 'from-green-500 to-cyan-500', 'from-amber-500 to-orange-500'];

export function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const expandedProject = projects.find((p) => p.id === expandedProjectId);

  return (
    <section id='projects' className='relative w-full py-20 overflow-hidden'>
      {/* NEW: Added a subtle gradient background to the entire section */}
      <div className='absolute inset-0 z-0 opacity-20 dark:opacity-30'>
        <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-br from-primary/20 via-secondary/10 to-background'></div>
      </div>

      <div className='relative z-10 w-full max-w-[2000px] mx-auto px-6 sm:px-10 lg:px-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // UPDATED: Added gradient text to the heading
          className='text-4xl md:text-5xl font-bold mb-12 font-serif text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
        >
          Featured Projects
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => handleCardClick(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              // UPDATED: Added classes for the glowing gradient border effect
              className={`relative p-0.5 rounded-2xl group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* The animated gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                  cardBorderColors[index % cardBorderColors.length]
                } opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-md group-hover:blur-lg`}
              />
              <div className='relative h-96 rounded-[14px] overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                <div className='absolute inset-0 p-8 flex flex-col justify-end text-white'>
                  <h3 className={`font-serif font-bold ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h3>
                  <p className='mt-2 max-w-lg'>{project.shortDescription}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedProjectId(null)}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
            />
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
              <motion.div
                layoutId={`project-card-${expandedProject.id}`}
                className='relative w-full max-w-3xl h-auto max-h-[90vh] bg-card rounded-2xl overflow-hidden'
              >
                <div className='relative w-full h-72'>
                  <Image src={expandedProject.image} alt={expandedProject.title} fill className='object-cover' />
                </div>
                <div className='p-8 overflow-y-auto'>
                  <h2 className='font-serif text-3xl font-bold'>{expandedProject.title}</h2>
                  <p className='text-muted-foreground mt-4'>{expandedProject.fullDescription}</p>
                  <div className='flex flex-wrap gap-2 mt-6'>
                    {expandedProject.technologies.map((tech) => (
                      <Badge key={tech} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-4 mt-6'>
                    {expandedProject.liveUrl && (
                      <a
                        href={expandedProject.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors'
                      >
                        View Site <ArrowUpRight size={16} />
                      </a>
                    )}
                    {expandedProject.githubUrl && (
                      <a
                        href={expandedProject.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='inline-flex items-center gap-2 px-4 py-2 border rounded-full font-medium hover:bg-muted transition-colors'
                      >
                        View GitHub
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setExpandedProjectId(null)}
                  className='absolute top-4 right-4 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/75 transition-colors'
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