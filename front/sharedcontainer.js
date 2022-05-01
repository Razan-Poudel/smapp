let dropdown2 = document.getElementById("dropdown2");
let shared = document.getElementById("shared");
console.log(shared);
Array.from(document.getElementsByClassName("description")).forEach(element => {
    element.addEventListener("click", (event) => {
        if (event.target.querySelector("img").style.transform == "rotate(180deg)") {
            event.target.querySelector("img").style.transform = "rotate(0deg)";
            event.target.querySelector("img").style.transition = "transform 0.15s ease-in";
            event.target.parentNode.querySelector(".list").style.height = "0px"
            event.target.parentNode.querySelector(".list").style.display = "none";
        } else {
            Array.from(document.querySelectorAll(".list")).forEach(element => {
                element.style.display = "none";
                console.log(element.parentElement.parentElement);
                element.parentElement.parentElement.querySelector(".description > img").style.transform = "rotate(0deg)";
            })
            event.target.querySelector("img").style.transform = "rotate(180deg)";
            event.target.querySelector("img").style.transition = "transform 0.15s ease-in";
            event.target.parentNode.querySelector(".list").style.height = "fit-content"
            event.target.parentNode.querySelector(".list").style.display = "block";
        }
    });
});


//adjusts image size after 500 ms
setTimeout(() => {
    adjustimagesize();
}, 500);

//adjusts image size in the image list
function adjustimagesize() {
    Array.from(document.querySelectorAll(".list>img")).forEach(element => {
        ratio = element.naturalHeight / element.naturalWidth;
        element.style.height = "100px";
        element.style.width = (100 / ratio) + "px";
    })
}
