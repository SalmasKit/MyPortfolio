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
window.closeProjectModal = () => closeModal('project-modal');

/**
 * Specifically handles Project Detail Modals
 */
export function openProjectModal(projectId) {
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
    if (projectId === 'amee') {
        let imagesHtml = '';
        const ameeImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10-1.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png'];
        const basePath = 'assets/images/Apps/Econgeamee';
        imagesHtml = ameeImages.map(img => `
            <div class="carousel-slide" onclick="window.open('${basePath}/${img}', '_blank')" style="cursor: pointer;">
                <img src="${basePath}/${img}" alt="${projectId} UI">
            </div>
        `).join('');

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

window.openProjectModal = openProjectModal;

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
}

window.openGallery = openGallery;
window.closeGalleryModal = closeGalleryModal;
window.openPdfViewer = openPdfViewer;

