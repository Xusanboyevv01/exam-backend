const Joi = require("joi");

const createValidationSchema = Joi.object({
  stuff_id: Joi.string().required(),
  role_id: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  stuff_id: Joi.string().optional(),
  role_id: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
