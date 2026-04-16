import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      "welcome": "Desenvolvedor de Software",
      "available": "Disponível para novos desafios",
      "projects": "Projetos Selecionados",
      // Adicione todas as suas frases aqui
    }
  },
  en: {
    translation: {
      "welcome": "Software Developer",
      "available": "Available for new challenges",
      "projects": "Selected Projects",
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador automaticamente
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão caso a detecção falhe
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;