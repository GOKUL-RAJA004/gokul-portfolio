import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const CareerObjective = () => {
  return (
    <section id="career-objective" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                            bg-gradient-to-br from-blue-500/15 to-purple-500/15 mb-8">
              <Target size={28} className="text-electric-blue" />
            </div>

            {/* Label */}
            <p className="text-electric-blue font-semibold text-sm tracking-widest uppercase mb-6">
              Career Objective
            </p>

            {/* Quote */}
            <blockquote className="relative">
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl font-serif text-white/5 select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-light text-gray-200 leading-relaxed text-balance">
                {siteConfig.careerObjective}
              </p>
            </blockquote>

            {/* Divider */}
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mt-10 mb-8" />

            {/* CTA */}
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={800}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white
                         transition-colors duration-300 cursor-pointer group"
            >
              Let's connect
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CareerObjective;
