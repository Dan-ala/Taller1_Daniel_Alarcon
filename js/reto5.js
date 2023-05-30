let btnComprobar=document.getElementById("c")

function com(e) {
    e.preventDefault()

let opcion1=parseInt(document.getElementById("names").value)
let opcion2=parseInt(document.getElementById("last-name").value)
let opcion3=parseInt(document.getElementById("activities").value)

if (opcion1==1 && opcion2==10 && opcion3==17 || opcion1==2 && opcion2==11 && opcion3==16 || opcion1==3 && opcion2==9 && opcion3==18 || 
    opcion1==4 && opcion2==13 && opcion3==21 || opcion1==5 && opcion2==14 && opcion3==19 || opcion1==6 && opcion2==8 && opcion3==20 ||
    opcion1==7 && opcion2==8 && opcion3==15) {
    alert('Los datos son correctos')
}else{
    alert('Los datos no son correctos')
}
}