const Religion = require('../models/religion')


exports.addreligion = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newReligion = new Religion({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Religion.findOne({ name: name})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else{
        newReligion.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newReligion
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


exports.editreligion = async (req, res) => {
    const findandUpdateEntry = await Religion.findOneAndUpdate({
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


exports.viewonereligion = async (req,res)=>{
    const findone = await Religion.findOne({ _id: req.params.id})
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

exports.allreligion = async (req, res) => {
    const findall = await Religion.find().sort({sortorder:1})
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

exports.deletereligion = async (req, res) => {
    try {
        const deleteentry = await Religion.deleteOne({ _id: req.params.id })
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
