'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ja' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ja: {
    // Hero Section
    'hero.title': '中村　一貴',
    'hero.subtitle': 'フリーランス ソフトウェアエンジニア',
    'hero.description': '3年間のWEB開発経験＋2年間のフリーランス経験を持つフルスタック開発者。Java/Spring Boot、TypeScript/Next.js、HeadlessCMSでの開発を得意とし、要件定義から実装まで一貫して対応できます。',
    'hero.aboutBtn': 'About Me',
    'hero.contactBtn': 'Contact',

    // About Section
    'about.title': 'About Me',
    'about.profile': 'プロフィール',
    'about.profile1': '3年間WEB開発企業に従事した後、2022年末からフリーランスとして活動しています。SpringBoot/jQuery・Next.js/HeadlessCMSでの基幹システム・Web開発、AWSのインフラ構築補佐など幅広い開発経験を積んできました。',
    'about.profile2': 'バックエンド・フロントエンド関わらず新規プロジェクトの開発案件に携わり、顧客との綿密なコミュニケーションを通じて要件定義から実装まで一貫して担当。ユーザー視点のシステム開発を心がけています。',
    'about.experience': '経験・実績',
    'about.exp1.title': 'フルスタック開発',
    'about.exp1.desc': 'Java/Spring Boot + Next.js/TypeScriptでの開発',
    'about.exp2.title': '新規システム開発',
    'about.exp2.desc': '要件定義〜実装まで一貫して担当',
    'about.exp3.title': 'HeadlessCMS活用',
    'about.exp3.desc': 'WordPress/Strapi等でのコンテンツ管理',
    'about.exp4.title': 'AWS認定資格',
    'about.exp4.desc': 'ソリューションアーキテクト取得済み',

    // Skills Section
    'skills.title': 'Technical Skills',

    // Projects Section
    'projects.title': 'Projects',
    'projects.project1.title': '大学出願サイト',
    'projects.project1.desc': 'Next.js/Fastifyを使用した新規業務システム。顧客との綿密なコミュニケーションにより、具体的な要件定義から実装まで一貫して担当。',
    'projects.project1.feature1': 'API設計書作成',
    'projects.project1.feature2': 'バックエンド・フロントエンド開発',
    'projects.project1.feature3': '顧客要件のシステム要件定義',
    'projects.project1.feature4': 'Prisma ORM活用',

    'projects.project2.title': 'Webポータルサイト開発',
    'projects.project2.desc': 'Laravel/Next.jsを使用したWebポータルサイト。フロントエンド担当として、バックエンドチームと密に連携しながら開発を推進。',
    'projects.project2.feature1': 'フロントエンド新規開発',
    'projects.project2.feature2': 'styled-components活用',
    'projects.project2.feature3': 'Prisma ORM連携',
    'projects.project2.feature4': 'バックエンド連携設計',

    'projects.project3.title': 'IT商品ポータルサイト',
    'projects.project3.desc': 'Java/Next.jsで開発したWebアプリケーションの新規開発。Neo4JやOpenSearchなどの先進技術を活用したシステム構築。',
    'projects.project3.feature1': '新規サービス開発',
    'projects.project3.feature2': 'Strapi HeadlessCMS連携',
    'projects.project3.feature3': 'OpenSearch実装',
    'projects.project3.feature4': 'TailwindCSS活用',

    'projects.project4.title': '基幹システム保守・開発',
    'projects.project4.desc': 'Java/WordPress、Next.js/Strapiで構築された複雑な既存システムの保守・追加開発。10年以上の歴史を持つシステムの仕様解析から実装まで担当。',
    'projects.project4.feature1': '既存システム仕様解析',
    'projects.project4.feature2': '詳細設計から開発',
    'projects.project4.feature3': 'バッチ処理実装',
    'projects.project4.feature4': 'HeadlessCMS活用',

    'projects.description': 'これらのプロジェクトを通じて、スケーラブルで保守性の高いアプリケーション開発のスキルを磨いてきました。',
    'projects.details.title': 'プロジェクトの詳細について',
    'projects.details.desc': '各プロジェクトのソースコードや詳細な技術仕様については、お気軽にお問い合わせください。守秘義務の範囲内で共有可能です。',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'お気軽にご連絡ください',
    'contact.description': 'フリーランスとして新しいプロジェクトや協業の機会を探しています。あなたのビジョンを実現するお手伝いをさせてください。',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.desc': 'プロフェッショナルな経歴と実績',
    'contact.location': 'Location',
    'contact.location.value': 'Tokyo, Japan',
    'contact.availability': 'Availability',
    'contact.availability.value': '新しいプロジェクトを受付中',
    'contact.certifications': 'Certifications',
    'contact.certifications.value': 'Japanese (Native), AWS認定SA'
  },
  en: {
    // Hero Section
    'hero.title': 'Kazuki Nakamura',
    'hero.subtitle': 'Freelance Software Engineer',
    'hero.description': 'Full-stack developer with 3 years of corporate web development experience plus 2 years as a freelancer. Specialized in Java/Spring Boot, TypeScript/Next.js, and HeadlessCMS development. Capable of handling everything from requirements definition to implementation.',
    'hero.aboutBtn': 'About Me',
    'hero.contactBtn': 'Contact',

    // About Section
    'about.title': 'About Me',
    'about.profile': 'Profile',
    'about.profile1': 'After working for 3 years at a web development company, I have been working as a freelancer since the end of 2022. I have gained extensive development experience including SpringBoot/jQuery, Next.js/HeadlessCMS for core systems and web development, and AWS infrastructure construction support.',
    'about.profile2': 'I have been involved in new project development regardless of backend or frontend, handling everything from requirements definition to implementation through close communication with customers. I always strive for user-oriented system development.',
    'about.experience': 'Experience & Achievements',
    'about.exp1.title': 'Full-stack Development',
    'about.exp1.desc': 'Development with Java/Spring Boot + Next.js/TypeScript',
    'about.exp2.title': 'New System Development',
    'about.exp2.desc': 'Consistent handling from requirements definition to implementation',
    'about.exp3.title': 'HeadlessCMS Utilization',
    'about.exp3.desc': 'Content management with WordPress/Strapi etc.',
    'about.exp4.title': 'AWS Certification',
    'about.exp4.desc': 'Solutions Architect certified',

    // Skills Section
    'skills.title': 'Technical Skills',

    // Projects Section
    'projects.title': 'Projects',
    'projects.project1.title': 'University Application Site',
    'projects.project1.desc': 'New business system using Next.js/Fastify. Handled everything from specific requirements definition to implementation through close communication with customers.',
    'projects.project1.feature1': 'API design documentation',
    'projects.project1.feature2': 'Backend & Frontend development',
    'projects.project1.feature3': 'Customer requirements to system requirements definition',
    'projects.project1.feature4': 'Prisma ORM utilization',

    'projects.project2.title': 'Web Portal Site Development',
    'projects.project2.desc': 'Web portal site using Laravel/Next.js. As a frontend developer, promoted development while closely collaborating with the backend team.',
    'projects.project2.feature1': 'Frontend new development',
    'projects.project2.feature2': 'styled-components utilization',
    'projects.project2.feature3': 'Prisma ORM integration',
    'projects.project2.feature4': 'Backend integration design',

    'projects.project3.title': 'IT Product Portal Site',
    'projects.project3.desc': 'New development of web application developed with Java/Next.js. System construction utilizing advanced technologies such as Neo4J and OpenSearch.',
    'projects.project3.feature1': 'New service development',
    'projects.project3.feature2': 'Strapi HeadlessCMS integration',
    'projects.project3.feature3': 'OpenSearch implementation',
    'projects.project3.feature4': 'TailwindCSS utilization',

    'projects.project4.title': 'Core System Maintenance & Development',
    'projects.project4.desc': 'Maintenance and additional development of complex existing systems built with Java/WordPress and Next.js/Strapi. Handled everything from specification analysis to implementation for systems with over 10 years of history.',
    'projects.project4.feature1': 'Existing system specification analysis',
    'projects.project4.feature2': 'Detailed design to development',
    'projects.project4.feature3': 'Batch processing implementation',
    'projects.project4.feature4': 'HeadlessCMS utilization',

    'projects.description': 'Through these projects, I have honed my skills in developing scalable and maintainable applications.',
    'projects.details.title': 'About Project Details',
    'projects.details.desc': 'Please feel free to contact me for source code and detailed technical specifications of each project. Sharing is possible within the scope of confidentiality agreements.',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Feel free to contact me',
    'contact.description': 'I am looking for new projects and collaboration opportunities as a freelancer. Let me help you realize your vision.',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.desc': 'Professional career and achievements',
    'contact.location': 'Location',
    'contact.location.value': 'Tokyo, Japan',
    'contact.availability': 'Availability',
    'contact.availability.value': 'Accepting new projects',
    'contact.certifications': 'Certifications',
    'contact.certifications.value': 'Japanese (Native), AWS Certified SA'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ja']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}