import express from 'express'
import patientsRouter from './router/patients'
import diagnosesRouter from './router/diagnoses'
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use('/api/patients', patientsRouter)
app.use('/api/diagnoses', diagnosesRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
