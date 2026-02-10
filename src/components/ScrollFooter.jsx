import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const ScrollFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abdullah346-web', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-mubeen-7041a9331', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:abdullahmubeen200@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Portfolio/Brand Section */}
          <div>
            <h3 className="text-main font-bold text-lg mb-4 shadow-glow">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building amazing web experiences with modern technologies. Passionate about creating responsive and interactive user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-main font-bold text-lg mb-4 shadow-glow">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-main font-bold text-lg mb-4 shadow-glow">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-main transition-colors p-2 rounded-lg hover:bg-gray-800"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">Email: abdullahmubeen200@gmail.com</p>
            <p className="text-gray-400 text-sm">Location: Pakistan</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {currentYear} Abdullah Mubeen. Made with <Heart size={16} className="text-main animate-pulse" /> using React & Tailwind
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all text-sm shadow-glow"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default ScrollFooter;
