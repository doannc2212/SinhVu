//Get random Color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

//Function do something when you scroll
window.onscroll = function() {
  //window.onscroll to load function because i want to do something more with Scroll effect
  navScroll();
};

//Decrease height of navbar when scroll
function navScroll() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.style.paddingBottom = "0px";
    navbar.style.paddingTop = "0px";
  } else {
    navbar.style.paddingBottom = "14px";
    navbar.style.paddingTop = "10px";
  }
}
