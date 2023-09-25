function setCookies() {
  const firstnameInput = document.getElementById("firstname").value;
  const emailInput = document.getElementById("email").value;

  document.cookie = `firstname=${firstnameInput};`;
  document.cookie = `email=${emailInput};`;
}

function showCookies() {
  const cookies = document.cookie.split(";");
  const cookieText = document.getElementById("cookieText");

  let cookieMessage = "Cookies: ";
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    cookieMessage += `${name}: ${value}, `;
  }

  cookieText.textContent = cookieMessage.slice(0, -2); // Remove the trailing comma and space
}
