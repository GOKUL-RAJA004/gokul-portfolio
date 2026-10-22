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
  const startup = siteConfig.startup || siteConfig.elevate;

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
            <p className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-2 font-semibold">
              Parent Organization
            </p>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-6 tracking-tight">
              Founder at <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{startup.parent || startup.name}</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              {startup.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Subcategories Grid */}
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {startup.subcategories.map((sub, i) => {
            const Icon = iconMap[sub.icon] || (i === 0 ? Code2 : GraduationCap);
            const isFirst = i === 0;
            
            return (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`cyber-glass p-8 h-full flex flex-col items-center text-center group border-t-2 ${
                    isFirst ? 'border-t-neon-cyan hover:border-t-neon-cyan' : 'border-t-neon-purple hover:border-t-neon-purple'
                  } transition-all duration-300 rounded-xl relative`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-navy-900 border ${
                    isFirst ? 'border-neon-cyan/30 group-hover:border-neon-cyan/60 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'border-neon-purple/30 group-hover:border-neon-purple/60 group-hover:shadow-[0_0_20px_rgba(192,38,211,0.4)]'
                  } flex items-center justify-center mb-6 transition-all`}>
                    <Icon size={28} className={isFirst ? "text-neon-cyan drop-shadow-[0_0_6px_currentColor]" : "text-neon-purple drop-shadow-[0_0_6px_currentColor]"} />
                  </div>
                  
                  <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border mb-4 ${
                    isFirst ? 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20' : 'text-neon-purple bg-neon-purple/10 border-neon-purple/20'
                  }`}>
                    {sub.category || "Division"}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {sub.description}
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
