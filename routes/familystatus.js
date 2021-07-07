const express = require("express")
const router = express.Router()

const {addfamilystatus,editfamilystatus,viewonefamilystatus,allfamilystatus,deletefamilystatus} = require("../controller/familystatus")

//Paths
router.post("/admin/addfamilystatus", addfamilystatus)
router.post("/admin/editfamilystatus/:id", editfamilystatus)
router.get("/admin/viewonefamilystatus/:id", viewonefamilystatus)
router.get("/admin/allfamilystatus", allfamilystatus)
router.delete("/admin/deletefamilystatus/:id", deletefamilystatus)

module.exports = router