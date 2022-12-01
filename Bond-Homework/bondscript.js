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

loadButton.addEventListener("click", () => {
  loader.classList.toggle("hidden");
  loadButton.classList.toggle("hidden");
  setTimeout(() => {
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
          console.log("Data:", data);
          console.log("Specific Data:", data[0].movie_uid);
          console.log("Specific Movie:", data[0].director);
          // bondMovie.innerHTML = data[0].movie_title;
          // bondActor.innerHTML = data[0].bond_actor;
          // bondDirector.innerHTML = data[0].director;

          // mainContent.innerHTML = bondCard(data);
        });
    }

    displayBondData();

    mainContent.innerHTML = bondCard(data);
  }, 3000);
});
