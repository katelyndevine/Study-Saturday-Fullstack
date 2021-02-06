const db = require("../db");
const Student = require("./students");
const Test = require("./tests");

//one to many
Test.belongsTo(Student);
Student.hasMany(Test);

module.exports = {
  db,
  Student,
  Test,
};
