const Joi = require("joi");

const createValidationSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  call_number: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  name: Joi.string().optional(),
  address: Joi.string().optional(),
  call_number: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
