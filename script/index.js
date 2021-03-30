const button = document.querySelectorAll(".buttonFilter");
const button = document.querySelectorAll(".imageFilter");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (){
        var animal = this.getAttribute("animal")
        console.log(animal);

    });
}