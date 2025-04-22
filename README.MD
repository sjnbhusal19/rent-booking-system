
## INSTALL SEQUALIZE ORM
npm install --save sequelize

## FOR POSTGRACESQL
npm install --save pg pg-hstore

## To install the Sequelize CLI:
npm install --save-dev sequelize-cli

## To create an empty project, execute init command
npx sequelize-cli init

## Let's create db .
npx sequelize-cli db:create

## Let's create a model named User for signup with the following information.
npx sequelize-cli model:generate --name User --attributes "firstName:string,lastName:string,email:string,password:string,address:string,gender:enum:{male,female,other},dateOfBirth:date,userType:enum:{tenant,owner,admin}"

## for migration applied
npx sequelize-cli db:migrate

## Undo recent applied migrations
npx sequelize-cli db:migrate:undo

## Undo all applied migrations
npx sequelize-cli db:migrate:undo:all


## Drop the database
## This removes the database itself (so you’ll be able to recreate it from scratch):
npx sequelize-cli db:drop


## Remove the generated folders/files
models/
migrations/
seeders/

## by force
npx sequelize-cli init --force

