const db = require("../models");
const Mesa = db.Mesa;

//GET
//Listar todos
exports.list = async function(req, res) {
  try {
    const mesas = await Mesa.findAll({});
    res.status(200).json(mesas);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
//Listar por id
exports.get = async function(req, res) {
  try {
    const numeroMesa = req.params.id;
    const mesa = await Mesa.findOne({
      where: { numeroMesa: numeroMesa }
    });
    res.status(200).json(mesa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//POST
//crear mesa
exports.create = async function(req, res) {
  try {
    const numeroMesa = req.body.numeroMesa;
    const mesa = await Mesa.findOne({
      where: { numeroMesa: numeroMesa }
    });
    if (!mesa) {
      const nuevaMesa = await Mesa.create(req.body);
      res.status(201).json(nuevaMesa);
    } else {
      res.status(400).json({ error: "La mesa ya existe" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//PUT
//actualizar mesa
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
    await Mesa.update(req.body, { where: { id: id } });
    res.status(201).json({ ok: "ok" });
  } catch (error) {}
};

//DELETE
//eliminar mesa
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
    await Mesa.destroy({ where: { id: id } });
    res.status(200).json({ ok: "ok" });
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
