'use strict';
module.exports = (sequelize, DataTypes) => {
  const CaliProducts = sequelize.define('CaliProducts', {
    CDPHId: DataTypes.INTEGER,
    ProductName: DataTypes.STRING,
    CSFId: DataTypes.INTEGER,
    CSF: DataTypes.STRING,
    CompanyId: DataTypes.INTEGER,
    CompanyName: DataTypes.STRING,
    BrandName: DataTypes.STRING,
    PrimaryCategoryId: DataTypes.INTEGER,
    PrimaryCategory: DataTypes.STRING,
    SubCategoryId: DataTypes.INTEGER,
    SubCategory: DataTypes.STRING,
    CasId: DataTypes.INTEGER,
    CasNumber: DataTypes.STRING,
    ChemicalId: DataTypes.INTEGER,
    ChemicalName: DataTypes.STRING,
    InitialDateReported: DataTypes.STRING,
    MostRecentDateReported: DataTypes.STRING,
    DiscontinuedDate: DataTypes.STRING,
    ChemicalCreatedAt: DataTypes.STRING,
    ChemicalUpdatedAt: DataTypes.STRING,
    ChemicalDateRemoved: DataTypes.STRING,
    ChemicalCount: DataTypes.INTEGER
  }, {});
  CaliProducts.associate = function(models) {
    // associations can be defined here
  };
  return CaliProducts;
};