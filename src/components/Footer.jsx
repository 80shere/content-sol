import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { translations } from '../i18n/translations'

export default function Footer() {
  const language = useLanguageStore((state) => state.language)
  const t = translations[language]
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ContentSol</h3>
            <p className="text-gray-300">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">{t.nav.blog}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:peerfield@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={18} />
                  peerfield@gmail.com
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">{t.footer.copyright}</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Premium content & visual solutions for ambitious brands</p>
        </div>
      </div>
    </footer>
  )
}
