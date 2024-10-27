// change navbar style on scroll 
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () =>{
    navbar.classList.toggle('window_scroll',window.scrollY>0)
})

// show and hide content in faqs section 
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open')

        // change icon 
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }
        else{
            icon.className = 'uil uil-plus'
        }
    })
})

// show & hide nav menu 
const menu = document.querySelector('.nav_menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn  = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
// close nav menu 
const colseNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', colseNav)