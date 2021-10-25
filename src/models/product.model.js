const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        },
        shoppeLink: {
            type: String
        },
        description: {
            type: String
        },
        slug: {
            type: String
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

export default mongoose.model('Product', productSchema, 'products')
