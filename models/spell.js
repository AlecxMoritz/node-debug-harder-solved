'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spell = sequelize.define('Spell', {
    name: DataTypes.STRING,
    flavorText: DataTypes.STRING,
    manaCost: DataTypes.DECIMAL,
    damage: DataTypes.DECIMAL,
    range: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    addedBy: DataTypes.STRING
  }, {});
  Spell.associate = function(models) {
    // associations can be defined here
  };
  return Spell;
};