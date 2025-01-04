import { NewPatient, Gender, Entry } from "./types";

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error("Incorrect or missing name");
  }
  return nameFromRequest;
};
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};
const parseSsd = (ssdFromRequest: any): string => {
  if (!isString(ssdFromRequest)) {
    throw new Error("Incorrect or missing visibility");
  }
  return ssdFromRequest;
};

const parseGender = (genderFromRequest: any): Gender => {
  if (!isString(genderFromRequest) || !isGender(genderFromRequest)) {
    throw new Error("Incorrect or missing gender");
  }
  return genderFromRequest;
};

const parseOccupation = (occcupationFromRequest: any): string => {
  if (!isString(occcupationFromRequest)) {
    throw new Error("Incorrect or missing visibility");
  }
  return occcupationFromRequest;
};

const parseEntries = (entries: any): Entry[] => {
  if (!entries) {
    throw new Error(`Incorrect or missing entries: ${entries}`);
  }
  return entries;
};


const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};


const toNewPatient = (object: any): NewPatient => {
  const newEntry: NewPatient = {
    name: parseName(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseSsd(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    entries: parseEntries(object.entries)
  };
  return newEntry;
};

export default toNewPatient;
