export let username = document.getElementById("gh")
export let password = document.getElementById("fs");
export let confirmPassword = document.getElementById("conPassword");
export let email = document.getElementById("email");
export let signInBtn = document.getElementById("sign");
 let showPassword = document.getElementById("mm");
 let passwordAreEqual;

 function checkPassword(){
 if(password.value === confirmPassword.value){
    passwordAreEqual = true
    signInBtn.disabled = false
 } else {
    passwordAreEqual = false
    signInBtn.disabled = true
 }

}

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword)

showPassword.addEventListener("click", function(){
if(password.type === "password"){
    password.type = "text"
    showPassword.innerText = "Hide Password"
} else {
        password.type = "password";
        showPassword.textContent = 'Show Password';
    }
});

signInBtn.addEventListener("click", () => {
    // save username to localStorage before navigating
    localStorage.setItem("username", username.value);
    window.location.href = "cyberhelp.html"; // navigate to page 2
});


