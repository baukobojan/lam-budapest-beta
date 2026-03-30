const menuBtn = document.getElementById('menu-links-container');
const nav = document.querySelector('.nav-links2');

menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
});