let result=document.querySelector(".resultados")
let btnWord=document.getElementById("btnWord")

function Word(e) {
    e.preventDefault()

    
let word=(document.getElementById("word").value)
let op=parseInt(document.getElementById("op").value)
 switch (op) {
    case 1:
        alert("La longitud de la palabra es de: "+word.length)
        break;

    case 2:
        alert(`La palabra, ${word} es convertida a mayúsculas: ${word.toUpperCase()}`)
        break;

    case 3:
            alert(`La palabra, ${word} es convertida a minúsculas: ${word.toLowerCase()}`)
        break;

    case 4:
        alert(`El primer carácter de ${word} es: ${word.charAt(0)}`)
        break;
 
    default:
        alert('Ingrese los numeros suministrados')
        break;
 }
}