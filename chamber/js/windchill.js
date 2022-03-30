
//-------------- WEATHER ----------------------//

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=mexico&appid=d70782954ebdc36765c0917e307de5ed`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const iconsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`
    const temperature = document.querySelector('#temperature').textContent = jsObject.main.temp.toFixed(0);
    const desc = jsObject.weather[0].description;

    document.querySelector('#icon_weather').setAttribute('src', iconsrc);
    document.querySelector('#icon_weather').setAttribute('alt', desc);
    document.querySelector('#desc_weather').textContent = desc;

    const speed = document.getElementById("wind_speed").textContent = jsObject.wind.speed;
    const chill = document.querySelector("#wind_chill");
    const windchill = ""
        
    if (temperature <= 50 && speed > 3) {
        windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
        let result = Math.round(windchill);
        chill.innerHTML = result;
    } else {
        chill.innerHTML = "N/A"
    };
  })


