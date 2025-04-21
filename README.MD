
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
npx sequelize-cli model:generate --name User --attributes `
'firstName:string,lastName:string,email:string,password:string,contact:string,dateOfBirth:date,userType:enum:{tenant,owner,admin}'
