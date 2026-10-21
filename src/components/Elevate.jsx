import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  TrendingUp, 
  Code2, 
  Briefcase, 
  FileText, 
  Users, 
  Layers,
  Rocket
} from 'lucide-react';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  GraduationCap,
  TrendingUp,
  Code2,
  Briefcase,
  FileText,
  Users,
  Layers,
};

const Elevate = () => {
  const { elevate } = siteConfig;

  return (
    <section id="elevate" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neon-cyan/5 rounded-full" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-purple/10 rounded-full border-dashed animate-[spin_40s_linear_infinite]" />
      </div>

      <div className="section-container relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-900 border border-neon-cyan/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] mb-6">
              <Rocket size={32} className="text-neon-cyan" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-6 tracking-tight">
              Founder at <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{elevate.name}</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              {elevate.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {elevate.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="cyber-glass p-6 h-full flex flex-col items-center text-center group border-t-2 border-t-transparent hover:border-t-neon-cyan transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center mb-5 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                    <Icon size={24} className="text-neon-cyan drop-shadow-[0_0_5px_currentColor]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Elevate;
