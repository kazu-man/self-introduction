'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
      </div>
      
      <ParticleBackground />
      
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <Image
            src="/profile.jpg"
            alt="Kazuki Nakamura"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300"
            priority
          />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Kazuki Nakamura
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Freelance Software Engineer
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-blue-50 drop-shadow-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          3年間のWEB開発経験＋2年間のフリーランス経験を持つフルスタック開発者。
          Java/Spring Boot、TypeScript/Next.js、HeadlessCMSでの開発を得意とし、
          要件定義から実装まで一貫して対応できます。
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#about"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 1)",
              color: "rgb(37, 99, 235)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}