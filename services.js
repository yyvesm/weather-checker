function getWeatherByZip(zip) {

const URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=3d33cb283c213fe0ce3114d7412d9e0f` 

return fetch(URL)
.then(res => res.json())
.then(data => { 

    if (inputVal = data.message) {
    alert("Invalid Zipcode") }
    
    else {
    const city = data.name
    const weather = data.weather[0].description
    const temp = data.main.temp
    const feelsLike = data.main.feels_like 

       const cityDiv = document.createElement('p');
       cityDiv.innerText = `The weather in ${city} is:`;
       document.body.appendChild(cityDiv);


       const weatherButton = document.createElement('button');
       weatherButton.innerText = 'Click for Weather!';
       document.body.appendChild(weatherButton);

       weatherButton.addEventListener('click', () => {
           
        const weatherDiv = document.createElement('p');
           weatherDiv.innerText = `${weather}`;
           document.body.appendChild(weatherDiv);
       })
       
       
       const tempButton = document.createElement('button');
       tempButton.innerText = 'Click for Temperature';
       document.body.appendChild(tempButton);

       tempButton.addEventListener('click', () => {

           const tempDiv = document.createElement('p');
           tempDiv.innerText = `The temperature is ${temp} degrees Fahrenheit.`;
           document.body.appendChild(tempDiv);
       })
       

       const feelsLikeButton = document.createElement('button');
       feelsLikeButton.innerText = 'Click for the feels like temperature';
       document.body.appendChild(feelsLikeButton);

       feelsLikeButton.addEventListener('click', () => {

       const feelsLikeDiv = document.createElement('p');
       feelsLikeDiv.innerText = `It feels like ${feelsLike} degrees Fahrenheit.`
       document.body.appendChild(feelsLikeDiv);
      })
    }
  })
}