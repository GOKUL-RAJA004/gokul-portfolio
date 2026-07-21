import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { HERO, SOCIAL_LINKS } from '../data/constants.js'

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(current.substring(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}

export default function Hero() {
  const typedText = useTypewriter(HERO.titles)

  // Generate particles
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        dx: `${(Math.random() - 0.5) * 80}px`,
        dy: `${(Math.random() - 0.5) * 80}px`,
        size: 2 + Math.random() * 3,
      })),
    []
  )

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              '--dx': p.dx,
              '--dy': p.dy,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-indigo-300 font-medium">
              {HERO.greeting}
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="gradient-text">{HERO.name}</span>
          </h1>

          {/* Typewriter */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
              {typedText}
              <span className="typewriter-cursor" />
            </p>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={SOCIAL_LINKS.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FiDownload size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn-outline"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {[
              { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
              { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500"
          >
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
