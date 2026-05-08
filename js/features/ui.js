/**
 * ui.js
 * Handles UI-specific logic: Theme toggling, Custom Cursor, Mobile Menu, and Localization helpers
 */

export function initThemeToggle(scene) {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    const applyTheme = (isLight) => {
        if (isLight) {
            document.body.classList.add('light-mode');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            if (scene) scene.scene.background = new THREE.Color(0xF8FAFC);
        } else {
            document.body.classList.remove('light-mode');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            if (scene) scene.scene.background = new THREE.Color(0x050510);
        }
    };

    // Load preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') applyTheme(true);

    themeBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-mode');
        const newMode = !isLight;
        applyTheme(newMode);
        localStorage.setItem('portfolio-theme', newMode ? 'light' : 'dark');
    });
}

export function initMobileMenu() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
}

export function initLanguageSwitcher() {
    window.switchLanguage = (lang) => {
        if (!translations[lang]) return;

        localStorage.setItem('portfolio_lang', lang);

        document.querySelectorAll('.lang-switcher button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('onclick').includes(`'${lang}'`)) btn.classList.add('active');
        });

        document.documentElement.setAttribute('lang', lang);

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

        // Update PDF references
        const resIframe = document.getElementById('resume-iframe');
        const resBtn = document.querySelector('.resume-download-btn');
        if (resIframe && translations[lang].resume_file) resIframe.src = translations[lang].resume_file;
        if (resBtn && translations[lang].resume_file) {
            resBtn.href = translations[lang].resume_file;
            resBtn.setAttribute('download', translations[lang].resume_name);
        }

        document.title = lang === 'fr' ? "Salma Barrak | Étudiante en génie Informatique" : "Salma Barrak | Software Engineering Student";

        // Trigger Stats Carousel update
        if (typeof window.playStatsTyper === 'function') window.playStatsTyper();
        if (typeof window.playStatsCarousel === 'function') window.playStatsCarousel();
    };

    // Load initial language
    const savedLang = localStorage.getItem('portfolio_lang') || 'en';
    window.switchLanguage(savedLang);
}

export function initSmoothScroll() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('href');
            if (target && target.startsWith('#')) {
                const section = document.querySelector(target);
                const title = section ? section.querySelector('.section-title') : null;
                const scrollTarget = title ? title : target;

                gsap.to(window, { duration: 1.5, scrollTo: { y: scrollTarget, offsetY: 100 }, ease: "power4.inOut" });
            }
        });
    });
}

export function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = Array.from(navLinks)
        .map(link => {
            const href = link.getAttribute('href');
            return href.startsWith('#') ? document.querySelector(href) : null;
        })
        .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0,
        rootMargin: '-40% 0px -40% 0px' // Triggers when section is roughly in the middle
    });

    sections.forEach(section => observer.observe(section));
}

export function initTechTabs() {
    const radios = document.querySelectorAll('.ide-radio');
    const editorContent = document.querySelector('.editor-content');

    if (radios.length > 0 && editorContent) {
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                editorContent.scrollTop = 0;
            });
        });
    }
}
