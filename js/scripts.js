// Анимация уменьшения и скрытия меню (в мобильной версии сайта) при прокрутке вниз
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
    }
  }
};
// Скрытие и отображение ссылок меню при изменении размера страницы
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
// Перемащение вверх страницы
function goToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, FF, Opera
}

// Функция добавляет класс show выпадающему списку
function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Функция скрывает выпадающий список
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show'))
      myDropdown.classList.remove('show');
  }
}