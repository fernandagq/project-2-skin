# Project 2

### Something to do with skin.

- Server: Express
- Database: MySQL
- ORM: Sequelize
- Template Engine: Handlebars
- CSS: Bootstrap
- Data: CSCP

https://skinproducts.herokuapp.com/



```bash
sequelize init:migrations

sequelize model:generate --name CaliProducts --attributes CDPHId:integer,ProductName:string,CSFId:integer,CSF:string,CompanyId:integer,CompanyName:string,BrandName:string,PrimaryCategoryId:integer,PrimaryCategory:string,SubCategoryId:integer,SubCategory:string,CasId:integer,CasNumber:string,ChemicalId:integer,ChemicalName:string,InitialDateReported:string,MostRecentDateReported:string,DiscontinuedDate:string,ChemicalCreatedAt:string,ChemicalUpdatedAt:string,ChemicalDateRemoved:string,ChemicalCount:integer

sequelize model:generate --name CaliProducts --attributes CDPHId:integer,ProductName:string,CSFId:integer,CSF:string,CompanyId:integer,CompanyName:string,BrandName:string,PrimaryCategoryId:integer,PrimaryCategory:string,SubCategoryId:integer,SubCategory:string,CasId:integer,CasNumber:string,ChemicalId:integer,ChemicalName:string,InitialDateReported:string,MostRecentDateReported:string,DiscontinuedDate:string,ChemicalCreatedAt:string,ChemicalUpdatedAt:string,ChemicalDateRemoved:string,ChemicalCount:integer

sequelize model:generate --name IngredientRatings --attributes ChemicalName:string,Rating:string

sequelize db:migrate
```

to undo this, you can do

```bash
sequelize db:migrate:undo
```

## TESTS

product search: bluefx --> titanium dioxide
product search: Body Balance Cream --> progesterone

ingredient search: mica --> good
ingredient search: cinnamon --> bad