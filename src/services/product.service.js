import createError from 'http-errors'
import Product from '../models/product.model'
import {
    validateCreateProduct,
    validateUpdateProduct
} from '../validation/product.validation'
import { BAD_REQUEST } from '../constants/httpStatusCode.constant'

class ProductService {
    async getAll({ page = 0, limit = 5, q = '' }) {
        page = parseInt(page)
        limit = parseInt(limit)

        const query = q ? { name: new RegExp(q, 'i') } : {}

        const products = await Product.find(query)
            .skip(page * limit)
            .limit(limit)
            .lean()

        const count = await Product.find(query).count()

        return { products, page, limit, count }
    }

    async getOne(id) {
        const product = await Product.findById(id)
        return product
    }

    async postOne(data) {
        const arg = {...data.body}
        if(data.file) arg.imageSrc = data.file.path

        let product = await validateCreateProduct(arg)
        product = await new Product({ ...product }).save()
        return product
    }

    async updateOne(id, data) {
        if (Object.keys(data).length === 0) {
            throw createError(BAD_REQUEST, 'Nothing valid value to update')
        }
        const arg = {...data.body}
        if(data.file) arg.imageSrc = data.file.path

        let product = await validateUpdateProduct(arg)
        product = await Product.findByIdAndUpdate(id, product, {
            new: true
        })
        return product
    }

    async deleteOne(id) {
        const product = await Product.findByIdAndDelete(id)
        return product
    }
}

export default new ProductService()
