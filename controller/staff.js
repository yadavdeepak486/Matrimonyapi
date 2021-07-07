const Admin = require('../models/staff')


exports.addstaff = async (req, res) => {
    const { userID, password, approvedstatus,role,addedby } = req.body

    const newAdmin = new Admin({
        userID: userID,
        password: password,
        approvedstatus: approvedstatus,
        role: role,
        addedby:addedby
    });

    const findexist = await Admin.findOne({ userID: userID})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else{
        newAdmin.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newAdmin
            })
        )
        .catch(error => {
            res.status(400).json({
                status: false,
                msg: "error",
                error: error
            })
        })
    }
}




exports.editstaff = async (req, res) => {
    const findandUpdateEntry = await Admin.findOneAndUpdate({
        _id: req.params.id
    }, { $set: req.body }, { new: true }).populate('addedby')
    if (findandUpdateEntry) {
        res.status(200).json({
            status: true,
            msg: "success",
            data: findandUpdateEntry
        })
    } else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}


exports.viewonestaff = async (req,res)=>{
    const findone = await Admin.findOne({ _id: req.params.id}).populate('addedby')
    if(findone){
        res.status(200).json({
            status: true,
            msg: "success",
            data: findone
        })
    } else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}

exports.allstaff = async (req, res) => {
    const findall = await Admin.find().populate('addedby')
    if(findall){
        res.status(200).json({
            status: true,
            msg: "success",
            data: findall
        })
    } else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}

exports.deletestaff = async (req, res) => {
    try {
        const deleteentry = await Admin.deleteOne({ _id: req.params.id })
        res.status(200).json({
            status: true,
            msg: "success",
            data: deleteentry
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            msg: "error",
            error: error
        })
    }
}
