import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';

import { User } from 'src/typeorm';
import { SerializerDone } from 'src/utils/types';
import { IAuthenticationProvider } from '../services/auth/auth';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authService: IAuthenticationProvider,
  ) {
    super();
  }

  serializeUser(user: User, done: SerializerDone) {
    done(null, user);
  }

  async deserializeUser(user: User, done: SerializerDone) {
    const userDB = await this.authService.findUser(user.discordId);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
