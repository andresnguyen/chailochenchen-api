import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse, singleResponse } from '../constants/response.constant'
import UserService from '../services/user.service'

class UserController {
    async getAll(req, res, next) {
        try {
            const { users, page, limit, count } = await UserService.getAll(
                req.query
            )
            return res.status(OK).json({
                ...pluralResponse,
                data: users,
                pagination: { page, limit, count }
            })
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        const id = req.params.id
        try {
            const user = await UserService.getOne(id)
            return res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            next(error)
        }
    }

    async postOne(req, res, next) {
        try {
            const user = await UserService.postOne(req.body)
            return res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            next(error)
        }
    }

    async patchOne(req, res, next) {
        const id = req.params.id
        try {
            const user = await UserService.updateOne(id, req.body)
            return res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            next(error)
        }
    }

    async deleteOne(req, res, next) {
        const id = req.params.id
        try {
            const user = await UserService.deleteOne(id)
            return res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController()
