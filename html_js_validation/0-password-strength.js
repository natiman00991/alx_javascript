document.addEventListener("DOMContentLoaded", function () {
  const passwordForm = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("password");
  const errorParagraph = document.getElementById("error");

  // Function to validate password strength
  function validatePassword() {
    const password = passwordInput.value;
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%^*#])[A-Za-z\d@$!%^*#]{8,}$/;

    if (!passwordPattern.test(password)) {
      errorParagraph.textContent =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
      return false;
    }

    errorParagraph.textContent = "";
    return true;
  }

  // Event listener for form submission
  passwordForm.addEventListener("submit", function (e) {
    if (!validatePassword()) {
      e.preventDefault(); // Prevent form submission if password is not valid
    }
  });
});
