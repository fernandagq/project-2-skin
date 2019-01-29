'use strict';
module.exports = (sequelize, DataTypes) => {
  const IngredientRatings = sequelize.define('IngredientRatings', {
    ChemicalName: DataTypes.STRING,
    Rating: DataTypes.STRING
  }, {});
  IngredientRatings.associate = function(models) {
    // associations can be defined here
  };
  return IngredientRatings;
};