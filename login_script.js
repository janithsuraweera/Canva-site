document.querySelector(".login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login Successful!");
    window.location.href = "home.html";
});
