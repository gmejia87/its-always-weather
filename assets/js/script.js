var city = document.querySelector("#search-city");
var savedCities = document.querySelector("#city-results");
var weather = document.querySelector("#current-weather");
var forecast = document.querySelector("#five-day-forecast");

var getCitySearch = function (city) {
  //format weather api
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a78bb3546c41bd73b925fe7a495e1e89";
};

//event listeners
