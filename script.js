function openForm() {
  const form = document.getElementById("formSection");
  form.classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth" });
}

function validateForm() {
  let isValid = true;

  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const phonePattern = /^[0-9]{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone
  if (!phonePattern.test(phone.value)) {
    document.getElementById("phoneError").innerText = "Enter valid 10-digit number";
    phone.classList.add("invalid");
    isValid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
    phone.classList.remove("invalid");
    phone.classList.add("valid");
  }

  // Email
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    email.classList.add("invalid");
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
    email.classList.remove("invalid");
    email.classList.add("valid");
  }

  // Password
  if (password.value.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    password.classList.add("invalid");
    isValid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
    password.classList.remove("invalid");
    password.classList.add("valid");
  }

  // Confirm Password
  if (password.value !== confirmPassword.value) {
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match";
    confirmPassword.classList.add("invalid");
    isValid = false;
  } else {
    document.getElementById("confirmPasswordError").innerText = "";
    confirmPassword.classList.remove("invalid");
    confirmPassword.classList.add("valid");
  }

  return isValid;
}


