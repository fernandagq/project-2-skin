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

//this makes a table in mysql that can be reached by other files in this program by importing './models' and calling db.Exampletable.
module.exports = function(sequelize, DataTypes) {
  const Exampletable = sequelize.define("Exampletable", {
    column1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    column2: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    column3: {
      type: DataTypes.STRING,
      defaultValue: "exampledefaultvalue"
    }
  });
  return Exampletable;
};
