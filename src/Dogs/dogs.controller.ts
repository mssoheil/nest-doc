import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('dogs')
export class DogsController {
  // using standard option
  @Get()
  findAll(): string {
    return 'hello dogs';
  }
  // using library-specific
  @Get('sub')
  findSub(@Req() request: Request, @Res() response) {
    response.status(210).send('hello sub dogs2');
  }
}
