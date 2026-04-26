
// ── EmailJS Init ────────────────────────────────────────
(function () {
    emailjs.init('e5T8GntvgC38wx6su');
})();

const CONFIG = {
    colors: {
        primary: 0x8B5CF6,
        secondary: 0x10B981,
        bg: 0x050510
    },
    particles: 1500,
    cameraOffset: { x: 0, y: 0, z: 5 }
};

class PortfolioScene {
    constructor() {
        this.container = document.getElementById('canvas3d');
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(CONFIG.colors.bg);

        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.addParticles();
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.onWindowResize();
        this.startLoader();
        this.animate();
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(CONFIG.cameraOffset.x, CONFIG.cameraOffset.y, CONFIG.cameraOffset.z);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.container,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    setupLights() {
        this.pointLight = new THREE.PointLight(CONFIG.colors.primary, 2);
        this.pointLight.position.set(5, 5, 2);
        this.scene.add(this.pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);
    }

    addParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(CONFIG.particles * 4 * 3);
        const colors = new Float32Array(CONFIG.particles * 4 * 3);

        for (let i = 0; i < (CONFIG.particles * 4) * 3; i += 3) {
            const r = 12 * Math.pow(Math.random(), 0.5);
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i] = r * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = r * Math.cos(phi);

            const color = new THREE.Color();
            color.lerpColors(
                new THREE.Color(CONFIG.colors.primary),
                new THREE.Color(CONFIG.colors.secondary),
                Math.random()
            );

            colors[i] = color.r; colors[i + 1] = color.g; colors[i + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        this.particleSystem = new THREE.Points(geometry, new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        }));
        this.scene.add(this.particleSystem);
    }

    setupScrollAnimations() {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        // Individual Element Reveals
        gsap.utils.toArray('.reveal').forEach(elem => {
            ScrollTrigger.create({
                trigger: elem,
                start: "top 85%",
                onEnter: () => gsap.to(elem, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" })
            });
        });

        // Setup Slide Carousel Stats Effect
        let currentStatIdx = 0;
        window.carouselTimeline = null;
        const statKeys = ['stat_projects', 'stat_techs', 'stat_certs', 'stat_intern'];

        window.playStatsCarousel = function () {
            const textElement = document.getElementById('stat-text-carousel');
            if (!textElement) return;

            const lang = document.documentElement.getAttribute('lang') || 'en';
            const t = typeof translations !== 'undefined' && translations[lang] ? translations[lang] : null;
            if (!t) return;

            const sentence = t[statKeys[currentStatIdx]];
            if (window.carouselTimeline) window.carouselTimeline.kill();

            window.carouselTimeline = gsap.timeline();

            // Slide current text out (if there is text)
            if (textElement.innerHTML !== '') {
                window.carouselTimeline.to(textElement, {
                    y: -20,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in"
                });
            }

            // Swap text and Slide new text in
            window.carouselTimeline.call(() => {
                textElement.innerHTML = sentence;
            })
                .fromTo(textElement,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
                )
                // Wait, then loop
                .to(textElement, {
                    y: 0, // dummy tween just for the delay
                    duration: 2.5,
                    onComplete: () => {
                        currentStatIdx = (currentStatIdx + 1) % statKeys.length;
                        window.playStatsCarousel();
                    }
                });
        };

        // Boot Carousel after initial load
        setTimeout(window.playStatsCarousel, 1500);

        // Background Particle System Transitions
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            }
        });

        tl.to(this.camera.position, { z: 4, x: 2, y: 1 }, "step1")
            .to(this.particleSystem.rotation, { y: 1.5, x: 0.5 }, "step1")
            .to(this.camera.position, { x: -3, y: -2, z: 8 }, "step2")
            .to(this.particleSystem.scale, { x: 1.5, y: 1.5, z: 1.5 }, "step2")
            .to(this.camera.position, { x: 0, y: 0, z: 3 }, "step3")
            .to(this.particleSystem.rotation, { y: Math.PI * 2 }, "step3");

        // Smooth Nav Links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget.getAttribute('href');
                gsap.to(window, { duration: 1.5, scrollTo: target, ease: "power4.inOut" });
            });
        });

        // Dynamic Scroll Intersection Observer (Table of Contents / Progress)
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px', // Trigger when section is cleanly in upper view
            threshold: 0
        };

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    // Update Top Navbar
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            navObserver.observe(section);
        });
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());

        // Theme Switcher Logic
        const themeBtn = document.getElementById('theme-toggle');

        const applyTheme = (isLight) => {
            if (isLight) {
                document.body.classList.add('light-mode');
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
                this.scene.background = new THREE.Color(0xF8FAFC);
            } else {
                document.body.classList.remove('light-mode');
                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
                this.scene.background = new THREE.Color(CONFIG.colors.bg);
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

        // Custom Cursor Logic
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Move Dot instantly
            gsap.to(dot, { x, y, duration: 0, delay: 0 });
            // Move Outline with lag
            gsap.to(outline, { x, y, duration: 0.2 });

            // 3D Interaction
            const threeX = (x / window.innerWidth) * 2 - 1;
            const threeY = -(y / window.innerHeight) * 2 + 1;

            gsap.to(this.particleSystem.rotation, {
                y: threeX * 0.15,
                x: -threeY * 0.15,
                duration: 2
            });

            // Point light follows mouse
            gsap.to(this.pointLight.position, {
                x: threeX * 8,
                y: threeY * 8,
                duration: 1
            });
        });

        // Mobile Menu Logic
        const burger = document.querySelector('.burger-menu');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links a');

        if (burger && nav) {
            console.log("Mobile menu initialized.");
            burger.addEventListener('click', () => {
                burger.classList.toggle('active');
                nav.classList.toggle('active');
            });

            // Close menu when clicking a link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    burger.classList.remove('active');
                    nav.classList.remove('active');
                });
            });
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    startLoader() {
        const progress = document.querySelector('.progress');
        let width = 0;
        const interval = setInterval(() => {
            width += Math.random() * 20;
            if (width >= 100) {
                width = 100;
                clearInterval(interval);
                gsap.to('#loader', { y: "-100%", duration: 1.2, ease: "power4.inOut", delay: 0.5 });
            }
            progress.style.width = width + '%';
        }, 100);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const time = performance.now() * 0.0005;
        this.particleSystem.rotation.y += 0.0005;
        this.pointLight.position.x = Math.sin(time) * 5;
        this.pointLight.position.z = Math.cos(time) * 5;
        this.renderer.render(this.scene, this.camera);
    }
}

