const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        trim : true
    },
    phone : {
        type : String,
        required : [true, 'Phone is required'],
        trim : true,
        unique : true
    },
    photo : {
        type : String,
        default : 'avatar.png'
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Students', studentSchema)