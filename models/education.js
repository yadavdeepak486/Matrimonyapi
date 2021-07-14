const mongoose = require("mongoose")
const Schema = mongoose.Schema


const educationSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    shortname: {
        type: String,
    },
    place: {
        type: String,
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

module.exports = mongoose.model("education", educationSchema)