document.addEventListener('DOMContentLoaded', () => {
    // Header Logic
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('-translate-y-full');
        } else {
            header.classList.remove('-translate-y-full');
        }
        lastScrollY = window.scrollY;
    });

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Modal Logic
    const privacyBtn = document.getElementById('privacy-btn');
    const modal = document.getElementById('privacy-modal');
    const closeModal = document.getElementById('close-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const toggleModal = () => {
        modal.classList.toggle('hidden');
        modal.classList.toggle('flex');
    };

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    closeModal.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });
});