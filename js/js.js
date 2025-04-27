//Definicion de variables

let buttonConfirmar = document.getElementById("btnConfirmar")
let buttonReiniciar = document.getElementById("btnReiniciar")
let buttonJugar = document.getElementById("btnJugar")
let mensaje = document.getElementById("mensaje")
let resultado = document.getElementById("resultado")
let intentos = document.getElementById("intentos")
let seccionJuego = document.getElementById("juego")
let seccionPortada = document.getElementById("portada")
let numeroAleatorio = aleatorio(0, 100)
let contador = 10

//Funciones
function jugar(){
    seccionJuego.style.display ="block"
    seccionPortada.style.display ="none"
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function confirmarAccion(){

    let valorInput = document.getElementById("input__number").value

    if (valorInput == ""){
        mensaje.textContent = "No escribiste ningun numero"
        resultado.style.display ="none"
        return
    } else if (valorInput >100 || valorInput <0){
        mensaje.textContent = "Ingresaste un numero fuera del rango establecido"
        resultado.style.display ="none"
        return
    }

    mensaje.textContent = `Escribiste el numero ${valorInput}`
    resultado.style.display = "block";

        if (valorInput < numeroAleatorio){
            
            resultado.textContent = `El numero que penso la computadora es mayor que ${valorInput}`
            intentos.textContent = `Te quedan ${contador - 1} intentos`
            document.getElementById("input__number").value = "";
            contador--

        } else if (valorInput > numeroAleatorio){
            resultado.textContent = `El numero que penso la computadora es menor que ${valorInput}`
            intentos.textContent = `Te quedan ${contador - 1} intentos`
            document.getElementById("input__number").value = "";
            contador--
        } 
        
        if (valorInput == numeroAleatorio) {
            resultado.textContent = `¡Felicidades! acertaste el numero que penso la computadora `
            resultado.style.display ="block"
        } else if (contador == 0){
            resultado.textContent = `Perdiste. Te quedaste sin intentos. El numero que penso la computadora es: ${numeroAleatorio}`
            resultado.style.display ="block"
            buttonConfirmar.disabled = true
            buttonReiniciar.style.display ="block"
        }
}

function reiniciarJuego(){
    location.reload()
}

//No mostrar la seccion "Juego"

seccionJuego.style.display ="none"

//No mostrar el boton reiniciar
buttonReiniciar.style.display ="none"

//Invocar funciones
buttonConfirmar.addEventListener("click", confirmarAccion)
buttonReiniciar.addEventListener("click", reiniciarJuego)
buttonJugar.addEventListener("click", jugar)



    


