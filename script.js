document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    if (username.trim() !== "JUANCITO" || password.trim() !== "123456") {
      alert("Usuario o contraseña incorrectos");
      return;
    }
  
    alert("Usuario logueado");
    window.open("welcome.html", "_blank");
  }
  