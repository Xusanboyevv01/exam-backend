const Joi = require("joi");

const createValidationSchema = Joi.object({
  reason_lid: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  reason_lid: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
