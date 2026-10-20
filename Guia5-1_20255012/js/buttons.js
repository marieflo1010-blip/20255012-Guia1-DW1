function aviso(){
  alert("Bienvenido al mundo JavaScript");
}
function confirmacion(){
  const confirmacion=confirm("¿Desea salir de la Sesión?");
  alert(`Valor seleccionado ${confirmacion}`);
}
function capturarDatos(){
  let nombre=prompt("¿Cuál es su nombre?");
  let edad=prompt("¿Cuál es su edad?",0);
  alert(`Su nombre es ${nombre} y su edad ${edad}`);
}
function dibujarParrafo(){
  let parrafo=prompt("Escriba la información que desea visualizar en el párrafo");
  if(parrafo!==null){
    document.querySelector("#idParrafo").textContent=parrafo;
  }
}
