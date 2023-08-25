let menuIcon = document.querySelector('#burger-menu');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    navlist.classList.toggle('active'); // Toggle 'active' class
}

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.container h6', { delay: 150, origin: 'left' });
sr.reveal('.container h3', { delay: 250, origin: 'right' });
sr.reveal('.container h1', { delay: 400, origin: 'top' });
sr.reveal('.container p', { delay: 600, origin: 'right' });
sr.reveal('.social', { delay: 600, origin: 'top' })
sr.reveal('.logo', { delay: 600, origin: 'right' })
sr.reveal('.navlist', { delay: 800, origin: 'right' });