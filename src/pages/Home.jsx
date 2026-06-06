import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Target, TrendingUp } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Home() {
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary via-primary to-neutral-dark">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="badge">{t.hero.badge}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="mb-6">
              {t.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                {t.hero.cta}
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                {t.hero.cta2}
              </Link>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="mt-12 relative h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border border-gray-800 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Zap size={48} className="mx-auto mb-4 text-secondary opacity-50" />
                  <p className="text-gray-400">Professional Portfolio Showcase</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'seo', icon: Target, data: t.services.seoWriting },
              { id: 'ai', icon: Zap, data: t.services.aiImages },
              { id: 'photo', icon: TrendingUp, data: t.services.photography },
              { id: 'copy', icon: CheckCircle, data: t.services.copywriting },
            ].map((service, idx) => (
              <motion.div
                key={service.id}
                className="card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon size={40} className="text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.data.title}</h3>
                <p className="text-gray-400 mb-4">{service.data.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.data.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={16} className="text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="text-secondary hover:text-accent transition-colors font-semibold">
                  {t.services.learnMore} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-neutral-dark">
        <div className="container">
          <div className="section-header">
            <h2>{t.process.title}</h2>
            <p>{t.process.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, data: t.process.step1 },
              { step: 2, data: t.process.step2 },
              { step: 3, data: t.process.step3 },
              { step: 4, data: t.process.step4 },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.data.title}</h3>
                  <p className="text-gray-400">{item.data.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-secondary opacity-50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Projects Completed', value: '150+' },
              { label: 'Happy Clients', value: '89%' },
              { label: 'Avg. Traffic Growth', value: '340%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-secondary/10 to-accent/10 border-y border-gray-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">{t.cta.title}</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            <Link to="/contact" className="btn btn-primary">
              {t.cta.button}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
