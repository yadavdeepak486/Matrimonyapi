const mongoose = require("mongoose")
const Schema = mongoose.Schema


const profileviewSchema = new Schema({

    login_id: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
    },
    timing: {
        type: Date,
        default: Date.now
    }
    

},
    { timestamps: true }
)

module.exports = mongoose.model("profileview", profileviewSchema)