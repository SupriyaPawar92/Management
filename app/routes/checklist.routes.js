const multer = require("multer");
const mkdirp = require('mkdirp');
module.exports = (app) => {
    
var storage_tollCopy = multer.diskStorage({
    destination: function (req, file, cb) {
        dir = 'uploads/' + file.fieldname;
        mkdirp(dir, '0777', function (err) {
            if (err) console.error(err);
            else cb(null, 'uploads/' + file.fieldname)
        });

    },
    filename: function (req, file, cb) {
        tollCoppyfilename_string = (file.originalname).replace(/ /g, "_")
        cb(null, tollCoppyfilename_string)
    }
})

var uploadtollCopy = multer({ storage: storage_tollCopy })
    const checklists = require('../controllers/checklist.controller');

    var router = require('express').Router();

    router.get('/getAll', checklists.getAll)
    // router.get('/get/:query', orders.get)
    router.post("/create/:query",uploadtollCopy.single("img"), checklists.create)
    
    router.delete('/delete/:query', checklists.delete)
    router.put('/update/:query', checklists.updateTask)

    app.use("/api/checklists", router)
}
