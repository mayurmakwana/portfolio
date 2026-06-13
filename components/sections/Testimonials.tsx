'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { testimonialsData } from '@/data/testimonials';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

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
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto" />
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => {
              const isVisible = Math.abs(index - current) === 0 || Math.abs(index - current) === 1 || Math.abs(index - current) === testimonialsData.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0.3,
                    scale: isVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="h-full flex flex-col justify-between space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} className="text-accent-400" size={16} />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-400 leading-relaxed flex-grow italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-accent-400">{testimonial.position}</p>
                      <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          {testimonialsData.length > 1 && (
            <div className="flex justify-center gap-4 mt-12">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass hover:bg-accent-500/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="text-accent-400" size={24} />
              </motion.button>
              <div className="flex gap-2 items-center">
                {testimonialsData.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current ? 'bg-accent-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass hover:bg-accent-500/10 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="text-accent-400" size={24} />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
