import {
  Controller,
  Get,
} from '@nestjs/common'

@Controller('/api')
export class AppController {
  @Get('/stuff')
  async getStuff() {
    return {
      now: Date().toLocaleString(),
      env: process.env.NODE_ENV
    }
  }
}
