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
        
        const newDiv = document.createElement("div");
      
        const newContent = document.createTextNode(
        `The weather in ${city} is ${weather}.
        The temperature is ${temp} degrees Fahrenheit.
        It feels like ${feelsLike} degrees Fahrenheit.`);
      
        newDiv.appendChild(newContent);
      
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);

}
})
}
