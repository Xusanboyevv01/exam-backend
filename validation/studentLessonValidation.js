const Joi = require("joi");

const createValidationSchema = Joi.object({
  lesson_id: Joi.string().required(),
  student_id: Joi.string().required(),
  is_there: Joi.boolean().optional(),
  reason: Joi.string().optional(),
  be_paid: Joi.boolean().optional(),
});

const updateValidationSchema = Joi.object({
  lesson_id: Joi.string().optional(),
  student_id: Joi.string().optional(),
  is_there: Joi.boolean().optional(),
  reason: Joi.string().optional(),
  be_paid: Joi.boolean().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
