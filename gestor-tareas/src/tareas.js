export function contarPendientes(tareas) {
  return tareas.filter((tarea) => !tarea.completada).length;
}
