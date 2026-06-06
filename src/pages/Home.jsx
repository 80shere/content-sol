import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { translations } from '../i18n/translations'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const language = useLanguageStore((state) => state.language)
  const t = translations[language]
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-secondary font-semibold mb-4 text-lg">{t.hero.eyebrow}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => navigate('/contact')}
                className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                {t.hero.cta1} <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="btn btn-outline text-lg px-8 py-4"
              >
                {t.hero.cta2}
              </button>
            </div>

            {/* Trust Note */}
            <p className="text-text-muted text-sm">{t.hero.trust}</p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {[t.trust.item1, t.trust.item2, t.trust.item3, t.trust.item4, t.trust.item5].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
                <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                <p className="text-text-secondary font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.services.title}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { name: t.services.seo.name, desc: t.services.seo.desc, bullets: t.services.seo.bullets },
              { name: t.services.copy.name, desc: t.services.copy.desc, bullets: t.services.copy.bullets },
              { name: t.services.ai.name, desc: t.services.ai.desc, bullets: t.services.ai.bullets },
              { name: t.services.photo.name, desc: t.services.photo.desc, bullets: t.services.photo.bullets },
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="card card-hover">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
                <p className="text-text-secondary mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-center gap-2 text-text-secondary">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <button className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  {t.services.learnMore} <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.whoWeWorkWith.title}</h2>
            <p className="text-xl text-text-secondary">{t.whoWeWorkWith.desc}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.whoWeWorkWith.segments.map((segment, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-secondary transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-secondary" size={20} />
                  <p className="font-semibold text-primary">{segment}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.process.title}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { title: t.process.step1.title, desc: t.process.step1.desc },
              { title: t.process.step2.title, desc: t.process.step2.desc },
              { title: t.process.step3.title, desc: t.process.step3.desc },
              { title: t.process.step4.title, desc: t.process.step4.desc },
            ].map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-secondary to-blue-700 text-white p-8 rounded-2xl h-full">
                  <div className="text-4xl font-bold mb-4 opacity-20">{i + 1}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-blue-100">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-secondary">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.pricing.title}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {[
              { name: t.pricing.starter.name, price: t.pricing.starter.price, desc: t.pricing.starter.desc },
              { name: t.pricing.growth.name, price: t.pricing.growth.price, desc: t.pricing.growth.desc, featured: true },
              { name: t.pricing.premium.name, price: t.pricing.premium.price, desc: t.pricing.premium.desc },
            ].map((plan, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`card ${plan.featured ? 'border-2 border-secondary shadow-lg' : ''}`}
              >
                {plan.featured && <div className="text-secondary font-semibold text-sm mb-4">Most Popular</div>}
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-secondary mb-2">{plan.price}</p>
                <p className="text-text-secondary mb-6">{plan.desc}</p>
                <button className={`w-full btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-text-muted text-sm">{t.pricing.note}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.faq.title}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {t.faq.items.map((item, i) => (
              <motion.details key={i} variants={itemVariants} className="card cursor-pointer group">
                <summary className="font-semibold text-primary text-lg flex items-center justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-secondary mt-4 pt-4 border-t border-gray-100">{item.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="section bg-gradient-to-r from-secondary to-blue-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.leadMagnet.title}</h2>
            <p className="text-xl mb-8 text-blue-100">{t.leadMagnet.desc}</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              {t.leadMagnet.cta} <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
