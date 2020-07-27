const db = require('../models');
const ClienteSL = db.ClienteSL;

//GET
//Listar todos
exports.list = async function(req, res) {
  try {
    const clientesSL = await ClienteSL.findAll({});
    res.status(200).json(clientesSL);
  }catch(err) {
    res.status(500).json({error: err});
  }
}
//Listar por id
exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const clienteSL = await ClienteSL.findOne(
      {
        where: {id: id},
        attributes: ['id','displayName', 'imageUrl',],
      }
    );
    res.status(200).json(clienteSL);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//POST
//crear clienteSL
exports.create = async function(req, res) {
  try{
      const nuevoClienteSL = await ClienteSL.create(req.body);
      res.status(201).json(nuevoClienteSL);
  } catch(err){
      res.status(500).json({error: err});
  }
};

//PUT
//actualizar clienteSL
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await ClienteSL.update(req.body,{where: {id: id}});
      res.status(201).json({ok: 'ok'})
  } catch(error){}
};

//DELETE
//eliminar clienteSL
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await ClienteSL.destroy({where: {id: id} });
      res.status(200).json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
