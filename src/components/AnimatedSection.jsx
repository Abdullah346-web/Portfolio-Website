import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection - Wrapper component for sections with scroll animations
 * Fades in and slides up when section enters viewport
 */
const AnimatedSection = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of section is visible
    triggerOnce: true, // Animate only once
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
