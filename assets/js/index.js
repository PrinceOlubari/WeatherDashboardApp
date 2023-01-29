
var locationQuerryURL="http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=49c5abbee178f817547829ce7c14a9e3"
fetch(locationQuerryURL)
  .then((response) => response.json())
  .then((data) => {
    // do something with the data
    console.log(data);
  });



var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=49c5abbee178f817547829ce7c14a9e3`;

fetch(queryURL)
  .then((response) => response.json())
  .then((data) => {
    // do something with the data
    console.log(data);
  });

