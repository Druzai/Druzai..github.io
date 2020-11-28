window.onscroll = function() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "22px";
    if (screen.width > 670) {
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
    if (screen.width > 670) {
        document.getElementById("navbar-top").style.padding = null;
        document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-top").style.padding = null;
      document.getElementById("navbar-right").style.display = null;
    }
  }
};

window.onresize = function() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    if (screen.width > 670) {
      document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-right").style.display = "none";
    }
  } 
  else {
    if (screen.width > 670) {
        document.getElementById("navbar-right").style.display = null;
    }
    else {
      document.getElementById("navbar-right").style.display = null;
    }
  }
};

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function getURL(URL){
    let loc = window.location.pathname;
    let dir = loc.substring(0, loc.lastIndexOf('/'));
    if (dir.substring(dir.lastIndexOf('/') + 1) == "OS")
        dir = dir.substring(0, dir.lastIndexOf('/'));
    window.location.href = dir + '/' + URL;
}