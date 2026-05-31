/**
 * modals.js
 * Handles modal interactions (Resume, Gallery, Confirmation, Project Details)
 */

import { projectDetailsData } from '../core/projects-data.js';

export function initModals() {
    // Backdrop listeners
    ['resume-modal', 'gallery-modal', 'project-modal', 'confirm-modal'].forEach(id => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal(id);
            });
        }
    });

    // Escape listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            ['resume-modal', 'gallery-modal', 'project-modal', 'confirm-modal'].forEach(closeModal);
        }
    });
}

export function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

export function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Global exposure for legacy compatibility
window.openResumeModal = () => openModal('resume-modal');
window.closeResumeModal = () => closeModal('resume-modal');
window.closeConfirmModal = () => closeModal('confirm-modal');
window.closeGalleryModal = () => closeModal('gallery-modal');


export function openProjectModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data) return;

    const overlay = document.getElementById('project-page-overlay');
    if (!overlay) return;

    const lang = document.documentElement.getAttribute('lang') || 'en';
    const t = translations[lang];

    // Title
    const tTitle = t[`proj_${projectId}_title`] || t[`${projectId}_title`] || projectId;
    document.getElementById('page-title').innerText = tTitle;

    // Tags
    const tagsHtml = data.tags.map(tag => `<span class="pill">${tag}</span>`).join('');
    document.getElementById('page-tags').innerHTML = tagsHtml;

    // Structured description keys
    const vision        = t[`proj_${projectId}_vision`]          || t[`${projectId}_vision`];
    const features      = t[`proj_${projectId}_features`]        || t[`${projectId}_features`];
    const bpIntro       = t[`proj_${projectId}_blueprint_intro`] || t[`${projectId}_blueprint_intro`];
    const bpItems       = t[`proj_${projectId}_blueprint_items`] || t[`${projectId}_blueprint_items`];

    const visionLabel    = t['proj_vision_title']    || 'Project Vision';
    const featuresLabel  = t['proj_features_title']  || 'Core Features';
    const blueprintLabel = t['proj_blueprint_title'] || 'Technical Blueprint';

    if (vision || features || bpItems) {
        let html = '';

        if (vision) {
            html += `
                <div class="proj-section">
                    <h3 class="proj-subtitle"><i class="fas fa-bullseye"></i> ${visionLabel}</h3>
                    <p class="proj-text">${vision}</p>
                </div>`;
        }

        if (features && Array.isArray(features)) {
            const cardsHtml = features.map(f => `
                <div class="proj-feature-card">
                    <div class="proj-feature-icon"><i class="${f.icon}"></i></div>
                    <div class="proj-feature-body">
                        <h4 class="proj-feature-title">${f.title}</h4>
                        <p class="proj-feature-text">${f.text}</p>
                    </div>
                </div>`).join('');
            html += `
                <div class="proj-section">
                    <h3 class="proj-subtitle"><i class="fas fa-star"></i> ${featuresLabel}</h3>
                    <div class="proj-feature-grid">${cardsHtml}</div>
                </div>`;
        }

        if (bpItems && Array.isArray(bpItems)) {
            const itemsHtml = bpItems.map(item => `
                <li class="proj-blueprint-item">
                    <i class="fas fa-check-circle proj-blueprint-icon"></i>
                    <span><strong>${item.title}:</strong> ${item.text}</span>
                </li>`).join('');
            html += `
                <div class="proj-section">
                    <h3 class="proj-subtitle"><i class="fas fa-cogs"></i> ${blueprintLabel}</h3>
                    <div class="proj-blueprint">
                        ${bpIntro ? `<p class="proj-blueprint-text">${bpIntro}</p>` : ''}
                        <ul class="proj-blueprint-list">${itemsHtml}</ul>
                    </div>
                </div>`;
        }

        document.getElementById('page-desc').innerHTML = html;
    } else {
        // Legacy fallback for any project still using raw HTML desc
        const tDesc = t[`proj_${projectId}_modal_desc`] || t[`${projectId}_modal_desc`]
                   || t[`proj_${projectId}_desc`]       || t[`${projectId}_desc`]       || '';
        document.getElementById('page-desc').innerHTML = tDesc;
    }

    // Media
    if (projectId === 'amee') {
        const ameeImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10-1.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png'];
        const basePath = 'assets/images/Apps/Econgeamee';
        const imagesHtml = ameeImages.map(img => `
            <div class="carousel-slide" onclick="window.open('${basePath}/${img}', '_blank')" style="cursor: pointer;">
                <img src="${basePath}/${img}" alt="${projectId} UI">
            </div>`).join('');

        document.getElementById('page-media').innerHTML = `
            <div class="carousel-wrapper">
                <div class="carousel-track" id="project-carousel-track">${imagesHtml}</div>
                <button class="carousel-btn prev" onclick="const t = document.getElementById('project-carousel-track'); t.scrollBy({left: -t.offsetWidth, behavior: 'smooth'})"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-btn next" onclick="const t = document.getElementById('project-carousel-track'); t.scrollBy({left: t.offsetWidth, behavior: 'smooth'})"><i class="fas fa-chevron-right"></i></button>
            </div>`;
    } else {
        document.getElementById('page-media').innerHTML = data.media;
    }

    // Show overlay
    overlay.style.display = 'block';
    void overlay.offsetWidth;
    overlay.style.opacity = '1';
    document.body.style.overflow = 'hidden';

    // Reset scroll positions
    const detailsContainer = overlay.querySelector('.split-details');
    if (detailsContainer) detailsContainer.scrollTop = 0;
    overlay.scrollTop = 0;
}


window.openProjectModal = openProjectModal;

export function closeProjectOverlay() {
    const overlay = document.getElementById('project-page-overlay');
    if (!overlay) return;
    
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 400); // match transition duration
}
window.closeProjectOverlay = closeProjectOverlay;

export function openGallery(type) {
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
                <img src="assets/images/Events/MIATHON'03.png" alt="MIATHON'03" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/SEMIA'04.jpg" alt="SEMIA'04" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/SEMIA'03.jpg" alt="SEMIA'03" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/TechConnect2.png" alt="Tech Connect 2" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/TechConnect.png" alt="Tech Connect" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/AtelierIdeation.jpg" alt="Atelier Ideation" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <img src="assets/images/Events/JourneeInformatique(e4).png" alt="Journ├®e Informatique" style="width: 100%; max-height: 400px; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid var(--glass-border); box-shadow: 0 4px 20px rgba(0,0,0,0.5); grid-column: 1 / -1;">
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

    // Reset scroll position
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
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

export function openPdfViewer(titleKey, pdfUrl, iconClass = 'fa-file-pdf') {
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

    // Reset scroll position
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
}

window.openGallery = openGallery;
window.closeGalleryModal = closeGalleryModal;
window.openPdfViewer = openPdfViewer;

