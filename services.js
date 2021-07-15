function getWeatherByZip(zip) {
const URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=3d33cb283c213fe0ce3114d7412d9e0f` 
{
return fetch(URL)
.then(res => res.json())
.then(data => {
    const city = data.name
    const weather = data.weather[0].description
    const temp = data.main.temp
    const feelsLike = data.main.feels_like
    const notZip = data.message
    
    
    cityTag.innerText = city
    weatherTag.innerText = weather
    tempTag.innerText = temp
    feelsLikeTag.innerText = feelsLike
 })
}}

