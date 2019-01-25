--creates the database. This is something sequelize does not have permission to do so we must do it manually.
DROP DATABASE IF EXISTS skindb;
CREATE DATABASE skindb;



DROP DATABASE IF EXISTS beauty_db;
CREATE DATABASE beauty_db;

USE beauty_db;
-- import csv for products with table wizard in workbench - stored data in table called 'products'
SELECT * FROM products; 
-- shows table so you can access different aspects through queries

