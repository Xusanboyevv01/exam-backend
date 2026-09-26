const Joi = require("joi");

const createValidationSchema = Joi.object({
  lid_id: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone_number: Joi.string().required(),
  birthday: Joi.date().required(),
  gender: Joi.string().required(),
});

const updateValidationSchema = Joi.object({
  lid_id: Joi.string().optional(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone_number: Joi.string().optional(),
  birthday: Joi.date().optional(),
  gender: Joi.string().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
