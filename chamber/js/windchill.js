
//-------------- WEATHER ----------------------//

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=1850147&q=Mexico City&units=metric&appid=d70782954ebdc36765c0917e307de5ed`;
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
        
    if (temperature <= 50 && speed > 3) {
      const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
      document.querySelector("#wind_chill").innerHTML = `${windchill.toFixed(0)} &#8451`;
    }else{
      document.querySelector("#wind_chill").innerHTML = "N/A";
    }
    document.querySelector("#wind_speed").innerHTML = `${speed.toFixed(1)} m/s`;
    document.querySelector("#temperature").innerHTML = `${temperature.toFixed(0)} &#8451`;
  });


