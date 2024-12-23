import express from "express";
import * as diagnoseServices from "../services/diagnosesServices";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(diagnoseServices.getDiagnoses());
});

export default router;