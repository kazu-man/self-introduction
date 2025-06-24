'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1 shadow-lg">
        <div className="flex">
          <motion.button
            onClick={() => setLanguage('ja')}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'ja'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🇯🇵 JP
          </motion.button>
          <motion.button
            onClick={() => setLanguage('en')}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'en'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🇺🇸 EN
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}