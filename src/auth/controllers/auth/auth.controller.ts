import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthenticatedGuard, DiscordAuthGuard } from 'src/auth/guards';

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
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  @Get('logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request) {
    req.logOut();
  }
}
