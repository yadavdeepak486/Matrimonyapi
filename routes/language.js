const express = require("express")
const router = express.Router()

const {addlanguage,editlanguage,viewonelanguage,alllanguage,deletelanguage} = require("../controller/language")

//Paths
router.post("/admin/addlanguage", addlanguage)
router.post("/admin/editlanguage/:id", editlanguage)
router.get("/admin/viewonelanguage/:id", viewonelanguage)
router.get("/admin/alllanguage", alllanguage)
router.delete("/admin/deletelanguage/:id", deletelanguage)

module.exports = router