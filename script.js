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

function setPageInformation(value){
  // const title = document.getElementById('customizeCarTitle')
  const bigImage = document.getElementById('largeImage')
  const smallImage1 = document.getElementById('smallImage1')
  const smallImage2 = document.getElementById('smallImage2')
  const smallImage3 = document.getElementById('smallImage3')
  const smallImage4 = document.getElementById('smallImage4')

  switch (value) {
    case "blackwidow":
      // title.innerText = "Nemesis"
      bigImage.src="images/instagram/trionblacksupercar4.jpg"
      smallImage1.src="images/instagram/trionblacksupercar.jpg"
      smallImage2.src="images/instagram/trionblacksupercar2.jpg"
      smallImage3.src="images/instagram/trionblacksupercars3.jpg"
      smallImage4.src="images/instagram/trionsupercarblack6.jpg"
      break;
    case "nemesis":
      // title.innerText = "Black Widow"
      bigImage.src="images/instagram/trionorangesupercars.jpg"
      smallImage1.src="images/gallery/nemesis-e-blue-back-1024x537.jpg"
      smallImage2.src="images/gallery/Nemesis_blk_corrug-1024x633.png"
      smallImage3.src="images/gallery/front.png"
      smallImage4.src="images/gallery/Nemesis_Interior_render1-1024x575.jpg"
      break;
    default:
      title.innerText = "error"
      break;
  }
}

function setPageInformationItem(value){
  // const title = document.getElementById('customizeCarTitle')
  const title = document.getElementById('itemName')
  title.innerText=value
}