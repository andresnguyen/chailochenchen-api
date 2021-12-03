import Joi from 'joi'

export const validateCreateProduct = async (product) => {
    console.log(product)
    const schema = Joi.object({
        name: Joi.string().required().trim().min(1).label('Name'),
        price: Joi.number().min(1).label('Price'),
        content: Joi.string().optional().allow('').trim().min(1).label('Content'),
        imageSrc: Joi.string().required().trim().min(1).label('ImageSrc'),
        shoppeLink: Joi.string().optional().allow('').label('ShoppeLink'),
        facebookLink: Joi.string().optional().allow('').label('Facebook Link'),
        description: Joi.string().label('Description'),
        isActive: Joi.boolean().label('Active')
    }).unknown()

    return schema.validateAsync(product)
}

export const validateUpdateProduct = async (product) => {
    const schema = Joi.object({
        name: Joi.string().trim().min(1).label('Name'),
        price: Joi.number().min(1).label('Price'),
        content: Joi.string().optional().allow('').min(1).label('Content'),
        imageSrc: Joi.string().trim().min(1).label('ImageSrc'),
        shoppeLink: Joi.string().optional().allow('').label('Shoppe Link'),
        facebookLink: Joi.string().optional().allow('').label('Facebook Link'),
        description: Joi.string().label('Description'),
        isActive: Joi.boolean().label('Active'),
    }).unknown()

    return schema.validateAsync(product)
}
