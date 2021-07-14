const express = require("express")
const Router = express.Router()

const userSignup = require("../controller/user")

Router.post("/user/signup", userSignup.signup)
Router.post("/user/otp", userSignup.sendotp)
Router.post("/user/verifyotp", userSignup.verifyOtp)
Router.post("/user/resendotp", userSignup.resendOtp)
Router.get("/user/showuserdetails", userSignup.showUserDetails)
Router.post("/user/login", userSignup.login)
Router.get("/user/allusers", userSignup.showAllUser)


module.exports = Router