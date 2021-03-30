const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const textSearch = document.getElementById("searchText");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        var animal = this.getAttribute("animal");
        // console.log(animal);
        typedValue = textSearch.value;
        for (let x = 0; x < images.length; x++) {
            if (animal === 'al!') {
                images[x].style.display = "inline-block";
            }
            else {
                var imageAltText = images[x].getAttribute("alt");
                if (images[x].classList.contains(animal)) {
                    if (typedValue !== "") {
                        if (imageAltText != null && imageAltText.includes(typedValue)) {
                            images[x].style.display = "inline-block";
                        }
                        else {
                            images[x].style.display = "none";
                        }
                    }
                    else {
                        images[x].style.display = "inline-block";
                    }
                }
                else {
                    images[x].style.display = "none";
                }
            }
        }
    });
}