const express = require("express")
const router = express.Router()

const { addstar, editstar, viewonestar, allstar, deletestar } = require("../controller/star")

//Paths
router.post("/admin/addstar", addstar)
router.post("/admin/editstar/:id", editstar)
router.get("/admin/viewonestar/:id", viewonestar)
router.get("/admin/allstar", allstar)
router.delete("/admin/deletestar/:id", deletestar)

module.exports = router