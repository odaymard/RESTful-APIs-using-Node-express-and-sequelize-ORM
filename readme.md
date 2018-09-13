# Managing manufacturing machines






## Table of Contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
  - [Configuring environment variables](#configuring-environment-variables)
  - [Installing dependencies](#installing-dependencies)
- [Runing](##Running)  
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


  run the following sequelize command in the terminal for creating testing and development databases.

```
./node_modules/.bin/sequelize db:create --url mysql://username:password@loca
lhost/devdatabase
```


```
./node_modules/.bin/sequelize db:create --url mysql://username:password@loca
lhost/testdatabase
```

Note:change username and password to yours 

by default the username and password are root,root

## Running

The `npm start` command will start up our server. 
And by using tool like postman we can send requests to our server on our default port 3000

### GET machines endpoint


``
Method:GET http://localhost:3000/machines/
``

it will give a list of machines and it takes query parameters like `limit` which indicate the number of elements per page.
and `name` to get machines with specefic name
and `description` to get machines with sepecific description
and `type` to get machiens with specific type
and `page` for pagination 
and `order` for ordering the result,passing `direction` parameter can give an orderd list ascinding or descinding order.

Example:


``
Method:GET http://localhost:3000/machines?order=name&direction=asc&limit=3&page=1
``

Will get 3 machines from page 1 of result sorted by name ascinding.

### GET machine endpoint(specific machine)

``
Method:GET http://localhost:3000/machines/:id
``

it will return the machine with the passed id

Example :

Sending  the below request to the GET endpoint

``
Method:GET http://localhost:3000/machines/:1
``

 Will return a machine with id 1 if exists.

### POST machine

``
Method:POST http://localhost:3000/machines
``

It will create a new machine according to body data

for example: 

Sending  the below request to the PATCH endpoint

``
Method:PATCH http://localhost:3000/machines/:1
``

With the following Payload :

`
{
	"name":"createdmachine"
	,"description":"createdmachinedescription",
  "type":"Casting"
}
`

will create a new machine with name: "createdmachine"  and description:"createdmachinedescription" and type:"Casting".
  

Note: createdAt will be updated to the currenttime

### PATCH machines endpoint
``
Method:PATCH http://localhost:3000/machines/:id
``
it will update a specific machine with a new data coming from body.

for example: 

Sending  the below request to the PATCH endpoint

``
Method:PATCH http://localhost:3000/machines/:1
``

With the following Payload :

`
{
	"name":"updatedmachine"
	,"description":"updatedmachinedescription",
  type:"CNC"
}
`

will update the machine fields name,description,type to the new values from the payload 

Note: updatedAt will be updated to the currenttime

### DELETE machine

It will delete a specific machine 
``
Method:DELETE http://localhost:3000/machines/:2
``
example:
Sending  the below request to the DELETE endpoint

``
Method:DELETE http://localhost:3000/machines/:4
``

will delete the machine with id 4 if exists.

Note:deletedAt will be updated to the currenttime



## Testing 
  the test uses mocha and chai assertion library for  integration testing on the testing enviroment.
  
  to run the test:
```
 $ npm test
```




