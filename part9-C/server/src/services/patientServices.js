"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = exports.getNonSensitivePatientsData = exports.findById = exports.getAll = exports.patients = void 0;
const patient_1 = __importDefault(require("../data/patient"));
const uuid_1 = require("uuid");
exports.patients = patient_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries, ssn }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    ssn,
    occupation,
    entries
}));
console.log("Patients array:", exports.patients);
const getAll = () => {
    return exports.patients;
};
exports.getAll = getAll;
const findById = (id) => {
    return exports.patients.find(patient => patient.id.trim() === id.trim());
};
exports.findById = findById;
/* export const findById = (
  id: string
): NonSensitiveInfoPatientData | undefined => {
  const entry = patientes.find((d) => d.id === id);
  if (entry) {
    const { ssn, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
}; */
const getNonSensitivePatientsData = () => {
    return exports.patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => {
        return {
            id,
            name,
            dateOfBirth,
            gender,
            occupation,
            entries
        };
    });
};
exports.getNonSensitivePatientsData = getNonSensitivePatientsData;
const addPatient = (patient) => {
    const id = (0, uuid_1.v1)();
    const newPatient = Object.assign({ id }, patient);
    exports.patients.push(newPatient);
    return newPatient;
};
exports.addPatient = addPatient;
