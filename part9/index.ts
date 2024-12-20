import express from 'express';
import cors from 'cors';
/* import calculateBmi from './bmiCalculator'; */
import { ejercicioDias, parseExerciseArguments } from './exerciseCalculator';

const app = express();
app.use(cors());
app.use(express.json())

/* app.get('/bmi', (req, res) => {
  const { peso, altura } = req.query;
  const validParameters: boolean =
    !isNaN(Number(peso)) && !isNaN(Number(altura));

  const bmi = calculateBmi(Number(peso), Number(altura));

  if (!validParameters || !peso || !altura) {
    res.status(400).send({ error: "malformatted parameters" });
  }

   res.send({
    peso,
    altura,
    bmi
  });
}); */


app.post('/exercises', (req, res) => {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dailyExercises = req.body.daily_exercises;
  const dailyTarget = req.body.target;

  if (!(dailyExercises || !dailyTarget)) {
    res.status(400)
    res.send({ error: 'missing parameter daily_exercises or target'})
  } else {
    try {
      const { target, dailyExerciseHours } = parseExerciseArguments(
        dailyTarget,
        dailyExercises
      );
      res.send(ejercicioDias(dailyExerciseHours, target));
    } catch (e) {
      res.status(400);
      res.send({ error: e.message });
    }
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
