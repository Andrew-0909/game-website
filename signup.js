document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
if(!username||!email||!password){
document.getElementById("signupMessage").textContent = "Something went wrong. Please fill out every box."
return;
}
const users = JSON.parse(localStorage.getItem("users")||"{}");
if(users[email]){
document.getElementById("signupMessage").textContent = "Someone is already using this email."
} 
if(users[username]){
document.getElementById("signupMessage").textContent = "Someone is already using this username."
} else{
    users[email] = {
        username:username, 
        password:password
    };
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("currentUser", email);
    document.getElementById("signupMessage").textContent = "Sign up complete!"
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}
});

