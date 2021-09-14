burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('visiblity-resp');
    navList.classList.toggle('visiblity-resp');
    navbar.classList.toggle('nav-height-resp');
});