const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const { addPatient, getPatients } = require("./controllers/patient.controller");

const port = 3001;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/problems", async (req, res) => {
  const patient = await getPatients();
  res.json(patient);
});

app.post("/", async (req, res) => {
  const patient = await addPatient(req.body.fullName, req.body.phone);
  res.json(patient);
});

mongoose
  .connect(
    "mongodb+srv://admin:123@cluster0.wpnqajf.mongodb.net/patient?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}`));
    });
  });
