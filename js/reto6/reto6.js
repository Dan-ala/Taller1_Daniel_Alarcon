//CIRCULO
let btnModalCirculo=document.getElementById("btnCard1Per")
let btnModal11=document.getElementById("btnCard1Area")

let vModalCirculo=document.querySelector(".card1")
let vModalCirculo11=document.querySelector(".cardIni1")
let vModalCirculoArea=document.querySelector(".cardArea1")

let btnCloseCirculo=document.querySelector(".closeM")
let btnCloseArea=document.querySelector(".closeMArea")

btnModalCirculo.addEventListener("click", ()=>{
    vModalCirculo.style.display="block"
});

// //Abrir Ventana del área
btnModal11.addEventListener("click", ()=>{
    vModalCirculoArea.style.display="block"
})

btnCloseCirculo.addEventListener("click", ()=>{
    vModalCirculo.style.display="none"
})

//Cerrar Modal de área
btnCloseArea.addEventListener("click", ()=>{
    vModalCirculoArea.style.display="none"
})






/*TRIANGULO*/
//1. Acceder al botón para abrir el modal
let btnModal2=document.getElementById("btnCard2Per");
let btnModal22=document.getElementById("btnCard2Area");

//2. Acceder a la ventana modal
let ventaM2=document.querySelector(".card2");
let ventaM22=document.querySelector(".cardIni2");


//3. Acceder al boton de cierre de la ventana modal
let clM=document.querySelector(".closeM2");
let clM2=document.querySelector(".closeM22");//Acceder a una clase

//4. Abrir ventana modals
btnModal2.addEventListener("click", ()=>{
    ventaM2.style.display="block"
});

//5. Cerrar ventana modal
clM.addEventListener("click", ()=>{
    ventaM2.style.display="none"
});