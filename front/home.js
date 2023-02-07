let m1 = [
  /* Schema
  textmessage:(string) messege that was sent or received
  time:(string) time when it was sent or received
  issent:(boolean) true if message was sent
   */
  { textmessage: "This is first message<script>alert('vulnerable');</script>", time: "6:10 PM", issent: false },
  { textmessage: "<script>This is safe</script>", time: "6:11 PM", issent: true },
  { textmessage: "This is Third message", time: "6:12 PM", issent: true },
  { textmessage: "This is 4h message", time: "6:15 PM", issent: false },
  { textmessage: "This is 5th message", time: "6:15 PM", issent: true },
  { textmessage: "This is 6th message", time: "6:17 PM", issent: true }
];

const users = [
  { profilepicture: "./sampleimages/elonmusk.jpg", name: "Elon Musk", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "Pachas khai ???", time: "2:45 PM", issent: false }, },
  { profilepicture: "./sampleimages/22987812.jpg", name: "Pratik", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/circle.png", name: "Circle", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/cross.png", name: "Cross", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/science hw 2.jpg", name: "Homework", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/start.jpg", name: "Windows", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/nocamerasign-197150273.jpg", name: "Delivery!!", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/space.jpeg", name: "Just Chilli'n", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/background.jpeg", name: "Lights", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
  { profilepicture: "./sampleimages/download (1).png", name: "Github", chatid: "1vhwdkdsodkajdnslkjdindniend", lastmessage: { textmessage: "This is 25th message", time: "6:29 PM", issent: false }, },
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
  // console.log("This is ", n);
}

//appends all the messages in the document object module
function appendmessages(messeges) {
  let chatbox = document.querySelector("#chatbox");
  chatbox.innerHTML = "";
  let node = "";
  // let counter = 0;
  messeges.forEach(e => {
    node = `   <div class="chatmessage ${e.issent ? "sentmessage" : "receivedmessage"} ${messeges.indexOf(e) == 0 ? "lastmessage" : ""}">
        <div class="messagetext">
        </div>
        </div>
        `;
    let n = getnode(node)[0];
    n.querySelector(".messagetext").textContent = e.textmessage;
    chatbox.append(n);
    // counter++;
  });
  // console.log(counter);
  // // chatbox.innerHTML = node;
  // chatbox.innerHTML = n;
}
function getnode(s) {
  let a = document.createElement("p");
  a.innerHTML = s;
  return a.children;
}
