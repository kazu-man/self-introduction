'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Spring BootとNext.jsを使用したフルスタックのECプラットフォーム。マイクロサービスアーキテクチャを採用し、高いスケーラビリティを実現。",
      technologies: ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Redis"],
      features: [
        "RESTful API設計",
        "JWT認証システム",
        "リアルタイム在庫管理",
        "決済システム統合"
      ],
      year: "2024"
    },
    {
      title: "Task Management System",
      description: "チーム向けのタスク管理システム。リアルタイム更新とドラッグ&ドロップ機能を実装。",
      technologies: ["TypeScript", "Next.js", "Spring Boot", "WebSocket", "MySQL"],
      features: [
        "リアルタイム同期",
        "ドラッグ&ドロップUI",
        "チーム管理機能",
        "進捗レポート生成"
      ],
      year: "2023"
    },
    {
      title: "API Gateway Service",
      description: "マイクロサービス間の通信を管理するAPIゲートウェイ。レート制限、認証、ログ機能を実装。",
      technologies: ["Java", "Spring Boot", "Spring Cloud Gateway", "Docker", "Kubernetes"],
      features: [
        "レート制限",
        "サービス発見",
        "ヘルスチェック",
        "分散トレーシング"
      ],
      year: "2023"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "リアルタイムデータ可視化ダッシュボード。WebSocketを使用してライブデータを表示。",
      technologies: ["TypeScript", "Next.js", "Chart.js", "WebSocket", "Redis"],
      features: [
        "リアルタイムチャート",
        "カスタムダッシュボード",
        "データエクスポート",
        "アラート機能"
      ],
      year: "2022"
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
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
          Projects
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
                    {project.title}
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
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
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
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
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
                        {feature}
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
            これらのプロジェクトを通じて、スケーラブルで保守性の高いアプリケーション開発のスキルを磨いてきました。
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
              プロジェクトの詳細について
            </h3>
            <p className="text-blue-700">
              各プロジェクトのソースコードや詳細な技術仕様については、
              お気軽にお問い合わせください。守秘義務の範囲内で共有可能です。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}