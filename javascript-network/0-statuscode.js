const axios = require("axios");

const url = process.argv[2]; // Get the URL from the command line arguments

axios
  .get(url)
  .then((response) => {
    // Print the status code
    console.log(`code: ${response.status}`);
  })
  .catch((error) => {
    // Handle errors, including HTTP request errors
    if (error.response) {
      // The request was made, but the server responded with a status code outside of the 2xx range
      console.error(`code: ${error.response.status}`);
    } else {
      // There was an error in making the request
      console.error("Error making the request:", error.message);
    }
  });
