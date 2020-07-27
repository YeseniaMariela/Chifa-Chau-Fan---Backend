const db = require('../models');
const Producto = db.Producto;

//GET
//Listar todos
exports.list = async function(req, res) {
  try {
    const productos = await Producto.findAll({});
    res.status(200).json(productos);
  }catch(err) {
    res.status(500).json({error: err});
  }
}
//Listar por id
exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const producto = await Producto.findOne(
      {
        where: {id: id},
      }
    );
    res.status(200).json(producto);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//POST
//crear Producto
exports.create = async function(req, res) {
  try{
    const nombre = req.body.nombre;
    const producto = await Producto.findOne(
      {
        where: {nombre: nombre},
      }
    );
    if (!producto) {
      const nuevoProducto = await Producto.create(req.body);
      res.status(201).json(nuevoProducto);
    } else {
      res.status(400).json({error:"El producto ya existe"})
    }
  } catch(err){
      res.status(500).json({error: err});
  }
};

//PUT
//actualizar Producto
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Producto.update(req.body,{where: {id: id}});
      res.status(201).json({ok: 'ok'})
  } catch(error){}
};

//DELETE
//eliminar Producto
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Producto.destroy({where: {id: id} });
      res.status(200).json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
