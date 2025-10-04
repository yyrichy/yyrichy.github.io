// components/footer.tsx
export function Footer() {
  return (
    <footer className='w-full py-6 border-t border-border'>
      <div className='container mx-auto px-6 sm:px-10 lg:px-16'>
        <p className='text-center text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Richard Yin. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
