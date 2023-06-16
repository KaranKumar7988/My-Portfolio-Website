// menu show and hidden 

const navmenu = document.getElementById('nav-menu'),
navtoggle = document.getElementById('nav-toggle'),
navclose = document.getElementById('nav-close')

//  menu show 

if(navtoggle){
    navtoggle.addEventListener('click',()=>{
        navmenu.classList.add('show-menu')
    })
}

// menu hide 

if(navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu')
    })
}

//  remove menu mobile 


const navlink = document.querySelectorAll('.nav_link')

function linkaction(){
    const navmenu = document.getElementById('nav-menu')

    // for removal of show menu class  for each element of nav-link 

    navmenu.classList.remove('show-menu')
}


navlink.forEach(n => n.addEventListener('click',linkaction))

// skills section close on 

const skillscontent = document.getElementsByClassName('skills_content'),
skillsheader = document.querySelectorAll('.skills_header')

function toggleskills(){

    let itemclass = this.parentNode.className

    for(i = 0; i< skillscontent.length; i++){
        skillscontent[i].className = 'skills_content skills_close'
    }

    if(itemclass === 'skills_content skills_close'){

        this.parentNode.className = 'skills_content skills_open'

    }
}

skillsheader.forEach((el) => {
    el.addEventListener('click',toggleskills)

})


// services modal 

const modalviews = document.querySelectorAll('.services_modal'),
modalbtns = document.querySelectorAll('.services_button'),
modalclose = document.querySelectorAll('.services_modal-close')

let modal = function(modalclick){
    modalviews[modalclick].classList.add('active-modal')
}

modalbtns.forEach((modalbtns,i)=>{
    modalbtns.addEventListener('click',()=>{

        modal(i)
    })
})

modalclose.forEach((modalclose)=>{

    modalclose.addEventListener('click',()=>{


        modalviews.forEach((modalviews)=>{
            modalviews.classList.remove('active-modal')


        })
    })
})

// show scroll top

function scrollup(){

    const scrollup = document.getElementById('scroll-up');

    if(this.scrollY >= 500)scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll')

}

window.addEventListener('scroll',scrollup)


// dark - light theme 


const themebutton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'uil-sun'


// previously selected 

const selectedtheme = localStorage.getItem('selected-theme')
const selectedicon = localStorage.getItem('selected-icon')


// obtaining the current theme 

const getcurrentheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getcurrenicon = () => themebutton.classList.contains(icontheme) ? 'uil-moon':'uil-sun'

// validate if user prev choose a topic 

if(selectedtheme){

    document.body.classList[selectedtheme == 'dark' ? 'add' : 'remove'](darktheme)
    themebutton.classList[selectedicon == 'uil-moon'? 'add': 'remove'](icontheme)
}

themebutton.addEventListener('click',() => {

    // add or remv dark theme


document.body.classList.toggle(darktheme)
themebutton.classList.toggle(icontheme)

// saving the current theme 

localStorage.setItem('selected-theme',getcurrentheme())
localStorage.setItem('selected-icon',getcurrentIcon())

})



