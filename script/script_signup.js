const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#passwInput");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const male = document.querySelector("#male");
const female = document.querySelector("#female");


function validateForm(){
    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Kérem, adja meg a nevét!";
        nameInput.classList.add("error-border");   
        errorFlag = true;     
    }
   
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Kérem, érvényes e-mail címet adjon meg!";
        email.classList.add("error-border");
        errorFlag = true; 
    }

    if (!passwordIsValid(password.value)) {
        errorNodes[2].innerText = "A jelszó helytelen (8-40 karakter, min. 1 számjegy, min. 1 nagybetű, min. 1 kisbetű)";
        password.classList.add("error-border");
        errorFlag = true; 
    }

    genderIsValid();

    if (!errorFlag) {
        success.innerText = "Sikeresen regisztrált!";
    }
}


function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";    
    }
    nameInput.classList.remove("error-border");
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


function genderIsValid(){
    if (male.checked==true) {
        male.value;
    }
    else if (female.checked==true){
        female.value;
    }
    else{
        errorNodes[3].innerText = "Kérem válassza ki a nemét!";
    }
}
