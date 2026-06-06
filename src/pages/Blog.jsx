import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Blog() {
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  const articles = [
    {
      id: 1,
      title: 'How to Write SEO Articles That Rank in Google Top 3',
      category: 'SEO Copywriting',
      excerpt: 'Learn the proven formula for writing SEO articles that rank fast and convert readers into customers.',
      author: 'ContentSol Team',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '📝',
    },
    {
      id: 2,
      title: 'AI Image Generation for E-commerce: Complete Guide',
      category: 'AI Technology',
      excerpt: 'Discover how to use AI to generate product images that increase conversions by 156%.',
      author: 'ContentSol Team',
      date: '2025-01-12',
      readTime: '6 min read',
      image: '🎨',
    },
    {
      id: 3,
      title: 'Professional Photography for Personal Branding',
      category: 'Photography',
      excerpt: 'Why professional photos matter and how they help experts attract high-value clients.',
      author: 'ContentSol Team',
      date: '2025-01-10',
      readTime: '7 min read',
      image: '📸',
    },
    {
      id: 4,
      title: 'The Psychology of Persuasive Copywriting',
      category: 'Copywriting',
      excerpt: 'Master the psychological principles that make people take action and buy your products.',
      author: 'ContentSol Team',
      date: '2025-01-08',
      readTime: '9 min read',
      image: '✍️',
    },
    {
      id: 5,
      title: 'Semantic Keyword Research for Better Rankings',
      category: 'SEO Copywriting',
      excerpt: 'Advanced keyword research techniques that help you target the right audience and rank faster.',
      author: 'ContentSol Team',
      date: '2025-01-05',
      readTime: '10 min read',
      image: '🔍',
    },
    {
      id: 6,
      title: 'Email Marketing Copy That Gets 45% Open Rates',
      category: 'Copywriting',
      excerpt: 'Proven email templates and copy strategies that increase engagement and sales.',
      author: 'ContentSol Team',
      date: '2025-01-02',
      readTime: '8 min read',
      image: '📧',
    },
    {
      id: 7,
      title: 'Building Your Personal Brand in 2025',
      category: 'Personal Branding',
      excerpt: 'Step-by-step guide to creating a personal brand that attracts clients and opportunities.',
      author: 'ContentSol Team',
      date: '2024-12-30',
      readTime: '12 min read',
      image: '⭐',
    },
    {
      id: 8,
      title: 'Content Strategy Framework for Experts',
      category: 'Strategy',
      excerpt: 'The complete framework for creating a content strategy that drives consistent results.',
      author: 'ContentSol Team',
      date: '2024-12-28',
      readTime: '11 min read',
      image: '📊',
    },
    {
      id: 9,
      title: 'AI Tools for Content Creators: Comparison & Review',
      category: 'AI Technology',
      excerpt: 'Complete review of the best AI tools for content creation in 2025.',
      author: 'ContentSol Team',
      date: '2024-12-25',
      readTime: '15 min read',
      image: '🤖',
    },
  ]

  const categories = ['All', 'SEO Copywriting', 'AI Technology', 'Photography', 'Copywriting', 'Strategy']

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section bg-gradient-to-b from-neutral-dark to-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">{t.blog.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.blog.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat, idx) => (
              <motion.button
                key={idx}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  idx === 0
                    ? 'bg-secondary text-white'
                    : 'bg-neutral-dark text-gray-300 hover:bg-secondary hover:text-white'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.article
                key={article.id}
                className="card border border-gray-700 hover:border-secondary transition-all hover:shadow-xl group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {article.image}
                </div>

                {/* Category */}
                <div className="badge mb-3">{article.category}</div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-700">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <span>{article.readTime}</span>
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-secondary" />
                    <span className="text-xs text-gray-400">{article.author}</span>
                  </div>
                  <button className="text-secondary hover:text-accent transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-gradient-to-r from-secondary/10 to-accent/10 border-y border-gray-800">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Get Content Tips in Your Inbox</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for weekly tips on SEO, copywriting, and content strategy.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
                required
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
