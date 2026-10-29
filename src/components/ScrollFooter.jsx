import { createElement } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUp, Github, Heart, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/Abdullah346-web', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-mubeen-7041a9331', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:abdullahmubeen200@gmail.com', label: 'Email' },
];

const ScrollFooter = () => {
  const { isCybersecurity } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="theme-section mt-16 border-t border-[var(--border-color)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-[var(--border-color)] pb-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              {isCybersecurity && <ShieldCheck size={18} className="text-main" />}
              <h3 className="text-lg font-bold text-main">
                {isCybersecurity ? 'Security Lab // Abdullah Mubeen' : 'Abdullah Mubeen'}
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              {isCybersecurity
                ? 'Learning secure web engineering and cybersecurity concepts through continuous practice.'
                : 'Building modern web applications with thoughtful user experiences and reliable engineering.'}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-main">Explore</h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-gray-400 transition-colors hover:text-main">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-main">Connect</h3>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-[var(--surface-elevated)] hover:text-main"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {createElement(Icon, { size: 19 })}
                </Motion.a>
              ))}
            </div>
            <p className="mt-3 break-all text-sm text-gray-400">abdullahmubeen200@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-gray-500 md:flex-row">
          <p className="flex items-center gap-2 text-center md:text-left">
            © {currentYear} Abdullah Mubeen. Made with <Heart size={15} className="text-main" /> using React & Tailwind
          </p>
          <Motion.button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg bg-[var(--surface-elevated)] px-4 py-2 text-gray-400 transition-colors hover:text-main"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top <ArrowUp size={16} />
          </Motion.button>
        </div>
      </div>
    </footer>
  );
};

export default ScrollFooter;
