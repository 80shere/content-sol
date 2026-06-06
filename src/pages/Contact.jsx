import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { translations } from '../i18n/translations'

export default function Contact() {
  const language = useLanguageStore((state) => state.language)
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    need: '',
    language: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', website: '', need: '', language: '', budget: '', message: '' })
    }, 3000)
  }

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
            {t.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            {t.contact.desc}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">Email</p>
                      <a href="mailto:peerfield@gmail.com" className="text-text-secondary hover:text-secondary transition-colors">
                        peerfield@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MessageCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">WhatsApp</p>
                      <a href="https://wa.me/34" className="text-text-secondary hover:text-secondary transition-colors">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">Location</p>
                      <p className="text-text-secondary">
                        {language === 'en' ? 'Available worldwide' : 'Disponible en todo el mundo'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-primary">{language === 'en' ? 'Response Time:' : 'Tiempo de respuesta:'}</span> {t.contact.form.response}
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <input
                type="text"
                name="website"
                placeholder={t.contact.form.website}
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary transition-colors"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">{t.contact.form.need}</option>
                  <option value="seo">SEO Copywriting</option>
                  <option value="copy">Persuasive Copywriting</option>
                  <option value="ai">AI Visuals</option>
                  <option value="photo">Photography</option>
                  <option value="multiple">Multiple Services</option>
                </select>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">{t.contact.form.budget}</option>
                  <option value="under500">Under €500</option>
                  <option value="500-1000">€500 - €1,000</option>
                  <option value="1000-2500">€1,000 - €2,500</option>
                  <option value="2500plus">€2,500+</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary transition-colors resize-none"
              />

              <button
                type="submit"
                className="btn btn-primary w-full text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t.contact.form.submit}
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  {language === 'en' ? 'Message sent successfully! We\'ll be in touch soon.' : '¡Mensaje enviado! Nos pondremos en contacto pronto.'}
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section bg-gradient-to-r from-secondary to-blue-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' ? 'Prefer to chat?' : '¿Prefieres chatear?'}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {language === 'en'
                ? 'Get a quick response on WhatsApp'
                : 'Obtén una respuesta rápida en WhatsApp'}
            </p>
            <a
              href="https://wa.me/34"
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              {t.contact.whatsapp}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
