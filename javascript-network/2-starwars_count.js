const request = require("request");

const apiUrl = process.argv[2]; // Get the API URL from the command line arguments
const characterId = 18; // Character ID for Wedge Antilles

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error making the request: ${error.message}`);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    return;
  }

  try {
    const filmData = JSON.parse(body);
    const filmsWithWedgeAntilles = filmData.results.filter((film) => {
      return film.characters.includes(
        `https://swapi-api.alx-tools.com/api/people/${characterId}/`
      );
    });

    const count = filmsWithWedgeAntilles.length;
    console.log(count);
  } catch (parseError) {
    console.error(`Error parsing JSON response: ${parseError.message}`);
  }
});
