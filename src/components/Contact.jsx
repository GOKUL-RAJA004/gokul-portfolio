import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus('error');
      setStatusMessage('Unable to send your message. Please try again or email me directly.');
      setTimeout(() => { setStatus(''); setStatusMessage(''); }, 5000);
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage("Message sent successfully. I'll get back to you soon.");
        form.reset();
      } else {
        setStatus('error');
        setStatusMessage('Unable to send your message. Please try again or email me directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Unable to send your message. Please try again or email me directly.');
    } finally {
      setTimeout(() => { setStatus(''); setStatusMessage(''); }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      color: 'text-neon-cyan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
      color: 'text-neon-purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.contact.location,
      href: '#',
      color: 'text-neon-magenta',
    },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: siteConfig.social.linkedin, color: 'text-neon-cyan', hover: 'hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] border-neon-cyan/50 hover:bg-neon-cyan/10' },
    { icon: FaGithub, href: siteConfig.social.github, color: 'text-white', hover: 'hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] border-white/50 hover:bg-white/10' },
    { icon: FaWhatsapp, href: siteConfig.social.whatsapp, color: 'text-green-400', hover: 'hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] border-green-400/50 hover:bg-green-400/10' },
  ];

  return (
    <section id="contact" className="section-padding relative min-h-screen flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] animate-blob" />
      </div>

      <div className="section-container relative z-10 w-full">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="section-title">
              Initiate <span className="gradient-text">Connection</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.5)]" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">
                Let's Build Something <br className="hidden sm:block" />
                <span className="text-neon-cyan">Extraordinary.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                  <a
                    href={info.href}
                    className="flex items-center gap-5 p-4 cyber-glass rounded-xl hover:border-white/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                      <info.icon size={20} className={`${info.color} drop-shadow-[0_0_5px_currentColor]`} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-neon-cyan transition-colors">{info.value}</div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal delay={0.3} direction="left">
              <div className="pt-6 border-t border-white/10">
                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Secure Channels</div>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg cyber-glass border flex items-center justify-center transition-all ${social.hover}`}
                    >
                      <social.icon size={20} className={`${social.color} drop-shadow-[0_0_5px_currentColor]`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="cyber-glass p-8 rounded-2xl relative overflow-hidden group">
              {/* Form scanning line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8">
                <Terminal size={20} className="text-neon-purple" />
                <h3 className="text-xl font-mono text-white tracking-widest">SEND_MESSAGE.exe</h3>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-navy-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600
                               focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all font-mono"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-navy-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600
                               focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all font-mono"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-navy-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600
                               focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all font-mono resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Status message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm font-mono px-4 py-3 rounded-lg border ${
                      status === 'success'
                        ? 'text-green-400 bg-green-400/10 border-green-400/30'
                        : 'text-red-400 bg-red-400/10 border-red-400/30'
                    }`}
                  >
                    {statusMessage}
                  </motion.div>
                )}

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed font-mono tracking-wider"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      TRANSMISSION SUCCESS
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle size={18} />
                      TRANSMISSION FAILED
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      SUBMIT
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
