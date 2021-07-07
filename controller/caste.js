const Caste = require('../models/caste');

exports.addcaste = async (req, res) => {
    const { name, religion, status,sortorder } = req.body

    const newCaste = new Caste({
        name: name,
        religion: religion,
        status: status,
        sortorder:sortorder
    });

    const findexist = await Caste.findOne({name:name})
    if(findexist){
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newCaste.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newCaste
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

exports.editcaste = async (req, res) => {

    const findandUpdateEntry = await Caste.findOneAndUpdate({ _id: req.params.id }, { $set: req.body },{new: true}).populate('religion')

    if (findandUpdateEntry) {
        res.status(200).json({
            status: true,
            msg: "success",
            data: findandUpdateEntry
        })
    }
    else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}


exports.onecaste = async (req, res) => {
    const findone = await Caste.findOne({ _id: req.params.id }).populate('religion')
    if (findone) {
        res.status(200).json({
            status: true,
            msg: "success",
            data: findone
        })
    }
    else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}


exports.allcaste = async (req, res) => {
    const findall = await Caste.find().populate('religion').sort({sortorder:1})
    if (findall) {
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

exports.deletecaste = async (req, res) => {
    try {
        const deleteentry = await Caste.deleteOne({ _id: req.params.id })
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
