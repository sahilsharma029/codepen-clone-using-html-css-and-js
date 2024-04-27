function run(){
    let htmlarea = document.getElementById("html-area").value;
    let cssarea = document.getElementById("css-area").value;
    let jsarea = document.getElementById("js-area").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlarea + "<style>" + cssarea + "</style>";
    output.contentWindow.eval(jsarea);
};