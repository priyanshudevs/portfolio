import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Download,
  Github,
  Layout,
  Linkedin,
  Mail,
  Server,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SectionHeading } from './components/SectionHeading';
import { ProjectCard, type Project } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { ContactForm } from './components/ContactForm';
import { CodingProfileCard } from './components/CodingProfileCard';
import { supabase } from './lib/supabase';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        return;
      }

      setProjects(data || []);
    }

    fetchProjects();
  }, []);

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient hero-grid">
        <div className="container mx-auto max-w-3xl px-4 py-32 relative z-10">
          <div className="text-center">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white"
            >
              Hi, I'm{' '}
              <span className="text-primary-900 dark:text-white">
                Priyanshu Dev
              </span>
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              A passionate full-stack developer and DSA enthusiast crafting beautiful and functional web experiences
            </motion.p>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span>Hire Me</span>
              </motion.a>
              <motion.a
                href="https://www.notion.so/Priyanshu-17e33bc273a8808fbdceec970164083c"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-black dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                <span>Get CV</span>
              </motion.a>
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              className="flex gap-6 mt-12 justify-center"
            >
              <motion.a
                href="https://github.com/priyanshudevs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-black dark:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/priyanshudev1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-black dark:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="About Me"
            subtitle="Passionate about Data Structures & Algorithms and Full Stack Development"
          />
          <div className="mb-16 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              I specialize in Data Structures & Algorithms and Full Stack Web Development. With a strong foundation in problem-solving and competitive programming, I bring analytical thinking and efficient solutions to every project I work on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={Code2}
              title="Frontend Development"
              skills={[
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Redux',
                'HTML/CSS',
              ]}
            />
            <SkillCard
              icon={Server}
              title="Backend Development"
              skills={[
                'Node.js',
                'Express',
                'Python',
                'Django',
                'RESTful APIs',
                'GraphQL',
              ]}
            />
            <SkillCard
              icon={Database}
              title="Database & DevOps"
              skills={[
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'AWS',
                'CI/CD',
                'Git',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my recent work and personal projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Coding Profiles"
            subtitle="Check out my problem-solving journey across various platforms"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CodingProfileCard
              platform="LeetCode"
              username="priyanshudev"
              url="https://leetcode.com/priyanshudev"
              icon="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
            />
            <CodingProfileCard
              platform="CodeChef"
              username="priyanshudev"
              url="https://www.codechef.com/users/priyanshudev"
              icon="https://cdn.codechef.com/images/cc-logo.svg"
            />
            <CodingProfileCard
              platform="Codeforces"
              username="priyanshudev"
              url="https://codeforces.com/profile/priyanshudev"
              icon="https://codeforces.org/s/0/favicon-32x32.png"
            />
            <CodingProfileCard
              platform="HackerRank"
              username="priyanshudev"
              url="https://www.hackerrank.com/priyanshudev"
              icon="https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-150x150.png"
            />
            <CodingProfileCard
              platform="GeeksforGeeks"
              username="priyanshudev"
              url="https://auth.geeksforgeeks.org/user/priyanshudev"
              icon="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
            />
            <CodingProfileCard
              platform="AtCoder"
              username="priyanshudev"
              url="https://atcoder.jp/users/priyanshudev"
              icon="https://img.atcoder.jp/assets/icon/favicon.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a project in mind? Let's work together!"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:Priyanshudev037@gmail.com">
                    Priyanshudev037@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Layout className="h-5 w-5" />
                  <span>Available for remote work worldwide</span>
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/priyanshudevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/priyanshudev1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Priyanshu Dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;