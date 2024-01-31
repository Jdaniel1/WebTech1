const email = document.querySelector("#email");
const password = document.querySelector("#passwInput");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
let passwordInput = document.getElementById("passwInput");


function validateForm(){
    clearMessages();
    let errorFlag = false;

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Érvénytelen E-mail cím";
        email.classList.add("error-border");
        errorFlag = true; 
    }

    if (!passwordIsValid(password.value)) {
        errorNodes[2].innerText = "A jelszó helytelen (8-40 karakter, min. 1 számjegy, min. 1 nagybetű, min. 1 kisbetű)";
        password.classList.add("error-border");
        errorFlag = true; 
    }

    if (!errorFlag) {
        success.innerText = "Sikeres bejelentkezés";
    }
}


function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";    
    }
    email.classList.remove("error-border");
    password.classList.remove("error-border");
    success.innerText = "";
}


function emailIsValid(email){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}


function passwordIsValid(password) {
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;
    return passwordPattern.test(password);
}
