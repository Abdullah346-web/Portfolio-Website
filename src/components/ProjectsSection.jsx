import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import barberImg from '../assets/New folder/1.jpeg';
import restaurantImg from '../assets/New folder/restaurant.jpeg';
import tailorImg from '../assets/New folder/tailor.jpeg';

const ProjectsSection = () => {
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
  ];

  return (
    <AnimatedSection id="projects" className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-main mb-4"
          >
            Featured Projects
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
            Here are some of my recent projects showcasing my skills and creativity
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-main transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-main mb-2 group-hover:text-main transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border bg-[rgba(36,240,243,0.12)] border-[rgba(36,240,243,0.35)] text-main"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 btn-main px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-main px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-main"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-4">
            Want to see more projects?
          </p>
          <motion.a
            href="https://github.com/Abdullah346-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-main hover:text-white transition-colors font-medium text-lg border-b border-main hover:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit my GitHub profile
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
