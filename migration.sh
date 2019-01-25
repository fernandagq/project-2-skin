# bash script for setting up CSCP Product table in mysql
# run this script from the terminal with   bash migration.sh
sequelize init:migrations
sequelize model:generate --name CaliProducts --attributes CDPHId:integer,ProductName:string,CSFId:integer,CSF:string,CompanyId:integer,CompanyName:string,BrandName:string,PrimaryCategoryId:integer,PrimaryCategory:string,SubCategoryId:integer,SubCategory:string,CasId:integer,CasNumber:string,ChemicalId:integer,ChemicalName:string,InitialDateReported:string,MostRecentDateReported:string,DiscontinuedDate:string,ChemicalCreatedAt:string,ChemicalUpdatedAt:string,ChemicalDateRemoved:string,ChemicalCount:integer
sequelize db:migrate