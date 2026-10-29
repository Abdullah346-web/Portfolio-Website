import AnimatedSection from './AnimatedSection';
import { motion as Motion } from 'framer-motion';
import { ExternalLink, Github, Network, ShieldCheck, Terminal } from 'lucide-react';
import barberImg from '../assets/New folder/1.jpeg';
import restaurantImg from '../assets/New folder/restaurant.jpeg';
import tailorImg from '../assets/New folder/tailor.jpeg';
import megaProjectImg from '../assets/New folder/Untitled.png';
import { useTheme } from '../context/ThemeContext';

const CybersecurityProjectsEmptyState = () => (
  <AnimatedSection id="projects" className="min-h-screen bg-black py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center md:mb-16">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold text-main md:text-5xl"
        >
          Cybersecurity Projects
        </Motion.h2>
        <Motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-4 h-1 w-20 bg-[var(--main-color)] shadow-glow"
        />
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Building my cybersecurity portfolio, one project at a time.
        </p>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="cyber-project-empty-state relative mx-auto max-w-3xl overflow-hidden rounded-3xl border p-8 text-center sm:p-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl" />
        </div>
        <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-main shadow-[0_0_30px_rgba(52,211,153,0.12)]">
          <ShieldCheck size={38} strokeWidth={1.5} />
          <span className="absolute -right-2 -top-2 rounded-full border border-emerald-400/30 bg-black px-2 py-1 text-[9px] font-semibold tracking-wider text-emerald-300">
            <Terminal size={10} className="inline" />
          </span>
        </div>
        <div className="relative mb-6 flex items-center justify-center gap-3 text-emerald-300/60">
          <span className="h-px w-12 bg-emerald-400/20" />
          <Network size={16} />
          <span className="h-px w-12 bg-emerald-400/20" />
        </div>
        <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-main">
          COMING SOON
        </p>
        <h3 className="relative mb-4 text-3xl font-bold text-white sm:text-4xl">No Projects Yet</h3>
        <p className="relative mx-auto max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I'm currently learning, experimenting, and developing cybersecurity projects. New
          projects will be showcased here soon.
        </p>
      </Motion.div>
    </div>
  </AnimatedSection>
);

const ProjectsSection = () => {
  const { isCybersecurity } = useTheme();
  const projects = [
    {
      id: 1,
      title: 'Barbers Crown',
      description: 'Professional barber shop website with service showcase, appointment booking, and modern responsive design. Built with React and CSS for smooth user experience.',
      image: barberImg,
      tags: ['React', 'CSS', 'Responsive Design', 'UI/UX'],
      link: 'https://barber-website-ten.vercel.app/',
      github: 'https://github.com/Abdullah346-web',
    },
    {
      id: 2,
      title: 'Fork and Fire',
      description: 'Modern restaurant website showcasing menu items, pricing, and reservation system. Built with React and CSS featuring beautiful food photography and smooth animations.',
      image: restaurantImg,
      tags: ['React', 'CSS', 'Restaurant', 'Responsive'],
      link: 'https://restaurant-website-azure-three.vercel.app/',
      github: 'https://github.com/Abdullah346-web',
    },
    {
      id: 3,
      title: 'Tailoring Website',
      description: 'Full-stack MERN web application for tailoring management with user authentication, admin dashboard, order management, and email notifications. Features JWT security, responsive UI, and admin approval system.',
      image: tailorImg,
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'JWT', 'REST API'],
      link: 'https://tailorwebsite-frontend.vercel.app/',
      github: 'https://github.com/Abdullah346-web',
    },
    {
      id: 4,
      title: 'GPA Saver - Mega Project',
      description: '👉 "A full-stack MERN application designed to streamline note sharing and collaboration within a classroom."',
      image: megaProjectImg,
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt'],
      link: 'https://gpa-saver-frontend.vercel.app',
      github: 'https://github.com/Abdullah346-web',
      isMega: true,
    },
  ];

  if (isCybersecurity) {
    return <CybersecurityProjectsEmptyState />;
  }

  return (
    <AnimatedSection id="projects" className="min-h-screen bg-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-main mb-4"
          >
            Featured Projects
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
            Here are some of my recent projects showcasing my skills and creativity
          </Motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`project-card group flex flex-col overflow-hidden rounded-2xl border ${
                project.isMega
                  ? 'project-card-featured md:col-span-2 lg:col-span-2'
                  : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                {project.isMega && (
                  <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-main text-black shadow-glow">
                    Mega Project
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-main">
                  {project.title}
                </h3>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag rounded-full border px-3 py-1 text-xs text-main"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3">
                  <Motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-main flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Motion.a>
                  <Motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-main transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </Motion.a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-4">
            Want to see more projects?
          </p>
          <Motion.a
            href="https://github.com/Abdullah346-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-main hover:text-white transition-colors font-medium text-lg border-b border-main hover:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit my GitHub profile
          </Motion.a>
        </Motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
