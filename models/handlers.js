const database = require("./database");
const machines = require("./machine.js").machines;
const helper = require("../helper/helper");

async function createMachine(req, res) {
  const machine = req.body;

  try {
    let newMachine = await machines.create(machine);
    res.status(201).json({
      status_message: "Successfully created",
      newMachine
    });
  } catch (err) {
    helper.serverError(err, res);
  }
}

async function getMachines(req, res) {
  const {
    direction = "asc",
    order = "id",
    name,
    type,
    description
  } = req.query;
  const limit = helper.getLimit(req.query.limit);
  const filter = helper.getFilter(req.query);
  const page = helper.getPage(req.query.page);
  const offset = (page - 1) * limit;

  try {
    const result = await machines.findAll({
      limit: limit,
      offset: offset,
      order: [[order, direction]],
      where: filter
    });
    if (result.length) {
      res.send(result);
    } else {
      helper.notFound(res);
    }
  } catch (err) {
    helper.serverError(err, res);
  }
}

async function getMachineById(req, res) {
  const id = req.params.id;

  try {
    const result = await machines.findById(id);
    if (result) {
      res.send(result);
    } else helper.notFound(res);
  } catch (err) {
    helper.serverError(err, res);
  }
}
async function updateMachine(req, res) {
  const machineId = req.params.id;
  const newMachineEntry = req.body;

  try {
    const updatedRow = await machines.update(newMachineEntry, {
      where: {
        id: machineId
      }
    });
    console.log(updatedRow);
    if (updatedRow == 1) {
      res.status(200).json("record updated succesfuly");
    } else {
      helper.notFound(res);
    }
  } catch (err) {
    helper.serverError(err, res);
  }
}

async function deleteMachine(req, res) {
  const id = req.params.id;

  try {
    const element = await machines.destroy({ where: { id } });
    if (element === 1) {
      res.json("record deleted successfully");
    } else {
      helper.notFound(res);
    }
  } catch (err) {
    helper.serverError(err, res);
  }
}

module.exports = {
  createMachine,
  getMachines,
  getMachineById,
  updateMachine,
  deleteMachine
};
