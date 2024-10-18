"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Link as LinkIcon, Clock, Heart } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Git', icon: 'git' },
    { name: 'VS Code', icon: 'vscode' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <MapPin className="mr-2" /> Hong Kong
          </h3>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Hong Kong"
              className="object-cover rounded-lg"
            />
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <LinkIcon className="mr-2" /> Connect
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                <img src="https://github.com/github.png" alt="GitHub" className="w-6 h-6 mr-2 rounded-full" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                <img src="https://github.com/facebook.png" alt="Facebook" className="w-6 h-6 mr-2 rounded-full" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                <img src="https://github.com/instagram.png" alt="Instagram" className="w-6 h-6 mr-2 rounded-full" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                <img src="https://github.com/twitter.png" alt="Twitter" className="w-6 h-6 mr-2 rounded-full" />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                <img src="https://github.com/youtube.png" alt="YouTube" className="w-6 h-6 mr-2 rounded-full" />
                YouTube
              </a>
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" /> Coding hours
          </h3>
          <p className="text-4xl font-bold">3552 hrs</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Heart className="mr-2" /> Fav. framework
          </h3>
          <div className="flex items-center justify-center">
            <img src="https://github.com/vercel.png" alt="Next.js" className="w-16 h-16" />
          </div>
        </Card>
      </div>
      <Card className="mt-8 p-6">
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.section>
  );
};

export default About;