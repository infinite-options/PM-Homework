console.log("in module1.js");

const mod1 = (data) => {
  let newValue = data * 2;
  let name = "Bond";
  return { newValue, name };

  //   return `
  //         <article class="bondcard">

  //           <link href="loader.css" rel="stylesheet" />
  //           <span class="loader hidden"> </span>

  //           <button id="load">Load Bond Info</button>

  //           <div>
  //             <div>Hello Mr. BondCard</div>
  //           </div>

  //           <ul>
  //             <!-- NOTE: span is defined in line as getMovie with content N/A -->
  //             <li>Bond Movie: <span class="bondcard__movie">${data[0].movie_title}</span> Add other text here</li>
  //             <li>Bond Actor: <span class="getBond">N/A</span> Add other text here</li>
  //             <li>Bond Director: <span class="getDirector">N/A</span> Add other text here</li>
  //           </ul>
  //         </article>
  //     `;
};

export default mod1;
