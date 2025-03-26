// components/projects.tsx
'use client';

import Image from 'next/image';

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
      {/* Angular geometric pattern background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-stone-50/10 via-gray-50/5 to-stone-100/10 dark:from-stone-950 dark:via-gray-900/5 dark:to-stone-900/10' />
        <div className='absolute inset-0 opacity-[0.02] dark:opacity-[0.03]' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z' fill='currentColor' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className='relative z-10'>
        <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16'>Featured Projects</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = (y - centerY) / 30;
                  const rotateY = -((x - centerX) / 50);

                  requestAnimationFrame(() => {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
                  });
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  requestAnimationFrame(() => {
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
                  });
                }}
                className='relative bg-white/50 dark:bg-gray-800/50 overflow-hidden shadow-lg border border-stone-200/20 dark:border-stone-700/20 rounded-xl transition-all duration-200 ease-out will-change-transform'
              >
                <div className='relative aspect-video overflow-hidden group transform-style-preserve-3d'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-120 transform-gpu'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10' />
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>{project.title}</h3>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1.5 bg-gradient-to-r from-stone-50/30 via-gray-50/30 to-stone-50/30 dark:from-stone-900/30 dark:via-gray-900/30 dark:to-stone-900/30 text-stone-600/90 dark:text-stone-300/90 rounded-lg text-sm font-medium border border-stone-200/30 dark:border-stone-700/30 backdrop-blur-[1px] shadow-sm hover:shadow hover:border-stone-300/40 dark:hover:border-stone-600/40 transition-all'
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
                        className='text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110'
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
                        className='text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110'
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
