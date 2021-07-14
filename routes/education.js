const express = require("express")
const router = express.Router()

const { addeducation, editeducation, viewoneeducation, alleducation, deleteeducation } = require("../controller/education")

//Paths
router.post("/admin/addeducation", addeducation)
router.post("/admin/editeducation/:id", editeducation)
router.get("/admin/viewoneeducation/:id", viewoneeducation)
router.get("/admin/alleducation", alleducation)
router.delete("/admin/deleteeducation/:id", deleteeducation)

module.exports = router