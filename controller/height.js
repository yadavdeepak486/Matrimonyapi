const Height = require('../models/height')


exports.addheight = async (req, res) => {
    const { feetinchvalue, cmvalue, sortorder, status } = req.body

    const newHeight = new Height({
        feetinchvalue: feetinchvalue,
        cmvalue: cmvalue,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Height.findOne({ cmvalue: cmvalue })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newHeight.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newHeight
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


exports.editheight = async (req, res) => {
    const findandUpdateEntry = await Height.findOneAndUpdate({
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


exports.viewoneheight = async (req, res) => {
    const findone = await Height.findOne({ _id: req.params.id })
    if (findone) {
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

exports.allheight = async (req, res) => {
    const findall = await Height.find().sort({ sortorder: 1 })
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

exports.deleteheight = async (req, res) => {
    try {
        const deleteentry = await Height.deleteOne({ _id: req.params.id })
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
