import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

// Custom Typewriter Hook
const useTypewriter = (lines, typingSpeed = 100, deletingSpeed = 50, delayBetweenLines = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout;

    if (!isDeleting) {
      // Typing phase
      if (charIndex < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentLine.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenLines);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentLine.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next line
        setIsDeleting(false);
        setLineIndex((lineIndex + 1) % lines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines, typingSpeed, deletingSpeed, delayBetweenLines]);

  return displayedText;
};

const HeroSection = () => {
  // Typewriter lines
  const typewriterLines = [
    "I'm a Junior MERN Developer",
    "Build dynamic interfaces using React",
    "I love solving complex problems",
    "I turn ideas into code"
  ];

  // Use typewriter hook
  const displayedText = useTypewriter(typewriterLines);
  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  // Text animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
        {/* Main Heading */}
                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                  >
                    <span className="block text-white">Hi, I'm</span>
                    <span className="block text-main relative inline-block mt-4">
                      Abdullah Mubeen
                      <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-main to-transparent blur-md"></span>
                    </span>
                  </motion.h1>

                  {/* Typewriter Effect */}
          <motion.div
            variants={itemVariants}
            className="h-24 md:h-20 flex items-center justify-center"
          >
            <p className="text-xl md:text-2xl text-main min-h-12 flex items-center">
              {displayedText}
              <span className="inline-block w-1 h-8 md:h-10 bg-[var(--main-color)] ml-2 animate-pulse" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Building modern web applications that combine beautiful design with powerful functionality
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="btn-main px-8 py-3 rounded-lg font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(36, 240, 243, 0.35)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-lg font-medium border border-main text-main hover:bg-main hover:text-black flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(36, 240, 243, 0.35)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 size={20} />
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
