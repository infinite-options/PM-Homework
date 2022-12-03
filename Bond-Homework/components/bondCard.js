// const tempTranslator = (temp) => {
//   const allTemps = {
//     k: temp,
//     c: temp - 273,
//     f: 1.8 * (temp - 273) + 32,
//   };
//   console.log(allTemps);
//   return allTemps;
// };

// const weatherCard = (data) => {
//   return `
//     <article class="weathercard">
//           <div class="weathercard__meta">
//             <div class="weathercard__meta-location">${data.name}, ${data.sys.country}</div>
//           </div>
//           <div class="weathercard__temp">
//             <span class="temp">${tempTranslator(data.main.temp).c.toFixed(1)}</span><span class="tempunit">°C</span>
//           </div>
//           <div class="weathercard__wind">
//             <div class="weathercard__wind-speed">
//               <span class="speed">${data.wind.speed}</span><span class="windunit">m/s</span>
//             </div>
//             <div class="weathercard__wind-dir" style="transform:rotate(${data.wind.deg + 90}deg)">
//                 <span class="screen-reader-text">${data.wind.deg}</span>
//             </div>
//           </div>
//         </article>
//     `;
// };

// export default weatherCard;

console.log("in bondCard.js");

const bondCard = (data) => {
  return `
        <article class="bondcard">
        
          <link href="loader.css" rel="stylesheet" />
          <span class="loader hidden"> </span>

          <button id="load">Load Bond Info</button>

          <div>
            <div>Hello Mr. BondCard 1</div>
          </div>




          <ul>
            <!-- NOTE: span is defined in line as getMovie with content N/A -->
            <li>Bond Movie: <span class="bondcard__movie">${data[0].movie_title}</span> Add other text here</li>
            <li>Bond Actor: <span class="getBond">N/A</span> Add other text here</li>
            <li>Bond Director: <span class="getDirector">N/A</span> Add other text here</li>
          </ul>
        </article>
    `;
};

export default bondCard;
