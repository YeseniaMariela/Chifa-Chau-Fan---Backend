"use strict";
module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define("Mesa", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numeroMesa: DataTypes.STRING(5),
    capacidad: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    estado: DataTypes.TEXT
  });

  //Para llevar a pedido
  Mesa.associate = (models)=>{
    Mesa.hasMany(models.Venta,{ foreignKey: 'mesaId'});
 };
  return Mesa;
};
