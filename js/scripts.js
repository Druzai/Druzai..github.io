window.onscroll = function() {
  let topButton = document.getElementById("top-button");
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "22px";
    topButton.style.display = "block";
    if (window.innerWidth > 670) {
      document.getElementById("navbar-top").style.padding = "45px 10px";
      document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-right").style.display = "none";
      document.getElementById("navbar-top").style.padding = "45px 10px";
    }
  } 
  else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = null;
    topButton.style.display = null;
    if (window.innerWidth > 670) {
        document.getElementById("navbar-top").style.padding = null;
        document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-top").style.padding = null;
      setTimeout(() => {document.getElementById("navbar-right").style.display = null;}, 150);
      //document.getElementById("navbar-right").style.display = null;
    }
  }
};

window.onresize = function() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    if (window.innerWidth > 670) {
      document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-right").style.display = "none";
    }
  } 
  else {
    if (window.innerWidth > 670) {
        document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-right").style.display = null;
    }
  }
};

function goToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, FF, Opera
}

/*if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  } */



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
  //document.getElementsByClassName("dropbtn")[0].innerHTML = "Статьи про ОС ▲"
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
      /*document.getElementsByClassName("dropbtn")[0].innerHTML = "Статьи про ОС ▼";*/
    }
  }
  /*
  if (e.target.matches('.dropbtn') && myDropdown.classList.contains('show')) {
    document.getElementsByClassName("dropbtn")[0].innerHTML = "Статьи про ОС ▼";
  }*/
}