export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

// Si quisiese tener otro tipo de "interface" sin un dato especifico puedo hacer lo siguiente:

/* 
De esta forma eligo que valor va a tener mi nueva interface:
export type NonSensisitveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

De esta forma directamenta omito el valor que no quiero que tenga mi interface:
*/
export type NonSensitiveInfoPatientData = Omit<Patient, "ssn">;

export type NewPatient = Omit<Patient, "id">;
