import Link from 'next/link';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2024 Hong</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link>
            <Link href="/guestbook" className="text-sm text-muted-foreground hover:text-primary">Guestbook</Link>
            <Link href="/uses" className="text-sm text-muted-foreground hover:text-primary">Uses</Link>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link>
            <Link href="/links" className="text-sm text-muted-foreground hover:text-primary">Links</Link>
          </nav>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;