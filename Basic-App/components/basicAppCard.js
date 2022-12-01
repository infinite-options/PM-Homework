const basicCard = (data, units) => {
  return `
    <article class="basicCard">

          <link href="loader.css" rel="stylesheet" />
          <span class="loader hidden"> </span>

          <div class="weathercard__meta">
            <div class="weathercard__meta-location">${data}, ${units}</div>
          </div>
          
          <button id="units">Change units</button>
        </article>
    `;
};

export default basicCard;
