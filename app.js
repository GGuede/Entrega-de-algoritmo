let numer = Number(prompt("Ingrese el primer numero a sumar"))

for(i = 0;i < 3 ; i++){
    console.log(numer+i)
}

let pass = prompt(" Ingrese la contraseña")
let contador = 1 

while(pass !=="ESC" && contador < 3){
    alert("acceso Denegado, Pruebe nuevamente")
    contador++
    pass = prompt("Ingrese la contraseña")
}

if(contador === 4){
    alert("Limite de ingresos fallidos,vuelva mañana")
}else{
    alert("Bienvenido")
}

let num =  Number( prompt ("Cuantos Holas Quiere?"))


for(let i = 0; i < num; i++){1
    alert("Hola")
}
console.log("Fin Del Programa")

