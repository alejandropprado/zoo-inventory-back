import { init } from './infrastructure/config/bootstrap'
import { createServer } from  './infrastructure/webServer'

async function start() {
  try {
    await init()
    await createServer()
  } catch (err) {
    process.exit(1)
  }
}

start()