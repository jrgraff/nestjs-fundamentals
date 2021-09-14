import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { DiscordStrategy } from './strategies';

@Module({
  controllers: [AuthController],
  providers: [AuthService, DiscordStrategy],
})
export class AuthModule {}
