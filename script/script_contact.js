const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


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

    if (!phoneIsValid(phone.value)) {
        errorNodes[2].innerText = "Kérem, érvényes telefonszámot adjon meg!";
        phone.classList.add("error-border");
        errorFlag = true; 
    }

    if (message.value.length < 1) {
        errorNodes[3].innerText = "Üres üzenet!";
        message.classList.add("error-border");
        errorFlag = true; 
    }

    if (!errorFlag) {
        success.innerText = "Az üzenetküldés sikeres volt!";
    }
}


function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";    
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    message.classList.remove("error-border");
    success.innerText = "";
}


function emailIsValid(email){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}


function phoneIsValid(phone) {
    let phonePattern = /^(?:\+?(?:36|\(36\)))[ -\/]?(?:(?:(?:(?!1|20|21|30|31|70|90)[2-9][0-9])[ -\/]?\d{3}[ -\/]?\d{3})|(?:(?:1|20|21|30|31|70|90)[ -\/]?\d{3}[ -\/]?\d{2}[ -\/]?\d{2}))$/;
    return phonePattern.test(phone);
}
