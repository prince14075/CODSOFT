$(document).ready(function () {
    // Slick slider setup
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
    });

    // Vanilla JS part using onclick
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav'); // Corrected selector

    hamberger.onclick = function () {
        mobileNav.classList.add('open');
    };

    times.onclick = function () {
        mobileNav.classList.remove('open');
    };
});
