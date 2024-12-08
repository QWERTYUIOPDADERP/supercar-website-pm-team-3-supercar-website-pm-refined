
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

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let slideIndex = 1

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
  const image = document.getElementById('merchandiseItemImage')
  if(value!= null){
    title.innerText=value
    image.src="images/merchandise/"+value+".jpg"
  }
}

function addToCart(value){

  let items = []
  if (localStorage.getItem("items") === null) {

  } else {
    items = JSON.parse(localStorage.getItem("items"))
  }

  items.push(value)
  localStorage.setItem("items",JSON.stringify(items))

  updateCart()
  
    
  window.alert("Successfully added to cart!")
}

function updateCart(){
  const cartNum = document.getElementById('cartNumber')
  if(localStorage.getItem("items") === null || localStorage.getItem("items") === "[]" || cartNum.innerText==="0"){
    cartNum.innerText=""
    cartNum.style.backgroundColor="transparent"
  } else{
    if(JSON.parse(localStorage.getItem("items")).length<9){
      cartNum.innerText=JSON.parse(localStorage.getItem("items")).length
    } else {
      cartNum.innerText="9+"
    }
    cartNum.style.backgroundColor="white"
  }
  if(JSON.stringify(window.location.href).includes("cart.html")){
    createButton()
    cartItems()
  }
  // cartNum.innerText="test"
}

function cartItems(){
  const items = document.getElementById('cartItems')
  if(localStorage.getItem("items") === null || localStorage.getItem("items") === "[]"){
    items.innerText="No items"
  } else{
    items.innerText=JSON.parse(localStorage.getItem("items"))
  }
}

function removeItem(obj){
  let items = []
  let str = obj.slice(-1);
  if (localStorage.getItem("items") === null) {
  } else {
    items = JSON.parse(localStorage.getItem("items"))
    removeArrayItem(items,items[str])
    // removeItem(items,items[str])
    localStorage.setItem("items",JSON.stringify(items))
  }
  updateCart()
}

function onCartStart(){
  updateCart()
}

function createButton(){
  let sections = document.querySelectorAll("div.cartItem")
  for(var i = 0; i < sections.length; i++){
    sections[i].remove()
  }
  let ammount = JSON.parse(localStorage.getItem("items")).length
  for (var i = 0; i < ammount; i++) {
    main=document.getElementById("main")
    var section = document.createElement("div")
    var txt = document.createElement("a");
    var btn = document.createElement("button")
    var column = document.createElement("div")
    var img = document.createElement("img")

    btn.id = "removeCartItem"+i
    btn.className = "removeCartItem button"
    section.id = "cartItem"+i
    section.className = "cartItem twoEvenRow"
    txt.id = "itemText"+i
    txt.className = "itemText"
    column.id = "itemColumn"+i
    column.className = "itemColumn column"
    img.id = "itemImage"+i
    img.className = "itemImage"

    txt.href="merchandiseItem.html?item="+JSON.parse(localStorage.getItem("items"))[i]
    img.src="images/merchandise/"+JSON.parse(localStorage.getItem('items'))[i]+".jpg"

    const words = JSON.parse(localStorage.getItem("items"))[i].split("-");
    console.log(words)

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    const buttonText = document.createTextNode("Remove item")
    const text = document.createTextNode("Item "+(i+1)+": "+words.join(' '))

    btn.appendChild(buttonText)
    txt.appendChild(text)
    column.appendChild(txt)
    column.appendChild(img)

    section.appendChild(column)
    section.appendChild(btn)

    main.appendChild(section)
    btn.onclick = function() { removeItem(this.id) }
  }
}

function onStart(){
  updateCart()
}

function removeArrayItem(array, itemToRemove) {
  const index = array.indexOf(itemToRemove);

  if (index !== -1) {
      array.splice(index, 1);
  }
}