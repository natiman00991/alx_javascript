document.addEventListener("DOMContentLoaded", function () {
  const dynamicForm = document.getElementById("dynamicForm");
  const numFieldsSelect = document.getElementById("numFields");
  const inputContainer = document.getElementById("inputContainer");

  // Function to generate dynamic input fields
  function generateInputFields(numFields) {
    inputContainer.innerHTML = ""; // Clear existing fields

    for (let i = 1; i <= numFields; i++) {
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = `field${i}`;
      inputField.placeholder = `Field ${i}`;
      inputContainer.appendChild(inputField);
    }
  }

  // Event listener for dropdown change
  numFieldsSelect.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsSelect.value, 10);
    generateInputFields(selectedValue);
  });

  // Function to validate the form
  function validateForm() {
    const inputFields = inputContainer.querySelectorAll("input");

    for (const inputField of inputFields) {
      if (inputField.value.trim() === "") {
        alert("Please fill in all fields.");
        return false;
      }
    }

    return true;
  }

  // Event listener for form submission
  dynamicForm.addEventListener("submit", function (e) {
    if (!validateForm()) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  });
});
