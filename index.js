
const cityTag = document.querySelector('#city')
const weatherTag = document.querySelector('#weather')
const tempTag = document.querySelector('#temp')
const feelsLikeTag = document.querySelector('#feelsLike')

const zipcodeSearch = document.querySelector('#zipcode_search')

zipcodeSearch.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
         const inputVal = document.getElementById("zipcode_search").value;
     
   getWeatherByZip(inputVal) 
   }
   })