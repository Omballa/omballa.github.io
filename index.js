var i = 0;
var txt = 'William Brandon.';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', function () {
    typeWriter()
  })