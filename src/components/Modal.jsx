import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode='wait'>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
        
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;