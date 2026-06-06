import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Portfolio() {
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  const cases = [
    {
      id: 1,
      title: 'E-commerce Brand Reaches $500K Revenue',
      category: 'E-commerce',
      image: '🛍️',
      description: 'Increased product page conversions by 156% through SEO copywriting and AI-generated product images.',
      results: [
        '+340% organic traffic',
        '+156% conversion rate',
        '$500K annual revenue',
      ],
      services: ['SEO Copywriting', 'AI Images'],
    },
    {
      id: 2,
      title: 'Expert Consultant Lands 12 High-Value Clients',
      category: 'Personal Branding',
      image: '👨‍💼',
      description: 'Built personal brand through professional photography and SEO-optimized blog content.',
      results: [
        '+8.5K monthly visitors',
        '12 new clients in 3 months',
        '3x higher consultation bookings',
      ],
      services: ['Professional Photography', 'SEO Copywriting'],
    },
    {
      id: 3,
      title: 'SaaS Company Doubles Email Subscribers',
      category: 'SaaS',
      image: '📊',
      description: 'Crafted persuasive copy for landing pages and email campaigns that doubled subscriber base.',
      results: [
        '+100% email subscribers',
        '+45% email open rate',
        '+89% click-through rate',
      ],
      services: ['Copywriting', 'Email Campaigns'],
    },
    {
      id: 4,
      title: 'Local Service Business Dominates Local Search',
      category: 'Local Business',
      image: '🏢',
      description: 'Optimized website content and created service pages that rank in top 3 for local keywords.',
      results: [
        'Top 3 ranking for 15 keywords',
        '+420% local search traffic',
        '+200% phone inquiries',
      ],
      services: ['SEO Copywriting', 'Local SEO'],
    },
    {
      id: 5,
      title: 'Content Creator Builds Viral Personal Brand',
      category: 'Content Creator',
      image: '🎬',
      description: 'Created consistent visual brand with AI images and professional photography for social media.',
      results: [
        '+50K Instagram followers',
        '+2.5M monthly impressions',
        '5 brand partnerships',
      ],
      services: ['AI Images', 'Professional Photography'],
    },
    {
      id: 6,
      title: 'B2B Company Generates 200+ Qualified Leads',
      category: 'B2B',
      image: '💼',
      description: 'Developed comprehensive content strategy with SEO blog posts and persuasive sales pages.',
      results: [
        '+200 qualified leads',
        '+$2.5M pipeline',
        '+35% sales conversion',
      ],
      services: ['SEO Copywriting', 'Copywriting'],
    },
  ]

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
            <h1 className="mb-6">{t.portfolio.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.id}
                className="card border border-gray-700 hover:border-secondary transition-all hover:shadow-xl cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {caseStudy.image}
                </div>

                {/* Category Badge */}
                <div className="badge mb-3">{caseStudy.category}</div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{caseStudy.description}</p>

                {/* Results */}
                <div className="mb-4 space-y-2">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <TrendingUp size={16} className="text-secondary" />
                      {result}
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.services.map((service, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary">
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="text-secondary hover:text-accent transition-colors font-semibold flex items-center gap-2 group/btn">
                  {t.portfolio.viewCase}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-neutral-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects Completed', value: '150+' },
              { label: 'Happy Clients', value: '89%' },
              { label: 'Avg. Traffic Growth', value: '340%' },
              { label: 'Avg. ROI', value: '420%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how ContentSol can help you achieve similar results.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
