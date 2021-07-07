const usersDetails = require("../models/userSignup.js")
const GLOBALFUNCTIONS = require("../functions/createOtp.js")
const bcrypt = require('bcryptjs');

const SendOtp = require('sendotp')
const sendOtp = new SendOtp('API KEY')
const key = 'verysecretkey' // Key for cryptograpy. Keep it secret
const crypto = require('crypto')

exports.signup = async (req, res) => {    
    const {profileCreatedFor,name,gender,dateOfBirth,maritalStatus,mobileNumber,password,mobileVerify,otp,religion,cast,education,typeOfOccupation,livingCity,naticePlace,ManglikStatus,birthCity,birthTime,profileImage} = req.body

    const passwordHash = bcrypt.hashSync(password, 10);
    
    const DATA = new usersDetails({
        profileCreatedFor:profileCreatedFor,
        name:name,
        gender:gender,
        dateOfBirth:dateOfBirth,
        maritalStatus:maritalStatus,
        mobileNumber:mobileNumber,
        password:passwordHash,
        mobileVerify:mobileVerify,//what is it used for
        otp:otp,//not needed to be saved
        religion:religion,
        cast:cast,
        education:education,
        typeOfOccupation:typeOfOccupation,
        livingCity:livingCity,
        naticePlace:naticePlace,
        ManglikStatus:ManglikStatus,
        birthCity:birthCity,
        birthTime:birthTime,
        profileImage:profileImage,        
    })

    /// check user not registered
    const FIND_USER = await usersDetails.findOne({ mobileNumber: mobileNumber })
    if (FIND_USER) {
        res.send({ MSG: "USER ALREADY REGISTERED WITH THIS MOBILE NUMBER" })
    }
    else {
        ///SEND OTP FUNCTIONS
        // DATA.otp = GLOBALFUNCTIONS.createOtp(`+91${USERDATA.mobileNumber}`)

        await DATA.save().then((result) => {
            res.send({ RESPONCE: result })
        }).catch((e) => {
            res.send({ ERROR: e })
        })
    }
}

exports.login = async (req, res) => {
    const { mobileNumber,password} = req.body

    try {
        const FIND_USER = await usersDetails.findOne({ mobileNumber: mobileNumber })
        if (FIND_USER ) {
            if(bcrypt.compareSync(password, FIND_USER.password)){
                res.send({userDetails : FIND_USER})
            }
            else{
                res.send({MSG: "Incorrect Password"})
            }
        }
        else {
            res.send({ MSG: "USER DOES NOT EXSIST" })
            
        }
    } catch { }
}


exports.sendotp = async (req, res) => {

    const USERDATA = req.body

    const DATA = new usersDetails(USERDATA)

    /// check user not registered
    const FIND_USER = await usersDetails.findOne({ mobileNumber: USERDATA.mobileNumber })
    if (FIND_USER) {
        res.send({ MSG: "USER ALREADY REGISTERED WITH THIS MOBILE NUMBER" })
    }
    else {
        ///SEND OTP FUNCTIONS
        DATA.otp = GLOBALFUNCTIONS.createOtp(`+91${USERDATA.mobileNumber}`)

        await DATA.save().then((result) => {
            res.send({ RESPONCE: result })
        }).catch((e) => {
            res.send({ ERROR: e })
        })
    }
}

exports.verifyOtp = async (req, res) => {
    const { userOtp, mobileNumber } = req.body
    await usersDetails.findOne({ mobileNumber: mobileNumber }).then(resp => {
        if (resp) {

            const hash = resp.otp
            let hashValues = hash.split('.')
            const expires = hashValues[1]
            const hashValue = hashValues[0]

            let now = Date.now()
            if (now > parseInt(expires)) {
                return false
            }
            let data = `+91${mobileNumber}.${userOtp}.${expires}`
            let newCalculatedHash = crypto
                .createHmac('sha256', key)
                .update(data)
                .digest('hex')

            if (newCalculatedHash == hashValue) {

                usersDetails.updateOne(
                    { mobileNumber: mobileNumber },
                    { $set: { mobileVerify: true } }
                ).then(us_resp => {
                    res.send('Otp Verified Successfully')
                })
            } else {
                res.send('Otp Has Expire Or Wrong')
            }
        }
    }).catch((error) => {
        res.send({ ErrorMsg: error })
    })
}

exports.resendOtp = async (req, res) => {

    const { mobileNumber, otp } = req.body

    const new_otp = GLOBALFUNCTIONS.createOtp(`91${mobileNumber}`)

    await usersDetails.updateOne({ mobileNumber: mobileNumber }, { $set: { otp: new_otp } }).then((result) => {
        res.send({ msg: result })
    }).catch(error => {
        res.send({ ErrorMsg: error })
    })
}

exports.showUserDetails = async (req, res) => {
    const { mobileNumber } = req.body

    try {
        /// check user not registered
        const FIND_USER = await usersDetails.findOne({ mobileNumber: mobileNumber })
        if (FIND_USER) {
            res.send({userDetails : FIND_USER})
        }
        else {
            res.send({ MSG: "USER DOES NOT EXSIST" })
        }
    } catch { }

}


exports.showAllUser = async (req, res) => {

    try {
        /// check user not registered
        const FIND_USER = await usersDetails.find()
        if (FIND_USER) {
            res.send({Users : FIND_USER})
        }
        else {
            res.send({ MSG: "Don't have any users yet" })
        }
    } catch { }

}


