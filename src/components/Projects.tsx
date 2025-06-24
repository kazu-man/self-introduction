'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  const projects = [
    {
      titleKey: "projects.project1.title",
      descriptionKey: "projects.project1.desc",
      technologies: ["TypeScript", "Next.js", "Fastify", "PostgreSQL", "Docker", "AWS"],
      featureKeys: [
        "projects.project1.feature1",
        "projects.project1.feature2",
        "projects.project1.feature3",
        "projects.project1.feature4"
      ],
      year: "2024-2025"
    },
    {
      titleKey: "projects.project2.title",
      descriptionKey: "projects.project2.desc",
      technologies: ["TypeScript", "Next.js", "Laravel", "MySQL", "Docker"],
      featureKeys: [
        "projects.project2.feature1",
        "projects.project2.feature2",
        "projects.project2.feature3",
        "projects.project2.feature4"
      ],
      year: "2023"
    },
    {
      titleKey: "projects.project3.title",
      descriptionKey: "projects.project3.desc",
      technologies: ["Java", "TypeScript", "Next.js", "Jersey", "PostgreSQL", "Neo4J"],
      featureKeys: [
        "projects.project3.feature1",
        "projects.project3.feature2",
        "projects.project3.feature3",
        "projects.project3.feature4"
      ],
      year: "2022-2023"
    },
    {
      titleKey: "projects.project4.title",
      descriptionKey: "projects.project4.desc",
      technologies: ["Java", "Spring Boot", "Next.js", "WordPress", "Strapi", "MySQL"],
      featureKeys: [
        "projects.project4.feature1",
        "projects.project4.feature2",
        "projects.project4.feature3",
        "projects.project4.feature4"
      ],
      year: "2019-2022"
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section ref={ref} id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-6">
                <motion.div 
                  className="flex justify-between items-start mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {t(project.titleKey)}
                  </h3>
                  <motion.span 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1, backgroundColor: "#2563eb", color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.year}
                  </motion.span>
                </motion.div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{t('projects.techUsed')}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "#1d4ed8",
                          y: -2
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">{t('projects.keyFeatures')}:</h4>
                  <ul className="space-y-2">
                    {project.featureKeys.map((featureKey, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.8 + (featureIndex * 0.1) }}
                        whileHover={{ x: 5, color: "#2563eb" }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                          whileHover={{ scale: 1.5, backgroundColor: "#1d4ed8" }}
                          transition={{ duration: 0.2 }}
                        ></motion.div>
                        {t(featureKey)}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="text-gray-600 mb-6">
            {t('projects.description')}
          </p>
          <motion.div 
            className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {t('projects.details.title')}
            </h3>
            <p className="text-blue-700">
              {t('projects.details.desc')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}