
document.querySelector("#side").style.width = "230px";

//function to fill the outlines of the images exp. icons
function fillimage(element, src) {
    element.querySelector('img').setAttribute('src', src);
}
//function to remove the outlines of the images exp. icons
function removefilling(element, src) {
    element.querySelector('img').setAttribute('src', src);
}
//event listeners for action buttons of side pannel 
Array.from(document.querySelectorAll(".actionslist")).forEach(element => {
    element.addEventListener("click", (e) => {
        //fill the outline of icon when it is clicked
        let s = e.target.querySelector(".iconandtextwrapper>.icon>img").src;
        a = s.replace("outline", "filled");
        e.target.querySelector(".iconandtextwrapper>.icon>img").src = a;
    })
    element.addEventListener("blur", (e) => {
        //remove the filling of icon when it is blurred
        let s = e.target.querySelector(".iconandtextwrapper>.icon>img").src;
        a = s.replace("filled", "outline");
        e.target.querySelector(".iconandtextwrapper>.icon>img").src = a;
    })
})
Array.from(document.querySelectorAll(".actionslist > .iconandtextwrapper ")).forEach(element => {
    element.addEventListener("click", (e) => {
        //pass the event to the parentelement(i.e .actionslist) when the icon is clicked 
        e.target.parentNode.click();
    })
})
