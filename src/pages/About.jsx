import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Zap } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const language = useLanguageStore((state) => state.language)
  const navigate = useNavigate()

  const values = language === 'en' ? [
    { icon: Target, title: 'Strategy First', desc: 'We start with your goals, not templates' },
    { icon: Users, title: 'Collaborative', desc: 'Your input shapes every decision' },
    { icon: Zap, title: 'Results-Driven', desc: 'We measure success by your growth' },
  ] : [
    { icon: Target, title: 'Estrategia Primero', desc: 'Comenzamos con tus objetivos, no plantillas' },
    { icon: Users, title: 'Colaborativo', desc: 'Tu input define cada decisión' },
    { icon: Zap, title: 'Orientado a Resultados', desc: 'Medimos éxito por tu crecimiento' },
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
            {language === 'en' ? 'About ContentSol' : 'Sobre ContentSol'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            {language === 'en'
              ? 'We help ambitious brands grow through strategic content, visuals and positioning'
              : 'Ayudamos a marcas ambiciosas a crecer a través de contenido estratégico, visuales y posicionamiento'}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              {language === 'en' ? 'Our Mission' : 'Nuestra Misión'}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {language === 'en'
                ? 'ContentSol exists to help service-based brands, experts, and founders build premium positioning through strategic content, conversion-focused copy, professional visuals and expert photography. We believe that great brands deserve great content systems.'
                : 'ContentSol existe para ayudar a marcas de servicios, expertos y fundadores a construir posicionamiento premium a través de contenido estratégico, copy orientado a conversión, visuales profesionales y fotografía de experto. Creemos que las grandes marcas merecen grandes sistemas de contenido.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {language === 'en' ? 'Our Values' : 'Nuestros Valores'}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card card-hover text-center"
                >
                  <Icon className="text-secondary mx-auto mb-6" size={40} />
                  <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {language === 'en' ? 'Why Choose ContentSol' : 'Por qué elegir ContentSol'}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {(language === 'en' ? [
              'We combine SEO expertise, copywriting skills, and visual production in one team',
              'We understand premium positioning and how to attract better clients',
              'We work with brands globally, with special expertise in the Spanish market',
              'We deliver results: measurable growth in traffic, leads, and conversions',
              'We\'re transparent about process, timelines, and investment',
            ] : [
              'Combinamos expertise en SEO, copywriting y producción visual en un solo equipo',
              'Entendemos posicionamiento premium y cómo atraer mejores clientes',
              'Trabajamos con marcas globales, con expertise especial en el mercado español',
              'Entregamos resultados: crecimiento medible en tráfico, leads y conversión',
              'Somos transparentes sobre proceso, tiempos e inversión',
            ]).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg"
              >
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1" />
                <p className="text-text-secondary text-lg">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-secondary to-blue-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' ? 'Ready to grow your brand?' : '¿Listo para crecer tu marca?'}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {language === 'en'
                ? 'Let\'s talk about your goals and how we can help'
                : 'Hablemos sobre tus objetivos y cómo podemos ayudarte'}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              {language === 'en' ? 'Start Your Project' : 'Inicia tu proyecto'} <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
