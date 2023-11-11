import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({
        'string.pattern.base':'Only latters min 1 max 20 char'
    }),
    price: Joi.number()
        .min(0)
        .max(1_000_000)
        .required()
        .messages({
        'number.min':'Min 0',
        'number.max':'Max 1000000'
    }),
    year: Joi.number()
        .min(1990)
        .max(new Date().getFullYear())
        .required()
})

export {carValidator}