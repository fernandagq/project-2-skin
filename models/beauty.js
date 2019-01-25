/*                              ___         ___ 
                                `MM         `MM 
                                 MM          MM 
 ___  __    __     _____     ____MM   ____   MM 
 `MM 6MMb  6MMb   6MMMMMb   6MMMMMM  6MMMMb  MM 
  MM69 `MM69 `Mb 6M'   `Mb 6M'  `MM 6M'  `Mb MM 
  MM'   MM'   MM MM     MM MM    MM MM    MM MM 
  MM    MM    MM MM     MM MM    MM MMMMMMMM MM 
  MM    MM    MM MM     MM MM    MM MM       MM 
  MM    MM    MM YM.   ,M9 YM.  ,MM YM    d9 MM 
 _MM_  _MM_  _MM_ YMMMMM9   YMMMMMM_ YMMMM9 _MM_
*/

//this makes a table in mysql that can be reached by other files in this program by importing './models' and calling db.Beauty.

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    CDPHId: DataTypes.INTEGER,
    ProductName: DataTypes.STRING,
    CSFId: DataTypes.STRING,
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
  });
  return Product;
};