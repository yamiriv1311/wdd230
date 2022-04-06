
//-------------- LAST MODIFICATION ----------------------//

document.querySelector("#dateFooter").textContent = document.lastModified;
var options = {year: "numeric"};
document.querySelector("#year").textContent = new Date().toLocaleDateString("en-US", options);



//-------------- MENU ----------------------//
function toggleMenu(){
  document.getElementById("ul_navigation").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;



//-------------- DATE ----------------------//
const datefield = document.getElementById("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


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


//-------------- MONDAY AND TUESDAYS BANNER  ----------------------//
const date = new Date();
const currentDate = date.getDay();
if (currentDate == 1 || currentDate == 2) {
	let banner = document.querySelector("#banner");
	banner.innerHTML = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m`;
}


//--------------------------------------------- DISCOVER PAGE  ------------------------------------//

const anotherDay = new Date();

const lastVisit = document.getElementById("lastVisit");


// get the stored value in localStorage
let lastDayVisited = window.localStorage.getItem("lastDay");
let currentDayVisit = anotherDay;

// Make a subtraction of the last day visited minus the current day to get the numebr of days 
if (lastDayVisited !== null) {
  var subtractionTime = currentDayVisit.getTime() - lastDayVisited;
  var daysSinceLastVisit = Math.floor(subtractionTime / (1000 * 3600 * 24));
  if (daysSinceLastVisit == 1 ){
      lastVisit.textContent = `Hey! Nice to see you again, your last visit was a day ago.`;
  } 
  else if (daysSinceLastVisit < 1){
      lastVisit.textContent = `Hi again! your last visit was today`;
  }
  else {
      lastVisit.textContent = `Hey! Nice to see you again, your last visit was ${daysSinceLastVisit} days ago.`;
  }
}
else{
    lastVisit.textContent = `Welcome, It seems that this is your first visit :D enjoy!`;
}

localStorage.setItem("lastDay", anotherDay.getTime());

