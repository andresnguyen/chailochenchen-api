import Joi from 'joi'

export const validateCreateUser = async (user) => {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .min(1)
            .required()
            .label('Name'),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required()
            .label('Email'),
        password: Joi.string()
            .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
            // Contain at least 8 characters
            // contain at least 1 number
            // contain at least 1 lowercase character (a-z)
            // contain at least 1 uppercase character (A-Z)
            // contains only 0-9a-zA-Z
            .min(6)
            .max(20)
            .required()
            .label('Password'),
        isActive: Joi.boolean().label('Active'),
        role: Joi.number().integer().min(1).max(3).label('Role'),
    })

    return schema.validateAsync(user)
}

export const validateUpdateUser = async (user) => {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .min(1)
            .required()
            .label('Name'),
        isActive: Joi.boolean().label('Active'),
        role: Joi.number().integer().min(1).max(3).label('Role'),
    })

    return schema.validateAsync(user)
}
