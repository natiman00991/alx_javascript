document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("submitForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageContainer = document.getElementById("message");

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Check if required fields are filled
    if (name === "" || email === "") {
      messageContainer.innerHTML = "Please fill in all required fields.";
      return;
    }

    // Reset error message if validation passes
    messageContainer.innerHTML = "";

    // Form submission successful message
    messageContainer.innerHTML = "Form submitted successfully!";
  }

  // Add event listener for form submission
  submitForm.addEventListener("submit", handleFormSubmit);
});
