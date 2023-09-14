const request = require("request");

const apiUrl = process.argv[2]; // Get the API URL from the command line arguments

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
    const todos = JSON.parse(body);

    // Initialize an object to store the count of completed tasks for each user
    const completedTasksCount = {};

    // Iterate through the todos and count completed tasks by user ID
    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksCount[todo.userId]) {
          completedTasksCount[todo.userId]++;
        } else {
          completedTasksCount[todo.userId] = 1;
        }
      }
    });

    // Print the result
    console.log(completedTasksCount);
  } catch (parseError) {
    console.error(`Error parsing JSON response: ${parseError.message}`);
  }
});
