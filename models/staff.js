const mongoose = require("mongoose")
const Schema = mongoose.Schema


const adminSchema = new Schema({
    userID: {
        type: String
    },
    password: {
        type: String
    },
    approvedstatus: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
    },
    addedby:[{ type: Schema.Types.ObjectId, ref: 'admin' }],

    //role: type1 => Admin
    //role: type2 => Staff
},
    { timestamps: true }
)

module.exports = mongoose.model("admin", adminSchema)