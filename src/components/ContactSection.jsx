import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abdullah346-web', label: 'GitHub', color: 'hover:text-main' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-mubeen-7041a9331', label: 'LinkedIn', color: 'hover:text-main' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-main' },
    { icon: Mail, href: 'mailto:abdullahmubeen200@gmail.com', label: 'Email', color: 'hover:text-main' },
  ];

  return (
    <AnimatedSection id="contact" className="min-h-screen bg-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-main mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[var(--main-color)] mx-auto mb-4 shadow-glow"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-main mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-main focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)] transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-main focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)] transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-main focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-main disabled:opacity-60 disabled:cursor-not-allowed text-black font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Text */}
            <div>
              <h3 className="text-2xl font-bold text-main mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether
                you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--main-color)] rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a
                    href="mailto:abdullahmubeen200@gmail.com"
                    className="text-gray-400 hover:text-main transition-colors"
                  >
                    abdullahmubeen200@gmail.com
                  </a>
                </div>
              </div>

              {/* Location (Optional) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(36,240,243,0.12)] border border-[rgba(36,240,243,0.35)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} border border-gray-700 hover:border-main transition-all`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[rgba(36,240,243,0.08)] border border-[rgba(36,240,243,0.35)] rounded-xl p-4">
              <p className="text-main text-sm">
                ⚡ I usually respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
