import { motion } from 'framer-motion';
import { Award, Medal, BookOpen, Shield } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative border-y border-white/5 bg-black/40">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="section-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="section-title">
              Credentials & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-magenta mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(219,39,119,0.5)]" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements & Leadership */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-navy-900 border border-neon-magenta/50 flex items-center justify-center shadow-[0_0_15px_rgba(219,39,119,0.3)]">
                  <Award className="text-neon-magenta drop-shadow-[0_0_5px_currentColor]" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                  Leadership
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {siteConfig.achievements.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="cyber-glass p-5 border-l-4 border-l-neon-magenta hover:border-l-neon-cyan group"
                  >
                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-neon-cyan transition-colors">{item.title}</h4>
                    <p className="text-neon-magenta text-xs font-mono mb-3 uppercase tracking-wider">{item.organization}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Certifications & Research */}
          <div className="space-y-12">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-navy-900 border border-neon-cyan/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <Shield className="text-neon-cyan drop-shadow-[0_0_5px_currentColor]" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                    Certifications
                  </h3>
                </div>
              </ScrollReveal>

              <ul className="space-y-3">
                {siteConfig.certifications.map((cert, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <li className="flex items-center gap-4 text-gray-300 cyber-glass px-4 py-3 hover:border-neon-cyan/50 transition-colors group">
                      <Medal size={18} className="text-neon-cyan flex-shrink-0 group-hover:drop-shadow-[0_0_8px_currentColor]" />
                      <span className="text-sm font-medium">{cert}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-navy-900 border border-neon-blue/50 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                    <BookOpen className="text-neon-blue drop-shadow-[0_0_5px_currentColor]" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                    Research
                  </h3>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {siteConfig.research.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ x: 5, scale: 1.01 }}
                      className="cyber-glass p-5 border-l-4 border-l-neon-blue hover:border-l-neon-cyan group"
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="text-white font-bold text-base group-hover:text-neon-cyan transition-colors">{item.title}</h4>
                        <span className="text-xs font-mono text-neon-blue border border-neon-blue/30 bg-neon-blue/10 px-2 py-1 rounded shadow-[inset_0_0_5px_rgba(96,165,250,0.2)] whitespace-nowrap">{item.date}</span>
                      </div>
                      <p className="text-neon-blue/80 text-xs font-mono mb-3 uppercase tracking-wider">{item.conference}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
