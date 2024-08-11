document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in both fields.');
    }
});
