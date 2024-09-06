const {Schema, model} = require("mongoose")

const sellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    role: {
        type: String,
        dafault: 'seller'
    },
    status: {
        type: String,
        dafault: 'pending'
    },
    payment: {
        type: String,
        dafault: 'inactive'
    },
    method: {
        type: String,
        required: true
    },
    image: {
        type: String,
        dafault: ''
    },
    shopInfo: {
        type: Object,
        dafault: {}
    },
},{timestamps: true})

module.exports = model('sellers',sellerSchema)