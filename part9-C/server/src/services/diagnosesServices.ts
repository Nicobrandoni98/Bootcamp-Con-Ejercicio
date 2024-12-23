import { Diagnoses } from "../types";
import diagnosesData from '../data/diagnoses';

const diagnoses: Diagnoses[] = diagnosesData as Diagnoses[];

export const getDiagnoses = (): Diagnoses[] => diagnoses;