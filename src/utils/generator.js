const generateWeatherCards = (cards) => {
  return cards
    .map((card) => {
      return `<div class="weather-data-title"><p>Constanta</p></div>
        <div class="weather-data-time"><p>Thursday, 12th May, 2022 00:22:43</p></div>
        <div class="weather-data-img">
          <img
            src="http://openweathermap.org/img/w/04n.png"
            alt="weather-icon"
            class="shadow-sm p-3 mt-3 bg-body rounded border"
          />
        </div>
        <div class="weather-data-content">
          <div class="row g-0">
            <div class="weather-data-table col-sm-12 col-md-4 p-2 border fw-bold">Temperature</div>
            <div class="col-sm-12 col-md-8 p-2 border">12.38° C</div>
          </div>
          <div class="row g-0">
            <div class="weather-data-table col-sm-12 col-md-4 p-2 border fw-bold">Humidity</div>
            <div class="col-sm-12 col-md-8 p-2 border">73%</div>
          </div>
          <div class="row g-0">
            <div class="weather-data-table col-sm-12 col-md-4 p-2 border fw-bold">Wind Speed</div>
            <div class="col-sm-12 col-md-8 p-2 border">3.77 MPH</div>
          </div>
          <div class="row g-0">
            <div class="weather-data-table col-sm-12 col-md-4 p-2 border fw-bold">UV Index</div>
            <div class="col-sm-12 col-md-8 p-2 border">
              <span class="text-white px-3 rounded-2 bg-success">0</span>
            </div>
          </div>
        </div>`;
    })
    .join("");
};

const generateHtml = (cards) => {
  return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Weather Cards</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <h1 class="text-center m-3">My Weather Cards</h1>
          <div class="d-flex flex-row flex-wrap justify-content-center">
            ${generateWeatherCards(cards)}
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>`;
};

module.exports = {
  generateHtml,
};
