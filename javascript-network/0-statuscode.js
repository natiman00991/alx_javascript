const request = require("request");

const url = process.argv[2]; // Get the URL from the command line arguments

request(url, (error, response) => {
  if (error) {
    console.error(`Error making the request: ${error.message}`);
    return;
  }

  // Print the status code
  console.log(`code: ${response.statusCode}`);
});
