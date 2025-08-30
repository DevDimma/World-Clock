function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


let nigeriaElement = document.querySelector("#nigeria");
let nigeriaDateElement = nigeriaElement.querySelector(".date");
let nigeriaTimeElement = nigeriaElement.querySelector(".time");

let nigeriaTime = moment().tz("Africa/Lagos");

nigeriaDateElement.innerHTML = nigeriaTime.format("MMMM Do YYYY");
nigeriaTimeElement.innerHTML = nigeriaTime.format("h:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);


