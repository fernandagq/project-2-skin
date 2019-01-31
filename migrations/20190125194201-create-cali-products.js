'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CaliProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductName: {
        type: Sequelize.STRING
      },
      CompanyName: {
        type: Sequelize.STRING
      },
      BrandName: {
        type: Sequelize.STRING
      },
      ChemicalName: {
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
    return queryInterface.dropTable('CaliProducts');
  }
};