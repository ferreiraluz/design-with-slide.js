const buttonLogin = document
    .querySelector(".login a")
    .addEventListener("click", login);

const displayLogin = document.querySelector("#display-login")

    function login(){
        console.log("testando")
        displayLogin.classList.remove("hide");
    }

const closeLogin = document 
    .querySelector("#display-login #close-load")
    .addEventListener("click", closeLoad);

    function closeLoad(){
        displayLogin.classList.add("hide");
    }