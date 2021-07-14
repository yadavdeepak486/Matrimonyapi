const mongoose = require("mongoose")
const Schema = mongoose.Schema


const heightSchema = new Schema({

    feetinchvalue: {
        type: String,
        require: true
    },
    cmvalue: {
        type: Number,
    },
    sortorder: {
        type: Number,
    },
    status: {
        type: String,
        default: "Active"
    }

},
    { timestamps: true }
)

module.exports = mongoose.model("height", heightSchema)