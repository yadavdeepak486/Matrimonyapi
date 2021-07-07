const express = require("express")
const router = express.Router()

const {addprofileview,editprofileview,viewoneprofileview,allprofileview,deleteprofileview} = require("../controller/profileview")

//Paths
router.post("/admin/addprofileview", addprofileview)
router.post("/admin/editprofileview/:id", editprofileview)
router.get("/admin/viewoneprofileview/:id", viewoneprofileview)
router.get("/admin/allprofileview", allprofileview)
router.delete("/admin/deleteprofileview/:id", deleteprofileview)

module.exports = router