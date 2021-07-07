const Maritalstatus = require('../models/maritalstatus')


exports.addmaritalstatus = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newMaritalstatus = new Maritalstatus({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Maritalstatus.findOne({ name: name})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else{
        newMaritalstatus.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newMaritalstatus
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


exports.editmaritalstatus = async (req, res) => {
    const findandUpdateEntry = await Maritalstatus.findOneAndUpdate({
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


exports.viewonemaritalstatus = async (req,res)=>{
    const findone = await Maritalstatus.findOne({ _id: req.params.id})
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

exports.allmaritalstatus = async (req, res) => {
    const findall = await Maritalstatus.find().sort({sortorder:1})
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

exports.deletemaritalstatus = async (req, res) => {
    try {
        const deleteentry = await Maritalstatus.deleteOne({ _id: req.params.id })
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
