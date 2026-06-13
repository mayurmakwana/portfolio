'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { skillsData } from '@/data/skills';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto" />
        </motion.div>

        {/* Skills by category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillsData.map((category) => (
            <motion.div key={category.category} variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-accent-400">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <GlassCard
                      key={skill.name}
                      className="flex flex-col items-center justify-center text-center py-8"
                      hoverEffect
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 100,
                      }}
                    >
                      <motion.div
                        className="text-4xl mb-3 gradient-text"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Icon />
                      </motion.div>
                      <p className="font-semibold text-sm text-gray-200">{skill.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
