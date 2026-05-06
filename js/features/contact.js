/**
 * contact.js
 * Handles EmailJS integration, form validation, and confirmation modal
 */

export function initContactForm() {
    const form = document.getElementById('contact-form');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmSendBtn = document.getElementById('confirm-send-btn');

    if (!form || !confirmModal || !confirmSendBtn) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = document.getElementById('from_email');
        const nameInput = document.getElementById('from_name');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailRegex.test(email)) {
            const currentLang = document.documentElement.lang || 'en';
            const errorMsg = currentLang === 'fr'
                ? 'Veuillez entrer une adresse email valide.'
                : 'Please enter a valid email address.';
            alert(errorMsg);
            emailInput.focus();
            return;
        }

        // Populate Confirm Modal
        document.getElementById('confirm-name').textContent = name || '—';
        document.getElementById('confirm-email').textContent = email || '—';
        document.getElementById('confirm-message').textContent = message.slice(0, 200) + (message.length > 200 ? '…' : '');

        confirmModal.classList.add('active');
        document.body.classList.add('modal-open');
    });

    // Handle Cancel Button in Confirm Modal
    const cancelBtn = confirmModal.querySelector('.btn-secondary');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            confirmModal.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    }

    confirmSendBtn.addEventListener('click', function () {
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        // Close modal
        confirmModal.classList.remove('active');
        document.body.classList.remove('modal-open');

        const currentLang = document.documentElement.lang || 'en';
        const sendingText = (translations[currentLang] && translations[currentLang].form_sending) ? translations[currentLang].form_sending : 'Sending...';

        btn.disabled = true;
        btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText}`;

        const templateParams = {
            name: document.getElementById('from_name').value,
            email: document.getElementById('from_email').value,
            message: document.getElementById('message').value,
            title: document.getElementById('from_name').value,
        };

        const publicKey = "e5T8GntvgC38wx6su";
        emailjs.send('service_6g691o8', 'template_d1yl0jh', templateParams, publicKey)
            .then(() => {
                const successText = translations[currentLang].form_success || 'Mission Accomplished!';
                btn.innerHTML = `<i class="fas fa-check-circle"></i> ${successText}`;
                btn.style.background = '#27c93f';
                btn.style.boxShadow = '0 0 20px rgba(39, 201, 63, 0.4)';

                // Trigger Celebration!
                triggerConfetti();

                form.reset();
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.boxShadow = '';
                }, 4000);
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                const errorStatus = err.status || 'unknown';
                btn.innerHTML = `<i class="fas fa-times"></i> Error ${errorStatus}`;
                btn.style.background = '#ef4444';
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.background = '';
                }, 3500);
            });
    });
}

function triggerConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#8b5cf6', '#00ffca']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#8b5cf6', '#00ffca']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
