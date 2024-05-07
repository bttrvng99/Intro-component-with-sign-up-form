const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameError = document.getElementById("first_name-error");
const lastNameError = document.getElementById("last_name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const form = document.querySelector("form");

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

form.addEventListener("submit", () => {
  const isValidFirstName = firstName.value.trim().length > 0;
  const isValidLastName = lastName.value.trim().length > 0;
  const isValidEmail = email.value.length > 0 || emailRegExp.test(email.value);
  const isValidPassword =
    (password.value.length >= 8) | passwordRegExp.test(password.value);

  if (
    !isValidEmail ||
    !isValidFirstName ||
    !isValidLastName ||
    !isValidPassword
  )
    event.preventDefault();

  if (!isValidFirstName) {
    firstName.className = "invalid";
    firstNameError.textContent = "First Name cannot be empty";
    firstNameError.className = "error active";
  } else {
    firstName.className = "valid";
    firstNameError.textContent = "";
    firstNameError.className = "error";
  }

  if (!isValidLastName) {
    lastName.className = "invalid";
    lastNameError.textContent = "Last Name cannot be empty";
    lastNameError.className = "error active";
  } else {
    lastName.className = "valid";
    lastNameError.textContent = "";
    lastNameError.className = "error";
  }

  if (!isValidEmail) {
    email.className = "invalid";
    if (!emailRegExp.test(email.value))
      emailError.textContent = "Looks like this is not an email";
    else emailError.textContent = "Email address cannot be empty";
    emailError.className = "error active";
  } else {
    email.className = "valid";
    emailError.textContent = "";
    emailError.className = "error";
  }

  if (!isValidPassword) {
    password.className = "invalid";
    if (password.value.length === 0)
      passwordError.textContent = "Password cannot be empty";
    else
      passwordError.textContent =
        "Password must have at minimum eight characters, with at least one uppercase letter, one lowercase letter and one number:";
    passwordError.className = "error active";
  } else {
    password.className = "valid";
    passwordError.textContent = "";
    passwordError.className = "error";
  }
});
