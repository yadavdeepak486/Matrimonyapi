const express = require("express")
const router = express.Router()

const {addprofilefor,editprofilefor,viewoneprofilefor,allprofilefor,deleteprofilefor} = require("../controller/profilefor")

//Paths
router.post("/admin/addprofilefor", addprofilefor)
router.post("/admin/editprofilefor/:id", editprofilefor)
router.get("/admin/viewoneprofilefor/:id", viewoneprofilefor)
router.get("/admin/allprofilefor", allprofilefor)
router.delete("/admin/deleteprofilefor/:id", deleteprofilefor)

module.exports = router