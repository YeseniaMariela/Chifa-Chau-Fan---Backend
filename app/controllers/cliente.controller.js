const db = require('../models');
const Cliente = db.Cliente;

//GET
//Listar todos
exports.list = async function(req, res) {
  try {
    const clientes = await Cliente.findAll({
    });
    res.status(200).json(clientes);
  }catch(err) {
    res.status(500).json({error: err});
  }
}
//Listar por id
exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const cliente = await Cliente.findOne(
      {
        where: {id: id},
      }
    );
    res.status(200).json(cliente);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//POST
//crear cliente
exports.create = async function(req, res) {
  try{
      const nuevocliente = await Cliente.create(req.body);
      res.status(201).json(nuevocliente);
  } catch(err){
      res.status(500).json({error: err});
  }
};

//PUT
//actualizar cliente
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Cliente.update(req.body,{where: {id: id}});
      res.status(201).json({ok: 'ok'})
  } catch(error){}
};

//DELETE
//eliminar cliente
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Cliente.destroy({where: {id: id} });
      res.status(200).json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
