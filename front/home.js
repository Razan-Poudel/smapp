let m1 = [
  /* Schema
  textmessage:(string) messege that was sent or received
  time:(string) time when it was sent or received
  issent:(boolean) true if message was sent
   */
  { textmessage: "This is first message<script>alert('vulnerable');</script>", time: "6:10 PM", issent: false },
  { textmessage: "This is second message", time: "6:11 PM", issent: true },
  { textmessage: "This is Third message", time: "6:12 PM", issent: true },
  { textmessage: "This is 4h message", time: "6:15 PM", issent: false },
  { textmessage: "This is 5th message", time: "6:15 PM", issent: true },
  { textmessage: "This is 6th message", time: "6:17 PM", issent: false },
  { textmessage: "This is 7th message", time: "6:20 PM", issent: true },
  { textmessage: "This is 8th message", time: "6:21 PM", issent: false },
  { textmessage: "This is 9th message", time: "6:22 PM", issent: true },
  { textmessage: "This is 10th message", time: "6:22 PM", issent: false },
  { textmessage: "This is 11th message", time: "6:22 PM", issent: true },
  { textmessage: "This is 12th message", time: "6:23 PM", issent: false },
  { textmessage: "This is 13th message", time: "6:23 PM", issent: true },
  { textmessage: "This is 14th message", time: "6:24 PM", issent: true },
  { textmessage: "This is 15th message", time: "6:24 PM", issent: false },
  { textmessage: "This is 16th message", time: "6:29 PM", issent: true },
  { textmessage: "This is 17th message", time: "6:29 PM", issent: false },
  { textmessage: "This is 18th message", time: "6:29 PM", issent: true },
  { textmessage: "This is 19th message", time: "6:29 PM", issent: false },
  { textmessage: "This is 20th message", time: "6:29 PM", issent: true },
  { textmessage: "This is 21st message", time: "6:29 PM", issent: true },
  { textmessage: "This is 22nd message", time: "6:29 PM", issent: false },
  { textmessage: "This is 23rd message", time: "6:29 PM", issent: true },
  { textmessage: "This is 24th message", time: "6:29 PM", issent: false },
  { textmessage: "This is 25th message", time: "6:29 PM", issent: false },
];

const users = [
  { profilepicture: "../../elonmusk.jpg", name: "<script></script>", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "Mars is good", time: "2:45 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/22987812.jpg", name: "Calculator", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/circle.png", name: "Circle", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/cross.png", name: "Cross", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/science hw 2.jpg", name: "Homework", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/start.jpg", name: "Windows", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/WhatsApp Image 2021-07-13 at 11.02.19 PM.jpeg", name: "Bazzarside", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../web_developnment/medias/nocamerasign-197150273.jpg", name: "Delivery!!", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../space.jpeg", name: "Just Chilli'n", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../background.jpeg", name: "Lights", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../download (1).png", name: "Github", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "../../unnamed.jpg", name: "Rajan Poudel", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
]
m1.reverse();
//This function append all the sent and received messages into the DOM(in #chatbox) which must be provided in the form of array of  each message as object containign  all the details like messagetype,time,etc;
appendmessages(m1);
appendusers(users)

function appendusers(users) {
  let usersbox = document.querySelector("#usersbox");
  usersbox.innerHTML = "";
  let node = "";
  users.forEach(e => {
    node = ` <div class="user">
        <img src="${e.profilepicture}" alt="${e.name}" />
        <div class="text">
          <div class="name">${"Not"}</div>
          <div class="latestmessage">
            <span class="message">${"Not"}</span
            ><span class="time">${"Not"}</span>
            <span class="bubble"></span>
          </div>
        </div>
      </div>`
    let n = getnode(node)[0];
    n.querySelector(".name").textContent = e.name;
    n.querySelector(".message").textContent = e.lastmessage.textmessage;
    n.querySelector(".time").textContent = e.lastmessage.time;
    usersbox.append(n);
  });
  node = `<div class="user" style="cursor:none;">
    <div class="text">
    <div class="name">sfgh</div>
    <div class="latestmessage">
    <span class="message"></span>
    <span class="time"></span>
    </div>
    </div>
    </div>`
  let n = getnode(node);
  usersbox.append(n);
}
function appendmessages(messeges) {
  let chatbox = document.querySelector("#chatbox");
  chatbox.innerHTML = "";
  let node = "";
  m1.forEach(e => {
    node += `   <div class="chatmessage ${e.issent ? "sentmessage" : "receivedmessage"} ${m1.indexOf(e) == 0 ? "lastmessage" : ""}">
        <div class="messagetext">
        ${e.textmessage}
        </div>
        </div>
        `;
  });
  chatbox.innerHTML = node;
}
function getnode(s) {
  let a = document.createElement("p");
  a.innerHTML = s;
  return a.children;
}
