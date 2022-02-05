hamBurger = document.getElementsByClassName('hamburger-img')[0];
navBar = document.getElementsByClassName('navigation-bar')[0];
navBarRightSide = document.getElementsByClassName('right-side')[0];

hamBurger.addEventListener('click',()=>{
    navBar.classList.toggle('h-nav-resp');
    navBarRightSide.classList.toggle('v-nav-resp');
})