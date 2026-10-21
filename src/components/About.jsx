import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, ShieldCheck } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const stats = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech IT',
    sub: 'Graduate · Pursuing MBA',
    color: 'text-neon-cyan'
  },
  {
    icon: Award,
    label: 'CGPA',
    value: '8.0',
    sub: 'Consistent Performance',
    color: 'text-neon-magenta'
  },
  {
    icon: Cpu,
    label: 'Focus',
    value: 'Full-Stack',
    sub: 'Python & React',
    color: 'text-neon-purple'
  },
  {
    icon: ShieldCheck,
    label: 'Strengths',
    value: 'Problem Solving',
    sub: 'Leadership & Design',
    color: 'text-neon-blue'
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative animated background lines & orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-10 left-10 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-neon-magenta rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        
        {/* Horizontal Scanline */}
        <div className="absolute w-full h-[1px] bg-neon-cyan/20 animate-scan top-0 left-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[1px] w-12 bg-neon-purple" />
              <p className="text-neon-purple font-display font-semibold text-sm tracking-[0.2em] uppercase">
                Initialize Sequence
              </p>
            </div>
            <h2 className="section-title">
              System <span className="gradient-text">Overview</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {siteConfig.about.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base border-l-2 border-neon-cyan/30 pl-4 py-1 hover:border-neon-cyan transition-colors">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="left">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="cyber-glass p-6 group h-full flex flex-col justify-center items-start rounded-xl hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover scanline effect inside card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:animate-scan" />
                  
                  <stat.icon
                    size={28}
                    className={`mb-4 ${stat.color} filter drop-shadow-[0_0_8px_currentColor]`}
                  />
                  <div className="text-xl font-display font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.sub}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
