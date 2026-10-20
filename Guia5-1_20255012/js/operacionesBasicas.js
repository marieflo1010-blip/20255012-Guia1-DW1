const parrafo=document.querySelector('#idParrafo');
function pedirNumeros(operacion){
  const a=prompt(`Ingrese el primer número a ${operacion}`);
  if(a===null)return null;
  const b=prompt(`Ingrese el segundo número a ${operacion}`);
  if(b===null)return null;
  if(a.trim()===''||b.trim()===''||!Number.isFinite(Number(a))||!Number.isFinite(Number(b))){
    parrafo.textContent='Ingrese números válidos.';
    return null;
  }
  return [Number(a),Number(b)];
}
function calcular(tipo){
  const valores=pedirNumeros(tipo);
  if(!valores)return;
  const [a,b]=valores;
  let resultado,simbolo;
  switch(tipo){
    case 'sumar':resultado=a+b;
    simbolo='+';
    break;
    case 'restar':resultado=a-b;
    simbolo='-';
    break;
    case 'multiplicar':resultado=a*b;
    simbolo='×';
    break;
    case 'dividir':if(b===0){
      parrafo.textContent='Error: no se puede dividir entre cero.';
      return;
    }
    resultado=a/b;
    simbolo='÷';
    break;
  }
  parrafo.textContent=`${a} ${simbolo} ${b} = ${resultado}`;
}
['Sumar','Restar','Multiplicar','Dividir'].forEach(nombre=>document.querySelector('#idBtn'+nombre).addEventListener('click',()=>calcular(nombre.toLowerCase())));
