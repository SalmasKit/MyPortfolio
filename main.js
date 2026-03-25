/**
 * QUANTUM PORTFOLIO - CORE LOGIC v2
 * Structured Full-Stack Portfolio Orchestration
 */

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
                const target = e.target.getAttribute('href');
                gsap.to(window, { duration: 1.5, scrollTo: target, ease: "power4.inOut" });
            });
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

    // 2. Localization & Language
    const savedLang = localStorage.getItem('portfolio_lang') || 'en';
    window.switchLanguage(savedLang);

    // 3. Technical Visuals
    initTechCylinders();

    // 4. Modal Backdrop Behaviors
    const resumeModal = document.getElementById('resume-modal');
    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) window.closeResumeModal();
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

            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            const templateParams = {
                name: document.getElementById('from_name').value,
                email: document.getElementById('from_email').value,
                message: document.getElementById('message').value,
                title: document.getElementById('from_name').value,
            };

            emailjs.send('service_6g691o8', 'template_d1yl0jh', templateParams)
                .then(() => {
                    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                    btn.style.background = 'var(--accent-2)';
                    form.reset();
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.textContent = originalText;
                        btn.style.background = '';
                    }, 3500);
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
        }
    });
});

function initTechCylinders() {
    const contents = document.querySelectorAll('.marquee-content');
    contents.forEach(content => {
        const cards = content.querySelectorAll('.tech-card');
        const numCards = cards.length;
        const angleStep = 360 / numCards;
        const radius = Math.round((90) / Math.tan(Math.PI / numCards)) + 60;
        cards.forEach((card, i) => {
            const angle = i * angleStep;
            gsap.set(card, { transform: `rotateY(${angle}deg) translateZ(${radius}px)` });
        });
        let currentAngle = 0;
        const rotationSpeed = 0.3;
        const animate = () => {
            currentAngle -= rotationSpeed;
            content.style.transform = `rotateY(${currentAngle}deg)`;
            const normalizedAngle = ((currentAngle % 360) + 360) % 360;
            const activeIndex = Math.round((360 - normalizedAngle) / angleStep) % numCards;
            cards.forEach((card, idx) => {
                if (idx === activeIndex) {
                    card.classList.add('focused');
                    gsap.to(card, { scale: 1.15, duration: 0.5 });
                } else {
                    card.classList.remove('focused');
                    gsap.to(card, { scale: 0.95, duration: 0.5 });
                }
            });
            requestAnimationFrame(animate);
        };
        animate();
    });
}

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
}
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

// ── Project Gallery Orchestration ─────────────────────────
class ProjectGallery {
    constructor() {
        this.projectsPerPage = 6;
        this.currentPage = 1;
        this.currentFilter = 'all';
        this.projects = Array.from(document.querySelectorAll('.project-card'));
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.pageNumbers = document.getElementById('page-numbers');
        this.prevBtn = document.getElementById('prev-page');
        this.nextBtn = document.getElementById('next-page');

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

        this.prevBtn.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.render();
                this.scrollToProjects();
            }
        });

        this.nextBtn.addEventListener('click', () => {
            const filtered = this.getFilteredProjects();
            if (this.currentPage < Math.ceil(filtered.length / this.projectsPerPage)) {
                this.currentPage++;
                this.render();
                this.scrollToProjects();
            }
        });

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

        // Hide all with a slight fade out if they were visible
        this.projects.forEach(p => {
            p.classList.add('project-hidden');
        });

        // Show current page
        const toShow = filtered.slice(start, end);
        toShow.forEach((p, idx) => {
            p.classList.remove('project-hidden');
            // Re-trigger reveal animation with GSAP for smoothness
            gsap.fromTo(p, 
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
                    this.scrollToProjects();
                }
            });
            this.pageNumbers.appendChild(btn);
        }

        if (this.prevBtn) this.prevBtn.disabled = this.currentPage === 1;
        if (this.nextBtn) this.nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;

        const controls = document.querySelector('.pagination-controls');
        if (controls) {
            controls.style.display = totalPages <= 1 ? 'none' : 'flex';
        }
    }
}

window.ProjectGallery = ProjectGallery;
