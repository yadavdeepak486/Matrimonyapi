const express = require("express")
const router = express.Router()

const {addreligion,editreligion,viewonereligion,allreligion,deletereligion} = require("../controller/religion")

//Paths
router.post("/admin/addreligion", addreligion)
router.post("/admin/editreligion/:id", editreligion)
router.get("/admin/viewonereligion/:id", viewonereligion)
router.get("/admin/allreligion", allreligion)
router.delete("/admin/deletereligion/:id", deletereligion)

module.exports = router