// --- 1. INTRO & LOAD FIX ---
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('intro-overlay').style.transform = 'translateY(-100%)';

        const allReveals = document.querySelectorAll('.reveal');
        allReveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('active');
            }
            observer.observe(el);
        });

    }, 1200);
});

// --- 2. CUSTOM CURSOR ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
});

document.querySelectorAll('.hover-trigger').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// --- 3. MOBILE MENU LOGIC (FECHA AO CLICAR) ---
function toggleMenu(forceState) {
    const menu = document.getElementById('mobileMenu');

    // Se forçar fechado (false), remove a classe independentemente do estado
    if (forceState === false) {
        menu.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else {
        // Se não, alterna normal (botão de fechar ou abrir)
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

// --- 4. SCROLL REVEAL OBSERVER ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// --- 5. DADOS (COM ISO) ---
const portfolioData = [
    {
        id: 'profundidade',
        title: 'Profundidade de Campo',
        cover: 'https://picsum.photos/seed/dof/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/dof1/1200/800', title: 'Retrato Suave', shutter: '1/125', aperture: 'f/1.8', iso: 'ISO 100', tech: 'Foco Seletivo', desc: 'Abertura máxima para isolar o sujeito.' },
            { src: 'https://picsum.photos/seed/dof2/1200/800', title: 'Natureza Detalhada', shutter: '1/200', aperture: 'f/2.8', iso: 'ISO 400', tech: 'Bokeh', desc: 'Círculos de luz no fundo desfocado.' }
        ]
    },
    {
        id: 'congelamento',
        title: 'Congelamento',
        cover: 'https://picsum.photos/seed/freeze/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/freeze1/1200/800', title: 'Impacto', shutter: '1/1000', aperture: 'f/5.6', iso: 'ISO 800', tech: 'Ação Rápida', desc: 'Parar o movimento instantâneo.' },
            { src: 'https://picsum.photos/seed/freeze2/1200/800', title: 'Gotas', shutter: '1/2000', aperture: 'f/4', iso: 'ISO 1600', tech: 'Freeze', desc: 'Capturar a física da água.' }
        ]
    },
    {
        id: 'arrastamento',
        title: 'Arrastamento',
        cover: 'https://picsum.photos/seed/drag/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/drag1/1200/800', title: 'Fluxo Urbano', shutter: '1s', aperture: 'f/16', iso: 'ISO 100', tech: 'Long Exposure', desc: 'Rastos de luz na noite.' },
            { src: 'https://picsum.photos/seed/drag2/1200/800', title: 'Movimento Abstrato', shutter: '0.5s', aperture: 'f/22', iso: 'ISO 50', tech: 'Intentional Blur', desc: 'Movimento deliberado da câmara.' }
        ]
    },
    {
        id: 'lightpainting',
        title: 'Light Painting',
        cover: 'https://picsum.photos/seed/lp/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/lp1/1200/800', title: 'Neon Sketch', shutter: '10s', aperture: 'f/11', iso: 'ISO 100', tech: 'Luz Móvel', desc: 'Desenhar no ar com luz.' },
            { src: 'https://picsum.photos/seed/lp2/1200/800', title: 'Steel Wool', shutter: '15s', aperture: 'f/8', iso: 'ISO 200', tech: 'Faíscas', desc: 'Rotação de lã de aço incandescente.' }
        ]
    },
    {
        id: 'panning',
        title: 'Panning',
        cover: 'https://picsum.photos/seed/pan/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/pan1/1200/800', title: 'Velocidade', shutter: '1/60', aperture: 'f/8', iso: 'ISO 400', tech: 'Rastreamento', desc: 'Objeto focado, fundo desfocado.' },
            { src: 'https://picsum.photos/seed/pan2/1200/800', title: 'Moto', shutter: '1/30', aperture: 'f/16', iso: 'ISO 100', tech: 'Slow Shutter Pan', desc: 'Máxima sensação de movimento.' }
        ]
    },
    {
        id: 'pontofuga',
        title: 'Ponto de Fuga',
        cover: 'https://picsum.photos/seed/vanish/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/vanish1/1200/800', title: 'Infinito', shutter: '1/60', aperture: 'f/11', iso: 'ISO 200', tech: 'Perspetiva', desc: 'Linhas convergentes.' },
            { src: 'https://picsum.photos/seed/vanish2/1200/800', title: 'Simetria', shutter: '1/125', aperture: 'f/8', iso: 'ISO 100', tech: 'Centro', desc: 'Equilíbrio visual perfeito.' }
        ]
    },
    {
        id: 'linhashorizontais',
        title: 'Linhas Horizontais',
        cover: 'https://picsum.photos/seed/horiz/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/horiz1/1200/800', title: 'Mar', shutter: '1/250', aperture: 'f/11', iso: 'ISO 100', tech: 'Horizonte', desc: 'Estabilidade e calma.' },
            { src: 'https://picsum.photos/seed/horiz2/1200/800', title: 'Deserto', shutter: '1/500', aperture: 'f/16', iso: 'ISO 200', tech: 'Flat Lay', desc: 'Textura horizontal.' }
        ]
    },
    {
        id: 'panoramicas',
        title: 'Panorâmicas',
        cover: 'https://picsum.photos/seed/pano/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/pano1/2000/800', title: 'Cidade Grande', shutter: '1/100', aperture: 'f/16', iso: 'ISO 100', tech: 'Wide Angle', desc: 'Amplitude visual.' },
            { src: 'https://picsum.photos/seed/pano2/2000/800', title: 'Montanhas', shutter: '1/60', aperture: 'f/22', iso: 'ISO 50', tech: 'Paisagem', desc: 'Grande-angular.' }
        ]
    },
    {
        id: 'texturas',
        title: 'Texturas',
        cover: 'https://picsum.photos/seed/text/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/text1/1200/800', title: 'Muro', shutter: '1/125', aperture: 'f/5.6', iso: 'ISO 400', tech: 'Detalhe', desc: 'Pintura descascada.' },
            { src: 'https://picsum.photos/seed/text2/1200/800', title: 'Couro', shutter: '1/60', aperture: 'f/8', iso: 'ISO 800', tech: 'Macro', desc: 'Sensação tátil visual.' }
        ]
    },
    {
        id: 'iluminacao',
        title: 'Iluminação',
        cover: 'https://picsum.photos/seed/light/800/1000',
        photos: [
            { src: 'https://picsum.photos/seed/light1/1200/800', title: 'Rembrandt', shutter: '1/125', aperture: 'f/8', iso: 'ISO 400', tech: 'Lateral', desc: 'Clássico lighting.' },
            { src: 'https://picsum.photos/seed/light2/1200/800', title: 'Silhueta', shutter: '1/250', aperture: 'f/4', iso: 'ISO 800', tech: 'Contraluz', desc: 'Drama e mistério.' },
            { src: 'https://picsum.photos/seed/light3/1200/800', title: 'Softbox', shutter: '1/60', aperture: 'f/11', iso: 'ISO 200', tech: 'Difusa', desc: 'Luz suave e uniforme.' },
            { src: 'https://picsum.photos/seed/light4/1200/800', title: 'Hard Light', shutter: '1/100', aperture: 'f/5.6', iso: 'ISO 100', tech: 'Direta', desc: 'Sombras fortes e definidas.' }
        ]
    }
];

