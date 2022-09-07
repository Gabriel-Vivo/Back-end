const express = require("express");
const router = express.Router();

let productos = [
  {
    title: "Zapatillas Nike",
    price: 1500,
    thumbnail:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    id: "1",
  },
  {
    title: "Remera",
    price: 800,
    thumbnail:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    id: "2",
  },
  {
    title: "Gorra",
    price: 350,
    thumbnail:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    id: "3",
  },
];

router.get("/", (req, res) => {
  res.send({ status: "Success", result: productos });
});

router.get("/:id", (req, res) => {
  let id = req.params.id - 1;
  let producto = productos[id];

  if (!producto)
    return res.send({ status: "Error", resultado: `ID NO EXISTE ${id + 1}` });
  res.send({ status: "Success", resultado: productos[id] });
});

router.post("/", (req, res) => {
  let producto = req.body;
  let id = productos[productos.length - 1].id + 1;

  producto.id = id;
  producto.thumbnail = "";
  productos.push(producto);
  res.send({ status: "Success", resultado: producto });
});

router.put("/:id", (req, res) => {
  let id = req.params.id-1;
  let producto = req.body;  

  let prodArray = productos[id];  

  if(id <= 0) return res.send({ status: "Error", resultado: `Ingrese un ID correcto` });
  if (!prodArray) return res.send({ status: "Error", resultado: `ID ${id+1} NO EXISTE` });

  productos[id].title = producto.title;
  productos[id].price = producto.price; 
  productos[id].thumbnail = producto.thumbnail; 

  res.send({ status: "Success", id:id , resultado: producto });  
});

router.delete("/:id", (req, res) => {
  let id = req.params.id - 1;
  let existe = productos.some((el) => el.id === id);
  if (!existe)
    return res.send({ status: "Error", resultado: `ID NO EXISTE ${id + 1}` });
  productos = productos.filter((el) => el.id !== id);
  res.send({ status: "Success", result: `el ${id + 1} se borro ` });
});

module.exports = router;
