const mongoose = require("mongoose")
const Schema = mongoose.Schema


const employedinSchema = new Schema({

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

module.exports = mongoose.model("employedin", employedinSchema)