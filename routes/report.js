const express = require("express")
const router = express.Router()

const { addreport, editreport, viewonereport, allreport, deletereport } = require("../controller/report")

//Paths
router.post("/admin/addreport", addreport)
router.post("/admin/editreport/:id", editreport)
router.get("/admin/viewonereport/:id", viewonereport)
router.get("/admin/allreport", allreport)
router.delete("/admin/deletereport/:id", deletereport)

module.exports = router