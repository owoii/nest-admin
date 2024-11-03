import { Controller, Get } from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger'
// ApiOperation, ApiParam,
@ApiTags('System - User Module')
@Controller('users')
export class UserController {
  constructor() { }

  @Get()
  async list() {
    return [
      {
        name: 'hello',
      },
    ];
  }
}
