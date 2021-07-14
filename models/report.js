const mongoose = require("mongoose")
const Schema = mongoose.Schema


const reportSchema = new Schema({

    reportedto: {
        type: Schema.Types.ObjectId, ref: 'register',
        require: true
    },
    reportedby: {
        type: Schema.Types.ObjectId, ref: 'register',
        require: true
    },
    desc: {
        type: String,
    },
    status: {
        type: String,
        default: "Active"
    }

},
    { timestamps: true }
)

module.exports = mongoose.model("report", reportSchema)