const zipcodeSearch = document.querySelector('#zipcode_search')

zipcodeSearch.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
            const inputVal = document.getElementById("zipcode_search").value;
            
            getWeatherByZip(inputVal) 
            
            
      }
})
