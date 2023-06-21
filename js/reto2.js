function clickme() {
    alert("Hello world!")
}

window.onscroll = function e2() {
    alert('You are scrolling down')
}

document.getElementById(
    "inTest").addEventListener("inTest", e3);
      
function e3() {
    alert("Input field lost focus.");
}

function e4() {
    const x = document.getElementById("test").value;
    document.getElementById(
        "test2").innerHTML = "You selected: " + x;
}


//e5
function dragStart(event) {
    // starting dragging
     event.dataTransfer.setData(
       "Text", event.target.id);
 }

 function dragging(event) {
   // element being dragged
     document.getElementById(
       "demo").innerHTML = 
       "The h5 element is being dragged"; 
 }
 function allowDrop(event) {
     event.preventDefault();
 }

 function drop(event) {
     event.preventDefault();
     // returns the data that is dropped
     var data = event.dataTransfer.getData("Text"); 
     
     event.target.appendChild(
       document.getElementById(data));
     
    //element is being dropped
     document.getElementById("demo").innerHTML =
       "The p element was dropped";
 }

//e6
document.getElementById("inTest2").addEventListener("inTest2",e6)
function e6(inTest2) {
    inTest2.style.background = " #900C3F";
}

//e7
document.getElementById(
    "inTest3").addEventListener("keydown", e7);

  function e7() {
      document.getElementById(
        "inTest3").style.backgroundColor = 
        "Orange";

  }
//e8
function e8() {
    alert('One key is being pressed!')
}
//e9
document.getElementById(
    "test4").addEventListener(
    "mousedown", btnpressed);
 
  document.getElementById(
    "test4").addEventListener(
    "mouseup", btnup);

  function btnpressed() {
      document.getElementById(
        "test4").innerHTML = "Button Pressed.";
  }

  function btnup() {
      document.getElementById(
        "test4").innerHTML = "Button Released.";
  }
//e10
const div_of_the_event = document.getElementById("myDiv")

function e10() {
  div_of_the_event.style.animation = "mymove 4s 2";


//Aquí es donde inicia la animación
div_of_the_event.addEventListener("animationstart",()=>{
  div_of_the_event.innerHTML= "The animation has started";
  div_of_the_event.style.background="pink"
})

div_of_the_event.addEventListener("animationiteration",()=>{
  div_of_the_event.innerHTML= "The animation was played again";
  div_of_the_event.style.background="lightblue"
})
div_of_the_event.addEventListener("animationend",()=>{
  div_of_the_event.innerHTML = "The animation has completed";
  div_of_the_event.style.backgroundColor = "lightgray";
})
}