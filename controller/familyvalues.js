const Familyvalues = require('../models/familyvalues')


exports.addfamilyvalues = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newFamilyvalues = new Familyvalues({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Familyvalues.findOne({ name: name})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else{
        newFamilyvalues.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newFamilyvalues
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


exports.editfamilyvalues = async (req, res) => {
    const findandUpdateEntry = await Familyvalues.findOneAndUpdate({
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


exports.viewonefamilyvalues = async (req,res)=>{
    const findone = await Familyvalues.findOne({ _id: req.params.id})
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

exports.allfamilyvalues = async (req, res) => {
    const findall = await Familyvalues.find().sort({sortorder:1})
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

exports.deletefamilyvalues = async (req, res) => {
    try {
        const deleteentry = await Familyvalues.deleteOne({ _id: req.params.id })
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
