//importar 
import { Telefono } from "./ej14_Telefono.js";

//ej14.js
const t = new Telefono("Xiaomi", "13T", 24);
console.log(t.encender());     // "Xiaomi encendido"
console.log(t.infoCompleta()); // "Xiaomi 13T - Garantía: 24 meses - Estado: activo"

