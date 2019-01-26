# Project 2

### Something to do with skin.

 - Server: Express
 - Database: MySQL
 - OCR: Sequelize
 - Template Engine: Handlebars
 - CSS: Bootstrap
 - Data: CSCP 

https://skinproducts.herokuapp.com/


Here is how you migrate the data from cscpopendata.csv to mysql in a way that allows sequelize to communicate with it

```bash
sequelize model:generate --name CaliProducts --attributes CDPHId:integer,ProductName:string,CSFId:integer,CSF:string,CompanyId:integer,CompanyName:string,BrandName:string,PrimaryCategoryId:integer,PrimaryCategory:string,SubCategoryId:integer,SubCategory:string,CasId:integer,CasNumber:string,ChemicalId:integer,ChemicalName:string,InitialDateReported:string,MostRecentDateReported:string,DiscontinuedDate:string,ChemicalCreatedAt:string,ChemicalUpdatedAt:string,ChemicalDateRemoved:string,ChemicalCount:integer

sequelize init:migrations 

sequelize db:migrate
```

then import csv into mysql