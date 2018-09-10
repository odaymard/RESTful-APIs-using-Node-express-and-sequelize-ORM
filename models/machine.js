const db = require("./database").db;
const machines = db.define(
  "machines",
  {
    description: { type: db.Sequelize.STRING },

    name: { type: db.Sequelize.STRING },
    type: {
      type: db.Sequelize.ENUM("CNC", "Additive Manufacturing", "Casting")
    },
    description: { type: db.Sequelize.TEXT }
  },
  {
    paranoid: true
  }
);
machines.sync({ force: false });

module.exports = { machines };
