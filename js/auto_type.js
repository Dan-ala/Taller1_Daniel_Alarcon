let typed = new Typed(".auto-type",{
    strings: ["This is my interface", "Here you will see my JS tasks", "Have fun!"],
    typeSpeed: 170,
    backSpeed: 170,
    loop: true
})

let typed2 = new Typed(".auto-type2",{
    strings: ["Welcome to", "Java Script"],
    typeSpeed: 170,
    backSpeed: 200,
    loop: true
})

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("auto-type3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}