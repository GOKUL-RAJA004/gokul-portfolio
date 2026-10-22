import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Download, Mail, Database, Code2, Terminal } from 'lucide-react';
import { FaFigma as Figma } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';
import GradientBlob from './GradientBlob';

const MotionLink = motion(Link);

const FloatingElement = ({ children, delay = 0, duration = 4, className = "" }) => (
  <motion.div
    animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  // Stagger animation for text lines
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <GradientBlob size="xl" color="purple" className="top-1/4 -right-32 animation-delay-0 opacity-40" />
      <GradientBlob size="lg" color="cyan" className="bottom-1/3 -left-24 animation-delay-2000 opacity-30" />
      <GradientBlob size="md" color="magenta" className="top-1/2 left-1/4 animation-delay-4000 opacity-20" />

      {/* Floating background elements / Star Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-neon-cyan' : 'bg-neon-purple'}`}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#22d3ee' : '#c026d3'}`
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(192, 38, 211, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Content Grid */}
      <div className="section-container w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10">
        
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start text-left"
        >
          {/* Greeting badge */}
          <motion.div variants={childVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide
                            border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-md text-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              SYSTEM.ONLINE()
            </span>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            variants={childVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight leading-tight"
          >
            <span className="text-white block mb-2">I am GOKUL.</span>
            <span className="gradient-text text-2xl sm:text-3xl md:text-4xl font-semibold block mb-2">
              Developer | Designer | Innovator.
            </span>
            <span className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light block mb-4">
              B.Tech IT Graduate | MBA Candidate
            </span>
          </motion.h1>

          {/* Supporting Tagline */}
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl font-light leading-relaxed"
          >
            Building meaningful digital solutions where technology meets creativity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <MotionLink
              to="projects"
              smooth={true}
              offset={-80}
              duration={800}
              whileTap={{ scale: 0.95 }}
              className="btn-primary cursor-pointer group"
            >
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
              View My Work
            </MotionLink>
            <motion.a
              href={siteConfig.resumePath}
              download
              whileTap={{ scale: 0.95 }}
              className="btn-secondary group"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-1" />
              Resume
            </motion.a>
            <MotionLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={800}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary cursor-pointer group !border-neon-cyan/40 hover:!border-neon-cyan/80 hover:!bg-neon-cyan/10"
            >
              <Mail size={18} className="transition-transform group-hover:scale-110 text-neon-cyan" />
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Right: Visual / Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 flex justify-center lg:justify-end items-center h-full min-h-[400px]"
        >
          {/* Main Photo Frame */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Animated glowing border rings */}
            <div className="absolute inset-0 rounded-full border border-neon-purple/40 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-neon-cyan/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute -inset-8 rounded-full border border-neon-magenta/10 border-dashed animate-[spin_20s_linear_infinite]" />
            
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse-slow"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-navy-900 shadow-[0_0_30px_rgba(192,38,211,0.5)]">
              <img 
                src={siteConfig.profilePhoto} 
                alt={siteConfig.name} 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Floating Tech Icons */}
            <FloatingElement delay={0} duration={5} className="top-0 -left-6 bg-navy-900/80 p-3 rounded-xl border border-neon-cyan/50 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.3)] text-neon-cyan">
              <Code2 size={24} />
            </FloatingElement>

            <FloatingElement delay={1} duration={4.5} className="bottom-12 -left-12 bg-navy-900/80 p-3 rounded-xl border border-neon-purple/50 backdrop-blur-md shadow-[0_0_15px_rgba(192,38,211,0.3)] text-neon-purple">
              <Terminal size={24} />
            </FloatingElement>

            <FloatingElement delay={2} duration={5.5} className="top-12 -right-8 bg-navy-900/80 p-3 rounded-xl border border-neon-magenta/50 backdrop-blur-md shadow-[0_0_15px_rgba(219,39,119,0.3)] text-neon-magenta">
              <Database size={24} />
            </FloatingElement>

            <FloatingElement delay={1.5} duration={4} className="bottom-4 -right-4 bg-navy-900/80 p-3 rounded-xl border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)] text-white">
              <Figma size={24} />
            </FloatingElement>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Link to="about" smooth={true} offset={-80} duration={800} className="cursor-pointer group flex flex-col items-center gap-2">
          <span className="text-xs text-neon-cyan tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-neon-cyan/40 flex items-start justify-center p-1.5 group-hover:border-neon-cyan shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-neon-cyan"
            />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
