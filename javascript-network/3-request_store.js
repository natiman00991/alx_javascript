const request = require("request");
const fs = require("fs");
const path = require("path");

// Get an array of URLs from command line arguments starting from the third argument
const urls = process.argv.slice(2);

// Function to make a request for a URL and save the response to a file
function fetchAndSave(url, index) {
  request(url, (error, response, body) => {
    if (error) {
      console.error(
        `Error making the request for URL ${url}: ${error.message}`
      );
      return;
    }

    if (response.statusCode !== 200) {
      console.error(
        `Request for URL ${url} failed with status code ${response.statusCode}`
      );
      return;
    }

    // Create a filename based on the index
    const fileName = `response_${index}.txt`;
    const filePath = path.join(__dirname, fileName);

    // Write the body of the response to the file
    fs.writeFileSync(filePath, body, "utf-8");
    console.log(`Response for URL ${url} saved to ${fileName}`);
  });
}

// Loop through the array of URLs and fetch/save them
urls.forEach((url, index) => {
  fetchAndSave(url, index);
});
