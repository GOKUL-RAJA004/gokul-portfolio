import { EXPERIENCE, EDUCATION, CERTIFICATIONS, RESEARCH, ACHIEVEMENTS } from '../data/constants.js'
import { SectionReveal, FadeIn, StaggerContainer, StaggerItem } from './AnimationWrappers.jsx'
import { FiBriefcase, FiBookOpen, FiAward, FiFileText } from 'react-icons/fi'

function TimelineCard({ role, company, location, period, points }) {
  return (
    <div className="glass-card p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}>
            {role}
          </h3>
          <p className="text-indigo-400 font-medium text-sm">
            {company} · {location}
          </p>
        </div>
        <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase whitespace-nowrap px-3 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.05)' }}>
          {period}
        </span>
      </div>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-indigo-400 mt-1 shrink-0">▸</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        {/* Work Experience */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(245,158,11,0.15)' }}>
              <FiBriefcase className="text-amber-400" size={20} />
            </div>
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
              Experience
            </p>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </SectionReveal>

        <div className="space-y-6 mt-10">
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <TimelineCard {...exp} />
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <SectionReveal className="mt-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(34,197,94,0.15)' }}>
              <FiBookOpen className="text-green-400" size={20} />
            </div>
            <p className="text-green-400 text-sm font-semibold tracking-widest uppercase">
              Education
            </p>
          </div>
          <h2 className="section-title">
            Academic <span className="gradient-text-accent">Background</span>
          </h2>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mt-10">
          {EDUCATION.map((edu) => (
            <StaggerItem key={edu.degree}>
              <div className="glass-card p-6 h-full">
                <span className="text-xs font-semibold text-slate-500 tracking-wider">{edu.period}</span>
                <h3 className="text-base font-bold text-white mt-2"
                  style={{ fontFamily: 'var(--font-heading)' }}>
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{edu.institution}</p>
                <div className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc' }}>
                  {edu.grade}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Research */}
        <SectionReveal className="mt-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(236,72,153,0.15)' }}>
              <FiFileText className="text-pink-400" size={20} />
            </div>
            <p className="text-pink-400 text-sm font-semibold tracking-widest uppercase">
              Research & Conferences
            </p>
          </div>
          <h2 className="section-title">
            Published <span className="gradient-text">Research</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {RESEARCH.map((r, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="glass-card p-6 h-full">
                <span className="text-xs font-semibold text-indigo-400 tracking-wider">{r.date}</span>
                <h3 className="text-base font-bold text-white mt-2"
                  style={{ fontFamily: 'var(--font-heading)' }}>
                  {r.title}
                </h3>
                <p className="text-sm text-cyan-400 mt-1">{r.venue}</p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{r.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <SectionReveal className="mt-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(99,102,241,0.15)' }}>
              <FiAward className="text-indigo-400" size={20} />
            </div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              Certifications
            </p>
          </div>
          <h2 className="section-title">
            Credentials & <span className="gradient-text-accent">Achievements</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Certifications List */}
          <FadeIn>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}>
                Certifications
              </h3>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-indigo-400 mt-0.5 shrink-0">✦</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Achievements List */}
          <FadeIn delay={0.15}>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}>
                Leadership & Achievements
              </h3>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((ach, i) => (
                  <li key={i} className="text-sm text-slate-300">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
