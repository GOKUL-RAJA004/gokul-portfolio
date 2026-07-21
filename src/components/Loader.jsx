import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="loader-ring" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="gradient-text">Gokul Raja G</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1 tracking-widest uppercase">
            Loading Portfolio
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
