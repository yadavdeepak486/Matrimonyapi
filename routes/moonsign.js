const express = require("express")
const router = express.Router()

const { addmoonsign, editmoonsign, viewonemoonsign, allmoonsign, deletemoonsign } = require("../controller/moonsign")

//Paths
router.post("/admin/addmoonsign", addmoonsign)
router.post("/admin/editmoonsign/:id", editmoonsign)
router.get("/admin/viewonemoonsign/:id", viewonemoonsign)
router.get("/admin/allmoonsign", allmoonsign)
router.delete("/admin/deletemoonsign/:id", deletemoonsign)

module.exports = router