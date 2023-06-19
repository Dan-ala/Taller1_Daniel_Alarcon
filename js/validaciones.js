//Reglas de validación
const number=/^[0-9]{5,10}$/
const textName=/^[a-zA-ZñÑá-úÁ-Ú ]{3,50}$/
const textApellido=/^[a-zA-ZñÑá-úÁ-Ú ]{3,50}$/
const fechaLimite = new Date("01-01-2002")
const mail=/(@misena.edu.co)/

let flag,flag2,flag3,flag4,flag5

//Acceder a los elementos que se van a estar validando
const form=document.getElementById("form")
//const form=document.querySelector("#form")

//VARIABLES PARA ACCEDER A SUS VALORES
const nDocumento=form.nDocumento.value //Estoy accediendo por el valor
const name=form.name.value
const last_name=form.last_name.value
const email=form.Email.value



//Acceder al feedback
const f1=document.querySelector("#campoDoc .feedback")
const f2=document.querySelector("#campoNombre .feedback")
const f3=document.querySelector("#campoApellido .feedback")
const f4=document.querySelector("#campoDeFecha .feedback")
const f5=document.querySelector("#campoEmail .feedback")



//VALIDACIÓN DEL NÚMERO DEL DOCUMENTO
form.nDocumento.addEventListener("input",e=>{

    //console.log('Se est{a escribiendo sobre el input')
    if(number.test(e.target.value)){
        //Regla pasa la validación:
        form.nDocumento.setAttribute("class","success")
        f1.textContent="Solo puede digitar valores numéricos con una longitud mínimo de 5 caracter max 10"
        f1.style.setProperty("visibility","hidden")
        f1.style.setProperty("opacity","0")
        flag=true
    }else{
        //Regla NO pasa la validación
        form.nDocumento.setAttribute("class","error")
        //const campoDoc=form.setAttribute("class","feedback")

        //Show message
        f1.textContent="Solo puede digitar valores numéricos con una longitud mínimo de 5 caracter max 10"
        f1.style.setProperty("visibility","visible")
        f1.style.setProperty("opacity","1")
        flag=false
    }

})



//VALIDACION DEL NOMBRE
form.name.addEventListener("input",e=>{
    
    if(textName.test(e.target.value)){
        form.name.setAttribute("class","success")
        f2.textContent=`Solo se admiten caracteres alfanuméricos`
        f2.style.setProperty("visibility","hidden")
        f2.style.setProperty("opacity","0")
        flag2=true
    }else{
        form.name.setAttribute("class","error")
        f2.textContent=`Solo se admiten caracteres alfanuméricos`
        f2.style.setProperty("visibility","visible")
        f2.style.setProperty("opacity","1")
        flag2=false
    }
})



//APELLIDO
form.last_name.addEventListener("input",e=>{
    if (textApellido.test(e.target.value)) {
        form.last_name.setAttribute("class","success")
        f3.textContent='Solo se admiten caracteres alfanuméricos'
        f3.style.setProperty("visibility","hidden")
        f3.style.setProperty("opacity","0")
        flag3=true
    }else{
        form.last_name.setAttribute("class","error")
        f3.textContent='Solo se admiten caracteres alfanuméricos'
        f3.style.setProperty("visibility","visible")
        f3.style.setProperty("opacity","1")
        flag3=false
    }
})

const date_of_birth = document.getElementById("date_of_birth")

//FECHA DE NACIMIENTO
form.date_of_birth.addEventListener("change",e=>{

    const fechaIngresada = document.querySelector('#date_of_birth').value;
    const parseIntoDate = new Date(fechaIngresada);
    console.log(parseIntoDate)
  
    console.log(fechaLimite)


    if (parseIntoDate<fechaLimite) {
        form.date_of_birth.setAttribute("class","success")
        f4.textContent='Ojo para digitar su fecha de nacimiento, debe ser mayor de edad'
        f4.style.setProperty("visibility","hidden")
        f4.style.setProperty("opacity","0")
        flag4=true
    }else{
        form.date_of_birth.setAttribute("class","error")
        f4.textContent='Ojo para digitar su fecha de nacimiento, debe ser mayor al año 2002'
        f4.style.setProperty("visibility","visible")
        f4.style.setProperty("opacity","1")
        flag4=false
    }
})


//EMAIL
form.Email.addEventListener("input",e=>{
    if (mail.test(e.target.value)) {
        form.Email.setAttribute("class","success")
        f5.textContent='Solamente se permite el dominio @misena.edu.co'
        f5.style.setProperty("visibility","hidden")
        f5.style.setProperty("opacity","0")
        flag5=true
    }else{
        form.Email.setAttribute("class","error")
        f5.textContents='Solamente se permite el dominio @misena.edu.co'
        f5.style.setProperty("visibility","visible")
        f5.style.setProperty("opacity","1")
        flag5=false
    }
})
























//Submit
form.addEventListener("submit",e=>{
    e.preventDefault()

    if(form.nDocumento.value==null || form.nDocumento.value==0 || flag==false){
        alert('Debe ingresar un número de documento válido')
        form.nDocumento.focus()
        form.setAttribute("class","error")
    }
    else if (form.name.value==null || form.name.value==0 || flag2==false) {
        alert('Debe ingresar bien el nombre')
        form.name.focus()
        form.setAttribute("class","error")
    }else if(form.last_name.value==null || form.last_name.value==0 || flag3==false){
        alert('Debe ingresar bien su apellido')
        form.last_name.focus()
        form.setAttribute("class","error")
    }else if(form.date_of_birth.value==null || form.date_of_birth.value==0 || flag4==false){
        alert('Debe ser mayor de edad')
        form.date_of_birth.focus()
        form.setAttribute("class","error")
    }else if(form.Email.value==null || form.Email.value==0 || flag5==false){
        alert('El dominio no es correcto')
        form.Email.focus()
        form.setAttribute("class","error")
    }
    
    
    
    
    else{
        form.submit()
    }
})