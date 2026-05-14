function partirObjeto({ id, nombre, ...resto }) {
    return { identificador: id, extra: resto };
}
const entrada = { id: 123, nombre: "Teclado", color: "negro", precio: 49.99 };
console.log(partirObjeto(entrada));