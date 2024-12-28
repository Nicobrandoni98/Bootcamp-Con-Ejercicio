"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patients_1 = __importDefault(require("./router/patients"));
const diagnoses_1 = __importDefault(require("./router/diagnoses"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
const PORT = 3001;
app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here!');
    res.send('pong');
});
app.use('/api/patients', patients_1.default);
app.use('/api/diagnoses', diagnoses_1.default);
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
