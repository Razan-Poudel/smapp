//our variables
var animationaccess = true;
var image = document.getElementById("sendimage");
var submit = document.getElementById("send");
let optionbox = document.getElementById("optionbox");
let dropdown = document.getElementById("dropdown");
let dropdown2 = document.getElementById("dropdown2");
let shared = document.getElementById("shared");
dropdown.addEventListener("click", () => { optionbox.style.top != "10%" ? showoptionbar(optionbox, dropdown) : hideoptionbar(optionbox, dropdown); });
dropdown2.addEventListener("click", () => { shared.style.top != "10%" ? showoptionbar(shared, dropdown2) : hideoptionbar(shared, dropdown2); });

function displayimage(e) {
    const a = new Image();
    a.src = e;
    a.onload = () => {
        w = a.naturalWidth;
        h = a.naturalHeight;
        let imageratio = h / w;
        a.width = "70vw";
        // console.log(h);
        document.querySelector("#image").src = e;
        document.querySelector("#image").style.width = (500 / imageratio) + "px";
        document.querySelector("#image").style.height = "500px";
        console.log(document.querySelector("#image"));
        document.querySelector("#imagecontainer").style.display = "flex";
        console.log(imageratio);
    }
    // setTimeout(() => {
    //     w = a.naturalWidth;
    //     h = a.naturalHeight;
    //     let imageratio = h / w;
    //     a.width = "70vw";
    //     // console.log(h);
    //     document.querySelector("#image").src = e;
    //     document.querySelector("#image").style.width = (500 / imageratio) + "px";
    //     document.querySelector("#image").style.height = "500px";
    //     console.log(document.querySelector("#image"));
    //     document.querySelector("#imagecontainer").style.display = "flex";
    //     console.log(imageratio);
    // }, 0);
}

function hideoptionbar(element, host) {
    element.style.opacity = 0;
    element.style.top = "-100%";
    element.style.transition = "opacity 0.2s ease-in";
    element.style.transition = "top 0.2s ease-in";
    host.style.transform = "rotate(0deg)";
    host.style.transition = "transform 0.2s ease-out";
    // console.log(element.getAttribute("id"));
    if (element.getAttribute("id") == "shared") {
        console.log("E");
        Array.from(element.querySelectorAll(".list")).forEach(element => {
            element.style.display = "none";
            // element.style.width = "0px";
        })
    }
}
function showoptionbar(element, host) {
    element.style.display = "block";
    element.style.opacity = 1;
    element.style.top = "10%";
    element.style.transition = "opacity 0.2s ease-in";
    element.style.transition = "top 0.2s ease-in";
    host.style.transform = "rotate(180deg)";
    host.style.transition = "transform 0.2s ease-out";
}


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

        //appending the message
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

//shows description to the options
// function addescriptions(ele, content) {
//     // console.log(ele);
//     ele.addEventListener("mouseover", (e) => {
//         // document.getElementById("about").style.position = "absolute";
//         document.getElementById("about").style.display = "flex";
//         document.getElementById("about").style.left = `${e.clientX - 20}px`;
//         document.getElementById("about").style.top = `${e.clientY - 30}px`;
//         document.getElementById("about").textContent = content;
//         document.getElementById("about").style.opacity = "1";
//         document.getElementById("about").style.transition = "opacity 1s ease-in";
//     }, false);
//     ele.addEventListener("mouseleave", () => {
//         document.getElementById("about").style.opacity = "0";
//         document.getElementById("about").style.transition = "opacity 0.5s ease-in";
//         setTimeout(() => {
//             document.getElementById("about").style.display = "none";
//         }, 500);
//     }, false);
// }

// //adding descriptions to the various buttons
// addescriptions(document.getElementById("filesoption"), "Send a file")
// addescriptions(document.getElementById("imagesoption"), "Send an image")
// addescriptions(document.getElementById("loactionoption"), "Send your location")
// addescriptions(document.getElementById("timedmessageoption"), "Send a timed message")
// addescriptions(document.getElementById("dropdown"), "View options")
// addescriptions(document.getElementById("dropdown2"), "View shared medias")



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
                element.parentElement.querySelector(".description > img").style.transform = "rotate(0deg)";
            })
            event.target.querySelector("img").style.transform = "rotate(180deg)";
            event.target.querySelector("img").style.transition = "transform 0.15s ease-in";
            event.target.parentNode.querySelector(".list").style.height = "fit-content"
            event.target.parentNode.querySelector(".list").style.display = "block";
        }
    });
});

document.getElementById("exit").addEventListener("click", (e) => {
    document.getElementById("imagecontainer").style.display = "none";
})

// important
// const a = new Image();
// setTimeout(() => {
//     a.src = "../front/sampleimages/elonmusk.jpg"
//     console.log(a);
//     w = a.naturalWidth;
//     let imageratio = h / w;
//     console.log(imageratio);
// }, 500);
// setTimeout(() => {
//     h = a.naturalHeight;
//     console.log(h);

// }, 2000)