// hero section carousel
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const carousel = document.querySelector(".carousel-section");

let currentIndex = 0;

function slideImage(input, index){
    input.style.transform = `translateX(-${index * 100}%)`
}

function nextBtn() {
    if(currentIndex < images.length - 1){
        currentIndex++;
        slideImage(slider, currentIndex);
    }
    else{
        currentIndex = 0;
        slideImage(slider, currentIndex);
    }       
}

function prevBtn() {
    if(currentIndex > 0){
        currentIndex--;
        slideImage(slider, currentIndex);
    }
    else{
        currentIndex = images.length - 1;
        slideImage(slider, currentIndex);
    }
}

let autoSlide = setInterval(nextBtn, 3000);

carousel.addEventListener("mouseover", ()=>{
    clearInterval(autoSlide);
})

carousel.addEventListener("mouseleave", ()=>{
    autoSlide = setInterval(nextBtn, 3000); 
})
// hero section carousel

// testimonial section carousel
const testimonialSlider = document.querySelector(".testimonial-wrapper");
const testimonials = document.querySelectorAll(".testimonials")

let testimonialCurrentIndex = 0;


function nextButton(){
    if(testimonialCurrentIndex < testimonials.length - 1){
        testimonialCurrentIndex++;
        slideImage(testimonialSlider, testimonialCurrentIndex)
    }
    else{
        testimonialCurrentIndex = 0;
        slideImage(testimonialSlider, testimonialCurrentIndex)
    }
}

function prevButton() {
    if(testimonialCurrentIndex > 0){
        testimonialCurrentIndex--;
        slideImage(testimonialSlider, testimonialCurrentIndex);

    }
    else{
        testimonialCurrentIndex = testimonials.length - 1;
        slideImage(testimonialSlider, testimonialCurrentIndex);
    }
}
// testimonial section carousel

// responsive navbar

const body = document.querySelector("body");
const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar-list");
const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function(){
    dropdownList.classList.toggle("open-projects");
})

function toggleMenu(){
        navbar.classList.toggle("open");
        if (navbar.classList.contains("open")){
            body.style.overflow = "hidden";
        }
        else{
            body.style.overflow = "scroll";
        }
    }
    

