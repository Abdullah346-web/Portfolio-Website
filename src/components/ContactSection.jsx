import AnimatedSection from './AnimatedSection';
import { motion as Motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:abdullahmubeen200@gmail.com?subject=${subject}&body=${body}`;
    setSubmitMessage('Your email app should open with this message ready to send.');
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abdullah346-web', label: 'GitHub', color: 'hover:text-main' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-mubeen-7041a9331', label: 'LinkedIn', color: 'hover:text-main' },
    { icon: Mail, href: 'mailto:abdullahmubeen200@gmail.com', label: 'Email', color: 'hover:text-main' },
  ];

  return (
    <AnimatedSection id="contact" className="theme-section min-h-screen py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-main mb-4"
          >
            Get In Touch
          </Motion.h2>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[var(--main-color)] mx-auto mb-4 shadow-glow"
          />
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out!
          </Motion.p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="theme-surface rounded-2xl border p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-main mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-main focus:outline-none focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-main focus:outline-none focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)]"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-main focus:outline-none focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)]"
                />
              </div>

              {/* Submit Button */}
              <Motion.button
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
              </Motion.button>
              {submitMessage && (
                <p className="text-sm text-main" role="status">
                  {submitMessage}
                </p>
              )}
            </form>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 space-y-8"
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
            <div className="min-w-0 rounded-2xl border border-gray-700 bg-gray-800 p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--main-color)] rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Mail className="text-black" size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a
                    href="mailto:abdullahmubeen200@gmail.com"
                    className="break-all text-gray-400 transition-colors hover:text-main"
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
                <div className="min-w-0">
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <Motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} border border-gray-700 hover:border-main transition-all`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </Motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[rgba(36,240,243,0.08)] border border-[rgba(36,240,243,0.35)] rounded-xl p-4">
              <p className="text-main text-sm">
                ⚡ I usually respond within 24 hours
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
