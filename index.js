function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
  
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

};


let nigeriaElement = document.querySelector("#nigeria");
if (nigeriaElement) {
  
let nigeriaDateElement = nigeriaElement.querySelector(".date");
let nigeriaTimeElement = nigeriaElement.querySelector(".time");

let nigeriaTime = moment().tz("Africa/Lagos");

nigeriaDateElement.innerHTML = nigeriaTime.format("MMMM Do YYYY");
nigeriaTimeElement.innerHTML = nigeriaTime.format("h:mm:ss [<small>]A[</small>]");

};
};


function changeCity(event) {
 let cityTimeZone = event.target.value;
 if (cityTimeZone === "current") {
  cityTimeZone = moment.tz.guess();
 }
 let cityName = cityTimeZone.replace("_", " ").split("/")[1];
 let cityTime = moment().tz(cityTimeZone);
 let newCityElement = document.querySelector("#cities");
 newCityElement.innerHTML =
  `<div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
`
}

updateTime();
setInterval(updateTime, 1000);


let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", changeCity);


