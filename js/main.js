let inputName = document.getElementById('put-1')
let inputEmail = document.getElementById('put-2')
let inputPass = document.getElementById('put-3')
let inputSign = document.getElementsByTagName('input')
let sign = document.getElementById("signup");
let loginEmail = document.getElementById('logEmail')
let loginPass = document.getElementById('logPass')
let x    = document.getElementById('loginPg')
// document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeMessage').innerHTML = "Welcome, " + username + "!";
    } else {
        
    };


sign.addEventListener('click',function(){
    signUp()
})
function signUp() {
    let userName = inputName.value.trim();
    let email = inputEmail.value.trim();
    let password = inputPass.value.trim();

    
    if (userName === '' || email === '' || password === '') {
        alert(`Please fill in all fields.`);
        return;
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(`Invalid email address.`);
        return;
    }
    let storedData = JSON.parse(localStorage.getItem('system') || '[]');
    let existingUser = storedData.find(user => user.email === email);
    if (existingUser) {
        alert(`This email is already registered.`);
        return;
    }
    var sites = {
        userName: userName,
        email: email,
        password: password
    };
    storedData.push(sites);
    localStorage.setItem('system', JSON.stringify(storedData));
    open('file:///C:/Users/n/Desktop/Login/Login/login.html');
}

function login() {
    let loginEmailValue = loginEmail.value.trim(); 
    let loginPassValue = loginPass.value.trim(); 
    if (loginEmailValue === '' || loginPassValue === '') {
        alert(`Please fill in all fields.`);
        return;
    }
    let storedData = JSON.parse(localStorage.getItem('system') || '[]');  
    let existingUser = storedData.find(user => user.email === loginEmailValue);

    
   if  (existingUser && existingUser.password === loginPassValue) {
        localStorage.setItem('username', existingUser.userName);
        open('file:///C:/Users/n/Desktop/Login/welcome.html')
        
}
else{
    alert('email is not found or password is incorrect')
}


}

