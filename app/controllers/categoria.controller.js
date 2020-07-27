const db = require('../models');
const Categoria = db.Categoria;
const Producto = db.Producto;

//GET
//Listar todos
exports.list = async function(req, res) {
  try {
    const categorias = await Categoria.findAll({});
    res.status(200).json(categorias);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
//Listar por id
exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const categoria = await Categoria.findOne(
      {
        where: {id: id},
        // include: [
        //   {
        //     model : Producto,
        //     as : 'productos'
        //   }
        // ]
      }
    );
    res.status(200).json(categoria);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//POST
//crear categoria
exports.create = async function(req, res) {
  try{
    const nombre = req.body.nombre;
    const categoria = await Categoria.findOne(
      {
        where: {nombre: nombre},
      }
    );
    if (!categoria) {
      const nuevaCategoria = await Categoria.create(req.body);
      res.status(201).json(nuevaCategoria);
    } else {
      res.status(400).json({error:"La categoria ya existe"})
    }
  } catch(err){
      res.status(500).json({error: err});
  }
};

//PUT
//actualizar categoria
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Categoria.update(req.body,{where: {id: id}});
      res.status(201).json({ok: 'ok'})
  } catch(error){}
};

//DELETE
//eliminar categoria
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Categoria.destroy({where: {id: id} });
      res.status(200).json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
