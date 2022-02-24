const dbConfig = require('../config/db.config');
const CheckListDetails = require('../models/index');
const db = require("../models");
const CheckList = db.checklist;
exports.create = (req, res) => {
 
    let data= req.body
    if(!data.CoolerPresent ||!req.file || !data.Categeory || !data.DriverDetails )
    {
       res.send("* Field is  Required")
    }
    else{
        const role = req.params.query; 
        const filepath = req.file.filename
        
    if(role == "inspection_manager"){
        const checklist = new CheckList({
            CoolerPresent:req.body.CoolerPresent,
            Categeory:req.body.Categeory,
            DriverDetails:req.body.DriverDetails,
            Note:req.body.Note,
            File:filepath
        });
        checklist.save(checklist)
        .then((data) => {
            res.send(data)
        })
    } else {
        res.send("Only inspection Manager can Create the CheckList")
    }
    }
    
    
}

exports.getAll = (req, res) => {
    CheckList.find()
        .then((data) => {
            res.send(data)
        })
}

exports.get = (req, res) => {
    const query = req.params.query;
    CheckList.findById(query)
    // ({ $text: { $search: query } })
        .then((data) => {
            res.json(data)
        })

}

exports.updateTask = (req, res) => {
    const query = req.params.query;
    console.log(query);
    console.log(req.body);
    if(role == "inspectionManager"){
    const { _id, OrderNumber, OrderStatus, VehicleNumber, Amount, Destination, Debitor } = req.body
    CheckList.findByIdAndUpdate( _id , { OrderNumber, OrderStatus, VehicleNumber, Amount, Destination, Debitor })
        .then((data) => {
            res.json(data);
        })
    } else {
        res.send("You Can not Update the Orders")
    }
}

exports.delete = (req,res) => {
    const query = req.params.query;
    CheckList.findByIdAndDelete(query)
        .then((data) => {
            res.json(data);
        })
}
