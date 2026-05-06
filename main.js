// Core Imports
import { PortfolioScene } from './js/features/animations.js';
import { initLoader } from './js/core/loader.js';

// Feature Imports
import { ProjectGallery, CertGallery } from './js/features/gallery.js';
import { initModals } from './js/features/modals.js';
import { initTerminal } from './js/features/terminal.js';
import { initContactForm } from './js/features/contact.js';
import {
    initThemeToggle,
    initMobileMenu,
    initLanguageSwitcher,
    initSmoothScroll,
    initScrollSpy
} from './js/features/ui.js';

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI Helpers (Mobile Menu, Theme, etc.)
    initMobileMenu();
    initLanguageSwitcher();
    initSmoothScroll();
    initScrollSpy();

    // 2. Initialize Core Systems (3D Scene, Loader)
    const scene = new PortfolioScene();
    initThemeToggle(scene);
    initLoader();

    // 3. Initialize Interactive Features
    const projectGallery = new ProjectGallery();
    const certGallery = new CertGallery();
    initModals();
    initTerminal();
    initContactForm();

    // Export instances to window for legacy onclick handlers if needed
    window.ProjectGallery = projectGallery;
    window.CertGallery = certGallery;

    console.log("Salma's Portfolio Engine Initialized Successfully.");
});
