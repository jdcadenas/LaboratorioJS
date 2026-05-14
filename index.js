//importar 
import { saludar } from "./ej02.js"
import { ej1 } from "./ej01.js";
import { ej3 } from "./ej03.js";
import { ej5 } from "./ej05.js";
import { ej7 } from "./ej07.js";
import { ej9 } from "./ej09.js";
import { ej11 } from "./ej11.js";
import { ej13 } from "./ej13.js";
import { ej15 } from "./ej15.js";
import { ej17 } from "./ej17.js";
import { ej19 } from "./ej19.js";


saludar();
ej1();
ej3();
ej5();
ej7();
ej9();
ej11();
ej13();
ej15();
ej17();
ej19();
import { Telefono } from "./ej14_Telefono.js";

//ej14.js
const t = new Telefono("Xiaomi", "13T", 24);
console.log(t.encender());     // "Xiaomi encendido"
console.log(t.infoCompleta()); // "Xiaomi 13T - Garantía: 24 meses - Estado: activo"

