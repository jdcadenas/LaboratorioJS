///Ejercicio 8 – Destructuring profundo con alias y valor por defecto

// Concepto: Extrae propiedades anidadas, asígnale alias y define un valor por defecto si no existe.
const pedido = {
    id: 101,
    cliente: {
        nombre: "Carlos",
        direccion: {
            ciudad: "Lima"
        }
    }
};
const {
    id,
    cliente: {
        nombre: clienteNombre,
        direccion: { ciudad: ciudadEntrega = "Sin dirección" }
    }
} = pedido;
console.log(clienteNombre, ciudadEntrega); // "Carlos" "Lima"

// Completa para que en el siguiente objeto sin dirección se obtenga "Desconocida":
const pedido2 = { id: 102, cliente: { nombre: "Ana" } };
const { cliente: { direccion: { ciudad = "Desconocida" } = {} } } = pedido2;
console.log(ciudad); // "Desconocida"
