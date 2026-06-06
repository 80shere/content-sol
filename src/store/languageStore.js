import { create } from 'zustand'

const getInitialLanguage = () => {
  // Check localStorage first
  const stored = localStorage.getItem('language')
  if (stored) return stored
  
  // Check browser language
  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'es') return 'es'
  
  return 'en'
}

export const useLanguageStore = create((set) => ({
  language: getInitialLanguage(),
  setLanguage: (lang) => {
    localStorage.setItem('language', lang)
    set({ language: lang })
  },
}))
