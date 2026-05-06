/**
 * gallery.js
 * Handles project and certification filtering, pagination, and rendering
 */

export class ProjectGallery {
    constructor() {
        this.updateItemsPerPage();
        this.currentPage = 1;
        this.currentFilter = 'all';
        this.projects = Array.from(document.querySelectorAll('.project-card'));
        this.filterBtns = document.querySelectorAll('#projects .filter-btn');
        this.currentPageSpan = document.getElementById('current-page');
        this.totalPagesSpan = document.getElementById('total-pages');
        this.prevBtn = document.getElementById('proj-prev');
        this.nextBtn = document.getElementById('proj-next');

        if (this.projects.length > 0) {
            this.init();
            window.addEventListener('resize', () => {
                const oldVal = this.projectsPerPage;
                this.updateItemsPerPage();
                if (oldVal !== this.projectsPerPage) this.render();
            });
        }
    }

    updateItemsPerPage() {
        this.projectsPerPage = window.innerWidth <= 768 ? 1 : 2;
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

    render() {
        const filtered = this.getFilteredProjects();
        const totalPages = Math.ceil(filtered.length / this.projectsPerPage);
        const start = (this.currentPage - 1) * this.projectsPerPage;
        const end = start + this.projectsPerPage;

        this.projects.forEach(p => { p.style.display = 'none'; });

        const toShow = filtered.slice(start, end);
        toShow.forEach((p, idx) => {
            p.style.display = 'flex';
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

export class CertGallery {
    constructor() {
        this.updateItemsPerPage();
        this.currentPage = 1;
        this.currentFilter = 'all';
        this.certs = Array.from(document.querySelectorAll('#certs .cert-card'));
        this.filterBtns = document.querySelectorAll('#cert-filter-bar .filter-btn');
        this.pageNumbers = document.getElementById('cert-page-numbers');
        this.prevBtn = document.getElementById('prev-cert-page');
        this.nextBtn = document.getElementById('next-cert-page');

        if (this.certs.length > 0) {
            this.init();
            window.addEventListener('resize', () => {
                this.updateItemsPerPage();
                this.render();
            });
        }
    }

    updateItemsPerPage() {
        this.certsPerPage = window.innerWidth <= 768 ? 1 : 2;
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
        if (typeof gsap !== 'undefined') {
            gsap.to(window, { duration: 0.8, scrollTo: { y: "#certs", offsetY: 80 }, ease: "power2.inOut" });
        }
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
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(c,
                    { opacity: 0, scale: 0.9, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: idx * 0.08, ease: "back.out(1.2)" }
                );
            }
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
    }
}
