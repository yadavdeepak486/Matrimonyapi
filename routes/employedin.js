const express = require("express")
const router = express.Router()

const { addemployedin, editemployedin, viewoneemployedin, allemployedin, deleteemployedin } = require("../controller/employedin")

//Paths
router.post("/admin/addemployedin", addemployedin)
router.post("/admin/editemployedin/:id", editemployedin)
router.get("/admin/viewoneemployedin/:id", viewoneemployedin)
router.get("/admin/allemployedin", allemployedin)
router.delete("/admin/deleteemployedin/:id", deleteemployedin)

module.exports = router