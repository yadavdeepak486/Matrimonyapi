const mongoose = require("mongoose")
const Schema = mongoose.Schema


const bugSchema = new Schema({

    desc: {
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

module.exports = mongoose.model("bug", bugSchema)