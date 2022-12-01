/**
 * Create a component to display weather data.
 * - Use the new component in the ./components folder
 * - Modify the fetch query to call the component.
 * - Convert the temperature to metric and fahrenheit
 */
// console.log("in weatherscript - first line.js");
// import settings from "../settings.js";

console.log("in weatherscript - second line.js");
import weatherCard from "./components/weathercard.js";

console.log("in weatherscript - first line.js");
import settings from "../settings.js";

console.log("in weatherscript.js");

const mainContent = document.querySelector(".main-content");

console.log("in weatherscript.js - Before displayData function");

async function displayData() {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.2194636514848&lon=-122.96519638087379&APPID=${settings.appid}`, {
  //     method: "GET",
  //   })
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.3387&lon=-121.8853&APPID=${settings.appid}`, {
    method: "GET",
  })
    .then(function (response) {
      console.log("in weatherscript.js - After Fetch");
      return response.json();
    })
    .then(function (data) {
      console.log("in weatherscript.js - Data Received:", data);
      mainContent.innerHTML = weatherCard(data);
    });
}

displayData();
