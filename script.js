document.oncontextmenu = function(){
    alert("Dont inspect")
    return false
}
document.onkeydown = function(event){
    if (event.key == "F12"){
        alert("Dont inspect")
        event.preventDefault();
        return false
    }
}
const text = document.getElementById("scrollText")
let pos = 90;
const speed = 0.5;``
const resetpoint = 325;

function movetext(){
    pos += speed
    if (pos > resetpoint) {
        pos = 90;
    }
    text.style.top = pos + 'px';
    requestAnimationFrame(movetext);
}
movetext();


document.getElementById("B1").onclick = function(){
    window.scrollTo({
        top: 900,
        behavior: "smooth"

    });
}

document.getElementById("B2").onclick = function(){
    window.scrollTo({
        top: 2000,
        behavior: "smooth"

    });
}
window.onload = function() {
  if (window.innerWidth <= 1020) {
    alert("This website will be available on mobile soon.");
    window.location.href = "about:blank"; // redirect to empty page
  }
}