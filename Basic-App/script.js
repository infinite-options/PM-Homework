/**
 * Build a button to change units.
 * - Get the default unit type from settings.js.
 * - Create data for imperial and metric units.
 * - Create a button for switching between imperial and metric units.
 */

import settings from "./settings.js";
import basicCard from "./components/basicAppCard.js";
import advancedCard from "./components/advancedAppCard.js";

const mainContent = document.querySelector(".main-content");
let units = settings.units;

let data = 17;

function anotherSimpleFunction() {
  console.log("In Another Simple Function");
  return "Hello Moon";
}

//Option using a separate Card - Light Blue Box
// mainContent.innerHTML = basicCard(data, units);

//Option using a separate Advanced Card - Light Blue Box
mainContent.innerHTML = advancedCard(data, units);
console.log("Back in script");
// console.log("Advanced Card values:", multiplier(10));
console.log("Advanced Card values:", newVariable);

//Option doing it all in one file -- Green Box
// mainContent.innerHTML = `
//     <article class="noCard">

//           <link href="loader.css" rel="stylesheet" />
//           <span class="loader hidden"> </span>

//           <div class="weathercard__meta">
//             <div class="weathercard__meta-location">${data}, ${units}</div>
//           </div>

//           <button id="units">Change units</button>
//         </article>
//     `;

// const unitChanger = () => {
//   const unitsButton = document.querySelector("#units");
//   unitsButton.addEventListener("click", () => {
//     units === "metric" ? (units = "imperial") : (units = "metric");
//     displayData(units);
//   });
// };

// async function displayData(units) {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=carpinteria,ca,us&APPID=${settings.appid}`, {
//     method: "GET",
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       mainContent.innerHTML = weatherCard(data, units);
//     })
//     .then(function () {
//       unitChanger();
//     });
// }

// displayData(units);
