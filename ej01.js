// Ejercicio 1 – Ámbito y declaración: `let` vs `const`
// Concepto: let y const respetan el bloque; const impide reasignación, let la permite.
// Completa con let o const según corresponda para obtener la salida indicada.

export const ej1 = () => {

    
    let x = 10;
    if (true) {
        const x = 20;          // declara una nueva variable en este bloque
        console.log(x);        // 20
    }
    console.log(x);            // 10
    
    const obj = { valor: 5 };
    obj.valor = 8;             // mutación permitida
    // obj = {};               // Error si la palabra clave es correcta
    console.log(obj.valor);    // 8
    
}