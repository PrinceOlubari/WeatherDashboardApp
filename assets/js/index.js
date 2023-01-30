document.getElementById("search-button").addEventListener("click", function (event) {
 event.preventDefault()

 let cityInput=document.getElementById("search-input").value 
    var locationQuerryURL =
    "http://api.openweathermap.org/geo/1.0/direct?q="+ cityInput +"&limit=5&appid=49c5abbee178f817547829ce7c14a9e3";
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

      let filterArray = [];

      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.includes("12:00:00")) {
          filterArray.push(data.list[i]);
        }
      }
      console.log(filterArray);
      console.log(filterArray[0].main.temp);

      let tempElement = document.createElement("div");
      tempElement.textContent = filterArray[0].main.temp;
      document.getElementById("today").append(tempElement);

      
      for (let i = 0; i < filterArray.length; i++) {
        let tempEl=document.createElement('div');  
        tempEl.textContent= filterArray[i].main.temp  

        let mainCard=document.createElement("div")
        mainCard.append(tempEl);
        document.getElementById("forecast").append(mainCard)
        
      }



    });
});
