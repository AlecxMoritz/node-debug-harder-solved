'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    constitution: DataTypes.INTEGER,
    wisdom: DataTypes.INTEGER,
    intelligence: DataTypes.INTEGER,
    charisma: DataTypes.INTEGER,
    addedBy: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};