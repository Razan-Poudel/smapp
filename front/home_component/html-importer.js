
changesectioncomponent();
function changesectioncomponent() {
    let includes = Array.from(document.querySelectorAll(".import"));
    includes.forEach(element => {
        let src = element.getAttribute("import-html");
        fetch(`../friendinfo/${src}.html`).then(response => response.text()).then(data => {
            element.innerHTML = data;
        })
    })


}