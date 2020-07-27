"use strict";
module.exports = (sequelize, DataTypes) => {
  const ClienteSL = sequelize.define("ClienteSL", {
    clienteId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    idGoogle: DataTypes.STRING,
    provider: DataTypes.STRING,
    email: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    authToken: DataTypes.STRING,
    idToken: DataTypes.STRING,
    authorizationCode: DataTypes.STRING
  });

  ClienteSL.associate = models => {
    ClienteSL.belongsTo(models.Cliente, { foreignKey: "id" });
  };

  return ClienteSL;
};
