/**
 * animations.js
 * Handles Three.js scene, GSAP animations, and cursor effects
 */

export class PortfolioScene {
    constructor() {
        this.container = document.getElementById('canvas3d');
        if (!this.container) return;

        this.scene = new THREE.Scene();

        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.onWindowResize();
        this.animate();
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 5);
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
        this.pointLight = new THREE.PointLight(0x8B5CF6, 2);
        this.pointLight.position.set(5, 5, 2);
        this.scene.add(this.pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);
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

        // Background Transitions
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            }
        });

        tl.to(this.camera.position, { z: 4, x: 2, y: 1 }, "step1")
          .to(this.camera.position, { x: -3, y: -2, z: 8 }, "step2")
          .to(this.camera.position, { x: 0, y: 0, z: 3 }, "step3");

        this.initStatsCarousel();
    }

    initStatsCarousel() {
        let currentStatIdx = 0;
        const statKeys = ['stat_projects', 'stat_techs', 'stat_certs', 'stat_intern'];
        let carouselTimeline = null;

        window.playStatsCarousel = () => {
            const textElement = document.getElementById('stat-text-carousel');
            if (!textElement) return;

            const lang = document.documentElement.getAttribute('lang') || 'en';
            const t = typeof translations !== 'undefined' ? translations[lang] : null;
            if (!t) return;

            const sentence = t[statKeys[currentStatIdx]];
            if (carouselTimeline) carouselTimeline.kill();

            carouselTimeline = gsap.timeline();

            if (textElement.innerHTML !== '') {
                carouselTimeline.to(textElement, {
                    y: -20,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in"
                });
            }

            carouselTimeline.call(() => {
                textElement.innerHTML = sentence;
            })
            .fromTo(textElement,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
            )
            .to(textElement, {
                y: 0,
                duration: 2.5,
                onComplete: () => {
                    currentStatIdx = (currentStatIdx + 1) % statKeys.length;
                    window.playStatsCarousel();
                }
            });
        };
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());

        // Custom Cursor Logic
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            gsap.to(dot, { x, y, duration: 0 });
            gsap.to(outline, { x, y, duration: 0.2 });

            // 3D Interaction
            const threeX = (x / window.innerWidth) * 2 - 1;
            const threeY = -(y / window.innerHeight) * 2 + 1;

            gsap.to(this.pointLight.position, {
                x: threeX * 8,
                y: threeY * 8,
                duration: 1
            });
        });
    }

    onWindowResize() {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const time = performance.now() * 0.001;

        if (this.pointLight) {
            this.pointLight.position.x = Math.sin(time * 0.5) * 5;
            this.pointLight.position.z = Math.cos(time * 0.5) * 5;
        }
        
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }
}
