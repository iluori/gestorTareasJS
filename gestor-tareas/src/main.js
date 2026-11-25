import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

console.table(estado.tareas);

const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);

document.querySelector("#app").textContent =
  `Tienes ${pendientes} tareas pendientes y ${completadas} completadas`;
