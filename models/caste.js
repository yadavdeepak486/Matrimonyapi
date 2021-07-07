const mongoose = require("mongoose")
const Schema = mongoose.Schema


const casteSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    religion:[{ type: Schema.Types.ObjectId, ref: 'religion' }],
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

module.exports = mongoose.model("caste", casteSchema)