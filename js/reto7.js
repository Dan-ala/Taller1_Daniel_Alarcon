const nombre=document.getElementById("name")
const email=document.getElementById("Email")
const apellido=document.getElementById("last-name")
const pass=document.getElementById("password")
const nDoc=document.getElementById("nDocumento")
const form=document.getElementById("form")
const parrafo=document.getElementById("warnings")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let nombre=/^[a-zA-Z0-9]+$/
    let apellido=/^[a-zA-Z0-9]+$/
    let re = /^[a-zA-Z0-9_.+-]+@misena\.edu\.co$/
    let pssd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/
    let nDoc = /^\d{5,}$/
    parrafo.innerHTML = ""
    let entrar = false

    if (nombre.value.length <3) {
        warnings+=`El nombre no es válido <br>`
        entrar=true
    }

    if (apellido.value.length <3) {
        warnings+=`El nombre no es válido <br>`
        entrar=true
    }
    
    if (!re.test(email.value)) {
        warnings+=`El email no es válido <br>`
        entrar=true
    }

    if (pssd.value.length <10) {
        warnings+=`La password no es válida <br>`
        entrar=true
    }

    if (nDoc){
        warnings+=`El documento no es válido`
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }


})