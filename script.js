let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#emailError").style.display = "";
  document.querySelector("#passwordError").style.display = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emails = emailRegex.test(email.value);
  let pass = passwordRegex.test(password.value);
  isValid = true;

  if (!emails) {
    document.querySelector("#emailError").textContent = "Email is inccorect";
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
  }

  if (!pass) {
    document.querySelector("#passwordError").textContent =
      "Password is Inncorect";
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Validate Succesfully ";
  }
});
