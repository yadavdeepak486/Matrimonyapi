const ProfileFor = require('../models/profilefor')


exports.addprofilefor = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newProfileFor = new ProfileFor({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await ProfileFor.findOne({ name: name})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else{
        newProfileFor.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newProfileFor
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


exports.editprofilefor = async (req, res) => {
    const findandUpdateEntry = await ProfileFor.findOneAndUpdate({
        _id: req.params.id
    }, { $set: req.body }, { new: true })
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


exports.viewoneprofilefor = async (req,res)=>{
    const findone = await ProfileFor.findOne({ _id: req.params.id})
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

exports.allprofilefor = async (req, res) => {
    const findall = await ProfileFor.find().sort({sortorder:1})
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

exports.deleteprofilefor = async (req, res) => {
    try {
        const deleteentry = await ProfileFor.deleteOne({ _id: req.params.id })
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
