//const moment = require("moment");
const database = require("./database");
const machines = require("./machine.js").machines;

async function createMachinehandler(req, res) {
  let machine = req.body;
  try {
    let newMachine = await machines.create(machine);
    res.status(201).json({
      status_message: "Successfully created",
      newMachine
    });
  } catch (err) {
    res.status(500).json({
      status_code: 500,
      status_message: "internal server error",
      err: err.message
    });
  }
}

async function getMachinesHandler(req, res) {
  try {
    let page = parseInt(req.query.page, 10);
    let orderby;
    let direction;
    let offset;
    let limit;
    const filter = {};
    if (isNaN(page) || page < 1) {
      page = 1;
    }
    limit = parseInt(req.query.limit, 10);
    if (isNaN(limit)) {
      limit = 10;
    } else if (limit > 50) {
      limit = 50;
    } else if (limit < 1) {
      limit = 1;
    }
    offset = (page - 1) * limit;

    if (req.query.orderby) {
      orderby = req.query.orderby;
    } else {
      orderby = `id`;
    }
    if (req.query.direction) {
      direction = req.query.direction;
    } else {
      direction = "asc";
    }
    if (req.query.name) {
      filter["name"] = req.query.name;
    }
    if (req.query.type) {
      filter["type"] = req.query.type;
    }
    if (req.query.description) {
      filter["description"] = req.query.description;
    }
    const result = await machines.findAll({
      limit: limit,
      offset: offset,
      order: [[orderby, direction]],
      where: filter
    });
    if (result) {
      res.send(result);
    } else {
      res.status(404).json({
        status_message: "resources not found "
      });
    }
  } catch (err) {
    res.status(500).json({
      status_code: 500,
      status_message: "internal server error",
      err: err.message
    });
  }
}

async function getMachineByIdHandler(req, res) {
  const id = req.params.id;
  try {
    const result = await machines.findById(id);
    if (result) {
      res.send(result);
    } else
      res.status(404).json({
        status_message: "resources not found "
      });
  } catch (err) {
    res.status(500).json({
      status_code: 500,
      status_message: "internal server error",
      err: err.message
    });
  }
}
async function updateMachineHandler(req, res) {
  const machineId = req.params.id;
  const newMachineEntry = req.body;

  try {
    const updatedRow = await machines.update(newMachineEntry, {
      where: {
        id: machineId
      }
    });
    if (updatedRow == 1) {
      res.status(200).json("record updated succesfuly");
    } else {
      res.status(404).json({
        status_message: "resources not found "
      });
    }
  } catch (err) {
    res.status(500).json({
      status_code: 500,
      status_message: "internal server error",
      err: err.message
    });
  }
}

async function deleteMachineHandler(req, res) {
  const id = req.params.id;
  try {
    const element = await machines.destroy({ where: { id: id } });
    if (element == 1) {
      res.json("record deleted successfully");
    } else {
      res.status(404).json({
        status_message: "resources not found "
      });
    }
  } catch (err) {
    res.status(500).json({
      status_code: 500,
      status_message: "internal server error",
      err: err.message
    });
  }
}

module.exports = {
  createMachinehandler,
  getMachinesHandler,
  getMachineByIdHandler,
  updateMachineHandler,
  deleteMachineHandler
};
