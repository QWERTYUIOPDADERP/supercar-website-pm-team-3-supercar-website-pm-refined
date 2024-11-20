function openNav() {
    document.getElementById("sidebar").style.width = "275px";
    document.getElementById("header").style.marginLeft = "275px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("header").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }