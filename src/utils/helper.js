import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '2000000s'
    })
}

export const encodePassword = async (password) => {
    if (!password) return undefined
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}
