const Occupation = require('../models/occupation')


exports.addoccupation = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newOccupation = new Occupation({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Occupation.findOne({ name: name })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newOccupation.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newOccupation
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


exports.editoccupation = async (req, res) => {
    const findandUpdateEntry = await Occupation.findOneAndUpdate({
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


exports.viewoneoccupation = async (req, res) => {
    const findone = await Occupation.findOne({ _id: req.params.id })
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

exports.alloccupation = async (req, res) => {
    const findall = await Occupation.find().sort({ sortorder: 1 })
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

exports.deleteoccupation = async (req, res) => {
    try {
        const deleteentry = await Occupation.deleteOne({ _id: req.params.id })
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
