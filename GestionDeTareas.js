// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: true },
  { nombre: "Estudiar JS", prioridad: 2, completada: false },
  { nombre: "Ver películas", prioridad: 3, completada: true }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/

// Función para mostrar las tareas con su estado se utilizo un ciclo foreach para recorrer el arreglo de tareas
// y mostrar el nombre y su estado
function mostrarTareas(tareas) {
  //por cada elemento dentro del arreglo obtiene su nombre y estado imprimiendolo mediante console.log
  tareas.forEach(element => {
    console.log("Tareas:"+  " " + element.nombre + " " + "Estado:"+ " "+ element.completada)
  });
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  // se utiliza el metodo filter filtrando las tareas que tienen el estado de completado en true y se retorna un nuevo arreglo con las tareas completadas
  return lista.filter(filter => filter.completada==true)
};



/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  // se utiliza el metodo filter filtrando las tareas que tienen el estado de completado en false y se retorna un nuevo arreglo con las tareas pendientes
  return lista.filter(filter => filter.completada==false)
};



/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  // se utiliza el metodo map para recorrer el arreglo de tareas y retornar un nuevo arreglo con solo los nombres de las tareas
  return lista.map(tareas => tareas.nombre) 
};

/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  // se retorna la longitud del arreglo de tareas utilizando la propiedad length para obtener el total de tareas
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    // se llama a la función mostrarTareas pasando el arreglo de tareas del objeto sistema utilizando this.tareas para acceder a las tareas del objeto
    console.log(mostrarTareas(this.tareas));
  },

  mostrarCompletadas: function() {
    // se llama a la función obtenerCompletadas pasando el arreglo de tareas del objeto sistema utilizando this.tareas para acceder a las tareas del objeto y se muestra el resultado en consola
    console.log(obtenerCompletadas(this.tareas));   
  },

  mostrarPendientes: function() {
    // se llama a la función obtenerPendientes pasando el arreglo de tareas del objeto sistema utilizando this.tareas para acceder a las tareas del objeto y se muestra el resultado en consola
    console.log(obtenerPendientes(this.tareas));
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
// se valida si el arreglo esta vacio calculando su longitud con length
// se valida si todas las tareas estan completadas utilizando el metodo every para verificar que todas las tareas tengan el estado de completada en true
// si ninguna de las condiciones anteriores se cumple se muestra que hay tareas pendientes
if (tareas.length === 0) {
  console.log("No hay tareas");
}else if(tareas.every(tarea => tarea.completada ==true))
{  console.log("Todas las tareas completadas");
}else{
  console.log("Hay tareas pendientes");
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

// se utiliza un switch para evaluar el valor de la variable opcion y ejecutar la función correspondiente dependiendo del caso
const opcion = 3;

switch (opcion) {
  case 1:
    console.log("Todas las tareas:");
    sistema.mostrarTareas();
    break;

  case 2:
    console.log("Tareas completadas:");
    sistema.mostrarCompletadas();
    break;

  case 3:
    console.log("Tareas pendientes:");
    sistema.mostrarPendientes();
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/
console.log("-----------------PRUEBAS-----------------");
console.log(mostrarTareas(tareas));
console.log(obtenerCompletadas(tareas));
console.log(obtenerPendientes(tareas));
console.log(obtenerNombres(tareas));
console.log("total de tareas:" +" "+contarTareas(tareas));
