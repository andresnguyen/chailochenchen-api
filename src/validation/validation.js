import {
    postStaffSchema,
    updateStaffSchema,
    postFaqSchema,
    updateFaqSchema,
    postCategorySchema,
    updateCategorySchema,
    checkObjectIdSchema
} from './schema'

export const postStaffValidate = async (user) => {
    return await postStaffSchema.validateAsync(user)
}

export const updateStaffValidate = async (user) => {
    return await updateStaffSchema.validateAsync(user)
}
export const postFaqValidation = async (faq) => {
    return await postFaqSchema.validateAsync(faq)
}

export const updateFaqValidation = async (faq) => {
    return await updateFaqSchema.validateAsync(faq)
}
export const postCategoryValidation = async (category) => {
    return await postCategorySchema.validateAsync(category)
}

export const updateCategoryValidation = async (category) => {
    return await updateCategorySchema.validateAsync(category)
}

export const checkObjectIdValidate = async (objectId) => {
    try {
        await checkObjectIdSchema.validateAsync(objectId)
        return true
    } catch (error) {
        return false
    }
}

// gui du se bi loi
