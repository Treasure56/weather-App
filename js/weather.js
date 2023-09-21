     const apiKey = "4d42a77c899866d3d83ce4fedb939984";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      // to search for the city name
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherImg = document.querySelector(".weather-img");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await response.json();

          console.log(data);

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          // to update the weather conditions
          if (data.weather[0].main == "Clouds") {
            weatherImg.src = "img/cloud.png";
          } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "img/weather_sunny.png";
          } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "img/rain.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "img/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "img/mist.png";
          }

          // for the weather to  show
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      // to add event listener to the button
      searchBtn.addEventListener("click", function () {
        checkWeather(searchBox.value);
      });

      checkWeather();
