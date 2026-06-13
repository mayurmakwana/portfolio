'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { experienceData } from '@/data/experience';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-500 via-accent-400 to-transparent" />

          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex gap-6 md:gap-0 ${
                  index % 2 === 0
                    ? 'md:flex-row md:text-right md:[&>div:first-child]:-mr-[calc(50%+2rem)]'
                    : 'md:flex-row-reverse md:[&>div:last-child]:-ml-[calc(50%+2rem)]'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full ring-4 ring-dark-900"
                    whileHover={{ scale: 1.3 }}
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <GlassCard className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-accent-400 font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        {job.period}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                    {job.achievements && (
                      <ul className="text-sm text-gray-400 space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
