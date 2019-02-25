'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weapon = sequelize.define('Weapon', {
    name: DataTypes.STRING,
    flavorText: DataTypes.STRING,
    damage: DataTypes.DECIMAL,
    durability: DataTypes.DECIMAL,
    weight: DataTypes.DECIMAL,
    value: DataTypes.STRING,
    material: DataTypes.STRING,
    type: DataTypes.STRING,
    addedBy: DataTypes.STRING
  }, {});
  Weapon.associate = function(models) {
    // associations can be defined here
  };
  return Weapon;
};