const mongoose = require("mongoose");
const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    OrderNumber:String,
        OrderStatus: String,
        VehicleNumber: String,
        Amount:String,
        Destination:String,
        Debitor:String,
        checklistId:String
  })
);
module.exports = Order;