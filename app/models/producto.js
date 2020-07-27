"use strict";
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define("Producto", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    precioUnidad: DataTypes.DECIMAL,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    estado: DataTypes.STRING,
    //LlaveForanea
    categoriaId: {
      type: DataTypes.INTEGER
    }
  });

  Producto.associate = models => {
    //Traer las categorias
    Producto.belongsTo(models.Categoria, { foreignKey: "categoriaId" });

    Producto.belongsToMany(models.Venta, {
      through: "VentaDetalle",
      as: "ventas",
      foreignKey: "productoId",
      otherKey: "ventaId"
    });
  };
  return Producto;
};
