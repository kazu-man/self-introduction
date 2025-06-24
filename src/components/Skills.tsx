'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const skills = [
    {
      category: "Backend",
      technologies: [
        { name: "Java", level: "Expert", years: 3 },
        { name: "Spring Boot", level: "Expert", years: 3 },
        { name: "Spring Framework", level: "Advanced", years: 3 },
        { name: "REST API", level: "Expert", years: 5 },
        { name: "Microservices", level: "Advanced", years: 2 }
      ]
    },
    {
      category: "Frontend",
      technologies: [
        { name: "TypeScript", level: "Expert", years: 3 },
        { name: "Next.js", level: "Expert", years: 3 },
        { name: "React", level: "Expert", years: 3 },
        { name: "Tailwind CSS", level: "Advanced", years: 2 },
        { name: "HTML/CSS", level: "Expert", years: 5 }
      ]
    },
    {
      category: "Database & Tools",
      technologies: [
        { name: "PostgreSQL", level: "Advanced", years: 3 },
        { name: "MySQL", level: "Advanced", years: 3 },
        { name: "Redis", level: "Intermediate", years: 2 },
        { name: "Docker", level: "Advanced", years: 3 },
        { name: "Git", level: "Expert", years: 5 }
      ]
    },
    {
      category: "Language Skills",
      technologies: [
        { name: "Japanese", level: "Native", years: 0 },
        { name: "English", level: "IELTS 7.0", years: 0 }
      ]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500"
      case "Advanced":
        return "bg-blue-500"
      case "Intermediate":
        return "bg-yellow-500"
      case "Native":
        return "bg-purple-500"
      case "IELTS 7.0":
        return "bg-indigo-500"
      default:
        return "bg-gray-500"
    }
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.2 }}
              >
                {skillGroup.category}
              </motion.h3>
              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.div 
                    key={techIndex} 
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{tech.name}</span>
                      <motion.span 
                        className={`px-2 py-1 rounded-full text-xs text-white ${getLevelColor(tech.level)}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tech.level}
                      </motion.span>
                    </div>
                    {tech.years > 0 && (
                      <span className="text-sm text-gray-500">{tech.years} years</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}