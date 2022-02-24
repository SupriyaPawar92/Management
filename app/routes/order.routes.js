module.exports = (app) => {
    const orders = require('../controllers/order.controller');

    var router = require('express').Router();

    router.get('/getAll', orders.getAll)
    // router.get('/get/:query', orders.get)
    router.post("/create/:query", orders.create)
    
    router.delete('/delete/:query', orders.delete)
    router.put('/update/:query', orders.updateTask)

    app.use("/api/orders", router)
}