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

    let r1=parseFloat(document.getElementById("r1").value)

    let A=(Math.PI*r1*r1)

    let resultadoArea=document.getElementById("r11")
    resultadoArea.innerHTML=`${A}`

    document.body.innerHTML(resultadoArea)
}