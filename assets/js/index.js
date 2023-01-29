var locationQuerryURL =
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=49c5abbee178f817547829ce7c14a9e3";
fetch(locationQuerryURL)
  .then((response) => response.json())
  .then((cities) => {
    // do something with the data
    let firstCity = cities[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=49c5abbee178f817547829ce7c14a9e3`;
    return fetch(queryURL);
  })

  .then((response) => response.json())
  .then((data) => {
    // do something with the data
    console.log(data);
  });
