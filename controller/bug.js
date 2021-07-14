const Bug = require('../models/bug')


exports.addbug = async (req, res) => {
    const { desc, sortorder, status } = req.body

    const newBug = new Bug({
        desc: desc,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Bug.findOne({ desc: desc })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newBug.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newBug
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


exports.editbug = async (req, res) => {
    const findandUpdateEntry = await Bug.findOneAndUpdate({
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


exports.viewonebug = async (req, res) => {
    const findone = await Bug.findOne({ _id: req.params.id })
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

exports.allbug = async (req, res) => {
    const findall = await Bug.find().sort({ sortorder: 1 })
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

exports.deletebug = async (req, res) => {
    try {
        const deleteentry = await Bug.deleteOne({ _id: req.params.id })
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
