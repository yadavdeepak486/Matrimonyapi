const express = require("express")
const router = express.Router()

const {addmaritalstatus,editmaritalstatus,viewonemaritalstatus,allmaritalstatus,deletemaritalstatus} = require("../controller/maritalstatus")

//Paths
router.post("/admin/addmaritalstatus", addmaritalstatus)
router.post("/admin/editmaritalstatus/:id", editmaritalstatus)
router.get("/admin/viewonemaritalstatus/:id", viewonemaritalstatus)
router.get("/admin/allmaritalstatus", allmaritalstatus)
router.delete("/admin/deletemaritalstatus/:id", deletemaritalstatus)

module.exports = router