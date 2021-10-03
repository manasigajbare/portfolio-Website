$(document).ready(function(){

    let humberger = document.querySelector('.humburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    humberger.addEventListener("click", function(){
        mobileNav.classList.add('open');
    });
    
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });
});