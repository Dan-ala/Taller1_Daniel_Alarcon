/*Perímetro de un círculo*/
function perC(e){
    e.preventDefault()

    let r=parseFloat(document.getElementById("radioC").value)
    let C =(2*Math.PI*r)

    let resultado1=document.createElement("h5")
    resultado1.innerHTML=`<h5>Resultado: ${C}</h5>`

    resultado1.style.setProperty("margin-top","-800px")
    resultado1.style.setProperty("align-content","center")
    resultado1.style.setProperty("justify-content","center")

    document.body.appendChild(resultado1)


}