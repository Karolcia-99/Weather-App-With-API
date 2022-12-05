window.addEventListener('load', ()=> {
 let long;
 let lat;
 let temperatureDescription = document.querySelector(".temperature-description");
 let weatherHumidity = document.querySelector(".humidity");
 let weatherWind = document.querySelector(".wind");
 let temperatureDegree = document.querySelector(".temperature-degree");
 let nameLocation = document.querySelector(".location-name");

if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(position => {
lat = position.coords.latitude;
long = position.coords.longitude;


const proxy = "https://cors-anywhere.herokuapp.com/";

const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6bcc5f2872838a6196a29503e22104db&units=metric`;

fetch(api)
.then(response => {
   return response.json();
}) 
.then(data => { 
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

   // Set DOM elements from the API ///

   temperatureDegree.textContent = temp;
   temperatureDescription.textContent = description;
   weatherHumidity.textContent = "Humidity:" + " " + humidity + "%";
   weatherWind.textContent = speed + " " + "km/h";


   nameLocation.textContent = `Weather in ${name}`;
  
   document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; 

})
 });
} 
});