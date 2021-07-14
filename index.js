
const cityTag = document.querySelector('#city')
const weatherTag = document.querySelector('#weather')
const tempTag = document.querySelector('#temp')
const feelsLikeTag = document.querySelector('#feelsLike')

getWeatherByZip()
.then(data => {
   const city = data.name
   const weather = data.weather[0].description
   const temp = data.main.temp
   const feelsLike = data.main.feels_like
   
   
   cityTag.innerText = city
   weatherTag.innerText = weather
   tempTag.innerText = temp
   feelsLikeTag.innerText = feelsLike
})