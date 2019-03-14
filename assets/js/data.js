const endpoint =
  "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
const uiMinTemp = document.querySelector("#min_temp");
const uiMaxTemp = document.querySelector("#max_temp");
const uiSunrise = document.querySelector("#sunrise");
const uiSunset = document.querySelector("#sunset");

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

    uiMinTemp.textContent = Math.round(data[latestSol].AT.mn);
    uiMaxTemp.textContent = Math.round(data[latestSol].AT.mx);

    sunsetDate = new Date(data[latestSol].First_UTC);
    sunriseDate = new Date(data[latestSol].Last_UTC);
    uiSunrise.textContent =
      sunriseDate.getHours() + ":" + sunriseDate.getMinutes();

    uiSunset.textContent =
      sunsetDate.getHours() + ":" + sunriseDate.getMinutes();
  });

/*
console.log(data);
TZ_Data: "America/Port_of_Spain"
atmo_opacity: "Sunny"
id: 71
max_gts_temp: 5
max_temp: -17
min_gts_temp: -74
min_temp: -72
season: "Month 12"
sol: 2319
status: 200
sunrise: "06:46"
sunset: "18:52"
unitOfMeasure: "Celsius"
*/
