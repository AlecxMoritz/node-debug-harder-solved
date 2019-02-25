'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    name: DataTypes.STRING,
    flavorText: DataTypes.STRING,
    protection: DataTypes.DECIMAL,
    durability: DataTypes.DECIMAL,
    weight: DataTypes.DECIMAL,
    value: DataTypes.DECIMAL,
    material: DataTypes.STRING,
    placement: DataTypes.STRING,
    addedBy: DataTypes.STRING
  }, {});
  Equipment.associate = function(models) {
    // associations can be defined here
  };
  return Equipment;
};