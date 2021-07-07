const express = require("express")
const router = express.Router()

const {addfamilyvalues,editfamilyvalues,viewonefamilyvalues,allfamilyvalues,deletefamilyvalues} = require("../controller/familyvalues")

//Paths
router.post("/admin/addfamilyvalues", addfamilyvalues)
router.post("/admin/editfamilyvalues/:id", editfamilyvalues)
router.get("/admin/viewonefamilyvalues/:id", viewonefamilyvalues)
router.get("/admin/allfamilyvalues", allfamilyvalues)
router.delete("/admin/deletefamilyvalues/:id", deletefamilyvalues)

module.exports = router