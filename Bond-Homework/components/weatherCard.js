console.log("in weatherCard.js");

const tempTranslator = (temp) => {
  const allTemps = {
    k: temp,
    c: temp - 273,
    f: 1.8 * (temp - 273) + 32,
  };
  console.log("in weatherCard.js - allTemp data:", allTemps);
  return allTemps;
};

const weatherCard = (data) => {
  console.log("in weatherCard.js - in weatherCard Function:", data);

  return `
    <article class="weathercard">
          <div class="weathercard__meta">
            <div class="weathercard__meta-location">${data.name}, ${data.sys.country}</div>
          </div>

          <div class="weathercard__temp">
            <span class="temp">${tempTranslator(data.main.temp).c.toFixed(1)}</span><span class="tempunit">°C</span>
          </div>

          <div class="weathercard__wind">
            <div class="weathercard__wind-speed">
              <span class="speed">${data.wind.speed}</span><span class="windunit">m/s</span>
            </div>
            <div class="weathercard__wind-dir" style="transform:rotate(${data.wind.deg + 90}deg)">
                <span class="screen-reader-text">${data.wind.deg}</span>
            </div>
          </div>
        </article>
    `;
};

export default weatherCard;
