document.getElementById("login_btn").addEventListener("click", function (e) {
  const emailField = document.getElementById("user_email");
  const email = emailField.value;
  const passwordField = document.getElementById("user_password");
  const password = passwordField.value;
  console.log(email, password);
  if (email === "antor@gmail.com" && password === "secret") {
    location.href = "bank.html";
  } else {
    console.log("invalid user");
  }
});
