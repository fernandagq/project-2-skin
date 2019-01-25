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
      CDPHId: {
        type: Sequelize.INTEGER
      },
      ProductName: {
        type: Sequelize.STRING
      },
      CSFId: {
        type: Sequelize.INTEGER
      },
      CSF: {
        type: Sequelize.STRING
      },
      CompanyId: {
        type: Sequelize.INTEGER
      },
      CompanyName: {
        type: Sequelize.STRING
      },
      BrandName: {
        type: Sequelize.STRING
      },
      PrimaryCategoryId: {
        type: Sequelize.INTEGER
      },
      PrimaryCategory: {
        type: Sequelize.STRING
      },
      SubCategoryId: {
        type: Sequelize.INTEGER
      },
      SubCategory: {
        type: Sequelize.STRING
      },
      CasId: {
        type: Sequelize.INTEGER
      },
      CasNumber: {
        type: Sequelize.STRING
      },
      ChemicalId: {
        type: Sequelize.INTEGER
      },
      ChemicalName: {
        type: Sequelize.STRING
      },
      InitialDateReported: {
        type: Sequelize.STRING
      },
      MostRecentDateReported: {
        type: Sequelize.STRING
      },
      DiscontinuedDate: {
        type: Sequelize.STRING
      },
      ChemicalCreatedAt: {
        type: Sequelize.STRING
      },
      ChemicalUpdatedAt: {
        type: Sequelize.STRING
      },
      ChemicalDateRemoved: {
        type: Sequelize.STRING
      },
      ChemicalCount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: "2019-01-25 19:59:43"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: "2019-01-25 19:59:43"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CaliProducts');
  }
};