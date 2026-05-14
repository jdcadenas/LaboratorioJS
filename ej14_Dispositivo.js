//Ejercicio 14 – Clases con campos privados, herencia y `super` (dificultad alta)

// Concepto: Las clases pueden tener miembros privados con #; extends y super construyen la jerarquía.
// Los getters permiten acceder de forma controlada a los campos privados.
export class Dispositivo {
    #encendido = false;
    constructor(marca) { this.marca = marca; }
    encender() { this.#encendido = true; return `${this.marca} encendido`; }
    get estado() { return this.#encendido; }
}