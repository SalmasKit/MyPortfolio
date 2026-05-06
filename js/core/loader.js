/**
 * loader.js
 * Handles the initial page loader progress bar and transition
 */

export function initLoader() {
    const progress = document.querySelector('.progress');
    if (!progress) return;

    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 20;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            gsap.to('#loader', { 
                y: "-100%", 
                duration: 1.2, 
                ease: "power4.inOut", 
                delay: 0.5,
                onComplete: () => {
                    const loader = document.getElementById('loader');
                    if (loader) loader.style.display = 'none';
                }
            });
        }
        progress.style.width = width + '%';
    }, 100);
}
