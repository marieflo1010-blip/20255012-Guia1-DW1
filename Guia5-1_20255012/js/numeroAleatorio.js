// Ejemplo 3 y ejercicio complementario 1: indicar si el número es mayor o menor.
const numeroIntentos=3;
let numeroAleatorio, intentos;
function nuevoJuego(){
  numeroAleatorio=Math.floor(Math.random()*25)+1;
  intentos=1;
  document.querySelector('#idParrafo').textContent='Tienes 3 intentos para adivinar un número del 1 al 25.';
}
function generarNumeroAleatorio(){
  if(intentos>numeroIntentos)return;
  const entrada=prompt(`¿Qué número se ha generado (intento ${intentos})?`);
  if(entrada===null)return;
  const numero=Number(entrada);
  const parrafo=document.querySelector('#idParrafo');
  if(!Number.isInteger(numero)||numero<1||numero>25){
    parrafo.textContent='Ingresa un número entero entre 1 y 25.';
    return;
  }
  if(numero===numeroAleatorio){
    parrafo.textContent=`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intento(s).`;
    intentos=numeroIntentos+1;
    return;
  }
  const pista=numero<numeroAleatorio?'más alto':'más bajo';
  if(intentos===numeroIntentos){
    parrafo.textContent=`Se acabaron los intentos. El número era ${numeroAleatorio}.`;
    intentos++;
  }
  else{
    parrafo.textContent=`Intenta con un número ${pista}. Te quedan ${numeroIntentos-intentos} intento(s).`;
    intentos++;
  }
}
document.querySelector('#idBtnNumero').addEventListener('click',generarNumeroAleatorio);
document.querySelector('#idBtnNuevo').addEventListener('click',nuevoJuego);
nuevoJuego();
