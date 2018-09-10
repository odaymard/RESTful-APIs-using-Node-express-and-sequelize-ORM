const express = require('express');
const app = express();
const handlers=require('./models/handlers');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

const url = require('url');
const port = process.env.PORT || 3000;

app.post('/machines', handlers.createMachinehandler)
app.patch('/machines/:id([0-9]+)',handlers.updateMachineHandler);  //  //[0-9]+ regexp to accept only numbers
app.get('/machines/', handlers.getMachinesHandler);
app.get('/machines/:id([0-9]+)',handlers.getMachineByIdHandler) 
app.delete('/machines/:id([0-9]+)',handlers.deleteMachineHandler)
app.listen(port, function () {
  console.log('listening on port', port);
});

module.exports=app;