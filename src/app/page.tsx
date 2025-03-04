import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';

// app/page.tsx
export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
