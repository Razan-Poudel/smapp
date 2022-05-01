//our variables 
var animationaccess = true;
var image = document.getElementById("sendimage");
var submit = document.getElementById("send");
let optionbox = document.getElementById("optionbox");
let dropdown = document.getElementById("dropdown");
let dropdown2 = document.getElementById("dropdown2");
let shared = document.getElementById("shared");


//adding event listeners to our dudes
dropdown.addEventListener("click", () => { optionbox.style.top != "10%" ? showoptionbar(optionbox, dropdown) : hideoptionbar(optionbox, dropdown); });
dropdown2.addEventListener("click", () => { shared.style.top != "10%" ? showoptionbar(shared, dropdown2) : hideoptionbar(shared, dropdown2) });
// dropdown2.addEventListener("click", () => { shared.style.top != "10%" ? showoptionbar(shared, dropdown2) : me() });


//adding event listener to hide option-box when blurred
optionbox.addEventListener("focusout", (e) => {
    hideoptionbar(optionbox, dropdown);
})
shared.addEventListener("blur", (e) => {
    // console.log("idiot");
    hideoptionbar(shared, dropdown2);
})



//adjusts image size after 500 ms
setTimeout(() => {
    adjustimagesize();
}, 500);

//adjusts image size in the image list
function adjustimagesize() {
    Array.from(document.querySelectorAll(".list>img")).forEach(element => {
        ratio = element.naturalHeight / element.naturalWidth;
        element.style.height = "60px";
        element.style.width = (60 / ratio) + "px";
    })
}


//displays image in high resolution in full-screen
function displayimage(source) {
    const a = new Image();
    a.src = source;
    a.onload = () => {
        w = a.naturalWidth;
        h = a.naturalHeight;
        let imageratio = h / w;
        a.width = "70vw";
        // console.log(h);
        document.querySelector("#image").src = source;
        document.querySelector("#image").style.width = (500 / imageratio) + "px";
        document.querySelector("#image").style.height = "500px";
        console.log(document.querySelector("#image"));
        document.querySelector("#imagecontainer").style.display = "flex";
        console.log(imageratio);
    }

}
console.log(imageratio);
function hideoptionbar(element, host) {
    element.style.opacity = 0;
    element.style.top = "-100%";
    element.style.transition = "opacity 0.2s ease-in";
    element.style.transition = "top 0.2s ease-in";
    host.style.transform = "rotate(0deg)";
    host.style.transition = "transform 0.2s ease-out";
    // console.log(element.getAttribute("id"));
    if (element.getAttribute("id") == "shared") {
        // console.log("E");
        Array.from(element.querySelectorAll(".list")).forEach(ele => {
            // ele.style.display = "none";
            // ele.style.width = "0px";ccx
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

let e = document.querySelector("#shared>#medias>.list");
e.addEventListener("scroll", (ev) => {
    e.style.border = "2px solid red";
    console.log("d");
}, false)

setInterval(() => {
    let a = document.querySelector("#chats");
    const date = new Date();
    let d = date.getHours() + ":" + date.getMinutes();
    a.textContent = d;
    // console.log(Window.scrollY);
}, 2000);

// }
function sharedmediascrolled(element) {
    // document.getElementById("Asdf").appendChild
    if (userscrolled(element) > 75) {
        // alert("userscrolled");
        // element.scrollTop = element.scrollTo(element.scrollTop);

        // while (userscrolled(element) > 75) {
        //     element.append(getnode(`<img src="../front/sampleimages/elonmusk.jpg" alt="elonmusk" onclick="displayimage(this.src)">`)[0]);
        // }
    }
}
console.log(getnode(`<img src="../front/sampleimages/elonmusk.jpg" alt="elonmusk" onclick="displayimage(this.src)">`));

function userscrolled(e) {
    // console.log(e.clientHeight, e.offsetHeight);
    // console.log(e.scrollHeight + " / " + (document.querySelector("#medias").scrollTop + e.clientHeight));
    let userscroll = (e.scrollTop + e.clientHeight) * 100 / e.scrollHeight;
    // console.log(userscroll, e.getAttribute("class"));
    return userscroll;
}


// function getnode(s) {
//     let a = document.createElement("p");
//     a.innerHTML = s;
//     return a.children[0];
// }
