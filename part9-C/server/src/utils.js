"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error("Incorrect or missing name");
    }
    return nameFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date");
    }
    return dateFromRequest;
};
const parseSsd = (ssdFromRequest) => {
    if (!isString(ssdFromRequest)) {
        throw new Error("Incorrect or missing visibility");
    }
    return ssdFromRequest;
};
const parseGender = (genderFromRequest) => {
    if (!isString(genderFromRequest) || !isGender(genderFromRequest)) {
        throw new Error("Incorrect or missing gender");
    }
    return genderFromRequest;
};
const parseOccupation = (occcupationFromRequest) => {
    if (!isString(occcupationFromRequest)) {
        throw new Error("Incorrect or missing visibility");
    }
    return occcupationFromRequest;
};
const isString = (text) => {
    return typeof text === "string" || text instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const toNewPatient = (object) => {
    const newEntry = {
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseSsd(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
    };
    return newEntry;
};
exports.default = toNewPatient;
