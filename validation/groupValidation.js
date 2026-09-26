const Joi = require("joi");

const createValidationSchema = Joi.object({
  group_name: Joi.string().required(),
  lesson_start_time: Joi.string().required(),
  lesson_continuous: Joi.string().required(),
  lesson_week_day: Joi.string().required(),
  group_stage_id: Joi.string().required(),
  room_number: Joi.number().required(),
  room_floor: Joi.number().required(),
  branch_id: Joi.string().required(),
  lessons_quant: Joi.number().required(),
  is_active: Joi.boolean().optional(),
});

const updateValidationSchema = Joi.object({
  group_name: Joi.string().optional(),
  lesson_start_time: Joi.string().optional(),
  lesson_continuous: Joi.string().optional(),
  lesson_week_day: Joi.string().optional(),
  group_stage_id: Joi.string().optional(),
  room_number: Joi.number().optional(),
  room_floor: Joi.number().optional(),
  branch_id: Joi.string().optional(),
  lessons_quant: Joi.number().optional(),
  is_active: Joi.boolean().optional(),
});

module.exports = {
  createValidationSchema,
  updateValidationSchema,
};