// Global Orchestration
window.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Core Engines
    const scene = new PortfolioScene();
    const gallery = new ProjectGallery();
    const certsGallery = new CertGallery();

    // 2. Localization & Language
    const savedLang = localStorage.getItem('portfolio_lang') || 'en';
    window.switchLanguage(savedLang);



    // 4. Modal Backdrop Behaviors
    const resumeModal = document.getElementById('resume-modal');
    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) window.closeResumeModal();
        });
    }

    const galleryModal = document.getElementById('gallery-modal');
    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) window.closeGalleryModal();
        });
    }

    // 5. Contact Form Validation & Logic
    const form = document.getElementById('contact-form');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmSendBtn = document.getElementById('confirm-send-btn');

    if (form && confirmModal && confirmSendBtn) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('from_email');
            const nameInput = document.getElementById('from_name');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email || !emailRegex.test(email)) {
                const errorMsg = document.documentElement.lang === 'fr'
                    ? 'Veuillez entrer une adresse email valide.'
                    : 'Please enter a valid email address.';
                alert(errorMsg);
                emailInput.focus();
                return;
            }

            document.getElementById('confirm-name').textContent = name || '—';
            document.getElementById('confirm-email').textContent = email || '—';
            document.getElementById('confirm-message').textContent = message.slice(0, 200) + (message.length > 200 ? '…' : '');

            confirmModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        confirmSendBtn.addEventListener('click', function () {
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            window.closeConfirmModal();

            const currentLang = document.documentElement.lang || 'en';
            const sendingText = (translations[currentLang] && translations[currentLang].form_sending) ? translations[currentLang].form_sending : 'Sending...';

            btn.disabled = true;
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText}`;

            const templateParams = {
                name: document.getElementById('from_name').value,
                email: document.getElementById('from_email').value,
                message: document.getElementById('message').value,
                title: document.getElementById('from_name').value,
            };

            emailjs.send('service_6g691o8', 'template_d1yl0jh', templateParams)
                .then(() => {
                    const currentLang = document.documentElement.lang || 'en';
                    const successText = translations[currentLang].form_success || 'Mission Accomplished!';
                    btn.innerHTML = `<i class="fas fa-check-circle"></i> ${successText}`;
                    btn.style.background = '#27c93f';
                    btn.style.boxShadow = '0 0 20px rgba(39, 201, 63, 0.4)';

                    // Trigger Celebration!
                    const duration = 3 * 1000;
                    const end = Date.now() + duration;

                    (function frame() {
                        confetti({
                            particleCount: 3,
                            angle: 60,
                            spread: 55,
                            origin: { x: 0 },
                            colors: ['#8b5cf6', '#00ffca']
                        });
                        confetti({
                            particleCount: 3,
                            angle: 120,
                            spread: 55,
                            origin: { x: 1 },
                            colors: ['#8b5cf6', '#00ffca']
                        });

                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    }());

                    form.reset();
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.textContent = originalText;
                        btn.style.background = '';
                        btn.style.boxShadow = '';
                    }, 4000);
                })
                .catch((err) => {
                    btn.innerHTML = '<i class="fas fa-times"></i> Failed';
                    btn.style.background = '#ef4444';
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.textContent = originalText;
                        btn.style.background = '';
                    }, 3500);
                });
        });

        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) window.closeConfirmModal();
        });
    }

    // Escape listener for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (window.closeResumeModal) window.closeResumeModal();
            if (window.closeConfirmModal) window.closeConfirmModal();
            if (window.closeGalleryModal) window.closeGalleryModal();
        }
    });
});



function switchLanguage(lang) {
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
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') elem.placeholder = translation;
            else if (['UL', 'P', 'SPAN'].includes(elem.tagName)) elem.innerHTML = translation;
            else elem.textContent = translation;
        }
    });
    const resIframe = document.getElementById('resume-iframe');
    const resBtn = document.querySelector('.resume-download-btn');
    if (resIframe && translations[lang].resume_file) resIframe.src = translations[lang].resume_file;
    if (resBtn && translations[lang].resume_file) {
        resBtn.href = translations[lang].resume_file;
        resBtn.setAttribute('download', translations[lang].resume_name);
    }
    document.title = lang === 'fr' ? "Salma Barrak | Ingénieur Informatique" : "Salma Barrak | Software Engineer";
    if (typeof window.playStatsTyper === 'function') window.playStatsTyper();
}

// Check if openGallery is somehow colliding
window.switchLanguage = switchLanguage;

function openResumeModal() {
    const m = document.getElementById('resume-modal');
    m.classList.add('active');
    document.body.style.overflow = 'hidden';
}
window.openResumeModal = openResumeModal;

function closeResumeModal() {
    const m = document.getElementById('resume-modal');
    if (m) {
        m.classList.remove('active');
        document.body.style.overflow = '';
    }
}
window.closeResumeModal = closeResumeModal;

function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openGallery(type) {
    const modal = document.getElementById('gallery-modal');
    const title = document.getElementById('gallery-title');
    const content = document.getElementById('gallery-content');

    if (!modal || !content) return;

    content.innerHTML = '';
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const t = typeof translations !== 'undefined' && translations[lang] ? translations[lang] : {
        gallery_n8n_title: "n8n Workflows",
        gallery_n8n_desc: "Here are some of the automated data pipelines and logic flows I engineered using n8n for our workshops:",
        gallery_cert_title: "Volunteer Certificates",
        gallery_cert_desc: "Certifications of appreciation and achievement from the Oriental Science House.",
        gallery_events_title: "Events Gallery",
        gallery_events_desc: "A showcase of large-scale club events and high-stakes technical competitions I attended or orchestrated."
    };

    if (type === 'n8n') {
        title.innerHTML = `<i class="fas fa-project-diagram"></i> <span data-i18n="gallery_n8n_title">${t.gallery_n8n_title}</span>`;
        content.innerHTML = `
            <p style="color: var(--text-secondary); margin-bottom: 1rem;" data-i18n="gallery_n8n_desc">${t.gallery_n8n_desc}</p>
            <img src="assets/images/workflows/Workflow1.png" alt="n8n Workflow 1" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            <img src="assets/images/workflows/workflow2.png" alt="n8n Workflow 2" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-top: 1.5rem;">
        `;
    } else if (type === 'events') {
        title.innerHTML = `<i class="fas fa-images"></i> <span data-i18n="gallery_events_title">${t.gallery_events_title || 'Events Gallery'}</span>`;
        content.innerHTML = `
            <p style="color: var(--text-secondary); margin-bottom: 1rem;" data-i18n="gallery_events_desc">${t.gallery_events_desc || 'A showcase of large-scale club events and high-stakes technical competitions.'}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: center;">
                <img src="assets/images/Events/SEMIA'03.jpg" alt="SEMIA'03" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/TechConnect2.png" alt="Tech Connect 2" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/TechConnect.png" alt="Tech Connect" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/AtelierIdeation.jpg" alt="Atelier Ideation" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/JourneeInformatique(e4).png" alt="Journée Informatique" style="width: 100%; max-height: 400px; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5); grid-column: 1 / -1;">
            </div>
        `;
    } else if (type === 'cert') {
        title.innerHTML = `<i class="fas fa-award"></i> <span data-i18n="gallery_cert_title">${t.gallery_cert_title}</span>`;
        content.innerHTML = `
            <p style="color: var(--text-secondary); margin-bottom: 1rem;" data-i18n="gallery_cert_desc">${t.gallery_cert_desc}</p>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <iframe src="assets/docs/Certifs/mdso.pdf" style="width: 100%; height: 60vh; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);"></iframe>
                <iframe src="assets/docs/Certifs/mdso2.pdf" style="width: 100%; height: 60vh; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);"></iframe>
            </div>
        `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

window.openGallery = openGallery;
window.closeGalleryModal = closeGalleryModal;

function openPdfViewer(titleKey, pdfUrl, iconClass = 'fa-file-pdf') {
    const modal = document.getElementById('gallery-modal');
    const title = document.getElementById('gallery-title');
    const content = document.getElementById('gallery-content');

    if (!modal || !content) return;

    const lang = document.documentElement.getAttribute('lang') || 'en';
    const t = typeof translations !== 'undefined' && translations[lang] ? translations[lang] : {};

    let displayTitle = t[titleKey] || titleKey;
    title.innerHTML = `<i class="fas ${iconClass}"></i> <span data-i18n="${titleKey}">${displayTitle}</span>`;

    let downloadText = t['resume_download'] || 'Download';
    content.innerHTML = `
        <iframe src="${pdfUrl}" style="width: 100%; height: 70vh; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);"></iframe>
        <div style="margin-top: 1rem;">
            <a href="${pdfUrl}" download class="btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
                <i class="fas fa-download"></i> <span data-i18n="resume_download">${downloadText}</span>
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.openGallery = openGallery;
window.closeGalleryModal = closeGalleryModal;
window.openPdfViewer = openPdfViewer;

class ProjectGallery {
    constructor() {
        this.projectsPerPage = 2;
        this.currentPage = 1;
        this.currentFilter = 'all';
        this.projects = Array.from(document.querySelectorAll('.project-card'));
        this.filterBtns = document.querySelectorAll('#projects .filter-btn');
        this.currentPageSpan = document.getElementById('current-page');
        this.totalPagesSpan = document.getElementById('total-pages');
        this.prevBtn = document.getElementById('proj-prev');
        this.nextBtn = document.getElementById('proj-next');

        if (this.projects.length > 0) this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.currentPage = 1;
                this.render();
            });
        });

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.render();
                }
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                const filtered = this.getFilteredProjects();
                if (this.currentPage < Math.ceil(filtered.length / this.projectsPerPage)) {
                    this.currentPage++;
                    this.render();
                }
            });
        }

        this.render();
    }

    getFilteredProjects() {
        if (this.currentFilter === 'all') return this.projects;
        return this.projects.filter(p => p.dataset.category === this.currentFilter);
    }

    scrollToProjects() {
        gsap.to(window, { duration: 0.8, scrollTo: { y: "#projects", offsetY: 80 }, ease: "power2.inOut" });
    }

    render() {
        const filtered = this.getFilteredProjects();
        const totalPages = Math.ceil(filtered.length / this.projectsPerPage);
        const start = (this.currentPage - 1) * this.projectsPerPage;
        const end = start + this.projectsPerPage;

        this.projects.forEach(p => { p.style.display = 'none'; });

        const toShow = filtered.slice(start, end);
        toShow.forEach((p, idx) => {
            p.style.display = 'flex';
            gsap.killTweensOf(p);
            gsap.fromTo(p,
                { opacity: 0, scale: 0.9, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: idx * 0.1, ease: "power2.out" }
            );
        });

        if (this.currentPageSpan) this.currentPageSpan.textContent = this.currentPage;
        if (this.totalPagesSpan) this.totalPagesSpan.textContent = totalPages || 1;
        if (this.prevBtn) this.prevBtn.disabled = this.currentPage === 1;
        if (this.nextBtn) this.nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;

        const controls = document.querySelector('.pagination-controls');
        if (controls) controls.style.display = totalPages <= 1 ? 'none' : 'flex';
    }
}

