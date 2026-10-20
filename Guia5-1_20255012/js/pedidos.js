// Ejercicio complementario 2. Los pedidos se guardan solo en memoria.
const pedidos=[];
let precioMaximoActivo=null;
const $=id=>document.getElementById(id);
const dinero=n=>n.toFixed(2);
function obtenerPedidosVisibles(){
  return precioMaximoActivo===null?pedidos:pedidos.filter(p=>p.precio<=precioMaximoActivo);
}
function calcularTotales(){
  return pedidos.reduce((acum,p)=>({
    unidades:acum.unidades+p.cantidad,monto:acum.monto+p.precio*p.cantidad
  }),{
    unidades:0,monto:0
  });
}
function actualizarTabla(){
  const filas=obtenerPedidosVisibles().map(p=>{
    const tr=document.createElement('tr');
    [p.producto,`$${dinero(p.precio)}`,String(p.cantidad),`$${dinero(p.precio*p.cantidad)}`].forEach(valor=>{
      const td=document.createElement('td');
      td.textContent=valor;
      tr.appendChild(td);
    });
    return tr;
  });
  $('tablaPedidos').replaceChildren(...filas);
  if(filas.length===0){
    const tr=document.createElement('tr');
    const td=document.createElement('td');
    td.colSpan=4;
    td.textContent='No hay pedidos para mostrar.';
    tr.appendChild(td);
    $('tablaPedidos').appendChild(tr);
  }
  const totales=calcularTotales();
  $('totalUnidades').textContent=totales.unidades;
  $('montoTotal').textContent=dinero(totales.monto);
}
function agregarPedido(event){
  event.preventDefault();
  const producto=$('producto').value.trim();
  const precio=Number($('precio').value);
  const cantidad=Number($('cantidad').value);
  if(!producto||!Number.isFinite(precio)||precio<=0||!Number.isInteger(cantidad)||cantidad<=0){
    $('mensaje').textContent='Verifica que el producto no esté vacío, el precio sea mayor que cero y la cantidad sea un entero positivo.';
    return;
  }
  pedidos.push({
    producto,precio,cantidad
  });
  $('formPedido').reset();
  $('mensaje').textContent='Pedido agregado correctamente.';
  actualizarTabla();
}
function filtrarPedidos(){
  const entrada=$('precioMaximo').value.trim();
  const maximo=Number(entrada);
  if(entrada===''||!Number.isFinite(maximo)||maximo<0){
    $('mensaje').textContent='Ingresa un precio máximo válido (cero o mayor).';
    return;
  }
  precioMaximoActivo=maximo;
  $('mensaje').textContent='Filtro aplicado sin modificar los pedidos.';
  actualizarTabla();
}
function mostrarTodos(){
  precioMaximoActivo=null;
  $('precioMaximo').value='';
  $('mensaje').textContent='Mostrando todos los pedidos.';
  actualizarTabla();
}
function limpiarPedidos(){
  pedidos.length=0;
  precioMaximoActivo=null;
  $('precioMaximo').value='';
  $('mensaje').textContent='Se limpiaron todos los pedidos.';
  actualizarTabla();
}
$('formPedido').addEventListener('submit',agregarPedido);
$('filtrar').addEventListener('click',filtrarPedidos);
$('mostrarTodos').addEventListener('click',mostrarTodos);
$('limpiar').addEventListener('click',limpiarPedidos);
actualizarTabla();
