// Sample JavaScript code (replace with your functionality)
document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript code here
    console.log('JavaScript loaded!');
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});