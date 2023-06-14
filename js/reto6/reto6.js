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
let vModalAreaT=document.querySelector(".cardArea2")


//3. Acceder al boton de cierre de la ventana modal
let clM=document.querySelector(".closeM2");
let clM2=document.querySelector(".closeM22");//Acceder a una clase

//4. Abrir ventana modals
btnModal2.addEventListener("click", ()=>{
    ventaM2.style.display="block"
});



btnModal22.addEventListener("click", ()=>{
    vModalAreaT.style.display="block"
})


//5. Cerrar ventana modal
clM.addEventListener("click", ()=>{
    ventaM2.style.display="none"
});

clM2.addEventListener("click", ()=>{
    vModalAreaT.style.display="none"
});



//RECTÁNGULO
let btnModalPerRec=document.getElementById("btnCard3Per")
let btnModalAreRect=document.getElementById("btnCard3Area")

//Ventana modal
let vModal3=document.querySelector(".card3")
let vModalIni3=document.querySelector(".cardIni3")
let vModalAreaR=document.querySelector(".cardArea3")

//Cerrar ventana modal
let closePerRec=document.querySelector(".closeM3")
let closeAreaRec=document.querySelector(".closeM33")

//Abrir modal
btnModalPerRec.addEventListener("click", ()=>{
    vModal3.style.display="block"
})

//modal del áreaR
btnModalAreRect.addEventListener("click", ()=>{
    vModalAreaR.style.display="block"
})

//Cerrar modal
closePerRec.addEventListener("click", ()=>{
    vModal3.style.display="none"
})

//Cerrar modal del área
closeAreaRec.addEventListener("click",()=>{
    vModalAreaR.style.display="none"
})


//CUADRADO
let btnPerCuadrado=document.getElementById("btnCard4Per")
let btnAreaCuadrado=document.getElementById("btnCard4Area")

let vModalPerCuadrado=document.querySelector(".card4")
let vModalAreaCuadrado=document.querySelector(".cardArea4")

let closeModalPer=document.querySelector(".closeM4")
let closeModalArea=document.querySelector(".closeM44")

btnPerCuadrado.addEventListener("click",()=>{
    vModalPerCuadrado.style.display="block"
})

closeModalPer.addEventListener("click",()=>{
    vModalPerCuadrado.style.display="none"
})

//Ventana modal del área
btnAreaCuadrado.addEventListener("click",()=>{
    vModalAreaCuadrado.style.display="block"
})

//Cerrar modal del área
closeModalArea.addEventListener("click",()=>{
    vModalAreaCuadrado.style.display="none"
})