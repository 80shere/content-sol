import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Services() {
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  const services = [
    {
      id: 'seo',
      title: t.services.seoWriting.title,
      description: t.services.seoWriting.description,
      features: t.services.seoWriting.features,
      price: 'Starting at $499',
      icon: '📝',
    },
    {
      id: 'ai',
      title: t.services.aiImages.title,
      description: t.services.aiImages.description,
      features: t.services.aiImages.features,
      price: 'Starting at $299',
      icon: '🎨',
    },
    {
      id: 'photo',
      title: t.services.photography.title,
      description: t.services.photography.description,
      features: t.services.photography.features,
      price: 'Starting at $799',
      icon: '📸',
    },
    {
      id: 'copy',
      title: t.services.copywriting.title,
      description: t.services.copywriting.description,
      features: t.services.copywriting.features,
      price: 'Starting at $399',
      icon: '✍️',
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
            <h1 className="mb-6">{t.services.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="card border border-gray-700 hover:border-secondary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-secondary font-semibold mb-4">{service.price}</p>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4 text-white">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-primary w-full justify-center">
                  {t.services.learnMore}
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section bg-neutral-dark">
        <div className="container">
          <div className="section-header">
            <h2>Custom Packages</h2>
            <p>Combine services for maximum impact and better pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '$1,299',
                description: 'Perfect for new experts',
                includes: ['SEO copywriting', 'AI images', 'Email templates'],
              },
              {
                name: 'Professional',
                price: '$2,499',
                description: 'For growing businesses',
                includes: ['SEO copywriting', 'AI images', 'Professional photography', 'Copywriting'],
                featured: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'Full content ecosystem',
                includes: ['Everything included', 'Dedicated account manager', 'Monthly strategy calls', 'Unlimited revisions'],
              },
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                className={`card border ${pkg.featured ? 'border-secondary bg-secondary/5' : 'border-gray-700'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {pkg.featured && <div className="badge mb-4">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold gradient-text mb-2">{pkg.price}</p>
                <p className="text-gray-400 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={`btn w-full justify-center ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Most projects take 2-4 weeks depending on scope. Rush options available.',
              },
              {
                q: 'Do you offer revisions?',
                a: 'Yes! All packages include 2 rounds of revisions. Additional revisions available.',
              },
              {
                q: 'Can I mix services?',
                a: 'Absolutely! We can create custom packages tailored to your specific needs.',
              },
              {
                q: 'What if I\'m not satisfied?',
                a: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll work until you are.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="card border border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