class CertGallery {
    constructor() {
        this.certsPerPage = 2;
        this.currentPage = 1;
        this.currentFilter = 'all';
        this.certs = Array.from(document.querySelectorAll('#certs .cert-card'));
        this.filterBtns = document.querySelectorAll('#cert-filter-bar .filter-btn');
        this.pageNumbers = document.getElementById('cert-page-numbers');
        this.prevBtn = document.getElementById('prev-cert-page');
        this.nextBtn = document.getElementById('next-cert-page');
        this.paginationControls = document.getElementById('cert-pagination');

        if (this.certs.length > 0) this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.currentPage = 1;
                this.render();
            });
        });

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.render();
                }
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                const filtered = this.getFilteredCerts();
                if (this.currentPage < Math.ceil(filtered.length / this.certsPerPage)) {
                    this.currentPage++;
                    this.render();
                }
            });
        }

        this.render();
    }

    getFilteredCerts() {
        if (this.currentFilter === 'all') return this.certs;
        return this.certs.filter(c => c.dataset.category === this.currentFilter);
    }

    scrollToCerts() {
        gsap.to(window, { duration: 0.8, scrollTo: { y: "#certs", offsetY: 80 }, ease: "power2.inOut" });
    }

    render() {
        const filtered = this.getFilteredCerts();
        const totalPages = Math.ceil(filtered.length / this.certsPerPage);
        const start = (this.currentPage - 1) * this.certsPerPage;
        const end = start + this.certsPerPage;

        this.certs.forEach(c => { c.style.display = 'none'; });

        const toShow = filtered.slice(start, end);
        toShow.forEach((c, idx) => {
            c.style.display = 'flex';
            gsap.fromTo(c,
                { opacity: 0, scale: 0.9, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: idx * 0.08, ease: "back.out(1.2)" }
            );
        });

        this.renderPagination(totalPages);
    }

    renderPagination(totalPages) {
        if (!this.pageNumbers) return;
        this.pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('div');
            btn.className = `page-num ${i === this.currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                if (this.currentPage !== i) {
                    this.currentPage = i;
                    this.render();
                    this.scrollToCerts();
                }
            });
            this.pageNumbers.appendChild(btn);
        }
        if (this.prevBtn) this.prevBtn.disabled = this.currentPage === 1;
        if (this.nextBtn) this.nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;
        if (this.paginationControls) this.paginationControls.style.display = totalPages <= 1 ? 'none' : 'flex';
    }
}

window.ProjectGallery = ProjectGallery;
window.CertGallery = CertGallery;

const cliInput = document.getElementById('cli-input');
const cliOutput = document.getElementById('cli-output');
const cliOverlay = document.getElementById('cli-overlay');
const cliFab = document.getElementById('cli-fab');

function toggleCLI() {
    const isVisible = cliOverlay.style.display === 'flex';
    cliOverlay.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) {
        cliInput.focus();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

if (cliFab) cliFab.addEventListener('click', toggleCLI);

const commands = {
    help: () => {
        const lang = document.documentElement.lang || 'en';
        const c = translations[lang];
        return `${c.cli_help_title} 
- whoami: ${c.cli_help_whoami}
- status: ${c.cli_help_status}
- skills: ${c.cli_help_skills}
- projects: ${c.cli_help_projects}
- ls <project>: ${c.cli_help_ls}
- contact: ${c.cli_help_contact}
- clear: ${c.cli_help_clear}
- exit: ${c.cli_help_exit}`;
    },
    whoami: () => translations[document.documentElement.lang || 'en'].cli_whoami,
    status: () => translations[document.documentElement.lang || 'en'].cli_status,
    skills: () => translations[document.documentElement.lang || 'en'].cli_skills,
    projects: () => translations[document.documentElement.lang || 'en'].cli_projects,
    ls: (arg) => {
        const lang = document.documentElement.lang || 'en';
        const c = translations[lang];
        if (!arg) return c.cli_ls_usage;
        const projectKey = `cli_ls_${arg.toLowerCase()}`;
        return c[projectKey] || c.cli_not_found.replace('{cmd}', arg);
    },
    contact: () => translations[document.documentElement.lang || 'en'].cli_contact,
    clear: () => { cliOutput.innerHTML = ''; return ''; },
    exit: () => { toggleCLI(); return translations[document.documentElement.lang || 'en'].cli_exit; }
};

if (cliInput) {
    cliInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const fullInput = cliInput.value.trim().toLowerCase();
            const parts = fullInput.split(' ');
            const cmd = parts[0];
            const arg = parts[1];
            if (!fullInput) return;
            const line = document.createElement('div');
            line.className = 'cli-line user';
            line.innerHTML = `<span class="cli-prompt">visitor@salma-barrak:~$</span> ${fullInput}`;
            cliOutput.appendChild(line);
            let response = "";
            const lang = document.documentElement.lang || 'en';
            if (commands[cmd]) response = commands[cmd](arg);
            else response = translations[lang].cli_not_found.replace('{cmd}', cmd);
            if (response) {
                const outLine = document.createElement('div');
                outLine.className = 'cli-line';
                outLine.innerHTML = response.replace(/\\n/g, '<br>');
                cliOutput.appendChild(outLine);
            }
            cliInput.value = '';
            document.getElementById('cli-body').scrollTop = document.getElementById('cli-body').scrollHeight;
        }
    });
}

const projectDetailsData = {
    stockify: {
        tags: ["Symfony 7.4", "PHP 8.2", "TailwindCSS 4.x", "PostgreSQL", "Doctrine ORM", "Turbo UX"],
        media: `<img src="assets/images/Apps/Stockify.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
    },
    soukify: {
        tags: ["Android SDK", "Java", "Firebase", "OpenStreetMap", "Cloudinary", "MVVM"],
        media: `
            <div style="flex-shrink: 0; display: flex; justify-content: center;">
                <div style="position: relative; width: 240px; background: linear-gradient(145deg, #1c1c2e, #12121f); border-radius: 36px; padding: 12px 8px 6px; box-shadow: 0 0 0 1px rgba(255,255,255,0.12), 0 0 0 3px #0a0a14, 0 0 0 4px rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.9);">
                    <div style="position:absolute;left:-3px;top:70px;width:3px;height:24px;background:linear-gradient(to right,#0a0a14,#1c1c2e);border-radius:3px 0 0 3px;"></div>
                    <div style="position:absolute;left:-3px;top:104px;width:3px;height:24px;background:linear-gradient(to right,#0a0a14,#1c1c2e);border-radius:3px 0 0 3px;"></div>
                    <div style="position:absolute;right:-3px;top:88px;width:3px;height:38px;background:linear-gradient(to left,#0a0a14,#1c1c2e);border-radius:0 3px 3px 0;"></div>
                    <div style="border-radius:26px;overflow:hidden;background:#000;position:relative;line-height:0;">
                        <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:70px;height:14px;background:#000;border-radius:20px;z-index:10;box-shadow:0 0 0 1px rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:flex-end;padding-right:6px;">
                            <div style="width:8px;height:8px;border-radius:50%;background:#1a1a1a;border:1px solid rgba(255,255,255,0.1);"></div>
                        </div>
                        <div style="overflow:hidden; max-height:480px;">
                            <video src="assets/images/Apps/SOUKIFY%20Demo.mp4" controls autoplay loop muted playsinline style="width:100%;display:block;object-fit:cover;margin-top:-20px;"></video>
                        </div>
                    </div>
                    <div style="display:flex;justify-content:center;padding-top:4px;">
                        <div style="width:50px;height:3px;border-radius:3px;background:rgba(255,255,255,0.18);"></div>
                    </div>
                </div>
            </div>
        `
    },
    portfolio: {
        tags: ["Vanilla JS", "GSAP", "Three.js", "i18next", "CSS3 Animations"],
        media: `<img src="assets/images/Apps/portfolio_mockup.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
    },
    proj1: {
        tags: ["Spring Boot 3", "PostgreSQL", "Hibernate", "JWT Security", "TDD (Mockito/JUnit)", "Maven"],
        media: `
            <div style="height: 200px; display: flex; align-items: center; justify-content: center; width: 100%; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid var(--glass-border);">
                <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 2px;" data-i18n="proj_coming_soon">Coming Soon</span>
            </div>
        `
    },
    chatbot: {
        tags: ["FastAPI", "Vite", "React", "Hugging Face LLMs", "FAISS/Vector Storage", "Tesseract OCR"],
        media: `<img src="assets/images/Apps/chatbot_mso.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
    },
    proj4: {
        tags: ["Python 3.9+", "OpenCV", "Streamlit", "NumPy", "Background Subtraction", "Real-time Processing"],
        media: `<img src="assets/images/Apps/MouvementDetection.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
    },
    proj5: {
        tags: ["Python", "Streamlit", "OpenCV", "NumPy", "Scikit-learn", "CBIR Engine"],
        media: `<img src="assets/images/Apps/Cbir.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
    },
    quiz: {
        tags: ["Java 8+", "Android SDK", "MVVM", "Room DB", "Retrofit 2", "Material Design 3"],
        media: `
            <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px;">
                <img src="assets/images/Apps/quiz3.jpeg" style="height: 300px; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Apps/quiz.jpeg" style="height: 300px; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Apps/quiz2.jpeg" style="height: 300px; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
            </div>
        `
    },
    amee: {
        tags: ["PHP 8.1", "MVC Architecture", "MySQL", "JavaScript", "Chart.js", "Word/Excel Export"],
        media: `<img src="assets/images/Apps/eCongeAmee.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
    },
    proj6: {
        tags: ["Java 11+", "JavaFX 21", "MySQL 8.0", "OpenPDF", "DAO Pattern", "Maven"],
        media: `
            <div style="border-radius:8px;overflow:hidden;border: 1px solid var(--glass-border);box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <video src="assets/images/Apps/SHIFAADEMO.mp4" controls autoplay loop muted playsinline oncanplay="this.playbackRate = 1.5" onvolumechange="this.muted = true;" style="width:100%;display:block;object-fit:cover;"></video>
            </div>
        `
    },
    proj7: {
        tags: ["Python 3.8+", "Streamlit", "Tkinter", "Pandas", "Matplotlib/Seaborn", "Data Visualization"],
        media: `
            <div style="border-radius:8px;overflow:hidden;border: 1px solid var(--glass-border);box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <video src="assets/images/Apps/BAYTALHIKMADEMO.mp4" controls autoplay loop muted playsinline oncanplay="this.playbackRate = 1.5" onvolumechange="this.muted = true;" style="width:100%;display:block;object-fit:cover;"></video>
            </div>
        `
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-modal-title');
    const content = document.getElementById('project-modal-content');
    if (!modal || !content || !projectDetailsData[projectId]) return;
    const data = projectDetailsData[projectId];
    const lang = document.documentElement.lang || 'en';
    const translatedTitle = translations[lang][`proj_${projectId}_title`] || translations[lang][`${projectId}_title`] || projectId;
    const translatedDesc = translations[lang][`proj_${projectId}_modal_desc`] || translations[lang][`${projectId}_modal_desc`] || translations[lang][`proj_${projectId}_desc`] || translations[lang][`${projectId}_desc`] || "";
    title.innerHTML = `<i class="fas fa-project-diagram"></i> <span>${translatedTitle}</span>`;
    let tagsHtml = data.tags.map(tag => `<span class="pill" style="font-size: 0.75rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 12px; color: var(--text-primary);">${tag}</span>`).join('');
    if (projectId === 'amee' || projectId === 'quiz') {
        let imagesHtml = '';
        if (projectId === 'quiz') {
            const quizImages = ['quiz3.jpeg', 'quiz.jpeg', 'quiz2.jpeg'];
            imagesHtml = quizImages.map(img => `
                <div class="carousel-slide" onclick="window.open('assets/images/Apps/${img}', '_blank')" style="cursor: pointer;">
                    <img src="assets/images/Apps/${img}" alt="Quiz UI">
                </div>
            `).join('');
        } else {
            const imageCount = 15;
            const basePath = 'assets/images/Apps/Econgeamee';
            imagesHtml = Array.from({length: imageCount}, (_, i) => `
                <div class="carousel-slide" onclick="window.open('${basePath}/${i + 1}.png', '_blank')" style="cursor: pointer;">
                    <img src="${basePath}/${i + 1}.png" alt="${projectId} UI ${i + 1}">
                </div>
            `).join('');
        }

        content.innerHTML = `
            <div class="carousel-wrapper">
                <div class="carousel-track" id="project-carousel-track">
                    ${imagesHtml}
                </div>
                <button class="carousel-btn prev" onclick="const t = this.parentElement.querySelector('#project-carousel-track'); t.scrollBy({left: -t.offsetWidth, behavior: 'smooth'})">❮</button>
                <button class="carousel-btn next" onclick="const t = this.parentElement.querySelector('#project-carousel-track'); t.scrollBy({left: t.offsetWidth, behavior: 'smooth'})">❯</button>
            </div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">${tagsHtml}</div>
            <div class="project-modal-desc" style="width: 100%; text-align: left;">${translatedDesc}</div>
        `;
    } else {
        content.innerHTML = `${data.media}<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">${tagsHtml}</div>
            <div class="project-modal-desc" style="margin-top: 1rem;">${translatedDesc}</div>`;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
