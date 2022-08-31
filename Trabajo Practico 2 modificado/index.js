const Contenedor = require("./contenedor.js");
const contenedor = new Contenedor();

let producto = {
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
};

//contenedor.crearProdcuto(producto).then((result) => console.log(result)); // console que se encarga de crear producto
//contenedor.leerProdcuto().then(result => console.log(result)) //console que lee el archivo producto
//contenedor.busquedaId(1).then(result => console.log(result)) // console que nos muestra el contenido del archivo buiscado por ID
// contenedor.actualizarProd(1,producto).then(result => console.log(result)) // console que actualiza el archivo producto
// contenedor.borrarProd(1).then(result => console.log(result)) // console que nos muestra si fue exitoso el borrar el contenido del archivo
