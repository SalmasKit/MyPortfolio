const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let lang = (() => { try { return localStorage.getItem('portfolio_lang') || 'en' } catch (e) { return 'en' } })(), filter = 'all';
const T = k => { const v = translations[lang] && translations[lang][k]; return v || (k in FB ? FB[k] : k) };

let cf = 'all';

const SOL = {
    targetalent: ['proj_targetalent_sol'],
    cdg: ['proj_cdg_capital_sol'],
    sanad: ['proj_miathon_sol'],
    afriqai: ['proj_afriqai_sol'],
    chatbot: ['proj_chatbot_sol'],
    jira: ['proj1_sol', 'proj_jira_sol'],
    stockify: ['stockify_sol'],
    soukify: ['proj3_sol'],
    quiz: ['proj_quiz_sol'],
    vision: ['proj4_sol', 'proj_vision_sol'],
    querypix: ['proj5_sol', 'proj_querypix_sol'],
    amee: ['proj_amee_sol'],
    shifaa: ['proj6_sol', 'proj_shifaa_sol'],
    bayt: ['proj7_sol', 'proj_bayt_sol'],
    portfolio: ['proj_portfolio_sol']
};

const CAT_ICON = { web: 'fa-globe', ai: 'fa-brain', mobile: 'fa-mobile-screen', desktop: 'fa-desktop' };

const PROJ_ICONS = {
    targetalent: 'fa-users-viewfinder',
    cdg: 'fa-chart-line',
    sanad: 'fa-robot',
    afriqai: 'fa-comments-dollar',
    chatbot: 'fa-headset',
    jira: 'fa-list-check',
    stockify: 'fa-boxes-stacked',
    soukify: 'fa-bag-shopping',
    quiz: 'fa-graduation-cap',
    vision: 'fa-eye',
    querypix: 'fa-image',
    amee: 'fa-calendar-check',
    shifaa: 'fa-hospital',
    bayt: 'fa-book-bookmark',
    portfolio: 'fa-laptop-code'
};

const getSol = id => {
    const keys = SOL[id] || [];
    for (const k of keys) {
        const s = T(k);
        if (s && s !== k) return s;
    }
    return '';
};

function renderProjects() {
    const L = PROJECTS.filter(p => filter === 'all' || p[1] === filter);
    const grid = $('#grid');
    if (!grid) return;
    grid.className = 'stack pgrid-stack';
    grid.innerHTML = L.map(p => {
        const id = p[0];
        const cat = p[1];
        const icon = PROJ_ICONS[id] || CAT_ICON[cat] || 'fa-code';
        return `<div class="sk" data-open="${id}">
            <div class="ic"><i class="fas ${icon}"></i></div>
            <h4>${T(p[3][0])}</h4>
            <div class="pills">
                ${p[4].map(t => `<span>${t}</span>`).join('')}
            </div>
        </div>`;
    }).join('');
    enhance('#grid .sk');
}

