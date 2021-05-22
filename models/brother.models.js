const mongoose = require('mongoose')

const BrotherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    }
})



const Brother = mongoose.model('Brother', BrotherSchema)

module.exports = Brother