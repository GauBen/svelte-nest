import 'dotenv/config'
import { bootstrap } from './apps/backend/build/main.js'
import { handler as frontend } from './apps/frontend/build/handler.js'

const run = async () => {
  const server = await bootstrap()
  // Remove what makes the application an unproper middleware
  server.getHttpAdapter().setNotFoundHandler = undefined
  await server.init()
  server.use(frontend)
  const port = Number(process.env.VITE_API_PORT)
  server.listen(port, () => {
    console.log(`Server ready on http://localhost:${port}`)
  })
}

run()
