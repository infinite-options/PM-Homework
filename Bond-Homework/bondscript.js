/**
 * Fetch weather data from OpenWeather.
 * - Store your API key in ./settings.js
 * - API reference: https://openweathermap.org/appid
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * - https://developer.mozilla.org/en-US/docs/Web/API/fetch
 */

import settings from "./settings.js";
import bondCard from "./components/bondCard.JS";
console.log("Setting Info:", settings);

// Define a variable
// const bondMovie = document.querySelector(".getMovie");
// const bondActor = document.querySelector(".getBond");
// const bondDirector = document.querySelector(".getDirector");

//Target the Element you want to work with
const mainContent = document.querySelector(".main-content");
const loadButton = document.querySelector("#load");
const loader = document.querySelector(".loader");

// // Option 1: Working Code without Timeout using bondCard
// loadButton.addEventListener("click", () => {
//   // loader.classList.toggle("hidden");
//   // console.log("Load button status:", loadButton.classList);
//   // loadButton.classList.toggle("hidden");

//   fetch(`https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies`)
//     .then(function (response) {
//       console.log("in bondscript.js - After Fetch");
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("in bondscript.js - Data Received:", data);
//       mainContent.innerHTML = bondCard(data);
//     });
// });

// Option 2: Working Code without Timeout without using bondCard
// loadButton.addEventListener("click", () => {
//   // loader.classList.toggle("hidden");
//   // console.log("Load button status:", loadButton.classList);
//   // loadButton.classList.toggle("hidden");

//   fetch(`https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies`)
//     .then(function (response) {
//       console.log("in bondscript.js - After Fetch");
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("in bondscript.js - Data Received:", data);
//       mainContent.innerHTML = `
//         <article class="bondcard">

//           <link href="loader.css" rel="stylesheet" />
//           <span class="loader hidden"> </span>

//           <div>
//             <div>Hello Mr. BondCard</div>
//           </div>

//           <ul>
//             <!-- NOTE: span is defined in line as getMovie with content N/A -->
//             <li>Bond Movie: <span class="bondcard__movie">${data[0].movie_title}</span> Add other text here</li>
//             <li>Bond Actor: <span class="getBond">N/A</span> Does this work</li>
//             <li>Bond Director: <span class="getDirector">N/A</span> Add other text here</li>
//           </ul>
//         </article>
//     `;
//     });
// });

// Option 3: Original Code - Just like Option 1 but with an async function
loadButton.addEventListener("click", () => {
  // loader.classList.toggle("hidden");
  // loadButton.classList.toggle("hidden");
  console.log("I'm Here 1");

  // Declare a function:
  // const functionName = (parameter to pass in) => {actual function code}
  async function displayBondData(input) {
    // const displayData = (input) => {
    console.log("If there were an input, it would be:", input);

    // function purpose is to get the data from the API
    // Set up fetch request inside the fuction.  Fetch has a promise so need a .then
    // Then, once we fullfil the promise and get data in return do the .then and run a new function as a json object
    fetch(`https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies`)
      .then(function (response) {
        console.log("API reponse - this is not helpful:", response.json);
        return response.json();
      })

      // not sure I understand why this function is in .then
      .then(function (data) {
        console.log("instead of going to bondCard.js", data);
        console.log("Data:", data);
        console.log("Specific Data:", data[0].movie_uid);
        console.log("Specific Movie:", data[0].director);
        // bondMovie.innerHTML = data[0].movie_title;
        // bondActor.innerHTML = data[0].bond_actor;
        // bondDirector.innerHTML = data[0].director;

        mainContent.innerHTML = bondCard(data);
      });
  }

  displayBondData();
});
