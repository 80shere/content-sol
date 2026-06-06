import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useTranslation } from '../i18n/translations'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguageStore()
  const t = useTranslation(language)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.portfolio, href: '/portfolio' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gray-800">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold gradient-text">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg" />
          ContentSol
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-dark">
            <Globe size={18} className="text-secondary" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white text-sm font-medium cursor-pointer focus:outline-none"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="btn btn-primary">
            {t.nav.contact}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-neutral-dark rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-neutral-dark border-t border-gray-800">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700 flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  language === 'en' ? 'bg-secondary text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  language === 'es' ? 'bg-secondary text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                ES
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
