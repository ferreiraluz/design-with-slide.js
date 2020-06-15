let images = document.querySelectorAll(".slide img");
let maxImgs = images.length;
let index = 0;
let time = 3000;

function slide(){
    setInterval(()=>{
        
        // funçao que muda a imagem

        images[index].classList.remove("selected")
        index++;

        if(index >= maxImgs){
            index = 0;
        }
        images[index].classList.add("selected");

        
    }, time)   
}
window.addEventListener("load", slide())
