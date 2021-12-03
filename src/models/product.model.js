const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
        },
        content: {
            type: String,
        },
        category: {
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
        facebookLink: {
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
            default: true
        },
        isDelete: {
            type: Boolean,
            default: false,
            select: false,
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Product', productSchema, 'products')
