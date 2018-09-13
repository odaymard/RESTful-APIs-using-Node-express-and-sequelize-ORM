const express = require('express');
const app = express();
const handlers=require('./models/handlers');
const bodyParser = require('body-parser');
const url = require('url');
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/machines', handlers.createMachine)
app.patch('/machines/:id([0-9]+)',handlers.updateMachine);  //  //[0-9]+ regexp to accept only numbers
app.get('/machines/', handlers.getMachines);
app.get('/machines/:id([0-9]+)',handlers.getMachineById) 
app.delete('/machines/:id([0-9]+)',handlers.deleteMachine)

app.listen(port, function () {
  console.log('listening on port', port);
});

module.exports=app;