const fs = require("fs");

const pathToFile = "./productos.json"; // creamos el archivo json

class Contenedor {
  ///////////////////////// //creamos el metodo que nos crea el objeto en este caso el objeto es Producto

  crearProducto = async (producto) => {
    //validacion de datos ingresados  y

    try {
      if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, "utf-8"); //leeemos el archivo json creado
        let productos = JSON.parse(data); //lo convertimos en un array
        let id = productos[productos.length - 1].id + 1; //si el archivo json ya esta creado automatizamnos el id para que se vaya asignando e incrementando en 1
        producto.id = id; //le pasamos el id creado arriba
        productos.push(producto); //pusheamos el nuevo objeto con su nuevo id
        await fs.promises.writeFile(
          pathToFile,
          JSON.stringify(productos, null, 2)
        ); // si existe actualiza la informacion creando un nuevo objeto
        return { status: "Exitoso", message: "Producto Creado" };
      } else {
        producto.id = 1; //le pasamos el id inizializado en 1
        await fs.promises.writeFile(
          pathToFile,
          JSON.stringify([producto], null, 2)
        ); // creamos el  primer archivo
        return { status: "Exitoso", message: "Producto Creado" }; //retorna este obejetos con los siguientes msj  status y message
      }
    } catch (err) {
      return { status: "error", message: err.message }; // en caso de que hubiera un error al crear el archvio muestra el catch con el msj de error
    }
  };

  /////////////////////////////// Metodo que lee todos los objetos del archivo JSON

  leerProducto = async () => {
    if (fs.existsSync(pathToFile)) {
      //  corroboramos que exista el archivo
      let data = await fs.promises.readFile(pathToFile, "utf-8"); //si existe le pedimos que lea el archivo
      let productos = JSON.parse(data); //parseamos el archivo leido
      return { status: "Exitoso", message: productos }; //lo mostramos como msje en consola
    } else {
      return { status: "error", message: err.message }; //si no lee nada retorna msj de error
    }
  };
  ////////////////////////////////////////// Metodo que busca por ID

  busquedaId = async (id) => {
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, "utf-8"); //llemos nuevamente el archivo creado
      let productos = JSON.parse(data); //lo parseamos para convertirlo en array
      let producto = productos.find((prod) => prod.id === id); //recorrermos el array con u  find para buscar el id solicitdo
      if (producto) return { status: "succes", message: producto }; // retornamos el id solicitado
    } else {
      return { status: "error", message: err.message }; //msj de error si no existe el archivo
    }
  };

  ///////////////////////////// Metodo que  Actualizar el archivo
  actualizarProd = async (id, actualizarProd) => {
    if (!id) return { status: "error", message: "Id requerido" };
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, "utf-8"); //llemos nuevamente el archivo creado
      let productos = JSON.parse(data); //lo parseamos para convertirlo en array
      let nuevoProdcuto = productos.map((prod) => {
        //hacemos un map del array prodcutos ya creado
        if (prod.id === id) {
          //si el id existe actualiza los datos de esa productos
          actualizarProd.id = id;
          return actualizarProd;
        } else return prod;
      });
      await fs.promises.writeFile(
        pathToFile,
        JSON.stringify(nuevoProdcuto, null, 2)
      );
      return { status: "Exitoso", message: "Producto Actualizado!" };
    } else {
      return { status: "error", message: err.message };
    }
  };

  ////////////////////////////////////Metodo que borra el contenido del archivo buscado por ID

  borrarProd = async (id) => {
    //Vvalidamos el id
    if (!id) return { status: "error", message: "Id requerido" };
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, "utf-8");
      let prodcutos = JSON.parse(data);
      let nuevoProducto = prodcutos.filter((prod) => prod.id !== id);
      await fs.promises.writeFile(
        pathToFile,
        JSON.stringify(nuevoProducto, null, 2)
      );
      return { status: "Exitoso", message: " Producto Eliminado!" };
    } else {
      return { status: "error", message: err.message };
    }
  };

  ////////////////////////////////////// Metodo que borra todo el archivo  lo pongo como comentario par que no se ejecute

  // borrarTodo = async () => {

  //     if (fs.existsSync(pathToFile)) {
  //       await fs.promises.unlinkSync("productos.json")
  //     } else {
  //         return {status: "error", message: err.message}
  //     }
  // }
} //cierre del class contenedor

module.exports = Contenedor;
