async function loadUserData(){
    try{
        const response = await fetch('http://localhost:5000/about');
        const data = await response.json();

        response.ok ? (document.getElementById('username').textContent = `Hi, ${data.username}!`,
                    document.getElementById('reason').textContent = `Your reason is: ${data.reason}`) : alert("Login failed");

    } catch(error){
        alert('Something went wrong');
    };
}
window.onload = loadUserData;