function renderCerts() {
    $('#certList').innerHTML = CERTS.filter(c => cf === 'all' || c[6] === cf).map(c => `<a class="cert" href="#" data-pdf="${encodeURI('assets/docs/Certifs/' + c[3])}" data-t="${c[0]}"><i class="${c[4]}"></i><span><b>${T(c[0])}</b><small>${c[1]} · ${c[2]}</small><em>${T(c[0].replace('_title', '_desc'))}</em><small class="id">ID: ${c[5]}</small></span></a>`).join('');
}
function renderStatic() {
    $('#stack').innerHTML = STACK.map(s => `<div class="row"><h4>${T(s[0])}</h4><div class="pills">${s[1].map(i => `<span>${i[0] === '@' ? T(i.slice(1)) : i}</span>`).join('')}</div></div>`).join('');
    renderCerts();
}
/* modal */
function openModal(h) { $('#mbody').innerHTML = h; $('#modal').classList.add('open'); document.body.style.overflow = 'hidden'; $('.sheet').scrollTop = 0 }
function closeModal() { $('#modal').classList.remove('open'); $('#mbody').innerHTML = ''; document.body.style.overflow = '' }
function openProject(id) {
    const p = PROJECTS.find(x => x[0] === id);
    if (!p) return;
    const d = DET[id] || {}, t = translations[lang] || {}, g = k => t[d.k + k] || (FB && FB[d.k + k]);
    const vision = g('_vision'), feats = g('_features'), bi = g('_blueprint_intro'), bit = g('_blueprint_items');
    const sol = getSol(id);
    const isMobile = p[1] === 'mobile';

    let media;
    if (d.v) {
        const videoContent = `<video src="${A}${d.v}" controls autoplay loop muted playsinline></video>`;
        media = isMobile ? `<div class="mobile-frame">${videoContent}</div>` : `<div class="dmedia-video-wrap">${videoContent}</div>`;
    } else if (d.i && d.i.length) {
        media = `<div class="strip">${d.i.map(f => `<img src="${A}${d.b}/${f}" alt="" loading="lazy">`).join('')}</div>`;
    } else if (p[2]) {
        media = `<img src="${p[2]}" alt="${T(p[3][0])}">`;
    } else {
        media = `<div class="dmedia-placeholder"><i class="fas ${PROJ_ICONS[id] || 'fa-laptop-code'}"></i><span>${T('proj_coming_soon')}</span></div>`;
    }

    const item = x => `<div class="feat"><b>${x.title}</b><span>${x.text}</span></div>`;
    openModal(`<div class="detail"><div class="dmedia">${media}</div><div class="dtext">
   <h2>${T(p[3][0])}</h2><div class="tags">${p[4].map(x => `<span>${x}</span>`).join('')}</div>
   <div class="cs-block">
     <p class="dp"><b>${T('proj_challenge')}</b> ${T(p[3][1])}</p>
     ${sol ? `<p class="dp"><b>${T('proj_solution')}</b> ${sol}</p>` : ''}
   </div>
   ${vision ? `<h3 class="sub">${T('proj_vision_title')}</h3><p class="dp">${vision}</p>` : ''}
   ${feats && Array.isArray(feats) ? `<h3 class="sub">${T('proj_features_title')}</h3>${feats.map(item).join('')}` : ''}
   ${bit && Array.isArray(bit) ? `<h3 class="sub">${T('proj_blueprint_title')}</h3>${bi ? `<p class="dp">${bi}</p>` : ''}${bit.map(item).join('')}` : ''}
   ${p[5] ? `<a class="btn" href="${p[5]}" target="_blank" rel="noopener"><i class="fab fa-${gh(p[5])}"></i> ${T('proj_source')}</a>` : ''}
  </div></div>`);
}
function gallery(type) {
    const E = "assets/images/Events/", img = u => `<img src="${u}" alt="" loading="lazy">`;
    const G = {
        n8n: ['gallery_n8n_title', 'gallery_n8n_desc', ['assets/images/workflows/Workflow1.png', 'assets/images/workflows/workflow2.png'].map(img).join('')],
        events: ['gallery_events_title', 'gallery_events_desc', `<div class="g2">${["MIATHON'03.png", "SEMIA'04.jpg", "SEMIA'03.jpg", "TechConnect2.png", "TechConnect.png", "AtelierIdeation.jpg", "JourneeInformatique(e4).png"].map(f => img(E + f)).join('')}</div>`],
        cert: ['gallery_cert_title', 'gallery_cert_desc', ['mdso.pdf', 'mdso2.pdf'].map(f => `<iframe src="assets/docs/Certifs/${f}" title="${f}"></iframe>`).join('')]
    }[type];
    openModal(`<div class="gal"><h2>${T(G[0])}</h2><p>${T(G[1])}</p>${G[2]}</div>`);
}
function pdf(url, tk) { openModal(`<div class="gal"><h2>${T(tk)}</h2><iframe src="${url}" title="PDF"></iframe><div><a class="btn p" href="${url}" download><i class="fas fa-download"></i> ${T('resume_download')}</a></div></div>`) }
document.addEventListener('click', e => {
    if (e.target.id === 'modal' || e.target.closest('.x')) return closeModal();
    if (e.target.closest('.card a, .pcard a, .btn-pcard-src')) return;
    const g = e.target.closest('[data-g]'), f = e.target.closest('[data-pdf]'), o = e.target.closest('[data-open]');
    if (g) { e.preventDefault(); gallery(g.dataset.g) }
    else if (f) { e.preventDefault(); pdf(f.dataset.pdf, f.dataset.t) }
    else if (o) { e.preventDefault(); openProject(o.dataset.open) }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() });
