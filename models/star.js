const mongoose = require("mongoose")
const Schema = mongoose.Schema


const starSchema = new Schema({

    name: {
        type: String,
        require: true
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

module.exports = mongoose.model("star", starSchema)