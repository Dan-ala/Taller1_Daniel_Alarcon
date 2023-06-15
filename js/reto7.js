const nombre = document.getElementById("name");
const email = document.getElementById("Email");
const apellido = document.getElementById("last-name");
const pass = document.getElementById("password");
const nDoc = document.getElementById("nDocumento");
const confirmP = document.getElementById("confirm-password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let warnings = ""
  let nombres = /^[a-zA-Z0-9]+$/
  let apellidos = /^[a-zA-Z0-9]+$/
  let emailRegex = /^[a-zA-Z0-9_.+-]+@misena\.edu\.co$/
  let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
  let confirmPRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
  let nDocRegex = /^\d{5,10}$/
  parrafo.innerHTML = ""
  let entrar = false

  if (nombre.value.length < 3) {
    warnings += `El nombre no es válido <br><br>`
    entrar = true;
  }

  if (apellido.value.length < 3) {
    warnings += `El apellido no es válido <br><br>`
    entrar = true;
  }

  if (!emailRegex.test(email.value)) {
    warnings += `El email no es válido <br><br>`
    entrar = true;
  }

  if (!passRegex.test(pass.value)) {
    warnings += `La contraseña no es válida <br><br>`
    entrar = true;
  }

  if (!confirmPRegex.test(confirmP.value)) {
    warnings += `La confirmación de contraseña no es válida <br><br>`
    entrar = true;
  }

  if (!nDocRegex.test(nDoc.value)) {
    warnings += `El documento no es válido <br><br>`
    entrar = true;
  }

  if (confirmP.value !== pass.value) {
    warnings += `Las contraseñas no coinciden <br><br>`
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings
  }else{
    parrafo.innerHTML = "Sent"
  }




  //Ventana de Terms & Conditions
  //ventana modal
  let vModalTandC = document.querySelector(".TermsandConditions")
  //abrir ventana modal
  {
    vModalTandC.style.display="block"
  }

  //btn cerrar modal
  let btnClose = document.getElementById("closeM5")
  //cerrar modal
  
btnClose.addEventListener("click",()=>{
vModalTandC.style.display="none"
})
  
})

