let btnFormas=document.getElementById("btnFormas")

function triangulos(e) {
    e.preventDefault()


let l1=parseFloat(document.getElementById('l1').value)
let l2=parseFloat(document.getElementById('l2').value)
let l3=parseFloat(document.getElementById('l3').value)

if (l1==l2 && l1==l3) {
    alert(`Los lados ingresados indican que es un triángulo EQUILATERO`)
}else if(l1!=l2 && l2==l3 || l2!=l1 && l1==l3 && l2!=l3 || l3!=l1 && l1==l2){
    alert(`Hay 2 dos lados iguales, eso indica que es un triángulo ISOSCELES`)
}else if(l1!=l2 && l3!=l1 && l3!=l2){
    alert(`Los lados ingresados son diferentes, eso indica que es un triángulo ESCALENO`)
}
    
}