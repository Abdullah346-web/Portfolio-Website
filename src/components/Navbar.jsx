import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-main rounded-lg flex items-center justify-center shadow-glow">
                        <span className="text-black font-bold text-lg">A</span>
                    </div>
                    <span className="text-main font-bold text-xl hidden sm:inline">Portfolio</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors ${
                                isActive(link.path)
                                    ? 'text-main'
                                    : 'text-gray-300 hover:text-main'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden pb-4 border-t border-main">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 text-sm font-medium ${
                                isActive(link.path)
                                    ? 'text-main bg-gray-800'
                                    : 'text-gray-300 hover:text-main'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    </nav>
);
};

export default Navbar;
