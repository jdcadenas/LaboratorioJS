const ajustes = { compresion: false, nivel: 0 };

ajustes.compresion ??= true; // Mantiene 'false' porque no es null ni undefined.
ajustes.nivel ||= 5;        // Cambia a 5 porque 0 es un valor falsy.

console.log(ajustes); // { compresion: false, nivel: 5 }