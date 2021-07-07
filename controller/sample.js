const DB_Name = require('../models/MODAL_Name')

exports.add = async (req, res) => {
    const { a, b, c } = req.body

    const newEntry = new DB_Name({
        a: a,
        b: b,
        c: c
    });
    newEntry.save()
        .then(
            res.status(200).json({
                status: true,
                msg: "success",
                data: newEntry
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

exports.edit = async (req, res) => {
    const findandUpdateEntry = await DB_Name.findOneAndUpdate({
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

exports.viewone = async (req,res)=>{
    const findone = await DB_Name.findOne({ _id: req.params.id})
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

exports.viewall = async (req,res)=>{
    res.send("Not Yet Implimented")
}