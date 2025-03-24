// components/projects.tsx
'use client';

import Image from 'next/image';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Grade Viewing/Analysis Mobile App',
    description:
      'Developed a successful mobile application that greatly improved grade tracking for students by integrating with the school district&apos;s SOAP API to provide real-time academic insights. Reached 100+ downloads across both iOS and Android platforms. Implemented Sentry for production monitoring and reduced app size by 40% through Android App Bundle optimization.',
    image: '/images/grade_helper.png',
    technologies: ['React Native', 'Typescript', 'SOAP API', 'iOS', 'Android', 'Expo'],
    githubUrl: 'https://github.com/yyrichy/Summit',
  },
  {
    id: 2,
    title: 'App Development Club Website',
    description:
      'Worked with other club members to redesign and redevelop the club website using React, significantly improved user engagement. Created immersive user experiences through Framer Motion and Atropos animations. Implemented a MongoDB backend to dynamically manage project content, eliminating manual updates.',
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
    <section id='projects' className='relative w-full py-32 overflow-hidden'>
      {/* Subtle gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-stone-50/10 to-gray-100/10 dark:from-stone-950 dark:to-gray-950' />

      <div className='relative z-10'>
        <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100'>Featured Projects</h2>
          <p className='text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg'>
            A showcase of my technical projects and creative solutions.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm overflow-hidden shadow-lg transition-all duration-200 border border-stone-200/20 dark:border-stone-700/20'
                style={{
                  borderRadius: '0.75rem',
                }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <div className='relative aspect-video overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-102'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300'>{project.title}</h3>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 text-sm bg-stone-100/50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-300 rounded-md'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>

                  <div className='flex gap-4'>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                          <path d='M9 18c-4.51 2-5-2-7-2' />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                          <polyline points='15 3 21 3 21 9' />
                          <line x1='10' y1='14' x2='21' y2='3' />
                        </svg>
                      </a>
                    )}
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
