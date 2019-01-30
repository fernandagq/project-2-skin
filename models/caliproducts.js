'use strict';
module.exports = (sequelize, DataTypes) => {
  const CaliProducts = sequelize.define('CaliProducts', {
    ProductName: DataTypes.STRING,
    CompanyName: DataTypes.STRING,
    BrandName: DataTypes.STRING,
    ChemicalName: DataTypes.STRING,
  }, {});
  CaliProducts.associate = function(models) {
    // associations can be defined here
  };
  return CaliProducts;
};