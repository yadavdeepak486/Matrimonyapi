const Employedin = require('../models/employedin')


exports.addemployedin = async (req, res) => {
    const { name, sortorder, status } = req.body

    const newEmployedin = new Employedin({
        name: name,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Employedin.findOne({ name: name })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newEmployedin.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newEmployedin
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


exports.editemployedin = async (req, res) => {
    const findandUpdateEntry = await Employedin.findOneAndUpdate({
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


exports.viewoneemployedin = async (req, res) => {
    const findone = await Employedin.findOne({ _id: req.params.id })
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

exports.allemployedin = async (req, res) => {
    const findall = await Employedin.find().sort({ sortorder: 1 })
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

exports.deleteemployedin = async (req, res) => {
    try {
        const deleteentry = await Employedin.deleteOne({ _id: req.params.id })
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
