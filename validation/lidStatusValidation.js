const Joi = require("joi");

const createValidationSchema = Joi.object({
  status: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  status: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
