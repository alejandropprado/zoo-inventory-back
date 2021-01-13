import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import env from '../config/env'
import AnimalRoutes from '../../interfaces/routes/animal.route'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

app.use('/api/animals', AnimalRoutes)

async function createServer() {
  app.listen(
    env.server.port,
    () => console.log(`Server listening on port ${env.server.port}, pid: ${process.pid}`),
  )

  return app
}

export { createServer }
