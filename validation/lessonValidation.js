const Joi = require("joi");

const createValidationSchema = Joi.object({
  lesson_theme: Joi.string().required(),
  lesson_number: Joi.number().required(),
  group_id: Joi.string().required(),
  lesson_date: Joi.date().required(),
});

const updateValidationSchema = Joi.object({
  lesson_theme: Joi.string().optional(),
  lesson_number: Joi.number().optional(),
  group_id: Joi.string().optional(),
  lesson_date: Joi.date().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
