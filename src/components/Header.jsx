import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { translations } from '../i18n/translations'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const language = useLanguageStore((state) => state.language)
  const setLanguage = useLanguageStore((state) => state.setLanguage)
  const navigate = useNavigate()
  const location = useLocation()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en'
    setLanguage(newLang)
  }

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/blog', label: t.nav.blog },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header className={`${isSticky ? 'sticky-header shadow-md' : 'bg-white border-b border-gray-100'} top-0 z-50`}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
          ContentSol
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-secondary hover:text-secondary transition-all"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="font-semibold">{language.toUpperCase()}</span>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/contact')}
            className="btn btn-primary"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-text-secondary hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate('/contact')
                setIsOpen(false)
              }}
              className="btn btn-primary w-full mt-4"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
