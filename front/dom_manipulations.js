let optionbox = document.getElementById("optionbox");
let dropdown = document.getElementById("dropdown");
dropdown.addEventListener("click", () => { optionbox.style.top != "10%" ? showoptionbar() : hideoptionbar(); });
function hideoptionbar() {
    optionbox.style.opacity = 0;
    optionbox.style.top = "-100%";
    optionbox.style.transition = "opacity 0.2s ease-in";
    optionbox.style.transition = "top 0.2s ease-in";
    dropdown.style.transform = "rotate(0deg)";
    dropdown.style.transition = "transform 0.2s ease-out";
}
function showoptionbar() {
    optionbox.style.opacity = 1;
    optionbox.style.top = "10%";
    optionbox.style.transition = "opacity 0.2s ease-in";
    optionbox.style.transition = "top 0.2s ease-in";
    dropdown.style.transform = "rotate(180deg)";
    dropdown.style.transition = "transform 0.2s ease-out";

}

//our variables
var animationaccess = true;
var image = document.getElementById("sendimage");
var submit = document.getElementById("send");

//adding eventlistener to submit button
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.getElementById("messageinput").value.replace(/ /g, '') != "") {

        //getting the message of the user
        let message = document.getElementById("messageinput").value

        //Boom clearing the input area
        document.getElementById("messageinput").value = "";

        //adding the message in messages array
        m1.unshift({ textmessage: message, issent: true });

        //appending the messagte
        appendmessages(m1);
        //launching our cute paper plane 
        if (animationaccess) {
            image.style.animationName = "myanimation";
            setTimeout(() => {
                image.style.animationName = "myanimation2";
            }, 1000);
        }
    }
}, true);
document.getElementById("timedmessageoption").addEventListener("mouseover", (e) => {
    // document.getElementById("about").style.position = "absolute";
    document.getElementById("about").style.display = "flex";
    document.getElementById("about").style.left = `${e.clientX - 20}px`
    document.getElementById("about").style.top = `${e.clientY - 50}px`
    document.getElementById("about").textContent = "Send a Sheduled message!"
}, false);
document.getElementById("timedmessageoption").addEventListener("mouseleave", (e) => {
    document.getElementById("about").style.display = "none";
}, false);
let ip="192.168.0.112";
let mac="74:2F:68:0B:52:F1"
