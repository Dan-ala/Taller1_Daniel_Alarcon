//Reglas de validación
const number=/^[0-9]{5,10}$/
const textName=/^[a-zA-ZñÑá-úÁ-Ú ]{3,50}$/
const textApellido=/[a-zA-ZñÑá-úÁ-Ú ]{3,50}/
let flag
let flag2

//Acceder a los elementos que se van a estar validando
const form=document.getElementById("form")
//const form=document.querySelector("#form")


const nDocumento=form.nDocumento.value //Estoy accediendo por el valor
const name=form.name.value
//Acceder al feedback
const f1=document.querySelector("#campoDoc .feedback")
const f2=document.querySelector("#campoNombre .feedback")

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

form.name.addEventListener("input",e=>{
    
    //VALIDACION DEL NOMBRE
    if(textName.test(e.target.value)){
        form.name.setAttribute("class","success")
        f2.textContent=`Solo se admiten caracteres alfanuméricos`
        f2.style.setProperty("visibility","hidden")
        f2.style.setProperty("opacity","0")
        flag2=true
    }else{
        form.name.setAttribute("class","error")
        f2.style.setProperty("visibility","visible")
        f2.textContent=`Solo se admiten caracteres alfanuméricos`
        f2.style.setProperty("opacity","1")
        flag2=false
    }
})

form.addEventListener("submit",e=>{
    e.preventDefault()

    if(form.nDocumento.value==null || form.nDocumento.value==0 || flag==false){
        alert('Debe ingresar un número de documento válido')
        form.nDocumento.focus()
        form.setAttribute("class","error")
    }
    else if (form.name.value==null || form.name.value==0 || flag2==false) {
        alert('Debe ingresar bien el nombre')
        form.focus()
        form.setAttribute("class","error")
    }else{
        form.submit()
    }
})