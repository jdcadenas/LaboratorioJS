//Ejercicio 16 – Módulos: export named, default e import (Moneda BsD)

// ── main.js ──
import iva, { currency, descuento } from "./ej16_Helpers.js";
console.log(iva(100));                // 18
console.log(currency(99.9));          // "BsD 99.90"
console.log(descuento(100, 20));      // 80