//Ejercicio 10 – Nullish coalescing y operadores lógicos de asignación

// Concepto: ??= asigna si la variable es null/undefined, respetando falsy.
const ajustes = { compresion: false, nivel: 0 }; 
ajustes.compresion ??= true; // no cambia (false no es null/undefined)
ajustes.nivel ??= 5;    // sí cambia porque nivel es 0, que es falsy pero no null/undefined
// ¿Qué operador de asignación completa la línea? (escribe el operador)
console.log(ajustes); // { compresion: false, nivel: 5 }

let observacion = `si el nivel en ajustes es igual a 0 la salida es {conpresion: false, nivel: 0} ya que 0 no es null... para que la salida sea correcta
"{ compresion: false, nivel: 5 }" deberia crearse el objeto ajustes.nivel = null ya que al tener el valor establecido la salida resultara nivel!=0`