$('#cfilters').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    $$('#cfilters .chip').forEach(c => c.classList.toggle('on', c === b)); cf = b.dataset.cf; renderCerts()
});
function applyLang(l) {
    lang = l; try { localStorage.setItem('portfolio_lang', l) } catch (e) { }
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(el => {
        const v = (translations[l] || {})[el.dataset.i18n] || FB[el.dataset.i18n]; if (!v) return;
        ('placeholder' in el && el.tagName !== 'BUTTON') ? el.placeholder = v : el.innerHTML = v
    });
    $$('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    $('#resume').href = (translations[l] || {}).resume_file || $('#resume').href;
    renderStatic(); renderProjects(); if (typeof renderFeatured === 'function') renderFeatured(); revealAll();
}
/* typed role line */
const roles = () => lang === 'fr' ? ['Développeuse full-stack', 'Passionnée par l\'IA', 'Étudiante à l\'ENSA Oujda'] : ['Full-stack developer', 'AI enthusiast', 'Software engineering student @ ENSA Oujda'];
/* card tilt (pointer devices only) */
function tilt() {
    if (!matchMedia('(hover:hover)').matches) return;
    $$('.card').forEach(c => {
        c.onmousemove = e => {
            const b = c.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
            c.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`
        };
        c.onmouseleave = () => c.style.transform = ''
    })
}
/* scroll reveal + progress + nav highlight */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
function revealAll() { $$('.rv:not(.in)').forEach(el => io.observe(el)) }
addEventListener('scroll', () => {
    const h = document.documentElement;
    $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'
}, { passive: true });
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$('.links a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)) }), { rootMargin: '-45% 0px -50% 0px' });
$$('main section').forEach(s => spy.observe(s));
/* controls */
$('#filters').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    $$('.chip').forEach(c => c.classList.toggle('on', c === b)); filter = b.dataset.f; renderProjects()
});
$$('[data-lang]').forEach(b => b.onclick = () => applyLang(b.dataset.lang));
const setTheme = l => { document.body.classList.toggle('dark', !l); $('#theme').innerHTML = `<i class="fas fa-${l ? 'moon' : 'sun'}"></i>`; try { localStorage.setItem('portfolio-theme', l ? 'light' : 'dark') } catch (e) { } };
try { setTheme(localStorage.getItem('portfolio-theme') !== 'dark') } catch (e) { setTheme(true) }
$('#theme').onclick = () => setTheme(document.body.classList.contains('dark'));
/* contact form (EmailJS) */
$('#form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = $('#send'), st = $('#status'); btn.disabled = true; st.textContent = T('form_sending');
    emailjs.send('service_6g691o8', 'template_d1yl0jh', { name: $('#from_name').value, email: $('#from_email').value, message: $('#message').value, title: $('#from_name').value }, 'e5T8GntvgC38wx6su')
        .then(() => { st.textContent = T('form_success'); e.target.reset() })
        .catch(() => { st.style.color = '#ef4444'; st.textContent = lang === 'fr' ? 'Échec de l\'envoi. Réessayez ou écrivez par email.' : 'Could not send. Try again or use the email link.' })
        .finally(() => btn.disabled = false)
});
/* ===== redesign layer ===== */
const X = {
    en: {
        nav_about: 'About',
        nav_skills: 'Skills',
        h1: 'I design and build <b class=gr>reliable backends</b> and AI-powered products.',
        h_lead: 'Passionate about clean architecture and turning ideas into modern full-stack applications using Java, Python, and today’s web technologies.',
        sec_work: 'Selected work',
        sub_work: 'Everything I have built, grouped by type. Open any project for the full case study.',
        sec_more: 'More projects',
        sec_about: 'About me',
        f_study: 'Education',
        v_study: 'Engineering degree, AI option, ENSA Oujda',
        f_loc: 'Based in',
        v_loc: 'Morocco',
        f_lang: 'Languages',
        v_lang: 'Arabic, French, English',
        f_open: 'Open to',
        v_open: 'PFE internship from January 2027',
        cta_title: "Let's build <b class=gr>something together.</b>",
        view_case: 'View case study'
    },

    fr: {
        nav_about: 'À propos',
        nav_skills: 'Compétences',
        h1: 'Je conçois et développe des <b class=gr>backends fiables</b> et des produits basés sur l\'IA.',
        h_lead: 'Passionnée par les architectures propres et la transformation d’idées en applications modernes full-stack avec Java, Python et les technologies web actuelles.',
        sec_work: 'Projets sélectionnés',
        sub_work: 'Tout ce que j\'ai construit, classé par type. Ouvrez un projet pour l\'étude de cas complète.',
        sec_more: 'Autres projets',
        sec_about: 'À propos de moi',
        f_study: 'Formation',
        v_study: 'Ingénieur, option IA, ENSA Oujda',
        f_loc: 'Localisation',
        v_loc: 'Maroc',
        f_lang: 'Langues',
        v_lang: 'Arabe, français, anglais',
        f_open: 'Disponible pour',
        v_open: 'Stage PFE dès janvier 2027',
        cta_title: 'Construisons <b class=gr>quelque chose ensemble.</b>',
        view_case: 'Voir l\'étude de cas'
    }
};
for (const l in X) Object.assign(translations[l] = translations[l] || {}, X[l]);
Object.assign(FB, X.en);
const X2 = { en: { sub_tech: 'The languages, frameworks and tools I use to build and ship software.', sub_certs: 'Verified courses and credentials, each with its PDF certificate.' }, fr: { sub_tech: 'Les langages, frameworks et outils que j\'utilise pour concevoir et livrer des logiciels.', sub_certs: 'Formations et certifications validées, avec leur certificat PDF.' } };
for (const l in X2) Object.assign(translations[l], X2[l]); Object.assign(FB, X2.en);
const FEAT = [['cdg', 'proj_cdg_capital_sol'], ['afriqai', 'proj_afriqai_sol'], ['chatbot', 'proj_chatbot_sol'], ['sanad', 'proj_miathon_sol']];
const ICONS = ['fa-code', 'fa-layer-group', 'fa-database', 'fa-brain', 'fa-server', 'fa-screwdriver-wrench', 'fa-diagram-project', 'fa-users', 'fa-language'];
const gh = u => u.includes('gitlab') ? 'gitlab' : 'github';
function enhance(sel) { $$(sel).forEach((el, i) => { el.classList.add('rv'); el.style.setProperty('--d', (i % 3) * .08 + 's') }); revealAll() }

let counted = false;
function renderMetrics() { $('#metrics').innerHTML = ['stat_projects', 'stat_techs', 'stat_certs', 'stat_intern'].map(k => { const t = T(k), m = t.match(/^(\d+)(\+?)\s*(.*)$/) || [, '', '', t]; return `<div class="mt"><b data-n="${m[1]}" data-s="${m[2] || ''}">${m[1]}${m[2] || ''}</b><span>${m[3]}</span></div>` }).join('') }
function countMetrics() { $$('#metrics b').forEach(b => { const n = +b.dataset.n; if (!n) return; let st = null; const step = ts => { st = st || ts; const k = Math.min((ts - st) / 1400, 1); b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + b.dataset.s; if (k < 1) requestAnimationFrame(step) }; requestAnimationFrame(step) }) }
new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting && !counted) { counted = true; countMetrics(); o.disconnect() } }), { threshold: .6 }).observe($('#metrics'));
renderStatic = function () {
    $('#stack').innerHTML = STACK.map((s, i) => `<div class="sk"><div class="ic"><i class="fas ${ICONS[i]}"></i></div><h4>${T(s[0])}</h4><div class="pills">${s[1].map(x => `<span>${x[0] === '@' ? T(x.slice(1)) : x}</span>`).join('')}</div></div>`).join('');
    renderCerts(); renderMetrics(); renderFeatured();
    $('#stack').classList.remove('rv'); enhance('#stack .sk'); enhance('#certList .cert'); enhance('#feat .fp'); if (window.updCap) updCap()
};
/* ===== category sections ===== */
Object.assign(FB, { revolving_text: 'BUILD • AUTOMATE • LEARN • DEPLOY • SOLVE • INNOVATE • BUILD • AUTOMATE • LEARN •', filter_web: 'Web Apps', filter_ai: 'AI & ML', filter_mobile: 'Mobile', filter_desktop: 'Desktop' });

/* scroll effects: nav shadow, back-to-top, hero parallax, timeline progress */
{
    let busy = false; const nav = $('nav'), tp = $('#top'), mk = $('#mock');
    const on = () => {
        busy = false; const h = innerHeight, y = scrollY; nav.classList.toggle('scrolled', y > 10); tp.classList.toggle('show', y > 700); if (y < h) mk.style.translate = `0 ${-y * .07}px`;
        $$('.tl').forEach(t => { const b = t.getBoundingClientRect(); t.style.setProperty('--fill', Math.max(0, Math.min(1, (h * .65 - b.top) / b.height))) })
    };
    addEventListener('scroll', () => { if (!busy) { busy = true; requestAnimationFrame(on) } }, { passive: true }); on(); tp.onclick = () => scrollTo({ top: 0, behavior: 'smooth' })
}
{ const tio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('on', e.isIntersecting)), { rootMargin: '-30% 0px -30% 0px' }); $$('.tl article').forEach(a => tio.observe(a)) }
/* ===== work-first: stacked case studies + hover-preview index ===== */
Object.assign(translations.en, { sec_all: 'All projects', sub_work: 'Six case studies with the real product running. Scroll to explore, or open one for the full story.' });
Object.assign(translations.fr, { sec_all: 'Tous les projets', sub_work: 'Six études de cas avec le produit en fonctionnement. Faites défiler pour explorer, ou ouvrez-en une.' });
Object.assign(FB, { sec_all: 'All projects', sub_work: 'Six case studies with the real product running. Scroll to explore, or open one for the full story.', stockify_sol: 'Symfony 7 and Doctrine power a sub-second analytics pipeline.', proj3_sol: 'Android SDK and Firebase, structured with the MVVM pattern.' });
Object.assign(translations.en, { sec_journey: 'My journey', sub_journey: 'Where I have worked, studied and given back.' });
Object.assign(translations.fr, { sec_journey: 'Mon parcours', sub_journey: 'Là où j\'ai travaillé, étudié et contribué.' });
Object.assign(FB, { sec_journey: 'My journey', sub_journey: 'Where I have worked, studied and given back.' });
const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => { }) } else v.pause() }), { threshold: .35 });
renderFeatured = function () {
    const featured = PROJECTS.slice(0, 6);
    $('#stk').innerHTML = featured.map((p, i) => {
        const id = p[0], d = DET[id] || {}, t = T(p[3][0]), sk = getSol(id);
        const media = d.v && !still
            ? `<video muted loop playsinline preload="none" poster="${p[2] || ''}" data-src="${A}${d.v}"></video>`
            : (p[2]
                ? `<img src="${p[2]}" alt="${t}" loading="lazy">`
                : `<div class="dmedia-placeholder"><i class="fas ${PROJ_ICONS[id] || 'fa-laptop-code'}"></i><span>${t}</span></div>`);
        return `<article class="stk" style="--i:${i}">
    <div class="stk-media" data-open="${id}"><div class="bar"><i></i><i></i><i></i><span>${t}</span></div><div class="shot">${media}</div></div>
    <div class="stk-info"><div class="meta"><span class="num">0${i + 1}</span><span class="cat">${T('filter_' + p[1])}</span></div><h3>${t}</h3>
     <p><b>${T('proj_challenge')}</b> ${T(p[3][1])}</p><p><b>${T('proj_solution')}</b> ${sk}</p>
     <div class="tags">${p[4].map(x => `<span>${x}</span>`).join('')}</div>
     <div class="fbtns"><button class="btn p" data-open="${id}">${T('view_case')}</button>${p[5] ? `<a class="src" href="${p[5]}" target="_blank" rel="noopener"><i class="fab fa-${gh(p[5])}"></i> ${T('proj_source')}</a>` : ''}</div></div></article>`;
    }).join('');
    $$('#stk video').forEach(v => vio.observe(v));
};

/* stack depth effect + parallax inside the frames */
{
    let b = false; const fx = () => {
        b = false; if (matchMedia('(max-width:900px)').matches) return; const c = $$('.stk');
        c.forEach((el, i) => {
            const r = el.getBoundingClientRect(), n = c[i + 1]; el.style.setProperty('--py', Math.max(-36, Math.min(36, (r.top + r.height / 2 - innerHeight / 2) * -.05)) + 'px');
            if (n) { const d = n.getBoundingClientRect().top - (parseFloat(getComputedStyle(el).top) || 0) - 24, p = Math.max(0, Math.min(1, 1 - d / (innerHeight * .5))); el.style.scale = 1 - p * .055; el.style.filter = `brightness(${1 - p * .12})` }
        })
    };
    addEventListener('scroll', () => { if (!b) { b = true; requestAnimationFrame(fx) } }, { passive: true }); addEventListener('resize', fx)
}

applyLang(lang);
