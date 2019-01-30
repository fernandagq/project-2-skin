'use strict';
module.exports = (sequelize, DataTypes) => {
  const IngredientRating = sequelize.define('IngredientRating', {
    ChemicalName: DataTypes.STRING,
    Rating: DataTypes.STRING
  }, {});
  IngredientRating.associate = function(models) {
    // associations can be defined here
  };
  return IngredientRating;
};