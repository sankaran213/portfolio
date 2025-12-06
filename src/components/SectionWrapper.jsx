import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
