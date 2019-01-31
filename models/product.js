module.exports = function(sequelize, DataTypes){
    var Products = sequelize.define('Products', {
        name: DataTypes.STRING,
        day: DataTypes.BOOLEAN
    });
    return Products;
}