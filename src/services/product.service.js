import createError from 'http-errors'
import Product from '../models/product.model'
import {
    postCategoryValidation,
    updateCategoryValidation
} from '../validation/validation'
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
        let product = await postCategoryValidation(data)
        product = await new Product({ ...data }).save()
        return product
    }

    async updateOne(id, data) {
        if (Object.keys(data).length === 0)
            throw createError(BAD_REQUEST, 'Nothing valid value to update')
        let product = await updateCategoryValidation(data)
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
