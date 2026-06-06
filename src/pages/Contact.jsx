import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Contact() {
  const { language } = useLanguageStore()
  const t = useTranslation(language)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

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
            <h1 className="mb-6">{t.contact.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Email */}
              <div className="card border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{t.contact.info.email}</h3>
                <a href="mailto:peerfield@gmail.com" className="text-gray-400 hover:text-secondary transition-colors">
                  peerfield@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="card border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Phone size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{t.contact.info.phone}</h3>
                <p className="text-gray-400">Available for calls Mon-Fri, 9AM-6PM EST</p>
              </div>

              {/* Location */}
              <div className="card border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{t.contact.info.address}</h3>
                <p className="text-gray-400">Available worldwide • Remote-first team</p>
              </div>

              {/* Response Time */}
              <div className="card border border-secondary bg-secondary/5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <h3 className="font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  We typically respond to inquiries within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card border border-gray-700">
                {submitted ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle size={64} className="text-secondary mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{t.contact.form.success}</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out! We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {t.contact.form.subject}
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-field"
                        required
                      >
                        <option value="">Select a service...</option>
                        <option value="seo">SEO Copywriting</option>
                        <option value="ai">AI Images</option>
                        <option value="photo">Professional Photography</option>
                        <option value="copy">Copywriting</option>
                        <option value="package">Custom Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea-field h-32"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? t.contact.form.sending : t.contact.form.submit}
                      {!loading && <Send size={20} className="ml-2" />}
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-dark">
        <div className="container max-w-3xl">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I get started?',
                a: 'Fill out the contact form above or email us directly. We\'ll schedule a free consultation to discuss your needs.',
              },
              {
                q: 'What\'s your typical turnaround time?',
                a: 'Most projects take 2-4 weeks depending on scope. We offer rush options for urgent projects.',
              },
              {
                q: 'Do you work with international clients?',
                a: 'Yes! We work with clients worldwide. Our team is remote-first and available 24/7.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and PayPal. We can also discuss custom payment plans.',
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
