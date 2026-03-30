const menuBtn = document.getElementById('menu-links-container');
const dropdown = document.getElementById('nav-menu-items');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('change');
    dropdown.classList.toggle('open');
});