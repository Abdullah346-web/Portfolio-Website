import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onGoHome }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    setFormData({ email: '', password: '' });
  };

  const handleGoBack = () => {
    setFormData({ email: '', password: '' });
    onClose();
    onGoHome();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleGoBack}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Centered Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl w-full max-w-md relative">
              {/* Close Button */}
              <button
                onClick={handleGoBack}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-main">
                  Welcome Back
                </h2>
                <p className="text-gray-400 mt-2">Sign in to your account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-main focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-main focus:ring-2 focus:ring-[color:rgba(36,240,243,0.35)] transition-all"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-800 border border-gray-700 rounded accent-[var(--main-color)]"
                  />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>

                <motion.button
                  type="submit"
                  className="w-full btn-main text-black font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleGoBack}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-main font-medium py-3 rounded-lg border border-main transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Go Back
                </motion.button>
              </form>

              <p className="text-center text-gray-400 text-sm mt-6">
                Don't have an account?{' '}
                <span className="text-main hover:brightness-110 cursor-pointer transition-colors">
                  Sign up
                </span>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
