const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error("Usage: node 3-request_store.js <URL> <file-path>");
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error("Failed to retrieve data. Status code:", response.statusCode);
    process.exit(1);
  }

  fs.writeFile(filePath, body, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      process.exit(1);
    }

    console.log(`Data from ${url} has been saved to ${filePath}`);
  });
});
