function openNav() {
  document.getElementById("sidebar").style.width = "25%";
  // document.getElementById("body").style.marginLeft = "25%";
  document.getElementById("sidebar").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("close").focus();
    clearTimeout();
    }, 500); 
}

function openNavWithFocus(focus) {
  document.getElementById("sidebar").style.width = "25%";
  // document.getElementById("body").style.marginLeft = "25%";
  document.getElementById("sidebar").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById(focus).focus();
    clearTimeout();
    }, 500); 
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  // document.getElementById("header").style.marginLeft= "0";
  // setTimeout(() => {
  document.getElementById("sidebar").style.visibility = "hidden";  
  // }, 500);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let next = document.getElementById("next")
  let prev = document.getElementById("prev")
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translate(100px,10px)"
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.transform = "translate(0px,0px)"
}