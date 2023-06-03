/*Perímetro de un círculo*/
function perC(e){
    e.preventDefault()

    let r=parseFloat(document.getElementById("radioC").value)
    let C =(2*Math.PI*r)

    let resultado1=document.getElementById("r1")
    resultado1.innerHTML=`${C}`
    
    document.body.innerHTML(resultado1)
}

function areaC(e){
    e.preventDefault()

    let A=parseFloat(document.getElementById)
}