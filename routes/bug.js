const express = require("express")
const router = express.Router()

const { addbug, editbug, viewonebug, allbug, deletebug } = require("../controller/bug")

//Paths
router.post("/admin/addbug", addbug)
router.post("/admin/editbug/:id", editbug)
router.get("/admin/viewonebug/:id", viewonebug)
router.get("/admin/allbug", allbug)
router.delete("/admin/deletebug/:id", deletebug)

module.exports = router