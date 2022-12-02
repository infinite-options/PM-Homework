/**
 * Create a component to display weather data.
 * - Use the new component in the ./components folder
 * - Modify the fetch query to call the component.
 * - Convert the temperature to metric and fahrenheit
 */
// console.log("in weatherscript - first line.js");
// import settings from "../settings.js";

console.log("Program Run 1");
console.log("in weatherscript - second line.js");
import weatherCard from "./components/weathercard.js";

console.log("in weatherscript - first line.js");
import settings from "./settings.js";

console.log("in weatherscript.js");

const mainContent = document.querySelector(".main-content");
const loadButton = document.querySelector("#load");
const loader = document.querySelector(".loader");

console.log("in weatherscript.js - Before displayData function");

//Working Code For Reference
// loadButton.addEventListener("click", () => {
//   loader.classList.toggle("hidden");
//   loadButton.classList.toggle("hidden");
//   setTimeout(() => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.3387&lon=-121.8853&APPID=${settings.appid}`, {
//       method: "GET",
//     })
//       .then(function (response) {
//         console.log("in weatherscript.js - After Fetch");
//         return response.json();
//       })
//       .then(function (data) {
//         console.log("in weatherscript.js - Data Received:", data);
//         mainContent.innerHTML = weatherCard(data);
//       });
//   }, 10);
// });

//Sandbox
loadButton.addEventListener("click", () => {
  loader.classList.toggle("hidden");
  // console.log("Load button status:", loadButton.classList);
  loadButton.classList.toggle("hidden");

  setTimeout(() => {
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
  }, 10);
});

// async function displayData() {
//   //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.2194636514848&lon=-122.96519638087379&APPID=${settings.appid}`, {
//   //     method: "GET",
//   //   })
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.3387&lon=-121.8853&APPID=${settings.appid}`, {
//     method: "GET",
//   })
//     .then(function (response) {
//       console.log("in weatherscript.js - After Fetch");
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("in weatherscript.js - Data Received:", data);
//       mainContent.innerHTML = weatherCard(data);
//     });
// }

// displayData();
