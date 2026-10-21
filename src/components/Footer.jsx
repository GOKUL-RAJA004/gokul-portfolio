import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import siteConfig from '../config/siteConfig';

const Footer = () => {
  return (
    <footer className="relative bg-navy-900 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Top glowing gradient border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-neon-cyan opacity-50 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

      <div className="section-container relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-display font-bold text-xl tracking-wide mb-1">
            {siteConfig.name}
          </p>
          <p className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={800}
            className="w-12 h-12 rounded-xl cyber-glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 cursor-pointer transition-all shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]"
          >
            <ArrowUp size={20} />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
