# Project 2

### Something to do with skin.

- Server: Express
- Database: MySQL
- ORM: Sequelize
- Template Engine: Handlebars
- CSS: Bootstrap
- Data: CSCP

https://skinproducts.herokuapp.com/

Here is how you migrate the data from cscpopendata.csv to mysql in a way that allows sequelize to communicate with it

```bash
sequelize init:migrations

sequelize model:generate --name CaliProducts --attributes CDPHId:integer,ProductName:string,CSFId:integer,CSF:string,CompanyId:integer,CompanyName:string,BrandName:string,PrimaryCategoryId:integer,PrimaryCategory:string,SubCategoryId:integer,SubCategory:string,CasId:integer,CasNumber:string,ChemicalId:integer,ChemicalName:string,InitialDateReported:string,MostRecentDateReported:string,DiscontinuedDate:string,ChemicalCreatedAt:string,ChemicalUpdatedAt:string,ChemicalDateRemoved:string,ChemicalCount:integer

sequelize model:generate --name IngredientRatings --attributes ChemicalName:string,Rating:string

sequelize db:migrate
```

to undo this, you can do

```bash
sequelize db:migrate:undo
```

then import csv into mysql

## What has been done

- California data is in mySQL
- API route for product search works
- API route for ingredient search works

## What remains to be done

### essential

- Functional front end in handlebars

### should be done

- Fuzzy match for searches
- Autocomplete for searches
- Product search returns an image of products
- Incorporate another dataset or api for product/ingredient safety
- Incorporate dataset or api for animal testing status

### extra stuff

- upload images with busboy, OCR with tesseract, then automatically search each ingredient.
