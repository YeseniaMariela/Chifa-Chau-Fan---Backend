"use strict";
module.exports = (sequelize, DataTypes) => {
  const VentaDetalle = sequelize.define("VentaDetalle", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    //Llaves foráneas
    ventaId: {
      type: DataTypes.INTEGER
    },
    productoId: {
      type: DataTypes.INTEGER
    },
    precio: DataTypes.DECIMAL,
    cantidad: DataTypes.INTEGER
  });

  VentaDetalle.associate = function(models) {
    VentaDetalle.belongsTo(models.Venta, { foreignKey: "ventaId" });
    VentaDetalle.belongsTo(models.Producto, { foreignKey: "productoId" });
  };
  //Traer Pedido
  return VentaDetalle;
};
