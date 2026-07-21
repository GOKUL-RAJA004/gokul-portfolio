import { CAREER_OBJECTIVE } from '../data/constants.js'
import { SectionReveal } from './AnimationWrappers.jsx'
import { FiTarget } from 'react-icons/fi'

export default function Career() {
  return (
    <section id="career" className="relative">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(16,185,129,0.15)' }}>
              <FiTarget className="text-emerald-400" size={20} />
            </div>
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
              Career Objective
            </p>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Vision</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-10 max-w-4xl relative">
            {/* Decorative gradient border card */}
            <div className="gradient-border p-8 sm:p-10">
              <div className="relative z-10">
                <svg
                  className="w-10 h-10 text-indigo-400/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
                  {CAREER_OBJECTIVE}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
