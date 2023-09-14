const request = require("request");

const movieId = process.argv[2]; // Get the Movie ID from the command line arguments

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

    // Print the characters from the movie
    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(`Error fetching character: ${charError.message}`);
          return;
        }

        if (charResponse.statusCode !== 200) {
          console.error(
            `Request failed with status code ${charResponse.statusCode}`
          );
          return;
        }

        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      });
    });
  } catch (parseError) {
    console.error(`Error parsing JSON response: ${parseError.message}`);
  }
});
