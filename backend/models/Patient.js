const mongoose = require("mongoose");

const PatientShema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("Patient", PatientShema);

module.exports = Patient;
