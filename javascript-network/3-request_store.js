const request = require("request");
const fs = require("fs");

const url = process.argv[2]; // Get the URL from the command line arguments
const filePath = process.argv[3]; // Get the file path to store the response

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error making the request: ${error.message}`);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    return;
  }

  // Write the body of the response to the specified file
  fs.writeFileSync(filePath, body, "utf-8");
  console.log(`Response saved to ${filePath}`);
});
