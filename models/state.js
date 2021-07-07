const mongoose = require("mongoose")
const Schema = mongoose.Schema


const stateSchema = new Schema({

    isoCode: {
        type: String,
        require: true
    },
    country:[{ type: Schema.Types.ObjectId, ref: 'country' }],
    name: {
        type: String,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("state", stateSchema)