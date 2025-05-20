document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
const loginMessage = document.getElementById("loginMessage");
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const username = document.getElementById("username").value;
const users = JSON.parse(localStorage.getItem("users")||"{}");

if(!users[email]){
loginMessage.textContent = "You have not sign up with this email."
loginMessage.style.color = "#cb0606";
return;
}
if(users[email].password !== password){
loginMessage.textContent = "The password is wrong, try again."
loginMessage.style.color = "#cb0606";
return;
}
localStorage.setItem("currentUser",email);
loginMessage.textContent = "Login successful!"
loginMessage.style.color = "#ffffff";
setTimeout(()=>{
    window.location.href = "index.html";
},2000);
});