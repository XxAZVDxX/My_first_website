// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});


/*let darkBox = document.querySelector(".dark-box .fa-moon-o");
darkBox.addEventListener("click", ()=>{
  darkBox.onclick = function(){drakFunction()};
  if (darkBox.onclick){
    darkBox.classList.replace("fa-moon-o" ,"fa-sun-o")
} else {darkBox.classList.replace("fa-sun-o" ,"fa-moon-o");
}});
*/

//  Toggle text size
const A = document.querySelector(".A")
const a = document.querySelector(".a")
const tbutton = document.querySelector(".t-container")

tbutton.addEventListener("click", () => {
  A.classList.toggle("visible")
  a.classList.toggle("visible")
  element.classList.toggle("Text_size")
})

function textsizeFunction() {
  var element = document.body;
  element.classList.toggle("Text_size");
}

// Toggle dark mode
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const button = document.querySelector(".container")

button.addEventListener("click", () => {
  sun.classList.toggle("visible")
  moon.classList.toggle("visible")
  element.classList.toggle("dark-mode")
})
 
function drakFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let rollarrow = document.querySelector(".roll-arrow");
rollarrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let roll2arrow = document.querySelector(".roll2-arrow");
roll2arrow.onclick = function() {
 navLinks.classList.toggle("show5");
}

let mybutton = document.getElementById("topBtn");

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction(),scrollFunction(),scrollsocialFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
   {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("imgmySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Code by CodingTuting.Com 
function footerToggle(footerBtn) {
  $(footerBtn).toggleClass("btnActive");
  $(footerBtn).next().toggleClass("active");
}

//Get geolocation
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

