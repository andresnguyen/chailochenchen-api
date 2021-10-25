const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
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
            select: false,
            required: true
        },
        role: {
            type: Number,
            default: 1
        },
        isActive: {
            type: Boolean,
            default: false
        },
        isDelete: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema, 'Users')
