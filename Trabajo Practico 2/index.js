const Contenedor = require("./contenedor.js");
let contenedor = new Contenedor("productos.txt");


contenedor.crearProducto({
    title: "Globo terraquio",
    price: 370.6,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  })
  .then((res) => console.log(res));// console que se encarga de crear producto


  // contenedor.crearProducto({
  //   title: "Calculadora",
  //   price: 250.25,
  //   thumbnail:
  //     "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  // })
  // .then((res) => console.log(res));// console que se encarga de crear producto



  // contenedor.crearProducto({
  //   title: "Regla",
  //   price: 225.50,
  //   thumbnail:
  //     "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  // })
  // .then((res) => console.log(res));// console que se encarga de crear producto


// contenedor.leerProdcuto().then((res) => console.log(res)); //console que lee el archivo producto

//contenedor.busquedaId(8).then((res) => console.log(res)); // console que nos muestra el contenido del archivo buiscado por ID

//contenedor.borrarId(3).then((res) => console.log(res)); //console que borra por ID

//contenedor.borrarTodo().then((res) => console.log(res));//console que nos muestra si fue exitoso el borrar el contenido del archivo

