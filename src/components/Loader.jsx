import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5,
        ease: 'easeInOut'
      },
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.9,
        ease: 'easeOut'
      }
    }
  }
};

const Loader = () => {
  return (
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  )
}

export default Loader;