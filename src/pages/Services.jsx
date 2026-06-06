import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { translations } from '../i18n/translations'
import { useNavigate } from 'react-router-dom'

export default function Services() {
  const language = useLanguageStore((state) => state.language)
  const t = translations[language]
  const navigate = useNavigate()

  const services = [
    {
      name: t.services.seo.name,
      desc: t.services.seo.desc,
      bullets: t.services.seo.bullets,
      icon: '📝',
    },
    {
      name: t.services.copy.name,
      desc: t.services.copy.desc,
      bullets: t.services.copy.bullets,
      icon: '✍️',
    },
    {
      name: t.services.ai.name,
      desc: t.services.ai.desc,
      bullets: t.services.ai.bullets,
      icon: '🎨',
    },
    {
      name: t.services.photo.name,
      desc: t.services.photo.desc,
      bullets: t.services.photo.bullets,
      icon: '📸',
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
            {t.services.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            Strategic content and visual solutions tailored to your brand's unique needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-primary mb-4">{service.name}</h2>
                <p className="text-text-secondary mb-8 text-lg">{service.desc}</p>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-primary mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-3 text-text-secondary">
                        <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2"
                >
                  Learn More <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-secondary to-blue-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 text-blue-100">Let's discuss which services are right for your brand</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book a Strategy Call <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
