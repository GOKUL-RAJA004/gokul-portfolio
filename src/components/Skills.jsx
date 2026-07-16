import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cloud, Palette, PenTool } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  { id: 'programming', label: 'Programming', icon: Code2, color: 'text-neon-cyan', border: 'border-neon-cyan/40', shadow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]' },
  { id: 'web', label: 'Web & Backend', icon: Globe, color: 'text-neon-purple', border: 'border-neon-purple/40', shadow: 'hover:shadow-[0_0_20px_rgba(192,38,211,0.3)]' },
  { id: 'databases', label: 'Databases', icon: Database, color: 'text-neon-blue', border: 'border-neon-blue/40', shadow: 'hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, color: 'text-neon-magenta', border: 'border-neon-magenta/40', shadow: 'hover:shadow-[0_0_20px_rgba(219,39,119,0.3)]' },
  { id: 'design', label: 'UI/UX & Design', icon: Palette, color: 'text-electric-purple', border: 'border-electric-purple/40', shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
  { id: 'tools', label: 'Tools', icon: PenTool, color: 'text-neon-cyan', border: 'border-neon-cyan/40', shadow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]' },
];

const Skills = () => {
  const { skills } = siteConfig;

  return (
    <section id="skills" className="section-padding relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] border border-neon-purple/10 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] border border-neon-cyan/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="section-title">
              Core <span className="gradient-text">Competencies</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.5)]" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => {
            const categorySkills = skills[category.id] || [];
            
            return (
              <ScrollReveal key={category.id} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`cyber-glass p-1 h-full flex flex-col group ${category.shadow} transition-all duration-300 rounded-xl relative overflow-hidden`}
                >
                  {/* Angled corner cut effect using clip-path */}
                  <div 
                    className="absolute inset-0 bg-navy-900/80 z-0" 
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
                  />
                  
                  {/* Highlight border on the cut corner */}
                  <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${category.border} z-10`} />
                  
                  <div className="p-6 relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg bg-white/5 border ${category.border} shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] group-hover:bg-white/10 transition-colors`}>
                        <category.icon size={28} className={`${category.color} drop-shadow-[0_0_8px_currentColor]`} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white tracking-wide">
                        {category.label}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {categorySkills.map((skill, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-black/50 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-colors cursor-default shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
