const express = require("express")
const router = express.Router()

const {adddetails,setting,viewdetails,allusers,login} = require("../controller/userdetails")

router.post("/user/signup", adddetails)
router.post("/user/setting/:id", setting)
router.get("/user/allusers", allusers)


router.get("/user/details/:id", viewdetails)
router.post("/user/login", login)




module.exports = router