import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Footer() {
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-dark border-t border-gray-800">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg" />
              <h3 className="text-xl font-bold gradient-text">ContentSol</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.about}
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.services}</h4>
            <ul className="space-y-2">
              <li><Link to="/services#seo" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.seoWriting}</Link></li>
              <li><Link to="/services#ai" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.aiImages}</Link></li>
              <li><Link to="/services#photo" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.photography}</Link></li>
              <li><Link to="/services#copy" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.copywriting}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.blog}</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.contact}</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:peerfield@gmail.com" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  peerfield@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Available worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>{t.footer.copyright.replace('2025', currentYear)}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-secondary transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-secondary transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
