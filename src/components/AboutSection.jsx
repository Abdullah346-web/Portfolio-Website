import AnimatedSection from './AnimatedSection';
import { Code2, Database, Palette, Zap, Command, Network, ShieldCheck } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import profileImage from '../assets/image.jpeg';
import { useTheme } from '../context/ThemeContext';

const cybersecurityPortrait = '/assets/cinematic-cyan-hacker.jpg';

const DeveloperAboutContent = () => {
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
    <>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-72 lg:h-96">
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-2xl opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(36,240,243,0.4),transparent_60%)]"
            />
            <Motion.div
              animate={{
                y: [0, -20, 0],
                boxShadow: [
                  '0 0 20px rgba(36,240,243,0.3), 0 0 40px rgba(36,240,243,0.1)',
                  '0 0 40px rgba(36,240,243,0.6), 0 0 80px rgba(36,240,243,0.3)',
                  '0 0 20px rgba(36,240,243,0.3), 0 0 40px rgba(36,240,243,0.1)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="theme-surface relative overflow-hidden rounded-2xl border border-main shadow-lg"
            >
              <img src={profileImage} alt="Profile" className="h-full w-full object-cover brightness-110 contrast-125" />
            </Motion.div>
          </div>
        </Motion.div>
      </div>

      <div>
        <h3 className="mb-12 text-center text-3xl font-bold text-main">Skills & Technologies</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="theme-surface rounded-xl border p-6 transition-all hover:border-main"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(36,240,243,0.35)] bg-[rgba(36,240,243,0.12)] shadow-glow">
                <skill.icon className="text-main" size={24} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">{skill.category}</h4>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--main-color)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const CybersecurityAboutContent = () => {
  const skills = [
    { category: 'Operating Systems', icon: Command, items: ['Linux'] },
    { category: 'Web & APIs', icon: Network, items: ['REST APIs', 'Node.js'] },
    { category: 'Security Foundations', icon: ShieldCheck, items: ['JWT', 'MongoDB'] },
  ];

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-main">Cybersecurity Student & Learner</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            I'm studying cybersecurity with a growing interest in network security, ethical
            hacking, and the secure engineering of web applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            I am continuously learning through hands-on exploration, including Python-based
            security tools, while building on my existing Linux, REST API, Node.js, MongoDB, and
            JWT foundations.
          </p>
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="cybersecurity-portrait-frame relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-2 border-main bg-black">
            <img
              src={cybersecurityPortrait}
              alt="Portrait of Abdullah Mubeen"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="theme-surface rounded-2xl border p-6 font-mono">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-main">
              <ShieldCheck size={16} />
              Learning focus
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              <p><span className="text-main">01</span> network security concepts</p>
              <p><span className="text-main">02</span> ethical hacking fundamentals</p>
              <p><span className="text-main">03</span> defensive web engineering</p>
              <p><span className="text-main">04</span> continuous practice</p>
            </div>
          </div>
        </Motion.div>
      </div>

      <div>
        <h3 className="mb-12 text-center text-3xl font-bold text-main">Cybersecurity Foundations</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="theme-surface rounded-xl border p-6 transition-all hover:border-main"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-main">
                <skill.icon size={24} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">{skill.category}</h4>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--main-color)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const AboutSection = () => {
  const { isCybersecurity } = useTheme();

  return (
    <AnimatedSection id="about" className="theme-section min-h-screen py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-main md:text-5xl"
          >
            About Me
          </Motion.h2>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 h-1 w-20 bg-[var(--main-color)] shadow-glow"
          />
        </div>
        <div className="space-y-12 md:space-y-16">
          {isCybersecurity ? <CybersecurityAboutContent /> : <DeveloperAboutContent />}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
