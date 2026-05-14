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
// Se desestructura con un valor por defecto y un objeto vacío de respaldo
const { cliente: { direccion: { ciudad = "Desconocida" } = {} } } = pedido2;
console.log(ciudad); // "Desconocida"