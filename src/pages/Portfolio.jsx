import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { translations } from '../i18n/translations'
import { useNavigate } from 'react-router-dom'

export default function Portfolio() {
  const language = useLanguageStore((state) => state.language)
  const t = translations[language]
  const navigate = useNavigate()

  const caseStudies = [
    {
      id: 1,
      title: language === 'en' ? 'Expert Personal Brand Positioning' : 'Posicionamiento de marca personal de experto',
      category: language === 'en' ? 'Personal Brand' : 'Marca Personal',
      challenge: language === 'en' 
        ? 'Coach with strong expertise but weak online presence'
        : 'Coach con expertise fuerte pero presencia online débil',
      solution: language === 'en'
        ? 'Strategic positioning, SEO content, brand photography'
        : 'Posicionamiento estratégico, contenido SEO, fotografía de marca',
      results: language === 'en'
        ? '+150% website traffic, 40+ qualified leads'
        : '+150% tráfico web, 40+ leads cualificados',
      services: ['SEO Copywriting', 'Photography', 'Brand Strategy'],
      image: '👤',
    },
    {
      id: 2,
      title: language === 'en' ? 'Service Business Website Redesign' : 'Rediseño de web de negocio de servicios',
      category: language === 'en' ? 'Service Business' : 'Negocio de Servicios',
      challenge: language === 'en'
        ? 'Generic messaging, poor conversion, no clear positioning'
        : 'Mensajes genéricos, mala conversión, sin posicionamiento claro',
      solution: language === 'en'
        ? 'Premium positioning, conversion-focused copy, AI visuals'
        : 'Posicionamiento premium, copy orientado a conversión, visuales IA',
      results: language === 'en'
        ? '3x conversion rate, 60% more qualified inquiries'
        : '3x tasa de conversión, 60% más consultas cualificadas',
      services: ['Persuasive Copywriting', 'AI Visuals', 'Web Strategy'],
      image: '🎯',
    },
    {
      id: 3,
      title: language === 'en' ? 'Product Launch Visual Campaign' : 'Campaña visual de lanzamiento de producto',
      category: language === 'en' ? 'Campaign' : 'Campaña',
      challenge: language === 'en'
        ? 'Need premium visuals for product launch across channels'
        : 'Necesidad de visuales premium para lanzamiento de producto',
      solution: language === 'en'
        ? 'AI-generated product visuals, social media graphics, campaign creatives'
        : 'Visuales de producto con IA, gráficos redes sociales, creatividades',
      results: language === 'en'
        ? '25% engagement increase, 200+ qualified leads'
        : '+25% engagement, 200+ leads cualificados',
      services: ['AI Visuals', 'Campaign Design', 'Social Media'],
      image: '🚀',
    },
    {
      id: 4,
      title: language === 'en' ? 'Real Estate Professional Branding' : 'Branding de profesional inmobiliario',
      category: language === 'en' ? 'Real Estate' : 'Inmobiliario',
      challenge: language === 'en'
        ? 'Need premium brand identity and marketing content'
        : 'Necesidad de identidad de marca premium y contenido marketing',
      solution: language === 'en'
        ? 'Brand photography, SEO content, LinkedIn strategy'
        : 'Fotografía de marca, contenido SEO, estrategia LinkedIn',
      results: language === 'en'
        ? '2x client inquiries, premium positioning established'
        : '2x consultas de clientes, posicionamiento premium establecido',
      services: ['Photography', 'SEO Copywriting', 'Brand Strategy'],
      image: '🏠',
    },
    {
      id: 5,
      title: language === 'en' ? 'Wellness Clinic Online Authority' : 'Autoridad online de clínica de bienestar',
      category: language === 'en' ? 'Wellness' : 'Bienestar',
      challenge: language === 'en'
        ? 'Establish trust and attract premium clients'
        : 'Establecer confianza y atraer clientes premium',
      solution: language === 'en'
        ? 'Educational content, testimonials, brand photography'
        : 'Contenido educativo, testimonios, fotografía de marca',
      results: language === 'en'
        ? '+200% organic traffic, premium client base'
        : '+200% tráfico orgánico, base de clientes premium',
      services: ['SEO Copywriting', 'Photography', 'Content Strategy'],
      image: '💚',
    },
    {
      id: 6,
      title: language === 'en' ? 'Boutique Agency Positioning' : 'Posicionamiento de agencia boutique',
      category: language === 'en' ? 'Agency' : 'Agencia',
      challenge: language === 'en'
        ? 'Stand out in competitive market, attract premium clients'
        : 'Destacar en mercado competitivo, atraer clientes premium',
      solution: language === 'en'
        ? 'Strategic positioning, case studies, thought leadership content'
        : 'Posicionamiento estratégico, casos de éxito, contenido liderazgo',
      results: language === 'en'
        ? '5x inbound leads, premium positioning secured'
        : '5x leads inbound, posicionamiento premium asegurado',
      services: ['Copywriting', 'Strategy', 'Content Marketing'],
      image: '⭐',
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
            {language === 'en' ? 'Our Work' : 'Nuestro Trabajo'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            {language === 'en'
              ? 'Real results from brands we\'ve worked with'
              : 'Resultados reales de marcas con las que hemos trabajado'}
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover flex flex-col"
              >
                <div className="text-6xl mb-4">{study.image}</div>
                <span className="inline-block bg-blue-100 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3">{study.title}</h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <p className="text-sm font-semibold text-text-muted mb-1">
                      {language === 'en' ? 'Challenge' : 'Desafío'}
                    </p>
                    <p className="text-text-secondary text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted mb-1">
                      {language === 'en' ? 'Solution' : 'Solución'}
                    </p>
                    <p className="text-text-secondary text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-1">
                      {language === 'en' ? 'Results' : 'Resultados'}
                    </p>
                    <p className="text-text-secondary text-sm font-semibold">{study.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-text-secondary px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>

                <button className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  {language === 'en' ? 'View Case Study' : 'Ver caso'} <ArrowRight size={18} />
                </button>
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
              {language === 'en' ? 'Ready for your success story?' : '¿Listo para tu historia de éxito?'}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {language === 'en'
                ? 'Let\'s discuss how we can help your brand grow'
                : 'Hablemos sobre cómo podemos ayudar a tu marca a crecer'}
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
