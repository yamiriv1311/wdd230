


//----------------------------------------- MENU / NAVIGATION ---------------------//

function toggleMenu(){
  document.getElementById("ul_navigation").classList.toggle("open");
  document.getElementById("menuButton").classList.toggle("open");
}

const x = document.getElementById("menuButton");
x.onclick = toggleMenu;


//-------------- LAZY LOADING ----------------------//
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = function(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = function() {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver(function(items, imageObserver) {
    items.forEach(function(item) {
      if(item.isIntersecting) {
        loadImages(item.target);
        imageObserver.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach(function(img) {
    imageObserver.observe(img);
  });
}

else{
  imagesToLoad.forEach(function(img) {
    loadImages(img);
  });
}


  
//-------------- LAST MODIFICATION ----------------------//

document.querySelector("#dateFooter").textContent = document.lastModified;
var options = {year: "numeric"};
document.querySelector("#year").textContent = new Date().toLocaleDateString("en-US", options);


//----------------------------------------- LIKE BUTTON ---------------------//

button1();

function button1() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  document.getElementById("likesNumber1").innerHTML = localStorage.clickcount;
}

localStorage.clear()

button2();

function button2() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  document.getElementById("likesNumber2").innerHTML = localStorage.clickcount;
}

button3();

function button3() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  document.getElementById("likesNumber3").innerHTML = localStorage.clickcount;
}

button4();

function button4() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  document.getElementById("likesNumber4").innerHTML = localStorage.clickcount;
}

