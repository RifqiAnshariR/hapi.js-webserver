document.getElementById('loginForm').addEventListener('submit', handleLogin);

async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const reason = document.getElementById('reason').value;

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, reason })
        });
        response.ok ? window.location.href = "home.html" : alert("Login Failed!");
    } catch (error) {
        alert("Something went wrong!");
    }
};