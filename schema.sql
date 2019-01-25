--creates the database. This is something sequelize does not have permission to do so we must do it manually.
DROP DATABASE IF EXISTS skindb;
CREATE DATABASE skindb;