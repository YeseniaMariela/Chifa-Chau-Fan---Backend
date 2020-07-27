"use strict";
module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define("Venta", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    descuento: DataTypes.DECIMAL,
    descripcionDesc: DataTypes.STRING(70),
    total: DataTypes.DECIMAL,
    observaciones: DataTypes.STRING(70),
    estado: DataTypes.STRING(50),
    numeroPersonas: DataTypes.INTEGER,
    //Llaves foráneas
    mesaId: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER
  });

  //Para Pedido
  Venta.associate = models => {
    //Traer las Mesa
    Venta.belongsTo(models.Mesa, { foreignKey: "mesaId" });
    Venta.belongsTo(models.Cliente, { foreignKey: "clienteId" });
    Venta.belongsToMany(models.Producto, {
      through: "VentaDetalle",
      as: "productos",
      foreignKey: "ventaId",
      otherKey: "productoId"
    });

  };

  return Venta;
};
