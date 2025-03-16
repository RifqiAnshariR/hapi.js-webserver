async function getUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data!");

        const userData = await response.json();
        return userData.data || {};
    } catch (error) {
        alert("Error: " + error.message);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const userData = await getUserData("http://localhost:5000/home");

    if (!userData || !userData.username) {
        alert("Something went wrong");
        return;
    }

    const usernameElement = document.getElementById("username");
    const reasonElement = document.getElementById("reason");

    if (usernameElement && reasonElement) {
        usernameElement.textContent = `Hi, ${userData.username}!`;
        reasonElement.textContent = `Your reason is: ${userData.reason}`;
    }
});
