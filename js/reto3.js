let btnT=document.getElementById("btnT")

function temperaturas(e) {
    e.preventDefault()


let grados=parseFloat(document.getElementById("grados").value)
let to1=parseFloat(document.getElementById("to1").value)
let to2=parseFloat(document.getElementById("to2").value)


if (to1==2 && to2==4) {
    alert('La conversión será de C a F')
    let F=(grados*9/5)+32;
    alert(`El resultado es: ${F}`);
}
    else if(to1==1 && to2==5){
        alert('La conversión será de F a C')
        let C=(grados-32)*5/9;
        alert(`El resultado es: ${C}`);
    }
            else if(to1==1 && to2==6){
                alert('La conversión será de F a K')
                let K=(grados-32)*5/9+273.15
                alert(`El resultado es: ${K}`);
    }
                else if(to1==2 && to2==6){
                    alert('La conversión será de C a K')
                    let K2=grados+273.15
                    alert(`El resultado es: ${K2}`);
    }
                    else if(to1==3 && to2==4){
                        alert('La conversión será de K a F')
                        let F2=(grados-273.15)*9/5+32;
                        alert(`El resultado es: ${F2}`);
    }
                        else if(to1==3 && to2==5){
                            alert('La conversión será de K a C')
                            let C2=grados-273.15
                            alert(`El resultado es: ${C2}`);
    }
}