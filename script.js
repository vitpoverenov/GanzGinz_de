let menu = document.querySelector ('#menu-icon') ;
let navlist = document.querySelector ('#navlist') ;

menu.onclick = () => {
    menu.classList.toggle('')
}

const rv = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal ('.container h6',{ delay: 150, origin: 'left'});

sr.reveal ('.container h3',{ delay: 250, origin: 'right'});

sr.reveal ('.container h1',{ delay: 400, origin: 'top'});