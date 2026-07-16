import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Startup', to: 'elevate' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* GK Logo Badge */}
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="cursor-pointer flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-neon-purple/50 bg-navy-900/80 shadow-[0_0_15px_rgba(192,38,211,0.3)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 group">
              <span className="text-sm sm:text-base font-display font-bold gradient-text group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.8)] transition-all">
                GK
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                activeClass="text-white !bg-white/10"
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg
                           hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={siteConfig.resumePath}
              download
              className="ml-3 btn-primary text-sm !px-5 !py-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={800}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5
                             rounded-lg transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={siteConfig.resumePath}
                download
                className="block text-center btn-primary text-sm mt-3"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
