import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
  const language = useLanguageStore((state) => state.language)
  const navigate = useNavigate()

  const articles = language === 'en' ? [
    {
      id: 1,
      title: 'SEO Copywriting for Consultants: The Complete Guide',
      excerpt: 'Learn how to write content that ranks AND converts. A step-by-step approach to building authority through strategic SEO.',
      category: 'SEO',
      author: 'ContentSol',
      date: 'March 15, 2024',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'AI Visuals vs Real Photography: When to Use Each',
      excerpt: 'Understanding the strengths and limitations of AI-generated visuals and real photography for your brand.',
      category: 'Visuals',
      author: 'ContentSol',
      date: 'March 12, 2024',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Personal Brand Photography: Why Experts Need It',
      excerpt: 'How premium photography elevates your credibility and attracts better clients. Real examples and ROI data.',
      category: 'Photography',
      author: 'ContentSol',
      date: 'March 8, 2024',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'Website Messaging for Founders: The Framework',
      excerpt: 'The exact messaging framework we use to help founders communicate their value and attract ideal clients.',
      category: 'Copywriting',
      author: 'ContentSol',
      date: 'March 1, 2024',
      readTime: '9 min read',
    },
    {
      id: 5,
      title: 'Bilingual Content Strategy for International Brands',
      excerpt: 'How to create content in multiple languages without losing brand voice or SEO effectiveness.',
      category: 'Strategy',
      author: 'ContentSol',
      date: 'February 25, 2024',
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'LinkedIn Positioning for Service Professionals',
      excerpt: 'The complete guide to building authority on LinkedIn and attracting premium clients through strategic content.',
      category: 'LinkedIn',
      author: 'ContentSol',
      date: 'February 18, 2024',
      readTime: '8 min read',
    },
  ] : [
    {
      id: 1,
      title: 'Textos SEO para negocios en España: Guía completa',
      excerpt: 'Aprende a escribir contenido que posicione y convierta. Estrategia paso a paso para construir autoridad en tu sector.',
      category: 'SEO',
      author: 'ContentSol',
      date: '15 de marzo, 2024',
      readTime: '8 min lectura',
    },
    {
      id: 2,
      title: 'Fotografía de marca personal en Málaga y Costa del Sol',
      excerpt: 'Cómo la fotografía premium eleva tu credibilidad y atrae mejores clientes. Ejemplos reales y datos de ROI.',
      category: 'Fotografía',
      author: 'ContentSol',
      date: '12 de marzo, 2024',
      readTime: '7 min lectura',
    },
    {
      id: 3,
      title: 'Imágenes con IA para negocios en España',
      excerpt: 'Cuándo usar visuales con IA y cuándo necesitas fotografía real. Análisis completo para tu estrategia visual.',
      category: 'Visuales',
      author: 'ContentSol',
      date: '8 de marzo, 2024',
      readTime: '6 min lectura',
    },
    {
      id: 4,
      title: 'Copywriting para captar clientes en servicios premium',
      excerpt: 'El framework exacto que usamos para ayudar a profesionales a comunicar su valor y atraer clientes ideales.',
      category: 'Copywriting',
      author: 'ContentSol',
      date: '1 de marzo, 2024',
      readTime: '9 min lectura',
    },
    {
      id: 5,
      title: 'Contenido para marca personal en la Costa del Sol',
      excerpt: 'Estrategia de posicionamiento local para expertos y profesionales en Málaga, Marbella y alrededores.',
      category: 'Estrategia',
      author: 'ContentSol',
      date: '25 de febrero, 2024',
      readTime: '8 min lectura',
    },
    {
      id: 6,
      title: 'LinkedIn para profesionales españoles: Guía de autoridad',
      excerpt: 'Cómo construir autoridad en LinkedIn y atraer clientes premium a través de contenido estratégico.',
      category: 'LinkedIn',
      author: 'ContentSol',
      date: '18 de febrero, 2024',
      readTime: '8 min lectura',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            {language === 'en' ? 'Blog' : 'Blog'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            {language === 'en'
              ? 'Insights on content strategy, visuals, and brand positioning'
              : 'Insights sobre estrategia de contenido, visuales y posicionamiento de marca'}
          </motion.p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover flex flex-col cursor-pointer"
              >
                <span className="inline-block bg-blue-100 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3 flex-grow">{article.title}</h3>
                <p className="text-text-secondary mb-6">{article.excerpt}</p>
                
                <div className="flex items-center gap-4 text-sm text-text-muted mb-6 border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    {article.readTime}
                  </div>
                </div>

                <button className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  {language === 'en' ? 'Read Article' : 'Leer artículo'} <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-slate-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              {language === 'en' ? 'Stay Updated' : 'Mantente actualizado'}
            </h2>
            <p className="text-text-secondary mb-8">
              {language === 'en'
                ? 'Get insights on content strategy and brand positioning delivered to your inbox'
                : 'Recibe insights sobre estrategia de contenido y posicionamiento de marca en tu correo'}
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email' : 'Tu email'}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
              />
              <button className="btn btn-primary px-8">
                {language === 'en' ? 'Subscribe' : 'Suscribirse'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
