const request = require("request");

const movieId = process.argv[2]; // Get the movie ID from the command line arguments
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

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
    const movieData = JSON.parse(body);
    const movieTitle = movieData.title;
    console.log(movieTitle);
  } catch (parseError) {
    console.error(`Error parsing JSON response: ${parseError.message}`);
  }
});
