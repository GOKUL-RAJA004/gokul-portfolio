import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h2 className="section-title">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.5)]" />
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
          {/* Vertical Neon Line */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent shadow-[0_0_15px_rgba(192,38,211,0.8)]"
              animate={{ height: ['0%', '100%'] }}
              transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
            />
          </div>

          <div className="space-y-16">
            {siteConfig.experience.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-navy-900 border-2 border-neon-purple flex items-center justify-center z-10 shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                      <Briefcase size={20} className="text-neon-cyan" />
                      {/* Pulsing ring */}
                      <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-neon-purple/50"
                      />
                    </div>

                    {/* Card container - Takes up half width on desktop */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 flex ${isEven ? 'md:pl-16 md:justify-start' : 'md:pr-16 md:justify-end'}`}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="cyber-glass p-6 sm:p-8 rounded-xl w-full max-w-lg border-l-4 border-l-neon-purple hover:border-l-neon-cyan transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                          <div>
                            <h3 className="text-xl font-display font-bold text-white mb-1 tracking-wide">
                              {exp.role}
                            </h3>
                            <p className="text-neon-cyan font-medium text-sm uppercase tracking-widest">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="mb-6">
                          <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded shadow-[inset_0_0_5px_rgba(0,0,0,0.5)] border border-white/5">
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, j) => (
                            <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                              <span className="text-neon-magenta mt-1.5 opacity-80 text-xs">▶</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
