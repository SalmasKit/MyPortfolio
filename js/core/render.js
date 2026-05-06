/**
 * render.js
 * Dynamic UI Rendering Engine
 */

import { 
    techStack, 
    projectData, 
    certData, 
    educationData, 
    experienceData, 
    volunteerData 
} from './data.js';

export function renderEducation() {
    const container = document.querySelector('.github-commit-history');
    if (!container) return;

    container.innerHTML = educationData.map(edu => `
        <div class="commit-group">
            <div class="commit-group-icon"></div>
            <div class="commit-group-title">
                Commits on <span data-i18n="${edu.id}_date">${edu.date}</span>
            </div>

            <div class="commit-list glass">
                <div class="commit-item">
                    <div class="commit-main">
                        <h3 class="commit-title" data-i18n="${edu.titleKey}">Title</h3>
                        <div class="commit-meta">
                            <img src="https://github.com/SalmasKit.png" alt="SalmasKit" class="commit-avatar">
                            <span class="commit-author">SalmasKit</span> committed at <span data-i18n="${edu.orgKey}">Org</span>
                            <span class="commit-separator">·</span>
                            <span class="commit-status"><i class="fas fa-check"></i> ${edu.status}</span>
                        </div>
                        <div class="commit-desc">
                            <ul data-i18n="${edu.descKey}">
                                <!-- Translations will populate this -->
                            </ul>
                        </div>
                    </div>
                    <div class="commit-actions">
                        <div class="commit-hash-group">
                            <span class="commit-hash">${edu.hash}</span>
                            <button class="commit-btn" title="Copy the full SHA"><i class="far fa-copy"></i></button>
                        </div>
                        <button class="commit-code-btn" title="Browse the repository"><i class="fas fa-code"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

export function renderExperience() {
    const container = document.querySelector('.github-pr-ui');
    if (!container) return;

    container.innerHTML = experienceData.map(exp => `
        <!-- Pull Request Header -->
        <div class="pr-header">
            <h3 class="pr-title">
                <span data-i18n="${exp.titleKey}">Title</span>
                <span class="pr-number">${exp.number}</span>
            </h3>
        </div>

        <!-- Pull Request Timeline -->
        <div class="pr-timeline">
            <!-- Main Comment (The Experience Details) -->
            <div class="pr-comment">
                <div class="pr-avatar">
                    <img src="https://github.com/SalmasKit.png" alt="Salma">
                </div>
                <div class="pr-comment-box glass">
                    <div class="pr-comment-header">
                        <strong>SalmasKit</strong>
                        <span class="pr-comment-badge">Owner</span>
                    </div>
                    <div class="pr-comment-body">
                        <p data-i18n="exp_intro">Implemented the following responsibilities:</p>
                        <ul data-i18n="${exp.descKey}" class="markdown-body">
                            <!-- Populated by i18n -->
                        </ul>

                        <div class="pr-attachments">
                            <div class="pr-attach-title"><i class="fas fa-paperclip"></i> <span data-i18n="exp_attach">Certificate attached</span></div>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                ${exp.certLink ? `
                                <a href="#" onclick="openPdfViewer('exp_btn_cert', '${exp.certLink}'); return false;" class="pr-file">
                                    <i class="fas fa-file-pdf" style="color: #da3633; font-size: 16px;"></i>
                                    <span data-i18n="exp_btn_cert">View Certificate</span>
                                </a>` : ''}
                                ${exp.detailsId ? `
                                <a href="#" onclick="openProjectModal('${exp.detailsId}'); return false;" class="pr-file">
                                    <i class="fas fa-project-diagram" style="color: #2f81f7; font-size: 14px;"></i>
                                    <span data-i18n="proj_btn_details">See Details</span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Timeline merge event -->
            <div class="pr-timeline-event">
                <div class="pr-timeline-icon merged"><i class="fas fa-code-merge"></i></div>
                <img src="${exp.logo}" alt="Org" class="pr-merge-avatar" onerror="this.style.display='none'">
                <div class="pr-timeline-desc">
                    <strong data-i18n="${exp.orgKey}">Org</strong> merged commit <a href="#" class="pr-commit-link">${exp.hash}</a> into <code>professional-path</code>
                    <span class="pr-date" style="margin-left: 10px; background: rgba(255, 255, 255, 0.1); color: var(--text-primary); padding: 2px 8px; border-radius: 6px; font-weight: 600; font-size: 0.85em; border: 1px solid var(--glass-border); display: inline-flex; align-items: center; gap: 5px;">
                        <i class="far fa-calendar-alt"></i> <span data-i18n="${exp.dateKey}">${exp.dateKey}</span>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

export function renderVolunteer() {
    const container = document.querySelector('.impact-arch-grid');
    if (!container) return;

    container.innerHTML = volunteerData.map(vol => `
        <div class="arch-node glass">
            <div class="arch-node-tab">${vol.node}</div>

            <div class="arch-header">
                <div class="arch-logo">
                    <img src="${vol.logo}" alt="Logo" onerror="this.style.display='none'">
                </div>
                <div class="arch-title-wrapper">
                    <h3 data-i18n="${vol.orgKey}">Org</h3>
                    <h4 data-i18n="${vol.titleKey}">Title</h4>
                </div>
            </div>

            <ul class="arch-desc" data-i18n="${vol.descKey}">
                <!-- Populated by i18n -->
            </ul>

            <div class="arch-footer">
                ${vol.links.map(link => `
                    <a href="#" onclick="openGallery('${link.action}'); return false;" class="arch-link">
                        <span data-i18n="${link.labelKey}">Label</span> <i class="fas fa-arrow-right"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

export function renderTechIDE() {
    const sidebar = document.querySelector('.folder-children');
    const editorTabs = document.querySelector('.editor-tabs');
    const editorContent = document.querySelector('.editor-content');

    if (!sidebar || !editorTabs || !editorContent) return;

    sidebar.innerHTML = '';
    editorTabs.innerHTML = '';
    editorContent.innerHTML = '';

    techStack.forEach((cat, index) => {
        // 1. Sidebar Item
        const sidebarLabel = document.createElement('label');
        sidebarLabel.setAttribute('for', `tab-${cat.id}`);
        sidebarLabel.className = `side-item ${cat.id}-item`;
        sidebarLabel.innerHTML = `<i class="fas ${cat.icon}" style="color: ${cat.color}"></i> <span data-i18n="file_${cat.id}">${cat.file}</span>`;
        sidebar.appendChild(sidebarLabel);

        // 2. Editor Tab
        const tabDiv = document.createElement('div');
        tabDiv.className = `e-tab ${cat.id}-tab`;
        tabDiv.innerHTML = `<i class="fas ${cat.icon}" style="color: ${cat.color}"></i> <span data-i18n="file_${cat.id}">${cat.file}</span>`;
        editorTabs.appendChild(tabDiv);

        // 3. Code View Content
        const viewDiv = document.createElement('div');
        viewDiv.className = 'code-view';
        viewDiv.id = `view-${cat.id}`;
        
        let contentHtml = '';
        if (cat.subCategories) {
            contentHtml = `<div class="line"><span class="num">1</span> <span class="kw">{</span></div>`;
            let lineNum = 2;
            cat.subCategories.forEach((sub, subIdx) => {
                contentHtml += `<div class="line"><span class="num">${lineNum++}</span> <span class="key" style="color: ${cat.color}">"<span data-i18n="${sub.key}">${sub.key}</span>"</span>: <span class="kw" style="color: ${cat.color}">[</span></div>`;
                sub.items.forEach(item => {
                    contentHtml += `<div class="line pl"><span class="num">${lineNum++}</span> <i class="${item.icon} code-icn"></i> <span class="str">"${item.name}"</span>${item === sub.items[sub.items.length-1] ? '' : ','}</div>`;
                });
                contentHtml += `<div class="line"><span class="num">${lineNum++}</span> <span class="kw">]</span>${subIdx === cat.subCategories.length - 1 ? '' : ','}</div>`;
            });
            contentHtml += `<div class="line"><span class="num">${lineNum}</span> <span class="kw">}</span></div>`;
        } else {
            let itemsHtml = cat.items.map((item, i) => `
                <div class="line pl"><span class="num">${4 + i}</span> <i class="${item.icon} code-icn"></i> <span class="str">"${item.name}"</span>${i === cat.items.length - 1 ? '' : ','}</div>
            `).join('');

            contentHtml = `
                <div class="line"><span class="num">1</span> <span class="kw" style="color: ${cat.color}">{</span></div>
                <div class="line"><span class="num">2</span> <span class="key" style="color: ${cat.color}">"<span data-i18n="ide_category">category</span>"</span>: <span class="str" data-i18n="${cat.categoryKey}">"${cat.id}"</span>,</div>
                <div class="line"><span class="num">3</span> <span class="key" style="color: ${cat.color}">"<span data-i18n="ide_stack">stack</span>"</span>: <span class="kw" style="color: ${cat.color}">[</span></div>
                ${itemsHtml}
                <div class="line"><span class="num">${4 + cat.items.length}</span> <span class="kw" style="color: ${cat.color}">]</span></div>
                <div class="line"><span class="num">${5 + cat.items.length}</span> <span class="kw" style="color: ${cat.color}">}</span></div>
            `;
        }

        viewDiv.innerHTML = contentHtml;
        editorContent.appendChild(viewDiv);
    });
}

export function renderProjects() {
    const grid = document.querySelector('.project-grid');
    if (!grid) return;

    grid.innerHTML = projectData.map(proj => {
        const techsHtml = proj.techs.map(t => `<span class="pill">${t}</span>`).join('');
        const pillsOverlay = `<div class="img-pills">${techsHtml}</div>`;

        let imgHtml = '';
        if (proj.comingSoon) {
            imgHtml = `<div class="project-img">
                <div class="coming-soon-wrapper"><span data-i18n="proj_coming_soon">Coming Soon</span></div>
                ${pillsOverlay}
            </div>`;
        } else if (proj.imgs) {
            imgHtml = `<div class="project-img triple-img">
                ${proj.imgs.map(img => `<img src="${img}" alt="${proj.id}">`).join('')}
                ${pillsOverlay}
            </div>`;
        } else {
            imgHtml = `<div class="project-img">
                <img src="${proj.img}" alt="${proj.id}">
                ${pillsOverlay}
            </div>`;
        }

        return `
            <div class="project-card glass reveal" data-category="${proj.category}">
                ${imgHtml}
                <div class="project-info">
                    <div class="project-header">
                        <h3 data-i18n="proj_${proj.id}_title">Title</h3>
                    </div>
                    <p><span class="label" data-i18n="proj_challenge">Challenge:</span> <span data-i18n="proj_${proj.id}_desc">Desc</span></p>
                    <p><span class="label" data-i18n="proj_solution">Solution:</span> <span data-i18n="proj_${proj.id}_sol">Sol</span></p>
                    <div class="project-links">
                        ${proj.github ? `<a href="${proj.github}" target="_blank" class="github-link"><i class="fab fa-github"></i> <span data-i18n="proj_source">Source</span></a>` : ''}
                        ${proj.gitlab ? `<a href="${proj.gitlab}" target="_blank" class="github-link"><i class="fab fa-gitlab"></i> <span data-i18n="proj_source">Source</span></a>` : ''}
                        <button class="btn-details" onclick="openProjectModal('${proj.id}')">
                            <span data-i18n="proj_btn_details">See Details</span> <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

export function renderCerts() {
    const grid = document.querySelector('#cert-grid');
    if (!grid) return;

    grid.innerHTML = certData.map(cert => `
        <div class="cert-card glass reveal" data-category="${cert.category}">
            <div class="cert-badge">
                ${cert.img ? `<img src="${cert.img}" alt="${cert.org}">` : `<i class="${cert.icon}"></i>`}
            </div>
            <div class="cert-info">
                <span class="cert-org">${cert.org}</span>
                <h3 data-i18n="${cert.id}_title">${cert.id}</h3>
                <p data-i18n="${cert.id}_desc">Description</p>
                <div class="cert-meta">
                    <div class="meta-item"><i class="fas fa-calendar-alt"></i> ${cert.date}</div>
                    <div class="meta-item">ID: ${cert.verifyId}</div>
                </div>
                <div class="tech-pills">
                    ${cert.techs.map(t => `<span class="pill">${t}</span>`).join('')}
                </div>
                <a href="#" onclick="openPdfViewer('${cert.id}_title', '${cert.pdf}', 'fa-award'); return false;" class="github-link">
                    <i class="fas fa-external-link-alt"></i> <span data-i18n="cert_show">Show Credential</span>
                </a>
            </div>
        </div>
    `).join('');
}
