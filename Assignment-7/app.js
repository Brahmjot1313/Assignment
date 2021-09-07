const inputBox = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const cardImage = document.querySelector(".cardImage");
const dates = document.querySelector(".dates");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const weatherType = document.querySelector(".weatherType");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const humidityy = document.querySelector(".humidityy");
const pressuree = document.querySelector(".pressuree");


addBtn.onclick = () => {
    const API_KEY = "35ab8abbb8ad8b9d867c040a0b364af5"; 
    let userData = inputBox.value; 


    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userData + '&appid=' + API_KEY + '')

    
    .then((res) => {
            return res.json()
        })
      
        .then((data) => {
            console.log(data);

        
            const date = new Date();
            dates.innerHTML = date.toDateString();

    
            let nameOfCity = data['name'];
            cityName.innerHTML = nameOfCity;

            
            let tempValue = data['main']['temp'];
            tempValue -= 273;
            temp.innerHTML = Math.floor(tempValue) + '&#176;<span class="celsius">C</span>';

            
            let typeOfWeather = data['weather'][0]['main'];
            weatherType.innerHTML = typeOfWeather;

          
            if (typeOfWeather == "Mist" || typeOfWeather == "Fog") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1615567123837-6ca3e50e5a99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdCUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Clouds") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1529004252832-c80f61509cfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3VkeSUyMHdoZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Clear") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1561484930-682c8752c88d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsZXNhbnQlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Snow") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Dizzle" || typeOfWeather == "Sand") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1493936734716-77ba6da66365?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZCUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Thunderstorm" || typeOfWeather == "Tornado") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Haze" || typeOfWeather == "Smoke") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1532592950061-606f15b31037?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            } else if (typeOfWeather == "Rain") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1428592953211-077101b2021b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            }

           
            let minTemperature = data['main']['temp_min'];
            minTemperature -= 273;
            minTemp.innerHTML = Math.floor(minTemperature) + '&#176;C(Min Temp)';

        
            let maxTemperature = data['main']['temp_max'];
            maxTemperature -= 273;
            maxTemp.innerHTML = Math.floor(maxTemperature) + '&#176;C(Max Temp)';

            
            let humidity = data['main']['humidity'];
            humidityy.innerHTML = humidity + '%(Humidity)';

            
            let pressure = data['main']['pressure'];
            pressuree.innerHTML = pressure + 'mb(Pressure)';

           
            inputBox.value = "";
        })
       
        .catch((err) => {
            console.log(err);
        });
}