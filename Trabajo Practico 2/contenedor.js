
const fs = require('fs')

const pathToFile = './mascotas.json' // creamos el archivo json

class Contenedor {

   ///////////////////////// //creamos el metodo que nos crea el objeto en este caso el objeto es mascota

   
    crearMascota = async (mascota) =>{

        //validacion de datos ingresados  y
if(!mascota.nombre || !mascota.animal || !mascota.raza) return { status:"error", message: " Falta completar campos"}

try {
    if (fs.existsSync(pathToFile)) {
        
        let data = await fs.promises.readFile(pathToFile, 'utf-8')//leeemos el archivo json creado 
        let mascotas = JSON.parse(data)//lo convertimos en un array
        let id = mascotas[mascotas.length-1].id+1 //si el archivo json ya esta creado automatizamnos el id para que se vaya asignando e incrementando en 1
        mascota.id = id//le pasamos el id creado arriba 
        mascotas.push(mascota)//pusheamos el nuevo objeto con su nuevo id 
        await fs.promises.writeFile(pathToFile, JSON.stringify(mascotas, null, 2))// si existe actualiza la informacion creando un nuevo objeto 
        return {status: "Exitoso", message: "Mascota Creada"}
    } else {
        mascota.id = 1 //le pasamos el id inizializado en 1 
        await fs.promises.writeFile(pathToFile, JSON.stringify([mascota], null, 2))  // creamos el  primer archivo 
        return {status: "Exitoso", message: "Mascota Creada"}//retorna este obejetos con los siguientes msj  status y message 
    }
} catch(err) {
    return {status: "error", message: err.message}// en caso de que hubiera un error al crear el archvio muestra el catch con el msj de error 
}
}   


/////////////////////////////// Metodo que lee todos los objetos del archivo JSON

leerMascota = async () => {
    if (fs.existsSync(pathToFile)) { //  corroboramos que exista el archivo 
        let data = await fs.promises.readFile(pathToFile, 'utf-8') //si existe le pedimos que lea el archivo
        let mascotas = JSON.parse(data)//parseamos el archivo leido 
        return {status: "Exitoso", message: mascotas} //lo mostramos como msje en consola 
    } else {
        return {status: "error", message: err.message}//si no lee nada retorna msj de error 
    }
}
////////////////////////////////////////// Metodo que busca por ID

busquedaId = async (id) => {

    if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, 'utf-8')//llemos nuevamente el archivo creado 
        let mascotas = JSON.parse(data)//lo parseamos para convertirlo en array 
        let mascota = mascotas.find(masc => masc.id === id)//recorrermos el array con u  find para buscar el id solicitdo 
        if (mascota) return {status: "succes", message: mascota}// retornamos el id solicitado 
       
    } else {
        return {status: "error", message: err.message}//msj de error si no existe el archivo 
    }
}


///////////////////////////// Metodo que  Actualizar el archivo 
actualizarMasc = async (id, actualizarMasc) => {

    if (!id) return {status: "error", message: "Id requerido"}
    if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, 'utf-8')//llemos nuevamente el archivo creado 
        let mascotas = JSON.parse(data)//lo parseamos para convertirlo en array 
        let nuevaMascota = mascotas.map(masc => {//hacemos un map del array mascotas ya creado 
            if (masc.id === id) {//si el id existe actualiza los datos de esa mascota 
                actualizarMasc.id = id
                return actualizarMasc
            } else return masc
        })
        await fs.promises.writeFile(pathToFile, JSON.stringify(nuevaMascota, null, 2))
        return {status: "Exitoso", message: "Mascota Actualizada!"}
    } else {
        return {status: "error", message: err.message}
    }        
}


////////////////////////////////////Metodo que borra el contenido del archivo buscado por ID

borrarMasc = async (id) => {
    //Vvalidamos el id 
    if (!id) return {status: "error", message: "Id requerido"}
    if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, 'utf-8')
        let mascotas = JSON.parse(data)
        let nuevaMascota = mascotas.filter(masc => masc.id !== id)
        await fs.promises.writeFile(pathToFile, JSON.stringify(nuevaMascota, null, 2))
        return {status: "Exitoso", message: "Mascota Eliminada!"}
    } else {
        return {status: "error", message: err.message}
    }
}


////////////////////////////////////// Metodo que borra todo el archivo  lo pongo como comentario par que no se ejecute 


// borrarTodo = async () => {

//     if (fs.existsSync(pathToFile)) {
//       await fs.promises.unlinkSync("mascotas.json")
//     } else {
//         return {status: "error", message: err.message}
//     }
// }


}//cierre del class contenedor 






    module.exports = Contenedor
