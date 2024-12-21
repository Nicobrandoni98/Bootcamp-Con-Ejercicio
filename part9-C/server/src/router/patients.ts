import express from "express";
import * as patientServices from "../services/patientServices";
import toNewPatient from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientServices.getNonSensitivePatientsData());
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientServices.addPatient(newPatient);
    res.json(addedPatient);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

export default router;
