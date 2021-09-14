import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { DiscordAuthGuard } from 'src/auth/guards';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.sendStatus(200);
  }

  @Get('status')
  status() {}

  @Get('logout')
  logout() {}
}
