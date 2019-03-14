const endpoint =
  "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
const uiMinTemp = document.querySelector("#min_temp");
const uiMaxTemp = document.querySelector("#max_temp");
const uiMinPressure = document.querySelector("#sunrise");
const uiMaxPressure = document.querySelector("#sunset");

let data;
let latestSol;

fetch(endpoint)
  .then(blob => {
    return blob.json();
  })
  .then(raw => {
    data = raw;
    sol_keys = raw.sol_keys;
    latestSol = sol_keys[sol_keys.length - 1];

    // Min and Max temperature from API
    uiMinTemp.textContent = Math.round(data[latestSol].AT.mn);
    uiMaxTemp.textContent = Math.round(data[latestSol].AT.mx);

    uiMinPressure.textContent = Math.round(data[latestSol].PRE.mn) + " Pa";
    uiMaxPressure.textContent = Math.round(data[latestSol].PRE.mx) + " Pa";

    // Pressure

    // Not sure what these times are in data
    /* 
    sunsetDate = new Date(data[latestSol].First_UTC);
    sunriseDate = new Date(data[latestSol].Last_UTC);
    uiSunrise.textContent =
      sunriseDate.getHours() + ":" + sunriseDate.getMinutes();

    uiSunset.textContent =
      sunsetDate.getHours() + ":" + sunriseDate.getMinutes();
      */
  });
