import createError from 'http-errors'
import User from '../models/user.model'
import { encodePassword } from '../utils/helper'
import { validateCreateUser, validateUpdateUser } from '../validation/user.validation'
import { BAD_REQUEST } from '../constants/httpStatusCode.constant'

class UserService {
    async getAll({ page = 0, limit = 5, q = '' }) {
        page = parseInt(page)
        limit = parseInt(limit)

        const query = q ? { name: new RegExp(q, 'i') } : {}

        const users = await User.find(query)
            .skip(page * limit)
            .limit(limit)
            .lean()

        const count = await User.find(query).count()

        return { users, page, limit, count }

    }

    async getOne(id) {
        const user = await User.findById(id).lean()
        return user
    }

    async postOne(data) {
        let user = await validateCreateUser(data)
        console.log(user)
        if (await User.findOne({ email: user.email })) {
            throw createError(BAD_REQUEST, 'Email already exists')
        }

        user.password = await encodePassword(user.password)
        user = await new User({ ...user }).save()
        delete user._doc.password
        return user
    }

    async updateOne(id, data) {
        if (Object.keys(data).length === 0) {
            throw createError(BAD_REQUEST, 'Nothing valid value to update')
        }

        let user = await validateUpdateUser(data)
        user = await User.findByIdAndUpdate(id, user, { new: true })
        return user
    }

    async deleteOne(id) {
        const user = await User.findByIdAndDelete(id)
        return user
    }
}

export default new UserService()
