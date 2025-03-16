async function postUserData(url, username, reason) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, reason })
        });
        if (!response.ok) throw new Error("Failed to login!");

        window.location.href = "home.html";
    } catch (error) {
        alert("Error: " + error.message);
        return null;
    }
}

document.getElementById('loginForm').addEventListener('submit', async function handleLogin(event) {
    event.preventDefault();

    const usernameValue = document.getElementById('username').value;
    const reasonValue = document.getElementById('reason').value;

    await postUserData("http://localhost:5000/login", usernameValue, reasonValue);
});
