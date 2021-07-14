const Moonsign = require('../models/moonsign')


exports.addmoonsign = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newMoonsign = new Moonsign({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Moonsign.findOne({ name: name })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newMoonsign.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newMoonsign
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


exports.editmoonsign = async (req, res) => {
    const findandUpdateEntry = await Moonsign.findOneAndUpdate({
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


exports.viewonemoonsign = async (req, res) => {
    const findone = await Moonsign.findOne({ _id: req.params.id })
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

exports.allmoonsign = async (req, res) => {
    const findall = await Moonsign.find().sort({ sortorder: 1 })
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

exports.deletemoonsign = async (req, res) => {
    try {
        const deleteentry = await Moonsign.deleteOne({ _id: req.params.id })
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
