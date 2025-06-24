'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section ref={ref} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {t('about.profile')}
              </h3>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                {t('about.profile1')}
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                {t('about.profile2')}
              </motion.p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {t('about.experience')}
              </h3>
              <ul className="space-y-4">
                {[
                  { titleKey: "about.exp1.title", descKey: "about.exp1.desc", color: "blue" },
                  { titleKey: "about.exp2.title", descKey: "about.exp2.desc", color: "blue" },
                  { titleKey: "about.exp3.title", descKey: "about.exp3.desc", color: "blue" },
                  { titleKey: "about.exp4.title", descKey: "about.exp4.desc", color: "green" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`bg-${item.color}-100 rounded-full p-2 mr-4 mt-1 group-hover:bg-${item.color}-200 transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-2 h-2 bg-${item.color}-600 rounded-full`}></div>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {t(item.titleKey)}
                      </h4>
                      <p className="text-gray-600">{t(item.descKey)}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}