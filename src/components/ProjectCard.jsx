import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-700 hover:border-main">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-main mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

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
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-main px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} />
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-main px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-main"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
