// console.log('Enlazado')
//1. Acceder al botón para abrir el modal
let btnModal2=document.getElementById("btnCard2");
let btnModal22=document.getElementById("btnCard22");

//2. Acceder a la ventana modal
let ventaM2=document.querySelector(".card2");
let ventaM22=document.querySelector(".card22");

//3. Acceder al boton de cierre de la ventana modal
let clM=document.querySelector(".closeM2");//Acceder a una clase

//4. Abrir ventana modals
btnModal2.addEventListener("click", ()=>{
    ventaM2.style.display="block"
});

//5. Cerrar ventana modal
clM.addEventListener("click", ()=>{
    ventaM2.style.display="none"
});




//4. Abrir ventana modals
btnModal22.addEventListener("click", ()=>{
    ventaM22.style.display="block"
});

//5. Cerrar ventana modal
clM.addEventListener("click", ()=>{
    ventaM22.style.display="none"
});