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

const sidebar = document.querySelector('#sidebar')
        const hamburger = document.querySelector('#hamburger')
        const cart = document.querySelector('#cartButton')
        const account = document.querySelector('#user')
        document.addEventListener('click', e => {
        // test.insertAdjacentHTML = e.target    
            if(!sidebar.contains(e.target) && !hamburger.contains(e.target) && !cart.contains(e.target) && !account.contains(e.target)){
                closeNav()
                // document.writeln(e.target)
            }
        })