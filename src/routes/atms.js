var express = require("express");
var router = express.Router();
var atmController = require("../controllers/atmController");
var popularTimes = require("../controllers/popularTimes")
const { PythonShell } = require('python-shell');


router.get("/findAllTerminals/:idCompany", function (req, res) {
    atmController.findAllTerminals(req, res);
})


router.put("/atualizar/:idTerminal", function (req, res) {
    atmController.atualizarAtm(req, res);
})

router.delete("/deletar/:id", function (req, res) {
    atmController.deletarAtm(req, res)
})

router.get("/getPopularTimes/", function (req, res) {
    popularTimes.rodarScriptPython(req, res)
})

router.get("/popularTimes/", (req, res, next) => {
    PythonShell.run('teste.py', null, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
});

module.exports = router;
