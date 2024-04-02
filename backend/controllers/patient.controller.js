const Patient = require("../models/Patient");

async function addPatient(fullName, phone) {
  Patient.create({ fullName, phone });
}

async function getPatients() {
  const patients = await Patient.find();
  return patients;
}

async function removePatient(fullName, phone) {
  await Patient.deleteOne({ fullName, phone });
}

module.exports = { addPatient, getPatients, removePatient };
