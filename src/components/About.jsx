import { ABOUT } from '../data/constants.js'
import { SectionReveal, FadeIn } from './AnimationWrappers.jsx'
import { FiUser } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(99,102,241,0.15)' }}>
              <FiUser className="text-indigo-400" size={20} />
            </div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              About Me
            </p>
          </div>
          <h2 className="section-title">
            Know <span className="gradient-text">Who I Am</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-slate-300 leading-relaxed text-[0.95rem]">
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {ABOUT.highlights.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="glass-card p-6 text-center"
                  >
                    <p className="text-3xl font-bold gradient-text mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}>
                      {value}
                    </p>
                    <p className="text-sm text-slate-400 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
