document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const errorParagraph = document.getElementById("error");

  // Function to validate email format
  function validateEmail() {
    const email = emailInput.value;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
      errorParagraph.textContent = "Please enter a valid email address.";
      return false;
    }

    errorParagraph.textContent = "";
    return true;
  }

  // Event listener for form submission
  emailForm.addEventListener("submit", function (e) {
    if (!validateEmail()) {
      e.preventDefault(); // Prevent form submission if email format is not valid
    }
  });
});
