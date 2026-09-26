const Joi = require("joi");

const createValidationSchema = Joi.object({
  group_id: Joi.string().required(),
  stuff_id: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  group_id: Joi.string().optional(),
  stuff_id: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
