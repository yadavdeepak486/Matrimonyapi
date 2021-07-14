const express = require("express")
const router = express.Router()

const { addoccupation, editoccupation, viewoneoccupation, alloccupation, deleteoccupation } = require("../controller/occupation")

//Paths
router.post("/admin/addoccupation", addoccupation)
router.post("/admin/editoccupation/:id", editoccupation)
router.get("/admin/viewoneoccupation/:id", viewoneoccupation)
router.get("/admin/alloccupation", alloccupation)
router.delete("/admin/deleteoccupation/:id", deleteoccupation)

module.exports = router