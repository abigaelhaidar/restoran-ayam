// Toggle class active (membuat animasi menu yg saat di pencet aktiv)
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// agar bisa di click diluar side bar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});