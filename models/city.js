const mongoose = require("mongoose")
const Schema = mongoose.Schema


const citySchema = new Schema({

    state:[{ type: Schema.Types.ObjectId, ref: 'state' }],
    name: {
        type: String,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("city", citySchema)