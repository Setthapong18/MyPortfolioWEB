import { useState, useCallback } from 'react'
import { LanguageContext } from './languageContextDef'
import en from '../locales/en.json'
import th from '../locales/th.json'

const translations = { en, th }

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === 'en' ? 'th' : 'en'))
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    return value ?? key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
