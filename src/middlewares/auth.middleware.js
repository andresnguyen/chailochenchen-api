import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import createError from 'http-errors'
import { FORBIDDEN, UNAUTHORIZED } from '../constants/httpStatusCode.constant'
import publicRoutes from '../constants/publicRoutes.constant'
import { ADMIN, EDITOR } from '../constants/permission.constant'

class AuthMiddleware {
    async verifyLogin(req, res, next) {
        // set default value
        req.user = {}

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        try {
            if (token == null)
                throw createError(UNAUTHORIZED, 'Token is empty!')
            const { userId } = await jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET
            )
            const user = await User.findById(userId)
            if (user == null)
                throw createError(UNAUTHORIZED, 'Token is invalid!')
            if (user.active === 0)
                throw createError(FORBIDDEN, 'User isn\'t active!')
            req.user = user
            next()
        } catch (error) {
            const result = publicRoutes.some(
                (publicRoute) =>
                    req.originalUrl.indexOf(publicRoute.path) === 0 &&
                    req.method === publicRoute.method
            )
            if (result) return next()
            next(error)
        }
    }

    async verifyEditorPermission(req, res, next) {
        if (req.user.role < EDITOR)
            next(createError(FORBIDDEN, 'You don\'t have editor permission'))
        next()
    }

    async verifyAdminPermission(req, res, next) {
        if (req.user.role < ADMIN)
            next(createError(FORBIDDEN, 'You don\'t have admin permission'))
        next()
    }
}

export default new AuthMiddleware()
