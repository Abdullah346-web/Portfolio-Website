import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Education', id: 'education' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const ScrollNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { mode, setMode } = useTheme();

  // Handle scroll to update active section and progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <Motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--main-color)] origin-left z-50 shadow-glow"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <nav aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-40 mt-1 border-b border-[var(--border-color)] bg-[var(--nav-bg)]/95 backdrop-blur-md transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-2">
            {/* Logo */}
            <Motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--main-color)] shadow-glow">
                <span className="text-black font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline text-main">
                Portfolio
              </span>
            </Motion.button>

            {/* Desktop Menu */}
            <div className="hidden items-center space-x-6 md:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-main'
                      : 'text-gray-300 hover:text-main'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div
                className="flex items-center rounded-full border border-[var(--border-color)] bg-[var(--toggle-bg)] p-1"
                role="group"
                aria-label="Portfolio mode"
              >
                {[
                  { id: 'developer', label: 'Developer' },
                  { id: 'cybersecurity', label: 'Cybersecurity' },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    title={`Switch to ${option.label} mode`}
                    aria-pressed={mode === option.id}
                    onClick={() => setMode(option.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 sm:px-4 ${
                      mode === option.id
                        ? 'bg-[var(--main-color)] text-[var(--accent-contrast)] shadow-[0_0_16px_var(--accent-soft)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                className="p-2 text-gray-300 hover:text-white md:hidden"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-[var(--border-color)] pb-4 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                    activeSection === link.id
                      ? 'text-main bg-gray-900/50'
                      : 'text-gray-300 hover:text-main'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </Motion.div>
          )}
        </div>
      </nav>

    </>
  );
};

export default ScrollNavbar;
