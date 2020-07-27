"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define("Categoria", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  });

  Categoria.associate = models => {
    Categoria.hasMany(models.Producto, { foreignKey: "categoriaId" });
  };
  
  return Categoria;
};
