import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: false
    },
    receiver: {
        type: String,
        required: false
    },
}, { timestamps: true })

const fileSchema = mongoose.model('File', schema)

export default fileSchema