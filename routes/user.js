const express = require("express")
const router = express.Router()

const { adddetails, setting, viewdetails, allusers, login, deleteuser, alltypeusers, alldeletedusers, allblockedusers, allreportedusers } = require("../controller/user")

router.post("/user/signup", adddetails)
router.post("/user/setting/:id", setting)
router.get("/user/details/:id", viewdetails)
router.get("/user/type/:type", alltypeusers)
router.get("/user/deletedusers", alldeletedusers)
router.get("/user/allblockedusers", allblockedusers)
router.get("/user/allreportedusers", allreportedusers)
router.get("/user/allusers", allusers)
router.delete("/user/deleteuser/:id", deleteuser)
router.post("/user/login", login)



module.exports = router