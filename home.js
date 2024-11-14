document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});


function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
  }
  
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    if (username && password) {
      alert("Logged in as " + username);
      // Backend login validation logic here
    } else {
      alert("Please enter both username and password");
    }
  }
  
  function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;
  
    if (username && password && confirmPassword) {
      if (password === confirmPassword) {
        alert("Signed up as " + username);
        // Backend sign up logic here
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill in all fields");
    }
  }
  