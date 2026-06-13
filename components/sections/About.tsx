'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto" />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image placeholder */}
          <motion.div variants={itemVariants} className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 glass flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 opacity-10 mx-auto mb-4" />
                <p className="text-gray-400">Profile Image</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Senior Full Stack Developer</h3>
              <p className="text-gray-400 leading-relaxed">
                With over 10 years of professional experience, I&apos;ve helped startups and enterprises build robust, scalable web applications. My passion lies in creating elegant solutions to complex problems and mentoring junior developers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Full Stack Web Development',
                'RESTful API Design & Development',
                'Database Architecture & Optimization',
                'Cloud Deployment & DevOps',
                'Team Leadership & Mentoring',
                'Agile Project Management',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
