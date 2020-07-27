const db = require("../models");
const mesa = require("../models/mesa");
const Venta = db.Venta;
const VentaDetalle = db.VentaDetalle;
const Producto = db.Producto;
const Cliente = db.Cliente;
const Mesa = db.Mesa;

//GET
//Listar todos
exports.list = async function(req, res) {
  try {
    const ventas = await Venta.findAll({});
    res.status(200).json(ventas);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const venta = await Venta.findOne({
      where: { id: id },
      include: [
        {
          model: Producto,
          as: "productos",
          through: { attributes: [] }
        }
      ]
    });
    const ventaDetalle = await VentaDetalle.findAll({
      where: { ventaId: id }
    });
    res.status(200).json({ venta, ventaDetalle });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//Listar por id
exports.getApp = async function(req, res) {
  try {
    const id = req.params.id;
    let venta = await Venta.findOne({
      where: { id: id },
      include: [
        {
          model: Producto,
          as: "productos",
          through: { attributes: [] }
        }
      ]
    });
    const mesa = await Mesa.findOne({where: { id: venta.mesaId }});
    venta = venta.toJSON();
    venta.numeroMesa = mesa.numeroMesa;
    const cliente = await Cliente.findOne({where: { id: venta.clienteId }});
    venta.cliente = `${cliente.nombre} ${cliente.apellidos}`
    venta.clienteEmail = cliente.email;
    venta.numCelular = cliente.numCelular;
    const ventaDetalle = await VentaDetalle.findAll({ where: { ventaId: id }  });
    venta.productos.map( producto =>{
      detalle = ventaDetalle.find(element => element.productoId == producto.id);
      producto.cantidad = detalle.cantidad;
    })
    res.status(200).json(venta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateStatus = async function(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const venta = await Venta.findOne({ where: { id: id, estado: 'RESERVADO'} });
    if (venta) {
      const updateStatus = await Venta.update(data, { where: { id: id } });
      res.status(201).json({ ok: "ok" });
    } else {
      res.status(201).json({ atendido : true });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};




//POST
//crear Venta
exports.create = async function(req, res) {
  const productos = req.body.productos;
  try {
    const nuevaVenta = await Venta.create(req.body);
    if (productos.length > 0) {
      for (const item in productos) {
        const producto = productos[item];
        nuevaVentaDetalle = await VentaDetalle.create({
          ventaId: nuevaVenta.id,
          productoId: producto.id,
          precio: producto.precio,
          cantidad: producto.cantidad
        });
      }
    }
    res.status(201).json(nuevaVenta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//PUT
//actualizar Venta
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
    await Venta.update(req.body, { where: { id: id } });
    res.status(201).json({ ok: "ok" });
  } catch (error) {}
};

//DELETE
//eliminar Venta
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
    await Venta.destroy({ where: { id: id } });
    res.status(200).json({ ok: "ok" });
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

exports.buscarProducto = async function(req, res) {
  try {
    const detalleVentas = await VentaDetalle.findAll({
    });
    res.status(200).json(detalleVentas);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
