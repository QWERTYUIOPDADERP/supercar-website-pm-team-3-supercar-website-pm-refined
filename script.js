
function openNav() {
  document.getElementById("sidebar").style.width = "25%";
  // document.getElementById("body").style.marginLeft = "25%";
  document.getElementById("sidebar").style.visibility = "visible";
  document.getElementById("sidebar").style.minWidth = "320px";
  setTimeout(() => {
    document.getElementById("close").focus();
    clearTimeout();
    }, 500); 
}

function openNavWithFocus(focus) {
  document.getElementById("sidebar").style.width = "25%";
  // document.getElementById("body").style.marginLeft = "25%";
  document.getElementById("sidebar").style.visibility = "visible";
  document.getElementById("sidebar").style.minWidth = "320px";
  setTimeout(() => {
    document.getElementById(focus).focus();
    clearTimeout();
    }, 500); 
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("sidebar").style.minWidth = "0px";
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
      bigImage.src="images/instagram/triongraysupercars2.jpg"
      bigImage.alt="A grey car hidden in shadow facing away from the camera"
      smallImage1.src="images/instagram/trionblacksupercar.jpg"
      smallImage1.alt="A black car viewed at an angle on a white background"
      smallImage2.src="images/instagram/trionblacksupercar2.jpg"
      smallImage2.alt="A low riding black car sitting in front of a city"
      smallImage3.src="images/instagram/trionblacksupercars3.jpg"
      smallImage3.alt="A close up of the back and spoiler of a black car"
      smallImage4.src="images/instagram/trionsupercarblack6.jpg"
      smallImage4.alt="The side view of a black car with tinted windows in a parking garage"
      break;
    case "nemesis":
      // title.innerText = "Black Widow"
      bigImage.src="images/instagram/trionorangesupercars.jpg"
      bigImage.alt="An orange car with a black racing strip facing towards the camera"
      smallImage1.src="images/gallery/nemesis-e-blue-back-1024x537.jpg"
      smallImage1.alt="A blue racing car viewed from behind"
      smallImage2.src="images/gallery/Nemesis_blk_corrug-1024x633.png"
      smallImage2.alt="A black racing car with a spoiler facing away from the camera towards the right"
      smallImage3.src="images/gallery/front.png"
      smallImage3.alt="A white car with a black racing strip in the middle facing the camera"
      smallImage4.src="images/gallery/Nemesis_Interior_render1-1024x575.jpg"
      smallImage4.alt="An orange car viewed from the sideview with scissor doors"
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
  const desc = document.getElementById('itemDescription')
  if(value!= null){
    const words = value.split("-");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    title.innerText=words.join(' ')
    image.src="images/merchandise/"+value+".jpg"
    switch (value) {
      case "polo-yellow-collar":
        image.alt = "A black polo with a yellow collar."
        desc.innerText="Elevate your style with our sleek and sophisticated Black Polo with a Yellow Collar. This classic polo shirt is designed for those who appreciate a touch of elegance and a pop of color in their wardrobe. Crafted from a blend of high-quality cotton and polyester, this polo offers exceptional comfort and durability. The striking yellow collar adds a vibrant contrast to the timeless black body, making it a standout piece in any casual or semi-formal setting."
        break;
      case "polo-green-collar":
        image.alt="A black polo with a green collar."
        desc.innerText="Elevate your style with our sleek and sophisticated Black Polo with a Green Collar. This classic polo shirt is designed for those who appreciate a touch of elegance and a pop of color in their wardrobe. Crafted from a blend of high-quality cotton and polyester, this polo offers exceptional comfort and durability. The striking green collar adds a vibrant contrast to the timeless black body, making it a standout piece in any casual or semi-formal setting."
        break;
      case "suit":
        image.alt="A gray suit with a gold tie."
        desc.innerText="Elevate your style with our sleek and sophisticated suit. This classic suit is designed for those who appreciate a touch of elegance and a pop of color in their wardrobe. The striking yellow collar adds a vibrant contrast to the timeless black body, making it a standout piece in any formal setting. Perfect for business meetings, formal events, or special occasions. Experience the perfect blend of comfort, style, and versatility with this exceptional piece."
        break;
      case "baseball-cap":
        image.alt="A black baseball cap."
        desc.innerText="Introducing our baseball cap: the perfect blend of style and comfort! Crafted from high-quality, breathable cotton, this cap features a timeless design with a slightly distressed finish for that authentic, worn-in look. The adjustable strap ensures a perfect fit for all head sizes, while the curved brim provides excellent sun protection. Whether you're hitting the ballpark, running errands, or just looking to add a touch of casual cool to your outfit, this cap is your go-to accessory."
        break;
      case "straw-beach-hat":
        image.alt="A straw hat with a green ribbon."
        desc.innerText="Introducing our Elegant Straw Beach Hat - the ultimate accessory for your sunny adventures! Handwoven from premium natural straw, this hat boasts a wide brim that offers excellent sun protection while adding a touch of sophistication to your beachwear. The lightweight and breathable design ensures maximum comfort, even on the hottest days. With its chic ribbon band and adjustable inner drawstring, this hat provides a secure and stylish fit for all head sizes."
        break;
      default:
        desc.innerText="Item does not exist"
        break;
    }
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
  if(JSON.stringify(window.location.href).includes("cart")){
    createButton()
    cartItems()
  }
  // cartNum.innerText="test"
}

function cartItems(){
  const items = document.getElementById('cartItems')
  const checkout = document.getElementById('checkOut')
  if(localStorage.getItem("items") === null || localStorage.getItem("items") === "[]"){
    items.innerText="No items"
    checkout.style.visibility = "hidden"
  } else{
    items.innerText="Items:"
    checkout.style.visibility = "visible"
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
    var checkout = document.getElementById('checkOut')
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

    checkout.before(section)
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

function popup(text){
  window.alert(text)
}

function login(username){
  localStorage.setItem("username",username)
  setUsername()
}

function setUsername(){
  let params = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop),})
  if(params.name != null){
    localStorage.setItem("name",params.name)
    document.getElementById("username").innerText=localStorage.getItem("name")
  } else if(localStorage.getItem("name")!=null){
    document.getElementById("username").innerText=localStorage.getItem("name")
  } else {
    document.getElementById("username").innerText="Not logged in"
  }
}

function signout(){
  localStorage.removeItem("name")
  popup('Sucessfully Signed Out')
}
