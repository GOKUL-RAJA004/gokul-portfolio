import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SOCIAL_LINKS, CONTACT_CONFIG } from '../data/constants.js'
import { SectionReveal, FadeIn } from './AnimationWrappers.jsx'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      if (CONTACT_CONFIG.useEmailJS) {
        // ── EmailJS ──
        await emailjs.sendForm(
          CONTACT_CONFIG.emailjsServiceId,
          CONTACT_CONFIG.emailjsTemplateId,
          formRef.current,
          CONTACT_CONFIG.emailjsPublicKey
        )
      } else {
        // ── Formspree ──
        const res = await fetch(`https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Formspree error')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: SOCIAL_LINKS.phone,
      href: `tel:${SOCIAL_LINKS.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: SOCIAL_LINKS.location,
      href: null,
    },
  ]

  const socialLinks = [
    { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaGithub, href: SOCIAL_LINKS.github, label: 'GitHub', color: '#fff' },
    { icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: '#25D366' },
  ]

  return (
    <section id="contact" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(99,102,241,0.15)' }}>
              <FiMail className="text-indigo-400" size={20} />
            </div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              Contact
            </p>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mt-3">
            Have a project in mind or want to collaborate? Let's connect and create something amazing together.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10 mt-12">
          {/* Left: Contact Info */}
          <FadeIn className="lg:col-span-2 space-y-6" direction="right">
            {/* Contact Cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <Icon className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-slate-200 hover:text-indigo-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-200">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn className="lg:col-span-3" delay={0.2} direction="left">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or idea..."
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'idle' && (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <FiCheck size={18} />
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <FiAlertCircle size={18} />
                    Failed — Try Again
                  </>
                )}
              </motion.button>

              {/* Config hint */}
              {CONTACT_CONFIG.formspreeId === 'YOUR_FORMSPREE_ID' && !CONTACT_CONFIG.useEmailJS && (
                <p className="text-xs text-amber-400/60 text-center mt-2">
                  ⚠ Configure your Formspree or EmailJS credentials in{' '}
                  <code className="text-amber-400/80">src/data/constants.js</code>
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
