const Contenedor = require("./contenedor.js")
const contenedor = new Contenedor()

let mascota = {
    nombre: "Copito",
    animal: "Gato",
    raza: "Siames",
    edad: 8,
    
}

// contenedor.crearMascota(mascota).then(result => console.log(result))  // console que se encarga de crear mascota 
// contenedor.leerMascota().then(result => console.log(result)) //console que lee el archivo mascota 
// contenedor.busquedaId(1).then(result => console.log(result)) // console que nos muestra el contenido del archivo buiscado por ID
// contenedor.actualizarMasc(1,mascota).then(result => console.log(result)) // console que actualiza el archivo Mascotas
// contenedor.borrarMasc(1).then(result => console.log(result)) // console que nos muestra si fue exitoso el borrar el contenido del archivo 
