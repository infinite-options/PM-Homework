const tempTranslator = (temp, unit) => {
  const allTemps = {
    k: {
      value: temp,
      unit: "°k",
    },
    c: {
      value: temp - 273,
      unit: "°C",
    },
    f: {
      value: 1.8 * (temp - 273) + 32,
      unit: "°F",
    },
  };
  console.log(allTemps);
  if (unit === "metric") {
    return allTemps.c;
  } else if (unit === "imperial") {
    return allTemps.f;
  } else {
    return allTemps.k;
  }
};

const speedTranslator = (speed, units) => {
  const allSpeeds = {
    metric: {
      value: speed,
      unit: "m/s",
    },
    imperial: {
      value: speed * 3.281,
      unit: "ft/s",
    },
  };
  if (units === "metric") {
    return allSpeeds.metric;
  } else if (units === "imperial") {
    return allSpeeds.imperial;
  } else {
    return allSpeeds.metric;
  }
};

const weatherCard = (data, units) => {
  return `
    <article class="basicApp">
          <div class="weathercard__meta">
            <div class="weathercard__meta-location">${data.name}, ${data.sys.country}</div>
          </div>
          <div class="weathercard__temp">
            <span class="temp">${tempTranslator(data.main.temp, units).value.toFixed(1)}</span><span class="tempunit">${tempTranslator(data.main.temp, units).unit}</span>
          </div>
          <div class="weathercard__wind">
            <div class="weathercard__wind-speed">
              <span class="speed">${speedTranslator(data.wind.speed, units).value.toFixed(1)}</span><span class="windunit">${speedTranslator(data.wind.speed, units).unit}</span>
            </div>
            <div class="weathercard__wind-dir" style="transform:rotate(${data.wind.deg + 90}deg)">
                <span class="screen-reader-text">${data.wind.deg}</span>
            </div>
          </div>
          <button id="units">Change units</button>
        </article>
    `;
};

// export default weatherCard;

function mySimpleFunction() {
  console.log("In My Simple Function");
  return "Hello World";
}

function myFunction(data) {
  console.log("In My Function", data, data * 3);
  return data * 3;
}

const multiplier = (data) => {
  const newValue = data * 2;
  console.log("New Value in multiplier is:", newValue);
  return newValue;
};

const advancedCard = (data, units) => {
  var newVariable = multiplier(data);
  console.log("New Value in advancedCard is: ", newVariable);

  console.log(mySimpleFunction());

  return `
    <article class="advancedCard">

          <link href="loader.css" rel="stylesheet" />
          <span class="loader hidden"> </span>

          <div class="weathercard__meta">
            <div class="weathercard__meta-location">${data}, ${units}</div>
          </div>

          <div class="weathercard__temp">
            <span class="temp">${multiplier(data)}</span>
          </div>

          <div class="weathercard__temp">
            <span class="temp">${tempTranslator(data, units).value}</span>
          </div>
          
          <button id="units">Change units</button>
        </article>
    `;
};

export default advancedCard;
