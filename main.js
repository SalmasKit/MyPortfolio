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

window.addEventListener('DOMContentLoaded', () => {
    new PortfolioScene();
    // Set default language
    const savedLang = localStorage.getItem('portfolio_lang') || 'en';
    switchLanguage(savedLang);
});

/* ── Multilingual Logic ─────────────────────────────── */
function switchLanguage(lang) {
    if (!translations[lang]) return;

    // Save preference
    localStorage.setItem('portfolio_lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) btn.classList.add('active');
    });

    document.documentElement.setAttribute('lang', lang);

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = translation;
            } else if (elem.tagName === 'UL' || elem.tagName === 'P' || elem.tagName === 'SPAN') {
                elem.innerHTML = translation;
            } else {
                elem.textContent = translation;
            }
        }
    });

    // Special Handling: Resume Links
    const resumeIframe = document.getElementById('resume-iframe');
    const resumeDownloadBtn = document.querySelector('.resume-download-btn');
    if (resumeIframe && translations[lang].resume_file) {
        resumeIframe.src = translations[lang].resume_file;
    }
    if (resumeDownloadBtn && translations[lang].resume_file) {
        resumeDownloadBtn.href = translations[lang].resume_file;
        resumeDownloadBtn.setAttribute('download', translations[lang].resume_name);
    }

    document.title = (lang === 'fr' ? "Salma Barrak | Ingénieur Informatique" : "Salma Barrak | Software Engineer");
}

// Expose to global for onclick
window.switchLanguage = switchLanguage;

/* ── Resume Modal Logic ─────────────────────────────── */
function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on backdrop click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeResumeModal();
        });
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeResumeModal();
});

/* ── Contact Form Handler ───────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmSendBtn = document.getElementById('confirm-send-btn');
    if (!form || !confirmModal || !confirmSendBtn) return;

    // Step 1: intercept submit → show confirmation modal
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('from_name').value.trim();
        const email = document.getElementById('from_email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const errorMsg = document.documentElement.lang === 'fr' 
                ? 'Veuillez entrer une adresse email valide.' 
                : 'Please enter a valid email address.';
            alert(errorMsg);
            return;
        }

        // Populate preview
        document.getElementById('confirm-name').textContent = name || '—';
        document.getElementById('confirm-email').textContent = email || '—';
        document.getElementById('confirm-message').textContent =
            message.length > 120 ? message.slice(0, 120) + '…' : message || '—';

        // Show modal
        confirmModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Step 2: confirmed → actually send
    confirmSendBtn.addEventListener('click', function () {
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        closeConfirmModal();

        // Loading state
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
                btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                btn.style.background = 'var(--accent-2)';
                btn.style.borderColor = 'var(--accent-2)';
                form.reset();
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                }, 3500);
            })
            .catch((err) => {
                console.error('EmailJS error:', err);
                btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed. Try again.';
                btn.style.background = '#ef4444';
                btn.style.borderColor = '#ef4444';
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                }, 3500);
            });
    });

    // Close on backdrop click
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) closeConfirmModal();
    });
});

function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
