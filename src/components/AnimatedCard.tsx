import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  index = 0,
  hover = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-20px 0px'
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const hoverVariants = hover ? {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1]
    }
  } : {};

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={hoverVariants}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;