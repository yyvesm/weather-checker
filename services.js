const URL = "http://api.openweathermap.org/data/2.5/weather?zip=07093,us&units=imperial&appid=3d33cb283c213fe0ce3114d7412d9e0f"

function getWeatherByZip() {
return fetch(URL)
.then(res => res.json())
}
getWeatherByZip()
