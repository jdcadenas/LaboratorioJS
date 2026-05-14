import { Dispositivo } from "./ej14_Dispositivo.js";
export class Telefono  extends Dispositivo {
    #garantia;               // meses de garantía
    constructor(marca, modelo, garantia) {
        super(marca);
        this.modelo = modelo;
        this.#garantia = garantia;
    }
    infoCompleta() {
        return `${this.marca} ${this.modelo} - Garantía: ${this.#garantia} meses - Estado: ${this.estado ? "activo" : "apagado"}`;
    }
}