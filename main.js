const navLinks = document.querySelectorAll('.collapsible li');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        target.scrollIntoView({behavior: 'smooth'});
    });
});
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.collapsible');
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
