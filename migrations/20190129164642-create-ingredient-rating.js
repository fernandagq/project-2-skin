'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IngredientRatings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ChemicalName: {
        type: Sequelize.STRING
      },
      Rating: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: "1990-01-07 12:34:56"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: "1990-01-07 12:34:56"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IngredientRatings');
  }
};