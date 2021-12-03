import ProductService from '../services/product.service'
import { singleResponse, pluralResponse } from '../constants/response.constant'
import { OK } from '../constants/httpStatusCode.constant'

class ProductController {
    async getAll(req, res, next) {
        try {
            const { products, page, limit, count } =
                await ProductService.getAll(req.query)
            return res.status(OK).json({
                ...pluralResponse,
                data: products,
                pagination: { page, limit, count },
            })
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        const id = req.params.id
        try {
            const product = await ProductService.getOne(id)
            return res.status(OK).json({ ...singleResponse, data: product })
        } catch (error) {
            next(error)
        }
    }

    async postOne(req, res, next) {
        try {
            const product = await ProductService.postOne(req)
            return res.status(OK).json({ ...singleResponse, data: product })
        } catch (error) {
            next(error)
        }
    }

    async uploadImage(req, res, next) {
        try {
            const path = await ProductService.uploadImage(req)
            return res.status(OK).json({ ...singleResponse, data: { path } })
        } catch (error) {
            next(error)
        }
    }

    async updateOne(req, res, next) {
        const id = req.params.id
        try {
            const product = await ProductService.updateOne(id, req)
            return res.status(OK).json({ ...singleResponse, data: product })
        } catch (error) {
            next(error)
        }
    }

    async deleteOne(req, res, next) {
        const id = req.params.id
        try {
            const product = await ProductService.deleteOne(id)
            return res.status(OK).json({ ...singleResponse, data: product })
        } catch (error) {
            next(error)
        }
    }
}

export default new ProductController()
