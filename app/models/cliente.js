"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("Cliente", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    apellidos: DataTypes.STRING(200),
    nombre: DataTypes.STRING(70),
    genero: DataTypes.STRING(10),
    tipoUsuario: DataTypes.STRING(30),
    email: DataTypes.STRING(70),
    numCelular: DataTypes.STRING(25),
    usuario: DataTypes.STRING(30),
    contrasenia: DataTypes.TEXT,
    token: DataTypes.STRING(30),
  });

  Cliente.associate = (models)=>{
    Cliente.hasMany(models.Venta,{foreignKey: 'clienteId'});
    Cliente.hasOne(models.ClienteSL,{foreignKey: 'clienteId'});
  }
  
  return Cliente;
};
