// src/estado.js — almacén de datos
export const estado = {
  tareas: [
    { id: 1, texto: "Instalar Node y Vite", completada: true },
    { id: 2, texto: "Crear el proyecto gestor-tareas", completada: false },
  ],
  filtro: "todas",
};

// src/tareas.js — lógica de negocio pura
export function contarPendientes(tareas) {
  return tareas.filter((tarea) => !tarea.completada).length;
}

// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Calcula las pendientes y muestra un resumen en el contenedor de la página
const pendientes = contarPendientes(estado.tareas);
document.querySelector("#app").textContent =
  `Tienes ${pendientes} tareas pendientes`;
