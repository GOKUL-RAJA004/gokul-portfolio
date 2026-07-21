import { motion } from 'framer-motion'
import { ELEVATE } from '../data/constants.js'
import { SectionReveal, StaggerContainer, StaggerItem } from './AnimationWrappers.jsx'
import { FiTrendingUp } from 'react-icons/fi'

export default function Elevate() {
  return (
    <section id="elevate" className="relative">
      {/* Subtle gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(234,179,8,0.15)' }}>
              <FiTrendingUp className="text-yellow-400" size={20} />
            </div>
            <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
              Venture
            </p>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">ELEVATE</span> Career Solutions
          </h2>
          <p className="section-subtitle mt-3">
            {ELEVATE.tagline}
          </p>
        </SectionReveal>

        {/* Description */}
        <SectionReveal className="mt-8">
          <div className="glass-card p-8 max-w-3xl">
            <p className="text-slate-300 leading-relaxed">
              {ELEVATE.description}
            </p>
          </div>
        </SectionReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {ELEVATE.services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="glass-card p-6 h-full group cursor-default"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
