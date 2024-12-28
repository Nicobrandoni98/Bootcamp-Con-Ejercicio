"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = exports.getNonSensitivePatientsData = exports.findById = exports.getAll = void 0;
const patient_1 = __importDefault(require("../data/patient"));
const uuid_1 = require("uuid");
const patientes = patient_1.default;
const getAll = () => {
    return patientes;
};
exports.getAll = getAll;
const findById = (id) => {
    return patientes.find(patient => patient.id === id);
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
    return patientes.map(({ id, name, dateOfBirth, gender, occupation, entries }) => {
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
    const newPatient = { id, ...patient };
    patientes.push(newPatient);
    return newPatient;
};
exports.addPatient = addPatient;
