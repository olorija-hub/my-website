// No need to import index.js — it’s a separate page
const hello = document.getElementById("greeting");

// get username from localStorage
const storedUsername = localStorage.getItem("username");

if (storedUsername) {
    hello.innerText = `Hello, ${storedUsername}`;
}
