// const apiKey = "57048daf86814de2acc133235241610";
// const city = " ";
// const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");


async function checkWeather(city){
const apiKey = "57048daf86814de2acc133235241610";

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);
    
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".tem").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
    }


searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
})    

// checkWeather();