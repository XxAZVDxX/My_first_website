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


//Multi_Btn
var currentIndex = 0;
var currentId = "camera";
$(document).ready(function() {
  $("#M_Btn").ferroMenu({
    position 	: "left-center",
    delay 		: 50,
    rotation 	: 720,
    margin		: 20
  });
});

var colors = {
    "camera" : {
      "background" : "#D06503",
      "index" : 0
    },
    "user" : {
      "background" : "#E9931A",
      "index" : 1
    },
    "mapmarker" : {
      "background" : "#1691BE",
      "index" : 2
    },
    "music" : {
      "background" : "#166BA2",
      "index" : 3
    },
    "commentalt" : {
      "background" : "#1B3647",
      "index" : 4
    },
    "moon" : {
      "background" : "#152836",
      "index" : 5
    }
    
};

function goTo(id){
var obj = eval("colors."+id);

$("body").css("background",obj.background);
$("#ferromenu-controller,#M_Btn li a").css("color",obj.background);
  if(obj.index > currentIndex){
    $(".active").addClass("off");
    $(".active").transition({
      x : -100,
      opacity : 0,
      zIndex : 0
    },600);
    
    $("#"+currentId).removeClass("active");
    
    $("#"+id).addClass("active");
    $("#"+id).transition({
      x : 400
    },0,function(){
      $("#"+id).removeClass("off");
      $("#"+id).transition({
        x : 0,
        opacity : 1,
        zIndex : 2
      },600);
    });
  }else if(obj.index < currentIndex){
    $(".active").addClass("off");
    $(".active").transition({
      x : 100,
      opacity : 0,
      zIndex : 0
    },600);
    $("#"+currentId).removeClass("active");
    
    
    $("#"+id).addClass("active");
    $("#"+id).transition({
      x : -400
    },0,function(){
      $("#"+id).removeClass("off");
      $("#"+id).transition({
        x : 0,
        opacity : 1,
        zIndex : 2
      },600);
    });
  }
  currentIndex = obj.index;
  currentId = id;
  
}






/*Search_Function*/
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "input-box-list");
      a.setAttribute("class", "input-box-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "input-box-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("input-box-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("input-box-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("input-box-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*Search_Data_Suggest*/
let suggestions = [
/*A*/"ABOUTUS","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
/*B*/"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi",
/*C*/"Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic",
/*D*/"Denmark","Djibouti","Dominica","Dominican Republic",
/*E*/"Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
/*F*/"Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies",
/*G*/"Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana",
/*H*/"Haiti","Honduras","Hong Kong","Hungary",
/*I*/"Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
/*J*/"Jamaica","Japan","Jersey","Jordan",
/*K*/"Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan",
/*L*/"Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
/*M*/"Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar",
/*N*/"Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway",
/*O*/"Oman",
/*P*/"Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico",
/*Q*/"Qatar",
/*R*/"Reunion","Romania","Russia","Rwanda",
/*S*/"Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
/*T*/"TEAM MEMBER","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu",
/*U*/"Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan",
/*V*/"Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)",
/*Y*/"Yemen",
/*Z*/"Zambia","Zimbabwe"
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), suggestions);

const searchWrapper = document.querySelector(".input-box");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon2 = searchWrapper.querySelector(".search_icon");
let linkTag = searchWrapper.querySelector("a");

// if user press any key and release

  inputBox.onmouseenter = (elmnt)=>{
    let userData = elmnt.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon2.onclick = ()=>{
            webLink = userData;
            linkTag.setAttribute("href", webLink +".html");
            linkTag.click();
        }
      }  else{ icon2.onclick = ()=>{

        linkTag.click();}
    } }