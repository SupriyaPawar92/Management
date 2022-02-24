const mongoose = require("mongoose");
const Checklist = mongoose.model(
  "checklist",
  new mongoose.Schema({
    CoolerPresent:String,
    Categeory:String,
    DriverDetails:Array,
    Note:String,
    File:String
  })
);
module.exports = Checklist;