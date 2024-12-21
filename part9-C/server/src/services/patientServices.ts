import { Patient, NonSensitiveInfoPatientData, NewPatient } from "../types";
import patientsData from "../data/patient";
import { v1 as uuid } from "uuid";

const patientes: Patient[] = patientsData as Patient[];

export const getEntries = (): Patient[] => patientes;

/* export const findById = (
  id: number
): NonSensitiveInfoPatientData | undefined => {
  const entry = patientes.find((d) => d.id === id);
  if (entry) {
    const { ssn, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
}; */

export const getNonSensitivePatientsData =
  (): NonSensitiveInfoPatientData[] => {
    return patientes.map(({ id, name, dateOfBirth, gender, occupation }) => {
      return {
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
      };
    });
  };

export const addPatient = (patient: NewPatient): Patient => {
    const id = uuid();
    const newPatient = { id, ...patient };
    patientes.push(newPatient);
    return newPatient;
  };
  
