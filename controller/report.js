const Report = require('../models/Report')


exports.addreport = async (req, res) => {
    const { reportedto, reportedby, desc, status } = req.body

    const newReport = new Report({
        reportedto: reportedto,
        reportedby: reportedby,
        desc: desc,
        status: status
    });

    const findexist = await Report.findOne({ desc: desc })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exists",
            data: {}
        })
    } else {
        newReport.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newReport
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


exports.editreport = async (req, res) => {
    const findandUpdateEntry = await Report.findOneAndUpdate({
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


exports.viewonereport = async (req, res) => {
    const findone = await Report.findOne({ _id: req.params.id })
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

exports.allreport = async (req, res) => {
    const findall = await Report.find().sort({ sortorder: 1 })
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

exports.deletereport = async (req, res) => {
    try {
        const deleteentry = await Report.deleteOne({ _id: req.params.id })
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
