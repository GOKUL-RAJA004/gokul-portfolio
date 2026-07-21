import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SOCIAL_LINKS, NAV_LINKS } from '../data/constants.js'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'var(--gradient-primary)' }}
              >
                G
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="gradient-text">Gokul</span>
                <span className="text-slate-400"> Raja G</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Software Engineer & Full Stack Developer building intelligent web applications
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-slate-500 hover:text-indigo-400 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
                { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {currentYear} Gokul Raja G. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Built with <FiHeart size={12} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
