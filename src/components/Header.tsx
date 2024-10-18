"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 px-6 bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">H</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <Link href="/guestbook" className="hover:text-primary">Guestbook</Link>
          <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
          <Link href="/projects" className="hover:text-primary">Projects</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/uses" className="hover:text-primary">Uses</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/guestbook" className="hover:text-primary">Guestbook</Link>
            <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
            <Link href="/projects" className="hover:text-primary">Projects</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/uses" className="hover:text-primary">Uses</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;