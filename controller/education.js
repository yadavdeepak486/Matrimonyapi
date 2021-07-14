const Education = require('../models/education')


exports.addeducation = async (req, res) => {
    const { name, shortname, place, sortorder, status } = req.body

    const newEducation = new Education({
        name: name,
        shortname: shortname,
        place: place,
        sortorder: sortorder,
        status: status
    });

    const findexist = await Education.findOne({ name: name })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newEducation.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newEducation
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


exports.editeducation = async (req, res) => {
    const findandUpdateEntry = await Education.findOneAndUpdate({
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


exports.viewoneeducation = async (req, res) => {
    const findone = await Education.findOne({ _id: req.params.id })
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

exports.alleducation = async (req, res) => {
    const findall = await Education.find().sort({ sortorder: 1 })
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

exports.deleteeducation = async (req, res) => {
    try {
        const deleteentry = await Education.deleteOne({ _id: req.params.id })
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
