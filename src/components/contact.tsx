// components/contact.tsx
'use client';

export function Contact() {
  return (
    <section id='contact' className='w-full py-16 text-center'>
      <div className='container mx-auto px-6 sm:px-10 lg:px-16'>
        <h2 className='text-3xl'>Get In Touch</h2>
        <p className='mt-4 max-w-lg mx-auto text-muted-foreground'>Have a question or want to collaborate? Feel free to reach out.</p>
        <a
          href='mailto:richyin.99@gmail.com'
          className='inline-block mt-6 text-lg text-primary underline hover:opacity-75 transition-opacity'
        >
          richyin.99@gmail.com
        </a>
      </div>
    </section>
  );
}