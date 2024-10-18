import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import BlogPosts from '@/components/BlogPosts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}