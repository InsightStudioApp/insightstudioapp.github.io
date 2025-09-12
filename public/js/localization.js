// Future localization functionality
// This script will be used when adding multi-language support

function setLanguage(lang) {
  document.documentElement.lang = lang
  document.documentElement.setAttribute("data-lang", lang)

  // Store language preference
  localStorage.setItem("preferred-language", lang)

  // Future: Load language-specific content
  // loadLanguageContent(lang);
}

function getPreferredLanguage() {
  return localStorage.getItem("preferred-language") || "en"
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  const preferredLang = getPreferredLanguage()
  if (preferredLang !== "en") {
    setLanguage(preferredLang)
  }
})

// Export for future use
if (typeof module !== "undefined" && module.exports) {
  module.exports = { setLanguage, getPreferredLanguage }
}
