const mongoose = require("mongoose")
const Schema = mongoose.Schema


const profileforSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: "Active"
    },
    sortorder: {
        type: Number,
    }

},
    { timestamps: true }
)

module.exports = mongoose.model("profilefor", profileforSchema)