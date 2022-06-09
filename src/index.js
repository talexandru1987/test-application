const inquirer = require("inquirer");
const fs = require("fs");

const { fetchDataFromApi } = require("./utils/fetchdata");
const { generateHtml } = require("./utils/generator");

//construct url for the api
const constructUrl = (baseUrl, params) => {
  const queryParams = new URLSearchParams(params).toString();

  return queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
};

const init = async () => {
  const questions = [
    {
      type: "input",
      message: "Please enter a city name:",
      name: "city",
      validate(answer) {
        if (!answer) {
          return "A city name must be entered";
        }
        return true;
      },
    },
    {
      type: "confirm",
      message: "Would you like to add another city?",
      name: "anotherCity",
    },
  ];

  let inProgress = true;
  const cities = [];

  while (inProgress) {
    // prompt question and get answers
    const { city, anotherCity } = await inquirer.prompt(questions);

    cities.push(city);

    // check if you want to stop
    if (!anotherCity) {
      inProgress = false;
    }
  }

  const urls = cities.map((city) =>
    constructUrl("https://api.openweathermap.org/data/2.5/weather", {
      q: city,
      appid: "652867178169694693f42b9870238545",
    })
  );

  console.log(cities);
  console.log(urls);

  const promises = urls.map(async (url) => await fetchDataFromApi(url));

  const responses = await Promise.all(promises);
  console.log(responses);
  const allCities = responses.map((response) => ({
    date: response.headers.date,
    humidity: response.data.main.humidity,
  }));

  //   console.log(allCities);

  //   const html = generateHtml(users);

  //   fs.writeFileSync("./profiles.html", html);

  //   console.log("Successfully generated HTML!!");
};

init();
