const Joi = require("joi");

const createValidationSchema = Joi.object({
  student_id: Joi.string().required(),
  group_id: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  student_id: Joi.string().optional(),
  group_id: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
