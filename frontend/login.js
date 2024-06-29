// Get the login form and button elements
const loginForm = document.getElementById('login-Form');
const loginButton = document.getElementById('login-btn');

// Add an event listener to the login button
loginButton.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Validating data ( check if email and password are filled)
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Redirect to another page (odoo2.html)
    window.location.href = 'odoo2.html';
  } else {
    alert('Please fill in both email and password fields!');
  }
});