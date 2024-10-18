"use client"

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Top 8 Attractive Web Design Websites',
    description: 'Explore 8 outstanding web design websites that captivate and inspire. Elevate your design game with these top-notch platforms.',
    date: 'August 22, 2023',
    likes: 881,
    views: 4178,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
  },
  {
    title: 'How to build a blog with Next.js and MDX',
    description: 'Using Next.js to build a blog is very easy!',
    date: 'August 22, 2022',
    likes: 819,
    views: 4763,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
];

const BlogPosts = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <Card>
              <CardHeader className="p-0">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="mx-2">·</span>
                  <span>{post.likes} likes</span>
                  <span className="mx-2">·</span>
                  <span>{post.views} views</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline">See all articles</Button>
      </div>
    </motion.section>
  );
};

export default BlogPosts;