


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

const likesDisplay = document.querySelector(".likesNumber1");
//const likesButton2 = document.querySelector(".likesNumber2");
//const likesButton3 = document.querySelector(".likesNumber3");
//const likesButton4 = document.querySelector(".likesNumber4");


//const x = document.getElementById("menuButton");
let btn1 = document.getElementById("likeButton1");
//let btn2 = document.getElementById("likeButton2");
//let btn3 = document.getElementById("likeButton3");
//let btn4 = document.getElementById("likeButton4");


let button1 = Number((btn1.onclick).localStorage.getItem("timesBtn1Pressed"));
//let button2 = Number((btn2.onclick).localStorage.getItem("timesBtn2Pressed"));
//let button3 = Number((btn3.onclick).localStorage.getItem("timesBtn3Pressed"));
//let button4 = Number((btn4.onclick).localStorage.getItem("timesBtn4Pressed"));

button1 ++;
//button2 ++;
//button3 ++;
//button4 ++;

ls1 = localStorage.setItem("timesBtn1Pressed", button1);
//ls2 = localStorage.setItem("timesBtn2Pressed", button2);
//ls3 = localStorage.setItem("timesBtn3Pressed", button3);
//ls4 = localStorage.setItem("timesBtn4Pressed", button4);

likesNumber1.innerHTML = `${ls1}`;
//likesNumber2.innerHTML = `${ls2}`;
//likesNumber3.innerHTML = `${ls3}`;
//xlikesNumber4.innerHTML = `${ls4}`;


//----------------------------------------- WEATHER---------------------//


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=1850147&q=Bethesda&units=metric&exclude=daily&appid=d70782954ebdc36765c0917e307de5ed`;
fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {
    
    const iconsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`
    const desc = jsObject.weather[0].description;

    document.querySelector('#icon_weather').setAttribute('src', iconsrc);
    document.querySelector('#icon_weather').setAttribute('alt', desc);
    document.querySelector("figcaption").textContent = desc;

    const speed = jsObject.wind.speed;
    const temperature = jsObject.main.temp;
    const humidity = jsObject.main.humidity;
   // const forecast =jsObject.daily.dt;
        
    document.querySelector("#temperature").innerHTML = `${temperature.toFixed(0)} &#8451`;
    document.querySelector("#humidity").innerHTML = `${humidity.toFixed(0)}%`;
   // document.querySelector("#forecast").innerHTML = `${forecast}`;
  });

