"use client"

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-32 text-center"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I'm Enis Gjocaj, a Full Stack Developer
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        creating{' '}
        <span className="text-primary">
          <TypeAnimation
            sequence={[
              'fantastic',
              2000,
              'innovative',
              2000,
              'responsive',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>{' '}
        websites using React.
      </motion.h2>
      <motion.p
        className="text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Kosovo · UTC/GMT +8
      </motion.p>
    </motion.section>
  );
};

export default Hero;