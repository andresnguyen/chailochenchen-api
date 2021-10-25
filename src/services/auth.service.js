import {
    generateAccessToken,
    checkPassword,
    encodePassword
} from '../utils/helper'
import User from '../models/user.model'
import createError from 'http-errors'
import { BAD_REQUEST } from '../constants/httpStatusCode.constant'

class AuthService {
    async logIn(data) {
        const { email, password } = data
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
            throw createError(BAD_REQUEST, 'User doesn\'t exists!')
        }

        if (!(await checkPassword(password, user.password))) {
            throw createError(BAD_REQUEST, 'Password is wrong!')
        }

        const token = generateAccessToken(user._id)
        return token
    }

    async changePassword(data) {
        const { userId, oldPassword, newPassword } = data

        if (oldPassword === newPassword) {
            throw createError(
                BAD_REQUEST,
                'New password mustn\'t equal old password!'
            )
        }
        const user = await User.findById(userId).select('+password')

        if (!(await checkPassword(oldPassword, user.password))) {
            throw createError(BAD_REQUEST, 'Old password incorrect!')
        }

        user.password = await encodePassword(newPassword)
        await User.save()
        return true
    }
}

export default new AuthService()
