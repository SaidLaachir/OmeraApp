//constants hare are import for the main fuction to work
const apiKey = "d658bcf1ca1516f247156c66da926f00";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

/*creating the main function of everything ++ displaying actual data 
of countries and cities taped in the searchbar and taped the search button*/
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/H";

            //updating weather icons
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "icons/cloudy.png"; 
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "icons/sun.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "icons/rainig.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "icons/cloudyrainy.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "icons/snow.png";
            }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
})


