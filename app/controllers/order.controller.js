const e = require('express');
const dbConfig = require('../config/db.config');
const OrderDetails = require('../models/index');
const db = require("../models");
const Order = db.order;

exports.create = (req, res) => {
    console.log(req.body);
    console.log(req.params.query)
    const role = req.params.query;
    
    if(role == "procurement_manager"){

        const order = new Order({
            OrderNumber:req.body.OrderNumber,
            OrderStatus:req.body.OrderStatus,
            VehicleNumber:req.body.VehicleNumber,
            Amount:req.body.Amount,
            Destination:req.body.Destination,
            Debitor:req.body.Debitor,
        });
        
        order.save(order)
        .then((data) => {
            res.send(data)
        })
    } else {
        res.send("Only Procurement Manager can Create the Orders")
    }
}

exports.getAll = (req, res) => {
    Order.find()
        .then((data) => {
            res.send(data)
        })
}

exports.get = (req, res) => {
    const query = req.params.query;
    Order.findById(query)
        .then((data) => {
            res.json(data)
        })

}

exports.updateTask = (req, res) => {
    const role = req.params.query;
    // console.log(query);
    console.log(req.body);
    
        if(role == "procurement_manager" || role == "inspection_manager" || role == "admin"){
            console.log(req.body)
            const { _id, OrderNumber, OrderStatus, VehicleNumber, Amount, Destination, Debitor, checklistId } = req.body
            Order.findByIdAndUpdate( _id , { OrderNumber, OrderStatus, VehicleNumber, Amount, Destination, Debitor, checklistId })
            .then((data) => {
                res.json(data);
            })
        } else {
            res.send("You Can not Update the Orders")
        }
}

exports.delete = (req,res) => {
    const query = req.params.query;
    Order.findByIdAndDelete(query)
        .then((data) => {
            res.json(data);
        })
}

