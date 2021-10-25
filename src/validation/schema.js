import Joi from 'joi'
Joi.objectId = require('joi-objectid')(Joi)

export const postStaffSchema = Joi.object({
    fullname: Joi.string()
        .trim()
        .pattern(new RegExp(`^[a-zA-Z ]{2,30}$`))
        .required()
        .label('Full name'),
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
    active: Joi.number().integer().min(0).max(1).label('Active'),
    role: Joi.number().integer().min(0).max(2).label('Role')
})

export const updateStaffSchema = Joi.object({
    fullname: Joi.string()
        .trim()
        .pattern(new RegExp(`^[a-zA-Z ]{2,30}$`))
        .label('Full name'),
    active: Joi.number().integer().min(0).max(1).label('Active'),
    role: Joi.number().integer().min(0).max(2).label('Role')
})

export const postFaqSchema = Joi.object({
    categoryId: Joi.objectId().required().label('CategoryId'),
    answer: Joi.string().trim().min(10).required().label('Answer'),
    question: Joi.string().trim().min(10).required().label('Question')
})

export const updateFaqSchema = Joi.object({
    categoryId: Joi.objectId().label('CategoryId'),
    answer: Joi.string().trim().min(10).label('Answer'),
    question: Joi.string().trim().min(10).label('Question')
})

export const postCategorySchema = Joi.object({
    name: Joi.string().trim().min(2).required().label('Name'),
    status: Joi.number().integer().min(0).max(1).label('Status')
})

export const updateCategorySchema = Joi.object({
    name: Joi.string().trim().min(2).label('Name'),
    status: Joi.number().integer().min(0).max(1).label('Status')
})

export const checkObjectIdSchema = Joi.objectId().required()
