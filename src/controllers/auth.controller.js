import { OK } from '../constants/httpStatusCode.constant'
import { singleResponse } from '../constants/response.constant'
import User from '../models/user.model'
import AuthService from '../services/auth.service'
import { encodePassword } from '../utils/helper'

class AuthController {
    async logIn(req, res, next) {
        try {
            const token = await AuthService.logIn(req.body)
            return res.status(OK).json({ ...singleResponse, data: token })
        } catch (error) {
            next(error)
        }
    }

    async changePassword(req, res, next) {
        try {
            const result = await AuthService.changePassword(req.body)
            return res.status(OK).json({ ...singleResponse, data: result })
        } catch (error) {
            next(error)
        }
    }
}

export default new AuthController()
