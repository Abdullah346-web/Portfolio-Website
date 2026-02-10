// Mock project data - replace with API calls later
export const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN application with payment integration',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/400x250?text=E-Commerce',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    image: 'https://via.placeholder.com/400x250?text=Task+Manager',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern developer portfolio with dark mode support',
    tags: ['React', 'Tailwind', 'Vite'],
    image: 'https://via.placeholder.com/400x250?text=Portfolio',
    link: '#',
    github: '#',
  },
];

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// Contact form fields
export const CONTACT_FORM_FIELDS = {
  name: 'name',
  email: 'email',
  message: 'message',
};
