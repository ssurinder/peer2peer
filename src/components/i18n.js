// i18n.js
const translations = {
  en: {
    home: "Home",
    contact: "Contact Us",
    welcome: "Welcome, {{name}}!",
    profile: "Profile",
    hello: "Hello",
  },
  hi: {
    home: "होम",
    welcome: "स्वागत है, {{name}}!",
    profile: "प्रोफ़ाइल",
    hello: "नमस्ते",
  },
  fr: {
    home: "Accueil",
    contact: "Contactez-nous",
    welcome: "Bienvenue, {{name}}!",
    profile: "Profil",
  }
};

let currentLang = localStorage.getItem("current_lang"); // default

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('current_lang', lang);
  location.reload()
}

export function t(key, vars = {}) {
  let text =
    translations[currentLang]?.[key] ||
    translations['en']?.[key] || 
    key;

  if (!translations[currentLang]?.[key]) {
    console.warn(`Missing translation for key: "${key}" in "${currentLang}"`);
  }

  // Interpolation
  Object.keys(vars).forEach(k => {
    text = text.replace(`{{${k}}}`, vars[k]);
  });

  return text;
}
