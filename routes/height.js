const express = require("express")
const router = express.Router()

const { addheight, editheight, viewoneheight, allheight, deleteheight } = require("../controller/height")

//Paths
router.post("/admin/addheight", addheight)
router.post("/admin/editheight/:id", editheight)
router.get("/admin/viewoneheight/:id", viewoneheight)
router.get("/admin/allheight", allheight)
router.delete("/admin/deleteheight/:id", deleteheight)

module.exports = router