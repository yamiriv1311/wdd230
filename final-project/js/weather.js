
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


