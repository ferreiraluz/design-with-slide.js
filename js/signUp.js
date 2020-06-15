const buttonSignUp = document
    .querySelector(".login button")
    .addEventListener("click", signUp);


const displaySignUp = document.querySelector("#sign-up")

    function signUp(){
    // quando essa funçao for ativada, a tela de cadastro aparecerá
        displaySignUp.classList.remove("hide");
    }

const close = document
    .querySelector(".field a")
    .addEventListener("click", closeIt);

    function closeIt(){
        displaySignUp.classList.add("hide")
    }