const { Schema, model } = require("mongoose");

const studentsSchema = new Schema({
  lid_id: { type: Schema.Types.ObjectId, ref: "Lid", required: true },
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  phone_number: { type: String, required: true, trim: true },
  birthday: { type: Date, required: true },
  gender: { type: String, required: true, trim: true },
});

const Students = model("Students", studentsSchema);

module.exports = { Students };
