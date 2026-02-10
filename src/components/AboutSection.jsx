import AnimatedSection from './AnimatedSection';
import { Code2, Database, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/image.jpeg';

const AboutSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
      color: 'blue',
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
      color: 'green',
    },
    {
      category: 'Tools',
      icon: Code2,
      items: ['Git', 'VS Code', 'Postman', 'npm', 'Linux'],
      color: 'purple',
    },
    {
      category: 'Other',
      icon: Zap,
      items: ['Responsive Design', 'Problem Solving', 'Agile', 'Testing'],
      color: 'orange',
    },
  ];

  return (
    <AnimatedSection id="about" className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-main mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[var(--main-color)] mx-auto mb-4 shadow-glow"
          />
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-main">Full-Stack Developer</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate full-stack developer with expertise in the MERN stack. I love
              building web applications that solve real-world problems and provide excellent user
              experiences.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With a strong foundation in both frontend and backend development, I create scalable,
              maintainable, and performant applications. I'm always eager to learn new technologies
              and best practices.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-main">10+</div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-main">1+</div>
                <div className="text-gray-500 text-sm">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-main">30+</div>
                <div className="text-gray-500 text-sm">Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96">
              {/* Animated glow background */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-2xl opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(36,240,243,0.4),transparent_60%)]"
              />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  boxShadow: [
                    '0 0 20px rgba(36,240,243,0.3), 0 0 40px rgba(36,240,243,0.1)',
                    '0 0 40px rgba(36,240,243,0.6), 0 0 80px rgba(36,240,243,0.3)',
                    '0 0 20px rgba(36,240,243,0.3), 0 0 40px rgba(36,240,243,0.1)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-gray-900 rounded-2xl overflow-hidden border border-main shadow-lg"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover brightness-110 contrast-125"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-main">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-main transition-all"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[rgba(36,240,243,0.12)] border border-[rgba(36,240,243,0.35)] shadow-glow">
                  <skill.icon className="text-main" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--main-color)] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
