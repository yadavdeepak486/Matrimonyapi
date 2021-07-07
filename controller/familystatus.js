const Familystatus = require('../models/familystatus')


exports.addfamilystatus = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newFamilystatus = new Familystatus({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Familystatus.findOne({ name: name})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else{
        newFamilystatus.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newFamilystatus
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


exports.editfamilystatus = async (req, res) => {
    const findandUpdateEntry = await Familystatus.findOneAndUpdate({
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


exports.viewonefamilystatus = async (req,res)=>{
    const findone = await Familystatus.findOne({ _id: req.params.id})
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

exports.allfamilystatus = async (req, res) => {
    const findall = await Familystatus.find().sort({sortorder:1})
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

exports.deletefamilystatus = async (req, res) => {
    try {
        const deleteentry = await Familystatus.deleteOne({ _id: req.params.id })
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
