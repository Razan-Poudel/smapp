window.onload = () => {
  document.getElementById("section").scrollTop = 1000;
  let editbtn = document.getElementById("editimage");
  editbtn.addEventListener("click", () => {
    let node = `
    <form id="form" action="index.html" >
    <input
      id="nicknameinput"
      type="text"
      value="Xuchhundri"
      placeholder="Enter a nickname"
      autofocus="true"
      spellcheck="false"
      maxlength="10"
    />
    <button id="submitnickname" title="Submit" type="submit">
      <img src="/icons/ok-btn-icon.png" onerror="this.style.display='none'" />
    </button>
    </form>
  `;
    document.querySelector(".nickname").innerHTML = node;
    let submitnickname = document.getElementById("submitnickname");
    let nicknameinput = document.querySelector("#nicknameinput");
    nicknameinput.addEventListener("blur", () => {
      submitnickname.click();
    })

    submitnickname.addEventListener("click", (e) => {
      e.preventDefault();
      let newnickname = document.querySelector("#nicknameinput").value;
      node = `<div id="text">${newnickname}</div>
        <div id="editimage" title="edit nickname">
          <img
            src="/icons/edit-button.png"
            onerror="this.style.display='none'"
          />
        </div>
        `
      document.querySelector(".nickname").innerHTML = node;
    })
  })
}
function buttonclicked(button) {
  if (button.classList.contains("buttonIsOn")) {
    button.classList.remove("buttonIsOn")
    button.classList.add("buttonIsOff")
    return;
  }
  button.classList.remove("buttonIsOff")
  button.classList.add("buttonIsOn");
}
function submitclicked() {
  hidereports();
}
function hidereports() {
  let a = document.querySelectorAll(".report-options");
  document.querySelector("#submitwrapper").style.display = "none";
  a.forEach(element => {
    element.style.display = "none";
  })
  document.getElementById("innersection-privacy").innerHTML += "<div id='messagetext'><span>Your report has been sucessfully submitted. You can still take other actions like blocking Khatol,dialling emergency number and so on!</span></div>"
}