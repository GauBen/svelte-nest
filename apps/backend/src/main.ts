import { NestFactory } from '@nestjs/core'
import { config as dotenv } from 'dotenv'
import { AppModule } from './app.module.js'

export const bootstrap = async () => {
  const __dirname = new URL('.', import.meta.url).pathname
  dotenv({ path: `${__dirname}/../../../.env` })
  return NestFactory.create(AppModule)
}

if (process.argv[1] + '.js' === new URL(import.meta.url).pathname)
  bootstrap().then(async (app) => app.listen(Number(process.env.VITE_API_PORT)))
