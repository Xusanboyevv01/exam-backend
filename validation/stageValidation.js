const Joi = require("joi");

const createValidationSchema = Joi.object({
  name: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  name: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
