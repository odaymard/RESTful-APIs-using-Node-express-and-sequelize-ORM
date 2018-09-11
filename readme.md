# Managing manufacturing machines






## Table of Contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
  - [Configuring environment variables](#configuring-environment-variables)
  - [Installing dependencies](#installing-dependencies)
-[Runing](##Running)  
- [Tests](##testing)


## Requirements

- Node v9.2.0
- Mysql

## Getting started


### Configuring environment variables
Create a `.env` file in the root directory and follow the example `.env.example`.


### Installing dependencies
 you'll have to run `npm install` in the root directory. Clone the repo and run the commands:
```
$ npm install
```
### Creating the databases
We have three databases: 

  development enviroment database:devdatabase
  
  testing enviroment database:testdatabase 
  
  production enviroment databaseLprodenviroment

  run the following sequelize command in the terminal for creating testing and development databases.

```
.\node_modules\.bin\sequelize db:create --url mysql://username:password@loca
lhost/devdatabase
```


```
.\node_modules\.bin\sequelize db:create --url mysql://username:password@loca
lhost/testdatabase
```

Note:change username and password by yours 

by default the username and password is root,root

## Running

The `npm start` command will start up our server. 
And by using tool like postman we can send requests to our server on our default port 3000

For example:


``
Method:GET http://localhost:3000/machines/
``

it will give a list of machines and it takes query parameters like `limit` which indicate the number of elements per page.

and `page` for pagination 
and `orderby` for ordering the result,passing `direction` parameter can give an orderd list ascinding or descinding order.

``
Method:GET http://localhost:3000/machines?orderby=name&direction=asc
``





## Testing 
  the test uses mocha and chai assertion library for  integration testing on the testing enviroment.
  
  to run the test:
```
 $ npm test
```




