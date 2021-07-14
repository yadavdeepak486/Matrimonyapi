const express = require("express")
const router = express.Router()

const { addcaste, editcaste, allcaste, onecaste, deletecaste, allcastebasedonreligion } = require("../controller/caste")

router.post("/admin/addcaste", addcaste)
router.post("/admin/editcaste/:id", editcaste)
router.get("/admin/allcaste", allcaste)
router.get("/admin/onecaste/:id", onecaste)
router.delete("/admin/deletecaste/:id", deletecaste)
//get all caste based on religion id
router.get("/admin/castesofreligion/:id", allcastebasedonreligion)

module.exports = router