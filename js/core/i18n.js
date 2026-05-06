/**
 * i18n.js
 * Handles language switching and content translation
 */

export function switchLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;

    localStorage.setItem('portfolio_lang', lang);

    // Update UI elements
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
        // Check if button text matches or onclick contains the lang
        if (btn.textContent.trim().toLowerCase() === lang.toLowerCase()) {
            btn.classList.add('active');
        }
    });

    document.documentElement.setAttribute('lang', lang);

    // Translate marked elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = translation;
            } else if (['UL', 'P', 'SPAN', 'DIV'].includes(elem.tagName)) {
                elem.innerHTML = translation;
            } else {
                elem.textContent = translation;
            }
        }
    });

    // Update Resume links
    const resIframe = document.getElementById('resume-iframe');
    const resBtn = document.querySelector('.resume-download-btn');
    if (resIframe && translations[lang].resume_file) resIframe.src = translations[lang].resume_file;
    if (resBtn && translations[lang].resume_file) {
        resBtn.href = translations[lang].resume_file;
        resBtn.setAttribute('download', translations[lang].resume_name);
    }

    // Update Title
    document.title = lang === 'fr' 
        ? "Salma Barrak | Ingénieur Informatique" 
        : "Salma Barrak | Software Engineer";

    // Trigger other UI updates if necessary
    if (typeof window.playStatsTyper === 'function') window.playStatsTyper();
}

// Global exposure for legacy compatibility if needed
window.switchLanguage = switchLanguage;
