// REGISTER USER
function registerUser() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPass").value.trim();

  if (!name || !email || !pass) {
    alert("Please fill all fields!");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPass", pass);
  alert("Registration successful! Please login now.");

  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

// LOGIN USER
function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const storedEmail = localStorage.getItem("userEmail");
  const storedPass = localStorage.getItem("userPass");

  if (email === storedEmail && pass === storedPass) {
    alert("Login successful!");
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainSite").classList.remove("hidden");
  } else {
    alert("Invalid email or password!");
  }
}

// LOGOUT
function logout() {
  document.getElementById("mainSite").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
  alert("You have logged out.");
}
