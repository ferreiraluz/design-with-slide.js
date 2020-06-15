const icon = document
    .querySelector(".menu #about-us")
    .addEventListener("click", aboutUs)


const buttonAboutUs = document
    .querySelector(".textAboutUs button")
    .addEventListener("click", closeAboutUs)

const displayAboutUs = document
    .querySelector("#display-aboutUs")

    function aboutUs(){
       displayAboutUs.classList.remove("hide")
    }

    function closeAboutUs(){
        displayAboutUs.classList.add("hide")
    }