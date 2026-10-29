import { motion as Motion } from 'framer-motion';
import { ArrowRight, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { createElement, useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import CybersecurityHeroVisual from './CybersecurityHeroVisual';
import DeveloperHeroVisual from './DeveloperHeroVisual';
import CybersecurityExperience from './CybersecurityExperience';

const DEVELOPER_LINES = [
  'MERN Stack Developer',
  'Full Stack Web Developer',
  'Building Modern Web Experiences',
  'Turning Ideas Into Web Applications',
  'React & Node.js Developer',
];

const CYBERSECURITY_LINES = [
  'Cybersecurity Enthusiast',
  'Exploring Network Security',
  'Learning Ethical Hacking',
  'Python Security Tool Developer',
  'Future Security Professional',
];

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

const useTypewriter = (lines, prefersReducedMotion, typingSpeed = 90, deletingSpeed = 45, delayBetweenLines = 1400) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const currentLine = lines[lineIndex];
    let timeoutId;

    if (!isDeleting) {
      if (charIndex < currentLine.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentLine.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenLines);
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentLine.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setLineIndex((lineIndex + 1) % lines.length);
        }, 0);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, delayBetweenLines, deletingSpeed, isDeleting, lineIndex, lines, prefersReducedMotion, typingSpeed]);

  return prefersReducedMotion ? lines[0] : displayedText;
};

const TypewriterText = ({ lines, prefersReducedMotion, isCybersecurity }) => {
  const displayedText = useTypewriter(lines, prefersReducedMotion);

  return (
    <p
      className={`flex items-center text-xl font-semibold text-main sm:text-2xl md:text-3xl ${
        isCybersecurity ? 'font-mono tracking-tight' : ''
      }`}
    >
      <span>{displayedText}</span>
      <span
        aria-hidden="true"
        className="ml-2 inline-block h-7 w-[3px] animate-pulse bg-[var(--main-color)] shadow-[0_0_12px_var(--main-color)] sm:h-8 md:h-10"
      />
    </p>
  );
};

const HeroSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { mode, isCybersecurity } = useTheme();
  const typewriterLines = isCybersecurity ? CYBERSECURITY_LINES : DEVELOPER_LINES;

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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abdullah346-web', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-mubeen-7041a9331', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:abdullahmubeen200@gmail.com', label: 'Email' },
  ];

  return (
    <>
    <section
      id="home"
      className="hero-section relative isolate min-h-screen overflow-hidden pt-20 transition-colors duration-500"
    >
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          <div className="text-center lg:text-left">
            <Motion.div
              variants={itemVariants}
              className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-main"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-main shadow-[0_0_12px_#24F0F3]" />
              Available for new opportunities
            </Motion.div>

            <Motion.h1
              variants={itemVariants}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Hi, I&apos;m
              <span className="mt-3 block bg-gradient-to-r from-white via-[var(--accent-light)] to-main bg-clip-text text-transparent">
                Abdullah Mubeen
              </span>
            </Motion.h1>

            <Motion.div
              variants={itemVariants}
              className="mt-8 flex h-20 items-center justify-center lg:justify-start"
              aria-live="polite"
            >
              <TypewriterText
                key={mode}
                lines={typewriterLines}
                prefersReducedMotion={prefersReducedMotion}
                isCybersecurity={isCybersecurity}
              />
            </Motion.div>

            <Motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0"
            >
              I build modern web applications that pair thoughtful user experiences with reliable,
              secure engineering.
            </Motion.p>

            <Motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <Motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-main flex items-center gap-2 rounded-lg px-7 py-3.5 font-semibold"
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px var(--accent-soft)' }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work <ArrowRight size={19} />
              </Motion.button>
              <Motion.button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 rounded-lg border border-main/70 px-7 py-3.5 font-semibold text-main transition-all hover:bg-main hover:text-black"
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px var(--accent-soft)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Code2 size={19} />
                Get in Touch
              </Motion.button>
            </Motion.div>

            <Motion.div
              variants={itemVariants}
              className="mt-9 flex items-center justify-center gap-4 lg:justify-start"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Find me on</span>
              <span className="h-px w-8 bg-slate-700" />
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="rounded-full border border-slate-800 p-2.5 text-slate-400 transition-colors hover:border-main hover:text-main"
                >
                  {createElement(Icon, { size: 17 })}
                </a>
              ))}
            </Motion.div>
          </div>

          <Motion.div
            variants={itemVariants}
            className="relative mx-auto flex min-h-[430px] w-full max-w-md items-center lg:mx-0 lg:justify-self-end"
          >
            {isCybersecurity ? (
              <CybersecurityHeroVisual
                key="cybersecurity-visual"
                prefersReducedMotion={prefersReducedMotion}
              />
            ) : (
              <DeveloperHeroVisual
                key="developer-visual"
                prefersReducedMotion={prefersReducedMotion}
              />
            )}
          </Motion.div>
        </Motion.div>
      </div>
    </section>
    {isCybersecurity && <CybersecurityExperience prefersReducedMotion={prefersReducedMotion} />}
    </>
  );
};

export default HeroSection;
