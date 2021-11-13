import Joi from 'joi'

export const validateCreateProduct = async (product) => {
    console.log(product)
    const schema = Joi.object({
        name: Joi.string().required().trim().min(1).label('Name'),
        price: Joi.number().required().min(1).label('Price'),
        content: Joi.string().required().trim().min(1).label('Content'),
        imageSrc: Joi.string().trim().min(1).label('ImageSrc'),
        shoppeLink: Joi.string().trim().min(1).label('ShoppeLink'),
        description: Joi.string().trim().min(1).label('description'),
        isActive: Joi.boolean().label('Active'),
    })

    return schema.validateAsync(product)
}

export const validateUpdateProduct = async (product) => {
    const schema = Joi.object({
        name: Joi.string().trim().min(1).label('Name'),
        price: Joi.number().min(1).label('Price'),
        content: Joi.string().trim().min(1).label('Content'),
        imageSrc: Joi.string().trim().min(1).label('ImageSrc'),
        shoppeLink: Joi.string().trim().min(1).label('ShoppeLink'),
        description: Joi.string().trim().min(1).label('description'),
        isActive: Joi.boolean().label('Active'),
    })

    return schema.validateAsync(product)
}
