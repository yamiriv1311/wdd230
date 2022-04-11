//----------------------------------------- WEATHER---------------------//


const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=Bethesda&units=metric&appid=d70782954ebdc36765c0917e307de5ed`;
fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {
    
    const iconsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`
    const desc = jsObject.weather[0].description;
    

    
    
  });