// --- 6. NAVEGAÇÃO ---
const views = {
    home: document.getElementById('home-view'),
    gallery: document.getElementById('gallery-view'),
    about: document.getElementById('about-view'),
    contact: document.getElementById('contact-view')
};

function switchView(viewName) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Object.values(views).forEach(v => v.classList.remove('active'));

    // Garante que o menu fecha ao mudar de página (segurança extra)
    toggleMenu(false);

    setTimeout(() => {
        views[viewName].classList.add('active');
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('active');
            observer.observe(el);
            setTimeout(() => el.classList.add('active'), 50);
        });
    }, 100);

    // Chama animação de skills se for about
    if (viewName === 'about') {
        animateSkills();
    }
}

// Render Categories
const catGrid = document.getElementById('cat-grid');
portfolioData.forEach((cat, index) => {
    const div = document.createElement('div');
    div.className = 'cat-item reveal';
    div.style.transitionDelay = `${index * 100}ms`;
    div.innerHTML = `
                <div class="cat-img-wrapper hover-trigger">
                    <img src="${cat.cover}" alt="${cat.title}">
                </div>
                <div class="cat-info">
                    <span class="cat-num">0${index + 1}</span>
                    <span class="cat-title">${cat.title}</span>
                </div>
            `;
    div.onclick = () => openGallery(cat);
    catGrid.appendChild(div);
});

// Open Gallery
function openGallery(cat) {
    document.getElementById('gal-title').innerText = cat.title;
    const grid = document.getElementById('gal-content');
    grid.innerHTML = '';

    cat.photos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'photo-card reveal hover-trigger';
        card.innerHTML = `
                    <img src="${p.src}" alt="${p.title}">
                    <div class="photo-meta">
                        <div class="meta-row">${p.shutter} / ${p.aperture} / ISO ${p.iso.replace('ISO ', '')}</div>
                        <div style="font-size: 0.9rem; color: #fff;">${p.title}</div>
                    </div>
                `;
        card.onclick = () => openLB(p);
        grid.appendChild(card);
    });
    switchView('gallery');
}

// --- 7. ANIMAÇÃO DE SKILLS ---
function animateSkills() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        // Reseta para 0 antes de animar (garante repetição)
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300); // Pequeno delay para suavidade
    });
}

// Lightbox Logic
const lb = document.getElementById('lightbox');
function openLB(data) {
    document.getElementById('lb-img').src = data.src;
    document.getElementById('lb-title').innerText = data.title;
    document.getElementById('lb-tech').innerText = data.tech;
    document.getElementById('lb-shutter').innerText = data.shutter;
    document.getElementById('lb-aperture').innerText = data.aperture;
    document.getElementById('lb-iso').innerText = data.iso;
    document.getElementById('lb-desc').innerText = data.desc;
    lb.classList.add('open');

    // TRAVA O SCROLL DO SITE DE FUNDO
    document.body.classList.add('lightbox-active');
}
function closeLB() {
    lb.classList.remove('open');
    // LIBERTA O SCROLL
    document.body.classList.remove('lightbox-active');
}
lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLB();
});