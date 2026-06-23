const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    revealSections();
    activeMenu();
});

function revealSections(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }
    });
}

function activeMenu(){

    const sections = document.querySelectorAll("section");
    const nav = document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    nav.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }
    });
}

revealSections();
activeMenu();